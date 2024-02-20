// // Створити div
// const div = document.createElement('div')
// div.classList.add('wrapper') //// Добавити до нього класс Wrapper
// const body = document.body
// body.appendChild(div) // Помістити його всередину тега body
// const h1 = document.createElement('h1')
// h1.textContent = 'Document Object Modal' // Створити заголовок h1 "Document Object Modal"
// // Добавити h1 перед DIV з класом wrapper
// div.insertAdjacentElement('beforebegin',h1)
// // Створити список ul
// // Добавити в нього 3 елемента з текстом "Один,два,три"
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
// console.log(pDIV)
// // Видалити перший параграф
// // Створити функцію generateAutoCard,яка приймає три аргумента brand,color,year

// // Функція має повертати розмітку HTML:
// /* <div class="autoCard">
// <h2>BRAND ART</h2>
// <p>Картина ART - YEAR року.Вік 1000років</p>
// </div> */

// // Створити новий DIV з классом cars

// // Створити 4 карточки авто,використовуючи generateAutoCard
// // const carsList = [
// //     {
// //         brand:'ГЕРНІКА, ПАБЛО ПІКАССО',year:1937,
// //     }
// // ]



