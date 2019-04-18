import { createDecorator } from 'vue-class-component'

function getDeepValue(st:string, obj:any) {
    return st.replace(/\[([^\]]+)]/g, '.$1').split('.').reduce(function(o, p) {
        return o[p];
    }, obj);
}
type functionGetState = (state:any) => any

export function Bind(action: string, stateVariable?: string|functionGetState): any {
    return createDecorator((componentOptions, k) => {
        if(!componentOptions.computed) {
            componentOptions.computed = {}
        }

        componentOptions.computed[k] = {
            get() {
                if(typeof stateVariable === "string") {
                    return stateVariable? getDeepValue(stateVariable, (this as any).$store.state) : (this as any).$store.state[k]
                } else if (stateVariable) {
                    return stateVariable((this as any).$store.state)
                }
            },
            set(val) {
                (this as any).$store.commit(action, val)
            }
        }
    })
}
