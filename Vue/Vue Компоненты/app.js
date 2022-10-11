`use strict`
const app = new Vue({
    el: `#app`,
    data: {
        counterApp: 0,
        titleApp: `++++`,
    },
    methods: {
        increaseFn() {
            this.counterApp++;
        }
    },
    computed: {},
    mounted() {
        console.log(`root`, this)
    },
    //  Вставляем копонент some-el 
    template: `<div>
                   <some-el 
                   :titleEl="titleApp"
                   :counterEl="counterApp"
                   :fnEl="increaseFn"/>
               
                   <some-el 
                   :titleEl="titleApp"
                   :counterEl="counterApp"
                   :fnEl="increaseFn"/>
             </div>`,

})