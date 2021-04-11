vueIndex = new Vue({
    el: '#vueIndex',
    data: {
        arrSystems: []
    },
    methods: {
        // URL Actions:
        goToManage() {
            helper.clearTempSystem();
            window.location.href = '/manage'
        },

        // General actions:
        async getAllSystems() {
            fetch("/system/get", {
                method: "get",
                headers: { "Content-Type": "application/json" }
            })
            .then((res) => res.json())
            .then((data) => {
                this.arrSystems = data;
            });
        }
    },
    mounted() {
        this.arrSystems = [];
        helper.clearTempSystem();
        this.getAllSystems();
    }
});