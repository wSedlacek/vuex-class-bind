import { createDecorator } from "vue-class-component";

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function Bind(binding: string): any {
  const parsed = binding.replace(".", "/").split("/");
  const getter = `${parsed[0]}/get${capitalize(parsed[1])}`;
  const setter = `${parsed[0]}/set${capitalize(parsed[1])}`;

  return createDecorator((componentOptions, k) => {
    if (!componentOptions.computed) {
      componentOptions.computed = {};
    }

    componentOptions.computed[k] = {
      get() {
        return (this as any).$store.getters[getter];
      },
      set(val) {
        (this as any).$store.dispatch(setter, val);
      },
    };
  });
}
