vueElement = new Vue({
    el: '#vueElement',
    data: {
        question: '',
        form: {
            id: null,
            element: '',
            questions: []
        },
        modal: '',
        modalContent: {
            title: '',
            search: '',
            loadedQuestions: [],
            selectedQuestions: [],
            searchedQuestions: [],
        }
    },
    created() {
        // Vee validate customizations:
        this.$validator.extend('required', {
            getMessage: (field) => 'The field "' + field + '" is required',
            validate: (value) => { return (value !== null) ? (value.length > 0) : false; }
        });
        this.$validator.extend('elementExists', {
            getMessage: (field) => 'This element already exists',
            validate: (value) => {
                const index = helper.getRouteParam(1);
                if (index === undefined) {
                    let form = helper.getTempSystem();
                    for (const i of form.elements) {
                        if (i.element.toLowerCase() === value.toLowerCase()) {
                            return false;
                        }
                    }
                }
                return true;
            }
        });
    },
    computed: {
        allQuestions() {
            return this.form.questions.concat(this.modalContent.selectedQuestions);
        }
    },
    methods: {
        // URL actions:
        backToManage() {
            const system = helper.getTempSystem();
            if (system.id !== null) {
                window.location.href = `/manage/${system.id}`;
            } else {
                window.location.href = "/manage";
            }
        },

        // General Actions:
        clearValidation() {
            this.errors.clear();
            this.$validator.reset();
        },

        async addQuestion() {
            this.errors = [];
            await this.$validator.validate('question').then((valid) => {
                if (valid) {
                    const questionCapitalized = helper.capitalize(this.question);
                    this.form.questions.push({
                        id: null,
                        question: (questionCapitalized.substr(-1, 1) === '?') ? questionCapitalized : questionCapitalized + '?'
                    });
                    this.question = '';
                    this.clearValidation();
                }
            });
        },

        removeQuestion(index) {
            this.form.questions.splice(index, 1);
        },

        // Import question actions:
        loadQuestions() {
            const system = helper.getTempSystem();
            this.modalContent.title = 'Questions already registered';
            if (system.id !== null) {
                fetch(`/questions/${system.id}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                })
                .then((res) => res.json())
                .then((data) => {
                    this.modalContent.loadedQuestions = data;
                });
            }
            this.modal.show();
        },

        removeImportedQuestion(index) {
            this.$children[0].selectedQuestions.splice(index, 1);
        },

        importQuestions() {
            this.modalContent.selectedQuestions = this.$children[0].selectedQuestions;
        },

        searchQuestion() {
            // Searching and sending finded elements to component list-data:
            if (this.modalContent.search !== '') {
                this.modalContent.searchedQuestions = [];
                for (const i of this.modalContent.loadedQuestions) {
                    if ((i.question.toLowerCase()).indexOf((this.modalContent.search).toLowerCase()) > -1) {
                        this.modalContent.searchedQuestions.push(i);
                    }
                }
            }
            this.$children[0].listData = this.modalContent.searchedQuestions;
        },

        // Element actions
        async sendElement() {
            await this.$validator.validate('element name').then((valid) => {
                if (valid) {
                    const obj = {
                        id: this.form.id,
                        element: this.form.element,
                        questions: this.allQuestions
                    }
                    const index = helper.getRouteParam(1);
                    if (index !== undefined) {
                        helper.addElementToTempSystem(obj, index);
                    } else {
                        helper.addElementToTempSystem(obj);
                    }
                    this.backToManage();
                }
            });
        },

        loadElement() {
            const index = helper.getRouteParam(1);
            if (index !== undefined) {
                let system = helper.getTempSystem();
                this.form = system.elements[index];
            }
        }
    },
    mounted() {
        this.loadElement();
        this.modal = new bootstrap.Modal(document.getElementById('modalImport'), {
            keyboard: false,
            backdrop: 'static'
        });
    }
});