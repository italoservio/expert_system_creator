vueManage = new Vue({
    el: '#vueManage',
    data: {
        form: {
        },
    },
    created() {
        this.$validator.extend('required', {
            getMessage: (field) => 'The field "' + field + '" is required',
            validate: (value) => { return (value !== null) ? (value.length > 0) : false; }
        });
    },
    methods: {
    },
    mounted() {
    }
});