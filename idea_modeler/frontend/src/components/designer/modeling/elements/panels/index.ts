import Vue from 'vue';

const Panels = {
    install (Vue: any, opts = {}) {const requireComponent = require.context(
    './',
    false,
    /\.vue$/
    );
    requireComponent.keys().forEach(fileName => {
        const componentConfig = requireComponent(fileName);
        const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1');
        Vue.component(componentName, componentConfig.default || componentConfig);
    });
}}

export default Panels