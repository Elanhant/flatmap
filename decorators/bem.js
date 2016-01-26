export default function bemStateless(settings) {
    return function (Component) {
        return function (...args) {
            const bemObj = new Bem(settings, args[0]);
            return Component(bemObj, ...args);
        }
    }
}

class Bem {
    constructor(settings, props) {
        this.blockName = settings.block;
        this.modifiers = settings.modifiers || [];
        this.componentProps = props;
    }

    block(passedModifiers = {}) {
        let classesSet = [];

        if (this.componentProps.className) {
            classesSet.push(this.componentProps.className);
        }

        classesSet.push(this.blockName);

        const
            modifiersFromProps = (this.modifiers)
                .filter(modifierName=>!!this.componentProps[modifierName])
                .map(modifierName => createModifier(this.blockName, modifierName, this.componentProps[modifierName])),
            modifiersFromArguments = modifiersFromObj(this.blockName, passedModifiers);

        classesSet.push(...modifiersFromProps, ...modifiersFromArguments);

        return classesSet.join(' ');
    }

    element(elementName, modifiers){
        const
            elementClass = `${this.blockName}__${elementName}`,
            modifiersClasses = modifiersFromObj(elementClass, modifiers);

        return [
            elementClass,
            ...modifiersClasses
        ].join(' ');
    }
}

function modifiersFromObj(baseClass, modifiers){
    let modifiersClasses = [];
    for (const modifier in modifiers){
        modifiersClasses.push(createModifier(baseClass, modifier, modifiers[modifier]));
    }
    return modifiersClasses;
}

function createModifier(baseClass, modifierName, modifierValue){
    if(!modifierValue || modifierValue === false) return '';
    let className = `${baseClass}--${modifierName}`;
    if(modifierValue && modifierValue !== true){
        className += `-${modifierValue}`;
    }
    return className;
}
