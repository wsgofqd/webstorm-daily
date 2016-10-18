<template>
    <navbar placement="top" type="default">
        <!-- Brand as slot -->
        <a slot="brand" href="/" title="Home" class="navbar-brand">VueStrap</a>

        <!-- Or normal bootstrap style -->
        <li class="dropdown">
            <a href="#" class="dropdown-toggle">Dropdown</a>
            <ul class="dropdown-menu">
                <li><a href="link">Option</a></li>
            </ul>
        </li>
        <!-- For right positioning use slot -->
        <li slot="right">
            <a href="https://github.com/yuche/vue-strap" target="_blank">Fork...</a>
        </li>
    </navbar>
</template>

<script>
    import navbar from 'vue-strap'
    import 'boot'
    export default {
        data () {
            return {
                placement: 'static',
                type: 'inverse',
                msg: 'this is a test!',
                sections: []
            }
        },
        components: {
            navbar
        },
        created () {
            if (!this.$root.sections) {
                this.$root.sections = []
            }
            this.sections = this.$root.sections
        }
    }
</script>

<style>

</style>
