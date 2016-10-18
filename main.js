import 'boot'
import App from './src/App.vue'

vue.config.debug=true;
vue.config.devtools=true;
new vue({
  el: 'body',
  components: { App }
});
