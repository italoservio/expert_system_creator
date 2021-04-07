vueManage = new Vue({
    el: '#vueManage',
    data: {
        form: {
            id: 0,
            name: '',
            description: '',
            elements: [
                //{ id: 1, name: 'Element 1' },
                //{ id: 2, name: 'Element 2' },
                //{ id: 3, name: 'Element 3' }
            ]
        },
        lotCaracters: false
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
        editURL(p_id) {
            return `/element/${p_id}`;
        },
        goToCreateElement() {
            helper.setTempSystem(this.form);
            window.location.href = '/element';
        },
        back() {
            helper.clearTempSystem();
            window.location.href = '/';
        },
        // CRUD actions:
        async create() {
            await this.$validator.validateAll().then((valid) => {
                if (valid) {
                    helper.clearTempSystem();
                }
            });
        },
        deleteElement(p_index) {
            let form = helper.getTempSystem();
            form.elements.splice(p_index, 1);
            helper.setTempSystem(form);
            this.form.elements.splice(p_index, 1);
        },
        loadSystem() {
            if (helper.getRouteParam(1) !== undefined) {
                alert('Getting system data');
            } else if (!helper.hasTempSystem()) {
                helper.setTempSystem({
                    id: 0,
                    name: '',
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