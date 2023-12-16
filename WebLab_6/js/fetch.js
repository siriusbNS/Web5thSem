const url = 'https://jsonplaceholder.typicode.com/comments';

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Получаем элемент, где будем отображать preloader
// const preloader = document.getElementById('preloader');
// let headers = new Headers();
// headers.append('Access-Control-Allow-Origin', 'http://localhost:63342/');
//headers.append('Access-Control-Allow-Credentials', 'true');

document.addEventListener('DOMContentLoaded',
function fetchData() {
    const galery_imgs = document.getElementById("galery_imgs");

    // Показываем preloader перед отправкой запроса
    // Добавляем псевдо-случайную фильтрацию к запросу
    const fetchUrl = `https://api.slingacademy.com/v1/sample-data/photos?offset=${getRandomNumber(1, 100)}&limit=4`;
    alert("hello")

    fetch(fetchUrl)
        .then(response => {
            if (!response.ok) {
                // Обрабатываем ошибки
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const images = data.photos;
            // Отображаем полученные данные на странице
            for (const photo of images) {


                // Создаем элемент изображения
                const img = document.createElement('img');

                // Задаем атрибуты src и alt для изображения
                img.src = photo.url;
                img.alt = photo.title;
                img.style = "max-height: 180px;" +
                    "    max-width: 350px;" +
                    "    margin: 10px 10px 10px;"
                // Логируем изображение
                console.log(img);
                const newImg = document.createElement('div');
                newImg.style = " align-self: center;\n" +
                    "    display: block;\n" +
                    "    margin:  10px auto 10px;\n" +
                    "    padding: 20px;\n" +
                    "    font-weight: bolder;\n"
                newImg.appendChild(img)
                galery_imgs.appendChild(newImg)

            }
        })
        .catch(error => {
            // preloader.style.display = 'none';
            // galery_imgs.style.display ='inline-block'
            galery_imgs.innerHTML =""
            galery_imgs.innerHTML = '<a>⚠ Что-то пошло не так</a>';
            galery_imgs.style.alignItems = 'center'

            console.error('Error:', error);
        });
});