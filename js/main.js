import whoWatchCmp from './cmps/who.watch.cmp.js';

const options = {
    template: `
    <section class="app">
        <who-watch></who-watch>
    </section>
`,
    data() {
        return {
        };
    },
    methods: {},
    computed: {}
};
const app = Vue.createApp(options);
app.component('who-watch', whoWatchCmp);
app.mount('#app');