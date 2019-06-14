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
$ npm i vuex-class-bind
# or
$ yarn add vuex-class-bind
```

## Usage

- Creates setters and getters for var_name using the getVar_name from vuex getters and setVar_name from vuex actions.

```ts
@Bind("module/var_name") other_name
```

- New in 1.0.2 (fixed in 1.0.3), Use periods or slashes!

```ts
@Bind("module/var_name") fooBar
@Bind("module.var_name") fooBar
```

## Example

```ts
import Vue from 'vue';
import Component from 'vue-class-component';
import { Bind } from 'vuex-class-bind';

@Component
export class Comp extends Vue {
  @Bind('foo') stateFoo;
  @Bind('foobar/foo') stateFooBarExample;
}
```

## Credit

Just a fork of https://github.com/scleriot/vuex-class-state2way
Thank you for your awesome code scleriot! Hopifully my fork helps people who want to access actions rather then muations.

## Breaking changes in 1.0.7

- Replaced input of Getter, Action with var_name which equates to getVar_name and setVar_name.

## Breaking Changes in 1.0.6

- Replaced State with Getter
- Changed order from Action, State to Getter, Action.
