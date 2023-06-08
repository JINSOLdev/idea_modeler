const JSON = {
    install (Vue: any, opts = {}) {
        const requireComponent = require.context('./', false, /\.vue$/);
        const jsonList: string[] = [];
        requireComponent.keys().forEach(fileName => {
            const componentConfig = requireComponent(fileName);
            const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1');
            Vue.component(componentName, componentConfig.default || componentConfig);
            if(!componentName.includes('Panel')) {
                let tmp: string = componentName.replace(/(?<!^)(?=[A-Z])/g, ' ');
                if (tmp.includes('J S O N')) {
                    tmp = tmp.replace('J S O N', 'JSON')
                }
                jsonList.push(tmp)
                Vue.prototype.$jsonList = jsonList
            }
        });
}}

export default JSON