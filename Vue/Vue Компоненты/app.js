`use strict`
const app = new Vue({
    el: `#app`,
    data: {
        counterApp: 0,
        titleApp: `++++`,
        tabs: [`one`, `two`, `three`],
        selectedTab: `one`,
        tabs2: [`one`, `two`, `three`],
        selectedTab2: `one`,
    },
    methods: {
        increaseFn() {
            this.counterApp++;
        }
    },
    computed: {
        currentComponent() {
            return `component-${this.selectedTab}`
        },
        currentComponent2() {
            return `component-${this.selectedTab2}`
        }
    },
    mounted() {
        console.log(`root`, this)
    },
    //  Вставляем копонент some-el 
    template: `<div>
                   <some-el 
                    :titleEl="titleApp"
                    :counterEl="counterApp"
                    :fnEl="increaseFn">
                    <component-two/>
                     <div> I'm slot </div> 
                   </some-el>
                   <component-one/>
                   <div>
                   <button 
                   @click="selectedTab = tab"
                   v-for="tab in tabs">{{tab}}</button> <br>
                   <component :is="currentComponent"></component>
                   <button 
                   @click="selectedTab2 = tab"
                   v-for="tab of tabs2">{{tab}}</button>
                   </div>
                   <component :is="currentComponent2"></component>
             </div>`,

})