export function Controller(route: string = "") {
    return function (target: Function) {
        Reflect.defineMetadata("PREFIXROUTE", route, target);
        Reflect.defineMetadata("CLASSTYPE", "CONTROLLER", target);
    };
}