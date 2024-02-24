// Замикання - це можливість,функції яка знаходиться всередині іншої,отримувати доступ до змінних,які знаходятьсяв області бачення батьківської функції,навіть,якщо батьківська функція вже виконала свою роботу.     
  // function external() {
            //         const externalVar = 'я зовнішня функція'

            //         function internal() {
            //             const internalVar = 'я внутрішня функція'
            //             console.log('internal >', internalVar)
            //             console.log('external >', externalVar)
            //         }
            //        return internal
            //     }
            //    const externalFunction =  external()
            //    externalFunction()

// ex2

                // function createAdress(type) {
                //     const adress = type.toUpperCase()
                //     return function (name) {
                //         return `${adress} ${name}`
                //     }
                // }
                // const adressCitizenMen = createAdress('Men')
                // const adressCitizenWomen = createAdress('Woman')
                // console.log(adressCitizenMen("Nazar"))
                // console.log(adressCitizenWomen("Nastya"))

// ex3     
                // function createPlayer(player) {
                //     let score = 0
                //     return function scoreCount() {
                //         score++
                //         return `${player} - ${score}`
                //     }
                // }

                // const men = createPlayer('Nazar')
                // const women = createPlayer('Nastya')
