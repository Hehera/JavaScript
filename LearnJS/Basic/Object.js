// ---------------------------
// Перебор вкладених об'єктів
// ---------------------------
// Перший варіант
// 1) Object.entries(data) - вертає масив,тому використовуємо for of і квадратні дужки
function dataObj(data) {
    for (let [key, value] of Object.entries(data)) {
       console.log(key, value)
    }
 }
// Другий варіант
function dataObj(data) {
   for (let key in data) {
      let value = data[key]
      console.log(key, value)
   }
}
// ------------
// Завдання 1
// -----------
// Напишіть функцію createTree яка створює вкладений ul/li список з вкладеного об’єкта.
// Створіть вузли дерева та додайте їх за допомогою методів DOM.
let data = {
   Риба: {
      форель: {},
      лосось: {}
   },

   Дерево: {
      Величезні: {
         секвойя: {},
         дуб: {}
      },
      Квітучі: {
         яблуня: {},
         магнолія: {}
      },
      лол: {
         яблуня: {},
         магнолія: {}
      }
   }
}

function dataObj(data, parentElement) {
     // Створюємо елемент <ul> для поточного рівня
   let ulElement = document.createElement('ul')
   // Проходимося по кожному ключу у вхідному об'єкті
   for (let key in data) {
      // Створюємо елемент <li> для поточного ключа
      let liElement = document.createElement('li')
      // Додаємо текст ключа до <li>
      liElement.textContent = key
      // Якщо значення під ключем є об'єктом і чи не відстутнє, рекурсивно створюємо для нього вкладений список
      if (typeof data[key] === 'object' && data[key] !== null) {
         // Рекурсивний виклик dataObj для створення вкладеного списку
         dataObj(data[key], liElement)
      } // Додаємо <li> до <ul>
      ulElement.appendChild(liElement)
      // Додаємо <ul> до батьківського елемента (parentElement)
      if (parentElement) {
         parentElement.appendChild(ulElement)
      } else {
         // Якщо не вказано батьківського елемента, додаємо <ul> до body
         document.body.appendChild(ulElement)
      }
   }
}



