import { createDecorator } from "vue-class-component";

export function Bind(getter: string, action: string): any {
  return createDecorator((componentOptions, k) => {
    if (!componentOptions.computed) {
      componentOptions.computed = {};
    }

    componentOptions.computed[k] = {
      get() {
        const correctedGetter = getter.replace(".", "/");
        return (this as any).$store.getters[correctedGetter];
      },
      set(val) {
        const correctedAction = action.replace(".", "/");
        (this as any).$store.dispatch(correctedAction, val);
      },
    };
  });
}
