vueManage = new Vue({
    el: '#vueManage',
    data: {
        form: {
            id: null,
            title: '',
            description: '',
            elements: [
                //{ id: 1, element: 'Element 1' questions: []},
                //{ id: 2, element: 'Element 2' questions: []},
                //{ id: 3, element: 'Element 3' questions: []}
            ]
        },
        lotCaracters: false,
        isEdit: false
    },
    created() {
        this.$validator.extend('required', {
            getMessage: (field) => 'The field "' + field + '" is required',
            validate: (value) => { return (value !== null) ? (value.length > 0) : false; }
        });
        this.$validator.extend('length', {
            getMessage: (field) => 'The field "' + field + '" has more caracters than the especified',
            validate: (value) => { return (value.length <= 150); }
        });
    },
    watch: {
        'form.description'() {
            if (this.form.description.length > 150) {
                this.lotCaracters = true;
            } else {
                this.lotCaracters = false;
            }
        }
    },
    computed: {
        descriptionLength() {
            return this.form.description.length;
        }
    },
    methods: {
        // URL actions:
        goToCreateElement() {
            helper.setTempSystem(this.form);
            window.location.href = '/element';
        },
        goToEditElement(p_index) {
            helper.setTempSystem(this.form);
            window.location.href = `/element/${p_index}`;
        },
        backToHome() {
            helper.clearTempSystem();
            window.location.href = '/';
        },
        // CRUD actions:
        async create() {
            const valid = this.$validator.validateAll().then((valid) => valid);
            if (valid) {
                fetch("/system/create", {
                    method: "post",
                    body: JSON.stringify(this.form),
                    headers: { "Content-Type": "application/json" },
                })
                .then((res) => res.json())
                .then((data) => {
                    helper.clearTempSystem();
                    window.location.href = '/';
                });
            }
        },
        deleteElement(p_index) {
            let system = helper.getTempSystem();
            system.elements.splice(p_index, 1);
            helper.setTempSystem(system);
            this.form.elements.splice(p_index, 1);
            // ir ao banco
        },
        deleteSystem() {
            const id = helper.getRouteParam(1);
            fetch(`/system/delete/${id}`, {
                method: 'delete',
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
        },
        loadSystem() {
            if (helper.getRouteParam(1) !== undefined) {
                this.isEdit = true;
                const id = helper.getRouteParam(1);
                fetch(`/system/get/${id}`, {
                    method: "get",
                    headers: { "Content-Type": "application/json" }
                })
                .then((res) => res.json())
                .then((data) => {
                    this.form = data;
                    helper.setTempSystem(data);
                });
            } else if (!helper.hasTempSystem()) {
                helper.setTempSystem({
                    id: null,
                    title: '',
                    description: '',
                    elements: []
                });
            } else {
                system = helper.getTempSystem();
                this.form = system;
            }
        }
    },
    mounted() {
        this.loadSystem();
    }
});