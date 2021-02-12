# Получаем и выводим весь список контакстов в виде таблицы (console.table)

node index.js --action="list"
![list](screenshots/list.jpg)

# Получаем контакт по id

node index.js --action="get" --id=5
![detByID](screenshots/getByID.jpg)

# Добавялем контакт

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
![add](screenshots/add.jpg)

# Удаляем контакт

node index.js --action="remove" --id=3
![remove](screenshots/remove.jpg)
