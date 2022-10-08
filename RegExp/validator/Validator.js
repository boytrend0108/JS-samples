
`ust strict`
// При загрузке окна вешаем обработчик событий на кнопку.
window.onload = () => {
    document.getElementById('myform').addEventListener('submit', e => {
        const validObj = new Validator('myform');// при клике создаем новый объект и передаем ID формы
        if (!validObj.valid) { // если у объекта validObj значение valid не равно false(т.е. равно true)
            e.preventDefault(); // то действуем по умолчанию
        }
    })
}

class Validator {
    constructor(form) {
        this.form = form; // єто id нужной формы
        // Собираем регулярные выражения
        this.patterns = {
            name: /^[a-zа-яё]+$/i, // Имя содержит только буквы.
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/, // Телефон имеет вид +7(000)000-0000.
            email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i // E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru
        };
        // Собираем ошибки которые будут выводится при ошибках
        this.errors = {
            name: 'Имя содержит только буквы',
            phone: 'Телефон подчиняется шаблону +7(000)000-0000',
            email: 'E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'
        };
        this.errorClass = 'error-msg';// класс дива который будет выводится если будет ошибка
        this.valid = false;// изначально значение valid устанавливаем false
        this._validateForm();// сразу запускаем валидацию формы
    }
    // Валидация формы
    _validateForm() {
        // Собираем массив из дивов с ошибками(если они есть)
        let errors = [...document.getElementById(this.form).querySelectorAll(`.${this.errorClass}`)];
        // и удаляем всё (ЗАЯЕМ ТАИ И НЕ ПОНЯЛ)
        for (let error of errors) {
            error.remove();
        }

        // Собираем массив из всех инпутов.
        let formFields = [...document.getElementById(this.form).getElementsByTagName('input')];
        // Перебираем массив
        for (let field of formFields) {
            this._validate(field);// проверяем каждое поле этого массива
        }
        // После того как прошлись по всем полям и вівелись/невівелись сообщения об ошибке
        // проходимся еще раз по нашей форме и собираем массив из дивов с классом invalid
        // Если такой массив не собрался(если длинна массива 0)- значит форма прошла валидацию и ...
        if (![...document.getElementById(this.form).querySelectorAll('.invalid')].length) {
            this.valid = true; // ...значени валид изменяется на true
        }
    }
    // Валидация отдельного поля формы
    _validate(field) {
        if (this.patterns[field.name]) {// если такое поле существует то
            // если то что мы ввели НЕ СООТВЕТСТВУЕТ регулярному выражению 
            if (!this.patterns[field.name].test(field.value)) {
                field.classList.add('invalid');// к этому input добавляем класс invalid(css выделяет поле крассным)
                this._addErrorMsg(field);// с помощью этго метода выводим сообщение об ошибке
                // если пользователь пытается исправить ошибку и меняет импут запускается этот метод
                this._watchField(field);
            }
        }
    }
    // Добавляем сообщение об ошибке
    _addErrorMsg(field) {
        // собираем строку с сообщение об ошибке
        let error = `<div class="${this.errorClass}">${this.errors[field.name]}</div> `;
        // Находим родителя нашего импута и...
        field.parentNode.insertAdjacentHTML('beforeend', error);//... вставляем в HTML подготовленную строку
    }
    // Следим зa полем ввода
    _watchField(field) {
        field.addEventListener('input', () => {
            // Находим див с текстом об ошибке
            let errorText = field.parentNode.querySelector(`.${this.errorClass}`);
            // Cнова проверяем регуляное віражение
            if (this.patterns[field.name].test(field.value)) {
                field.classList.remove('invalid');// если всё ок- удаляем класс invalid и...
                field.classList.add('valid'); // и добавляем клас valid (зелёная обводка)
                if (errorText) { // если див с текстом ошибки существует- удаляем его
                    errorText.remove();
                }
            } else { // если регулярка не пропустила инпут 
                field.classList.remove('valid');// - удаляем класс valid
                field.classList.add('invalid');//- добавляем класс invalid(обводка красным)
                if (!errorText) { // если текста с ошибкой нет
                    this._addErrorMsg(field); // віводим текст с ошибкой.
                }
            }
        });
    }
}
