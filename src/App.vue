<template>
    <navbar placement="top" type="inverse">
        <a href="/" title="Home" slot="brand" class="navbar-brand">VueStrap</a>
        <dropdown text="Component List" type="primary">
            <li v-for="s in sections"><a :href="'#'+s" v-text="s"></a></li>
        </dropdown>
        <li>
            <a href="https://github.com/yuche/vue-strap" target="_blank">
                Fork this project on Github

            </a>
    </navbar>

</template>

<script>

    import {dropdown, navbar} from 'vue-strap'
    export default {
        data () {
            return {
                msg: 'hello world！！！！',
                sections:['aaa','bbb','cccc']
            }
        },
        components: {
            navbar, dropdown
        }

    }
</script>

<style>

</style>
