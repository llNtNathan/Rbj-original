<template>
    <div class="col-md-4">
        <h4 class="text-center">
            <slot></slot>
        </h4>
        <img class="img-fluid" src="./logo_thumb.png">
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Gallery',
    props: {
        fetch: {
            type: String,
            required: true,
            validator: value => (/^\/api\//).test(value)
        },
        sk: {
            type: String,
            required: true
        },
        route: {
            type: String,
            required: true
        }
    },
    data: () => ({
        items: []
     }),
    async created() {
        if (!Object.keys(this.$store.getters['Home/carousels']).length || 
        !this.$store.getters['Home/carousels'][this.sk]) {
            let { data } = await axios.get(this.fetch)
            let vm = this
            this.$store.dispatch('Home/setCarousel', {
                payload: data,
                key: this.sk
            })
            .then(() => {
                vm.items = vm.$store.getters['Home/carousels'][vm.sk]
            })
        }
        else {
            this.items = this.$store.getters['Home/carousels'][this.sk]            
        }
    },
    methods: {
        go(item) {
            this.$router.push({ name: this.route, params: {id: item.id} })
        }
    }
}
</script>
<style>

</style>
