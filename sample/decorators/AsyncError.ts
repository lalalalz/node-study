export function AsyncError() {
    return (target, propertyKey, desc) => {
        const method = desc.value;
        desc.value = (req, res, next) => method(req, res, next).catch(next);
    }
}