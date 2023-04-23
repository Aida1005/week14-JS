const directorCards = [ //Переменная для массива
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссёр, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссёр, Сценарист, Актёр, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зелёная книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
  ];

//Переменные для контейнера
const directorCard = document.querySelector('.director-card');
const topFilmsList = document.querySelector ('.top_rated_film');


const createCard = (obj) => {
    //Создаём переменные к каждому элементу
    const block = document.createElement ('div');
    block.className = "director-card";
    const name = document.createElement ('span');
    name.className = "director-card__name";
    name.textContent = obj.name;
    const career = document.createElement ('span');
    career.className = "director-card__career";
    career.textContent = obj.career;
    const films = document.createElement ('a');
    films.className = 'director-card__movies';
    films.href = obj.films;
    films.textContent = "Фильмография";
    const top_rated_film = document.createElement ('div');
    top_rated_film.className = "top_rated_film";
    top_rated_film.textContent = obj.top_rated_film;

//Расставляем все карточки по порядку
    block.append(name);
    block.append(career);
    block.append(films);
    return block;
};

// Добавляем все элементы к существующим блокам
const addCard = (objElement, container) => {
    const item = createCard (objElement);
    container.append (item);
};

//Функция для отображения всех элементов через HTML
document.addEventListener('DOMContentLoaded', () =>{//
    directorCards.forEach((element) => {
        addCard(element, directorCard);
    }) 
})

//новый массив для topFilmsList
const directorCards2 = directorCards.map(function (obj) {
    return obj.top_rated_film;
});

  //Отображаем блок topFilmsList с его элементами через HTML
document.addEventListener('DOMContentLoaded', ()=>{
    topFilmsList.textContent = directorCards2.join (", ");
});