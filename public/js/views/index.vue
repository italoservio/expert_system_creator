vueIndex = new Vue({
    el: '#vueIndex',
    data: {
        arrSystems: []
    },
    methods: {
        goToManage() {
            helper.clearTempSystem();
            window.location.href = '/manage'
        },
        async getAllSystems() {
            fetch("/system/get", {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })
            .then((res) => res.json())
            .then((data) => {
                this.arrSystems = data;
            });
        }
    },
    mounted() {
        this.getAllSystems();
    }
});