`use strict`
//  Запускаем приложения через создание экземпляра класса Vue
const app = new Vue({
    el: `#app`, // куда отрисовываем(!)
    data: {     // что отрисовываем (!)
        name: ``,
        name2: ``,
        someNam: 0,
        title: `Hello Vue!`,
        tille2: ``,
        link: `https://google.com`,
        completeElem: `<span>I'm new element <a href="https://google.com" id="link">Google2</a>
                    </span>`,
        counter: 0,
        secondCounter: 0,
        x: 0,
        y: 0,
        x2: 0,
        y2: 0,
        isRed: false,
        color: `#ccc`,
        width: 100,
        show: true,
        show2: true,
        show3: true,
        products: [
            { id: 1, title: `Notebook`, price: `1000`, quantity: `10`, img: `https://via.placeholder.com/200x150'` },
            { id: 2, title: `Mouse`, price: `100`, quantity: `15`, img: `https://via.placeholder.com/200x150'` },
            { id: 3, title: `Keyboard`, price: `250`, quantity: `1`, img: `https://via.placeholder.com/200x150'` },
        ]

    },
    methods: {
        sayHello() {
            this.title2 = `Changed`
            return this.title2
        },
        increase(step, event) { // event здесь для примера, если понадобиться его передать 
            console.log(event);
            this.counter += step;// будет прибавлять через step
        },
        getCoordinates(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        getCoordinates2(event) {
            this.x2 = event.clientX;
            this.y2 = event.clientY;
        },
        methodResult() {
            console.log(`method`);
            return this.counter > 5 ? `Greater then 5` : `Less then 5`;
        },
        addProduct() {
            this.products.push({ id: 4, title: `NotePad`, price: `2550`, quantity: `1`, img: `https://via.placeholder.com/200x150'` })
        }
    },
    // Если надо что-то вычислить - всегда использовать computed
    computed: {
        computedResult() {
            console.log(`computed`);
            return this.counter > 5 ? `Greater then 5` : `Less then 5`;
        },
        myStyle() {
            return {
                backgroundColor: this.color,
                width: `${this.width}px`,
                height: `${this.width}px`,
            }
        }

    }
});


