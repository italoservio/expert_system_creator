vueManage = new Vue({
    el: '#vueManage',
    data: {
        form: {
            id: null,
            title: '',
            createdBy: '',
            description: '',
            elements: []
        },
        lotCaracters: false,
        isEdit: false
    },
    // Vee validate customization:
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

        // General Actions:
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
                    this.backToHome();
                });
            }
        },

        deleteElement(p_index) {
            let elementId = this.form.elements[p_index].id;
            let system = helper.getTempSystem();
            system.elements.splice(p_index, 1);
            helper.setTempSystem(system);

            if (elementId !== undefined) {
                fetch(`/element/delete/${elementId}`, {
                    method: 'delete',
                });
            }
            this.form.elements.splice(p_index, 1);
        },

        deleteSystem() {
            const id = helper.getRouteParam(1);
            fetch(`/system/delete/${id}`, {
                method: 'delete',
            });
            window.location.href = '/';
        },

        loadSystem() {
            if (helper.getRouteParam(1) !== undefined && !helper.hasTempSystem()) {
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
                if (helper.getRouteParam(1) !== undefined) {
                    this.isEdit = true;
                }
                system = helper.getTempSystem();
                this.form = system;
            }
        }
    },
    mounted() {
        this.loadSystem();
    }
});