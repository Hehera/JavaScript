// ------------
// Practice
// ------------
// // Створити div
// const div = document.createElement('div')
// // Добавити до нього класс Wrapper
// div.classList.add('wrapper') 
// // Помістити його всередину тега body
// const body = document.body
// body.appendChild(div) 
// // Створити заголовок h1 "Document Object Modal"
// const h1 = document.createElement('h1')
// h1.textContent = 'Document Object Modal' 
// // Добавити h1 перед DIV з класом wrapper
// div.insertAdjacentElement('beforebegin',h1)
// // Створити список ul // та обавити в нього 3 елемента з текстом "Один,два,три"
// const ul = `
// <ul>
// <li>Один</li>
// <li>два</li>
// <li>три</li>
// </ul>
// `
// // Помістити список всередину елемента з классом wrapper
// div.innerHTML = ul;
// // ==========================================================
// // Створити зображення
// const img = document.createElement('img')
// // Добавити наступні властивості до зображення
// // 1.Добавити атрибут source
// img.src = `https://picsum.photos/240`
// // 2.Добавити атрибут width 240
// img.width = 240;
// // 3.Добавити клас super 
// img.classList.add('super')
// // 4.Добавити властивість alt зі значенням "SuperMan"
// img.alt = 'SuperMan'
// // Помістити зображення всередину елемента з классом wrapper
// div.appendChild(img)
// // Використати html рядок,створити DIV з класом "pDIV" + з двома p
// const divP = 
// `
//     <div class="pDIV">
//         <p>Параграф 1</p>
//         <p>Параграф 2</p>
//     </div>
// `
// // Помістити DIV до елемента <ul></ul>
// const ulList = div.querySelector('ul')
// ulList.insertAdjacentHTML("beforebegin",divP)
// // Добавити до другого p клас text
// const pDIV = document.querySelector('.pDIV')
// pDIV.children[1].classList.add('text')
// // Видалити перший параграф
// pDIV.firstElementChild.remove()
// // Створити функцію generateAutoCard,яка приймає три аргумента brand,color,year
// const generatePaintingCard = (painting,year,color) => {
//    const currentDate = new Date()
//    const currentYear = currentDate.getFullYear()
//    return `
//             <div class="autoPainting">
//             <h2>${painting.toUpperCase()}</h2>
//             <p>Картина ART - ${currentYear - year}.Вік</p>
//             <p>${color}</p>
//             <button type="button" class="btn">Видалити</button>
//             </div>
//         `
// }
// // Функція має повертати розмітку HTML:
// /* <div class="autoPainting">
//             <h2>BRAND ART</h2>
//             <p>Картина ART - YEAR року.Вік 1000років</p>
//             </div> */
// // Створити новий DIV з классом artPainting
// const divPainting = document.createElement('div')
// divPainting.classList.add('artPainting')
// // console.log(divPainting)
// // Створити 3 карточки картин,використовуючи generateAutoCard
// const paintingList = [
//     {painting:'ГЕРНІКА, ПАБЛО ПІКАССО',year:1937,color:'black'},
//     {painting:'МАТИ ВІСТЛЕРА, ДЖЕЙМС ВІСТЛЕР',year:1871,color:'gray'},
//     {painting:'ДІВЧИНА З ПЕРЛОВОЮ СЕРЕЖКОЮ, ЯН ВЕРМЕЄР',year:1665,color:'black'},
// ]


// const paintingHTML = paintingList.map(paint => {
//    return generatePaintingCard(paint.painting, paint.year, paint.color)
// }).join('')
// // Помістити ці 3 карточки всередину div з классом divPainting
// divPainting.innerHTML = paintingHTML
// // Помістити ці 3 карточки в DOM div до DIV з классом wrapper
// div.insertAdjacentElement('beforebegin',divPainting)

// //Добавити кнопку видалити на кожну карточку 
// //При кліці на неї - видалити карточку із структури DOM
//     // 1.Вибрати всі кнопки
//   const btns = document.querySelectorAll('.btn')
//   // 2.Створити функцію видалення
//   function deleteCard(e) {
//      const currentButton = e.currentTarget
//      currentButton.closest('.autoPainting').remove()
//   }
//   // 3.Використати цикл обробки дії для кожної кнопки
//   btns.forEach(button => {
//      button.addEventListener('click', deleteCard)
//   })

// Об'єкт event(події),спливання,занурення (Фази Життєвого циклу події).
// спливання - з поточного елемента  уверх
// занурення 
// Стандарт DOM Events описує 3 фази проходу події:
// 1.Фаза занурення (capturing phase) – подія спочатку йде зверху донизу.
// 2.Фаза мети (target phase) - подія досягла цільового елемента. 
// 3.Фаза спливу (bubbling stage) – подія починає спливати.
// -------------------------
// --------
// Завдання
// --------
// 1.Запитайте текст пункту у користувача за допомогою prompt.
// 2.Створіть <li> з цим текстом та додайте його до <ul>.
// 3.Продовжуйте поки користувач не припинить вводити дані (натисне Esc або введе пустий рядок).
// -------------------------------------------------------------
// const question = prompt('Скільки елементів списку ?','')

// function getData (question) {
//   const count = parseInt(question)
//   const ul = document.createElement('ul')

//   for(let i = 1; i <= count; i++) {
//       const li = document.createElement('li')
//       li.textContent = `${i}`
//       ul.append(li)
//   }
//   return ul
// }
// const dataList = getData(question)
// document.body.append(dataList)
// -------------------------------------------------------------
// -----------
// Завдання 2
// -----------
// 1.Напишіть функцію createTree яка створює вкладений ul/li список з вкладеного об’єкта.
// 2.Створіть вузли дерева та додайте їх за допомогою методів DOM.
// передавши parentElement, ми маємо можливість контролювати, куди саме буде вставлено створений список у структурі DOM.
// Тут ми дослідили рекурсію => файл
// -------------------------------------------------------------
// function dataObj(data, parentElement) {
//     let ulElement = document.createElement('ul');
//     // Проходимося по кожному ключу у вхідному об'єкті
//     for (let key in data) {
//         // Створюємо елемент <li> для поточного ключа
//         let liElement = document.createElement('li');
//         // Додаємо текст ключа до <li>
//         liElement.textContent = key;
//         // Якщо значення під ключем є об'єктом і чи не відстутнє, рекурсивно створюємо для нього вкладений список
//         if (typeof data[key] === 'object' && data[key] !== null) {
//             // Рекурсивний виклик dataObj для створення вкладеного списку
//             dataObj(data[key], liElement)
//         }// Додаємо <li> до <ul>
//         ulElement.appendChild(liElement)
//         // Додаємо <ul> до батьківського елемента (parentElement)
//         if (parentElement) {
//             parentElement.appendChild(ulElement)
//         } else {
//         // Якщо не вказано батьківського елемента, додаємо <ul> до body
//             document.body.appendChild(ulElement)
//         }
//     }
// }
// dataObj(data)
// -------------------------------------------------------------






