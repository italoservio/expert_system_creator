Vue.component('paginated-list', {
    data() {
        return {
            pageNumber: 0,
            selectedQuestions: []
        }
    },
    props: {
        listData: {
            type: Array,
            required: true
        },
        size: {
            type: Number,
            required: false,
            default: 10
        }
    },
    methods: {
        nextPage() { this.pageNumber++; },
        prevPage() { this.pageNumber--; }
    },
    computed: {
        pageCount() {
            let l = this.listData.length, s = this.size;
            return Math.ceil(l / s); // Arredondando para cima o cálculo de páginas
        },
        paginatedData() {
            const start = this.pageNumber * this.size, end = start + this.size;
            return this.listData.slice(start, end); // Retorna uma cópia de parte de um array
        }
    },
    template: `
    <div>
        <ul class="list-group">
            <li v-for="(question, index) in paginatedData" class="list-group-item">
                <input :id="index" :value="question" name="question" class="form-check-input me-1" type="checkbox" v-model="selectedQuestions">
                <label :for="index">{{question.question}}</label>
            </li>
        </ul>
        <div class="d-flex justify-content-center my-4">
            <button class="btn btn-sm btn-outline-primary mx-1" :disabled="pageNumber === 0" @click="prevPage">Anterior</button>
            <button class="btn btn-sm btn-outline-primary mx-1" :disabled="pageNumber >= pageCount -1" @click="nextPage">Próxima</button>
        </div>
    </div>
    `
});