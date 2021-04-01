const vueLogin = new Vue({
    el: '#vueLogin',
    data() {
        return {
            form: {
                email: '',
                pass: '',
                remember: false
            }
        }
    },
    methods: {
        async login() {
            await fetch(`/user?email=${this.form.email}&pass=${md5(this.form.pass)}&remember=${this.form.remember}`)
            .then((data) => data.json())
            .then((data) => {
                console.log(data);
            });
        }
    },
    mounted() {
    }
});