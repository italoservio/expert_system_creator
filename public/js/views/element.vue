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
        // Manual question actions:
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
            this.modalContent.title = 'Questions already registered';
            this.modalContent.loadedQuestions = [
                { id: 1, question: 'É redondo?' },
                { id: 2, question: 'É quadrado?' },
                { id: 3, question: 'É triangular?' },
                { id: 4, question: 'É forma geométrica?' },
                { id: 5, question: 'É fruta?' },
                { id: 6, question: 'É animal?' },
                { id: 7, question: 'É humano?' },
                { id: 8, question: 'É extra terrestre?' },
                { id: 9, question: 'É terráqueo?' },
                { id: 10, question: 'É filme?' },
                { id: 11, question: 'É feio?' },
                { id: 12, question: 'É bonito?' },
                { id: 13, question: 'É de MG?' },
                { id: 14, question: 'É Brasileiro?' },
                { id: 15, question: 'Está vivo?' },
                { id: 16, question: 'Está morto?' },
                { id: 17, question: 'É jogador de futebol?' },
                { id: 18, question: 'É jogador de NBL?' },
                { id: 19, question: 'É jogador da NFL?' },
                { id: 20, question: 'É perfeito?' },
            ];
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
            this.setListedData(this.modalContent.searchedQuestions);
        },
        setListedData(array) {
            this.$children[0].listData = array;
        },
        // Element actions
        async sendElement() {
            await this.$validator.validate('element name').then((valid) => {
                if (valid) {
                    const index = helper.getRouteParam(1);
                    if (index !== undefined) {
                        helper.addElementToTempSystem(this.form, index);
                    } else {
                        helper.addElementToTempSystem(this.form);
                    }
                    window.location.href = "/manage";
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