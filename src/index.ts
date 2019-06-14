import { createDecorator } from "vue-class-component";

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function Bind(binding: string): any {
  let getter: string;
  let setter: string;

  const parsed = binding.replace(".", "/").split("/");
  if (parsed.length == 2) {
    getter = `${parsed[0]}/get${capitalize(parsed[1])}`;
    setter = `${parsed[0]}/set${capitalize(parsed[1])}`;
  } else {
    getter = `get${capitalize(parsed[0])}`;
    setter = `set${capitalize(parsed[0])}`;
  }

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
