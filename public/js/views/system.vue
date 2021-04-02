vueSystem = new Vue({
    el: '#vueSystem',
    data: {
        form: {
            input: ''
        }
    },
    methods: {
        sendJson() {
            alert(this.form.input);

            axios.get('https://localhost:5001/api/weatherforecast')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
    mouted() {

    }
});