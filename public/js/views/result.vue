vueResult = new Vue({
    el: '#vueResult',
    data: {
        element: {},
        history: [],
        allElements: []
    },
    methods: {
        loadResult() {
            const result = JSON.parse(window.localStorage.getItem('result'));
            if (result !== null) {
                this.element = result.element;
                this.history = result.history;
                this.allElements = result.allElements;
            }
        }
    },
    mounted() {
        this.loadResult();
    }
});