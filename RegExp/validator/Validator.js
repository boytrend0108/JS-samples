
`ust strict`
// При загрузке окна вешаем обработчик событий на кнопку.
window.onload = () => {
    document.getElementById('myform').addEventListener('submit', e => {
        const valid = new Validator('myform');// при клике создаем новый объект и передаем ID формы
        if (!valid.valid) { // если ????
            e.preventDefault(); // то действуем по умолчанию
        }
    })
}

class Validator {
    constructor(form) {
        this.patterns = {
            name: /^[a-zа-яё]+$/i, // Имя содержит только буквы.
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/, // Телефон имеет вид +7(000)000-0000.
            email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i // E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru
        };
        this.errors = {
            name: 'Имя содержит только буквы',
            phone: 'Телефон подчиняется шаблону +7(000)000-0000',
            email: 'E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'
        };
        this.errorClass = 'error-msg';// класс дива который будет выводится если будет ошибка
        this.form = form; // єто id нужной формы
        this.valid = false;// изначально значение valid устанавливаем false
        this._validateForm();// сразу запускаем валидацию формы
    }
    _validateForm() {
        let errors = [...document.getElementById(this.form).querySelectorAll(`.${this.errorClass}`)];
        for (let error of errors) {
            error.remove();
        }
        // Собираем массив из всех инпутов.
        let formFields = [...document.getElementById(this.form).getElementsByTagName('input')];
        // Перебираем массив
        for (let field of formFields) {
            this._validate(field);// проверяем кажное поле єтого массива
        }
        // После того как прошлись по всем полям и вівелись/невівелись сообщения об ошибке
        // проходимся еще раз по нашей форме и собираем массив из дивов с классом invalid
        // Если такой массив не собрался- значит форма прошла валидацию и ...
        if (![...document.getElementById(this.form).querySelectorAll('.invalid')].length) {
            this.valid = true; // ...значени валид изменяется на true
        }
    }
    _validate(field) {
        if (this.patterns[field.name]) {// если такое поле существует то
            // если то что мы ввели НЕ соответвствует регуляряному выражению 
            if (!this.patterns[field.name].test(field.value)) {
                field.classList.add('invalid');// к этому inputu добавляем класс invalid(css выделяет поле крассным)
                this._addErrorMsg(field);// с помощью этго метода выводим сообщение об ошибке
                this._watchField(field);
            }
        }
    }
    _addErrorMsg(field) {
        // собираем строку с сообщение об ошибке
        let error = `<div class="${this.errorClass}">${this.errors[field.name]}</div> `;
        field.parentNode.insertAdjacentHTML('beforeend', error);// вставляем в HTML
    }
    _watchField(field) {
        field.addEventListener('input', () => {
            let error = field.parentNode.querySelector(`.${this.errorClass}`);
            if (this.patterns[field.name].test(field.value)) {
                field.classList.remove('invalid');
                field.classList.add('valid');
                if (error) {
                    error.remove();
                }
            } else {
                field.classList.remove('valid');
                field.classList.add('invalid');
                if (!error) {
                    this._addErrorMsg(field);
                }
            }
        });
    }
}
