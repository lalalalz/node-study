export function Controller(routePath: string = "") {
    return (target: Function) => {
        Reflect.defineMetadata("CLASSTYPE", "controller", target);
        Reflect.defineMetadata("routePath", routePath, target);
    };
}