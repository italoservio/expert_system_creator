const helper = {
    // Temp System:
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
    addElementToTempSystem(p_obj, p_index = null) {
        system = this.getTempSystem();
        if (p_index === null) {
            system.elements.splice(system.elements.length, 0, p_obj);
        } else {
            system.elements[p_index] = p_obj;
        }
        this.setTempSystem(system);
    },
    // Helper functions:
    getRouteParam(p_index) {
        const routeTokens = location.pathname.replace(/^\/+/g,'').split('/');
        return routeTokens.length > p_index ? routeTokens[p_index] : undefined;
    },
    findValueInObjArr(p_value, p_arr, p_key) {
        p_arr.find((obj, i) => {
            if (obj[p_key] === p_value) return p_arr[i];
        });
    },
    capitalize(p_str) {
        return p_str[0].toUpperCase() + p_str.slice(1);
    }
}