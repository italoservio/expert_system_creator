Vue.component('system-card', {
    props: {
        id: {
            type: Number,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        createdBy: {
            type: String,
            required: false
        },
        desc: {
            type: String,
            required: false
        }
    },
    computed: {
        reduceTitle() {
            if (this.title.length > 45) {
                return (this.title.slice(0, 45) + '...');
            }
            return this.title;
        },
        reduceDesc() {
            if (this.desc.length > 190) {
                return (this.desc.slice(0, 190) + '...');
            }
            return this.desc;
        },
        manageURL() {
            return 'manage/' + this.id;
        },
        systemURL() {
            return 'system/' + this.id;
        }
    },
    template: `
    <div class="card box-shadow card-system mx-1">
        <div class="card-header bg-white py-3 px-4">
            <h1 class="h5 mb-0">{{reduceTitle}}</h1>
            <small class="text-muted">Created by: {{createdBy}}</small>
        </div>
        <div class="card-body px-4">
            <p class="text-justify text-muted mb-0">
                {{reduceDesc}}
            </p>
        </div>
        <div class="card-footer py-3 px-4">
            <div class="d-flex justify-content-between">
                <a :href="manageURL" class="btn btn-sm box-shadow btn-outline-secondary"><i class="fas fa-wrench me-1"></i>Manage</a>
                <a :href="systemURL" class="btn btn-sm box-shadow btn-secondary"><i class="fas fa-play-circle me-1"></i>Start</a>
            </div>
        </div>
    </div>
    `
});