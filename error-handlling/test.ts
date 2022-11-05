function myErrorDecorator() {
    return (target, propertyKey) => {
        return (req, res, next) => {
            target[propertyKey](req, res, next).catch(next);
        }
    }
}