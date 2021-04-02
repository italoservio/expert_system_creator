vueManage = new Vue({
    el: '#vueManage',
    data: {
        question: '',
        form: {
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
    },
    methods: {
        clearValidation() {
            this.errors.clear();
            this.$validator.reset();
        },
        async addQuestion() {
            this.errors = [];
            await this.$validator.validate('question').then((valid) => {
                if (valid) {
                    this.form.questions.push({
                        id: null,
                        question: (this.question.substr(-1, 1) === '?') ? this.question : this.question + '?'
                    });
                    this.question = '';
                    this.clearValidation();
                }
            });
        },
        removeQuestion(index) {
            this.form.questions.splice(index, 1);
        },
        removeImportedQuestion(index) {
            this.$children[0].selectedQuestions.splice(index, 1);
        },
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
        importQuestions() {
            this.modalContent.selectedQuestions = this.$children[0].selectedQuestions;
        },
        setListedData(array) {
            this.$children[0].listData = array;
        },
        searchQuestion() {
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
        async sendElement() {
            let isValid = await this.$validator.validate('element name').then((valid) => valid);
            console.log(isValid);
        }
    },
    mounted() {
        this.modal = new bootstrap.Modal(document.getElementById('modalImport'), {
            keyboard: false,
            backdrop: 'static'
        });
    }
});