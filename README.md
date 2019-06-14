# vuex-class-bind

TypeScript decorator to create getters/setters for a Vuex state.

The main purpose is to use `v-model` directive without the overhead of manually creating simple getters and setters.

Check [vuex-class](https://github.com/ktsn/vuex-class) repository for a lot more Vuex decorators!

## Dependencies

- [Vue](https://github.com/vuejs/vue)
- [Vuex](https://github.com/vuejs/vuex)
- [vue-class-component](https://github.com/vuejs/vue-class-component)

## Installation

```bash
$ npm install --save vuex-class-bind
# or
$ yarn add vuex-class-bind
```

## Usage

- Get `variable_name` from the state and set its value to the variable `other_name`, and commit `"action name"` to update this variable in the state

```ts
@Bind("module/getter", "module/action") other_name
```

- To get a deep value, you can do both:

```ts
@Bind("module/getter", "module/action") fooBar
```

- New in 1.0.2 (fixed in 1.0.3), Use periods or slashes!

```ts
@Bind("module/getter", "module/action") fooBar
@Bind("module.getter", "module.action") fooBar
```

## Example

```ts
import Vue from 'vue';
import Component from 'vue-class-component';
import { Bind } from 'vuex-class-bind';

@Component
export class Comp extends Vue {
  @Bind('getFoo', 'setFoo') stateFoo;
  @Bind('foobar/getFoo', 'foobar.setFoo') stateFooBarExample;
}
```

## Credit

Just a fork of https://github.com/scleriot/vuex-class-state2way
Thank you for your awesome code scleriot! Hopifully my fork helps people who want to access actions rather then muations.

## Breaking Changes in 1.0.6

- Replaced State with Getter
- Changed order from Action, State to Getter, Action.
