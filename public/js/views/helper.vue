const helper = {
    hasTempSystem() {
        return (this.getTempSystem() !== null) ? true : false;
    },
    setTempSystem(p_obj) {
        window.localStorage.setItem('system', JSON.stringify(p_obj));
    },
    getTempSystem() {
        return JSON.parse(window.localStorage.getItem('system'));
    },
    clearTempSystem() {
        window.localStorage.removeItem('system');
    },
    addElementToTempSystem(p_obj) {
        system = this.getTempSystem();
        system.elements.splice(system.elements.length, 0, p_obj);
        setTempSystem(system);
    },
    getRouteParam(p_index) {
        const routeTokens = location.pathname.replace(/^\/+/g,'').split('/');
        return routeTokens.length > p_index ? routeTokens[p_index] : undefined;
    },
    findValueInObjArr(p_value, p_arr, p_key) {
        p_arr.find((obj, i) => {
            if (obj[p_key] === p_value) return p_arr[i];
        });
    }
}

// const vuexSys = new Vuex.Store({
//     state: {
//         system: {
//             id: null,
//             name: '',
//             description: '',
//             elements: []
//         }
//     },
//     mutations: {
//         setElement(state, p_obj) {
//             this.elements.splice(this.elements.length, 0, p_obj);
//         },
//         set(state, p_obj) {
//             state.system = p_obj;
//             window.localStorage.setItem('system', JSON.stringify(p_obj));
//         },
//         load(state) {
//             const system = JSON.parse(window.localStorage.getItem('system'));
//             state.system = system;
//         },
//         clear(state) {
//             state.system = {
//                 id: null,
//                 name: '',
//                 description: '',
//                 elements: []
//             };
//             window.localStorage.removeItem('system');
//         }
//     },
//     actions: {
//         setElement(state, p_obj) {
//             state.commit('setElement', p_obj);
//         },
//         set(state, p_obj) {
//             state.commit('set', p_obj);
//         }
//     }
// });