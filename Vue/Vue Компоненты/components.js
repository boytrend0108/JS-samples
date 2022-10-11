`use strict`
// coздаем компонент с локальной регистрацией
const childElement = {
    name: `child-element`,
    template: `<p>Some LOCAL component</p>`,
};
// КАЖДЫЙ КОМПОНЕНТ ДОЛЖЕН БЫТЬ В ОТДЕЛЬНОМ ФАЙЛЕ.
// Создаем новый компонент с глобальной регистрацией.т.е. если он даже не подкючен Vue будет его анализировать
Vue.component(`some-el`, {
    // полностью копируем с арр.js потом удаляем лишнее
    // el: `#app`,- лишнее
    data() { // в компонентах data это функция.
        return {

        };
    },
    // Все что мы ожидаем на вход описываем в свойстве props
    props: [`titleEl`, `counterEl`, `fnEl`],
    methods: {},
    computed: {},
    mounted() {
        console.log(`component`, this)
    },
    // в template мы указываем нужную разметку
    template: `
    <div>
        <div>Hello component!</div>
        <div>{{titleEl}}</div>
        <child-element></child-element>
        <button @click="fnEl">{{counterEl}}</button>
    </div>`,
    // локальніе компоненты регистрируем с помощью components
    components: {
        childElement,
    }
});


