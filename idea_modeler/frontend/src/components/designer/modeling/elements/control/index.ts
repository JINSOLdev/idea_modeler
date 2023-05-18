const Control = {
    install (Vue: any, opts = {}) {
        const requireComponent = require.context('./', false, /\.vue$/);
        const controlLists: string[] = [];
        requireComponent.keys().forEach(fileName => {
            const componentConfig = requireComponent(fileName);
            const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1');
            Vue.component(componentName, componentConfig.default || componentConfig);
            if(!componentName.includes('Panel') && !componentName.includes('ControlElement')) {
                const tmp: string = componentName.replace(/(?<!^)(?=[A-Z])/g, ' ');
                controlLists.push(tmp)
                Vue.prototype.$controlList = controlLists
            }
        });
}}

export default Control