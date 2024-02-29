// Try... catch
// Якщо виклик функції може завершитися помилкою, рекомендується обернути його блоком try...catch.

// const runCode = () => {
//    console.log('Step 1')
//    try {
//       getData()
//    } catch (error) {
//       console.error(error)
//    }
//    console.log('Step 2')
// }


// Перебор масива без цикла (Рекурсія)

let n = 0
// function start() {
//    n++
//    console.log(n)
//    if(n === 100) return //отримали аналог цикла,інколи не зручно вирішувати задачі циклом,тому є рекурсія 
//    start(n)
// }
// start() //11 0000 стек викликів

// Приклад цикл:

function cycle() {
    let res = ''
    for(let i = 1; i <= 20; i++) {
        res += i + ' '
    }
    return res
}
// console.log(cycle())

// Приклад рекурсія

let res = ''
let i = 0

function recursion() {
   i++
   if (i > 20) return
   res += i + ' '
   recursion()
}
recursion()
// console.log(res)

// Завдання переробити функцію randomInteger рекурсією 

function randomInteger(min, max) {
   let random = min + Math.random() * (max + 1 - min)
   return Math.floor(random)
}
// console.log(randomInteger(2,10))
let num = 0
// function randomIngRec() {
//    let range = randomInteger(0, 10)
//    console.log('num:' + range)
//    num += range
//    console.log('sum:' + num)
//    if(num > 10) return
//    randomIngRec()
// }
// randomIngRec()

// ЗавданняПеребрати вкладені об'єкти 

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
      }
   }
}
// -------------------------------
// Напишіть функцію createTree яка створює вкладений ul/li список з вкладеного об’єкта.
// 1.Створіть вузли дерева та додайте їх за допомогою методів DOM.
// function createTree(container, obj) {
//    container.innerHTML = createTreeText(obj)
// }



// Дано дерево з вкладених ul/li.

// Напишіть код, який додає до кожного <li> кількість його нащадків. Пропускаючи пусті вузли (без дочірніх елементів).

// function amout(obj) {
//    for (let key of obj) {
//       const value = obj[key]
//       console.log(value)
//    }
// }
// amout(obj)

// const one = document.getElementById('one')
// one.insertAdjacentHTML('afterend',`<li>2</li><li>3</li>`) 

// {/* <li>2</li><li>3</li> */}


// Напишіть код для сортування по імені, колонка "name"
// const tdAll = document.querySelectorAll('tbody td:nth-child(1)')
// let tdArr = []

// tdAll.forEach(td => {
//    tdArr.push(td.textContent.trim())
// })
// const sorted = tdArr.sort()
// console.log(sorted)

// tdAll.forEach((td, index) => {
//     td.textContent = sorted[index];
// });

/*----------
   Класи
-----------*/


// Коли ваш код почне розвиватися, у вашому вихідному коді буде кілька десятків функцій. Щоб краще організувати свій код, ви можете згрупувати функції, які виконують подібні функції, в один клас.

// Інша головна причина полягає в тому, що класи можна використовувати повторно.


// Створити клас - new

// Клас чи екземпляра

// Клас — це фабрика, яка може створювати екземпляри(Кожен екземпляр унікальний)
// person1 === person2; // false Ми отримуємо false, оскільки це 2 різні екземпляри (але вони були створені з одного класу Person).


// Конструктор має свій прототип 
