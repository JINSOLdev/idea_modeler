const Word_Application = {
    install (Vue: any, opts = {}) {
        const requireComponent = require.context('./', false, /\.vue$/);
        const wordList: string[] = [];
        requireComponent.keys().forEach(fileName => {
            const componentConfig = requireComponent(fileName);
            const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1');
            Vue.component(componentName, componentConfig.default || componentConfig);
            if(!componentName.includes('Panel')) {
                const tmp: string = componentName.replace(/(?<!^)(?=[A-Z])/g, ' ');
                wordList.push(tmp)
                Vue.prototype.$wordList = wordList
            }
        });
}}

export default Word_Application