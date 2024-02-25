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
// 1) Object.entries(data) - вертає масив,тому використовуємо for of
function dataObj(data) {
   for (let [key, value] of Object.entries(data)) {
      console.log(value)
   }
}
// dataObj(data)


// 2варіант

// function dataParentRecursion(obj) {
//     if(obj)
// }




 