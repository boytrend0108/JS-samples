// Перед началом инизиализируем проект npm init !!!!!!(заполняем файл package.json)

// Старый вариант
// const os = require(`os`); // подключаем библиотеку ОС компа
// console.log(os.type());// выводим тип ОС

// Новый вариант
// import { type } from `os`; // подключаем библиотеку ОС компа
// console.log(type());// выводим тип ОС

// Мы установили библиотеку moment и подключаеся к ней
// import moment from `moment`;
// const moment = require(`moment`);
// console.log(moment());

// Как подключить в файл сторонний модуль
// const func = require('./func');
// console.log(func.a(15));
// но лучше сделать через деструктуризацию
// const { a } = require('./func');
// console.log(a(15));

//----подключаем библиотеку для работы с файловой системой
// const fs = require(`fs`);
// // Например есть массив из пользователей
// const users = [{ name: `Ivan`, age: 22 }];
// // используем метод  writeFile из библиотеки fs(он только перезаписует файл, не добавляет новое)
// // ------------куда---------что(преобразуем)----коллбек при ошибке
// const db = `db.json` // создаем для того если будем изпользовать в разных местах не опечататься. 

// fs.writeFile(db, JSON.stringify(users), (err) => {
//     if (err) console.log(err)
// });

// КАК ДОБАВИТЬ НОВОГО ПОЛЬЗОВАТЕЛЯ В НАШ ФАЙЛ
// data - это данные которые мы получили из db и будем парсить
// fs.readFile(db, (err, data) => {
//     if (err) return console.log(err)// при пошибке выбрасывеем ошибку
//     const usersList = JSON.parse(data);// создаем переменную и туда парсим данные из БД
//     usersList.push({ name: `Ann`, age: 55 });// добавляем нового пользователя
//     fs.writeFile(db, JSON.stringify(usersList, null, 4), (err => {// и отправляем назад в БД (+форматирование)
//         if (err) return console.log(err)
//     }));
// });
//------------------------------------------------------------------------------


// // КАК СОЗДАТЬ СЕРВЕР
//----подключаем библиотеку для работі с файловой системой
const db = `db.json` // создаем для того если будем изпользовать в разных местах не опечататься. 
const fs = require(`fs`);
const http = require(`http`);// подключаем библиотеку http
const server = http.createServer((req, res) => {// создаем сервер
    if (req.url === `/`) {// по адресу localhost:555
        return res.end(`Hello from Node.js`);// віведится єто сообщение
    }
    if (req.url === `/users`) {// по адресу localhost:555/users
        if (req.method === `GET`) {// ести используется метот GET
            fs.readFile(db, (err, data) => { // считываем файл db
                if (err) return res.end(JSON.stringify(err));// выводим ошибку если есть
                return res.end(data);// віведится наша db(она уже в JSON т.е stringify не нужен)
            });
        }
    }
});

server.listen(777); 
