// -------------------------
// Деструктуризація об'єктів
// -------------------------
const dimensions = [20, 5]
const [width, height] = dimensions;
// ----------
// Замикання 
// ----------
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
// --------------------------------------------------------
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
// --------------------------------------------------------
    // function createPlayer(player) {
    //     let score = 0
    //     return function scoreCount() {
    //         score++
    //         return `${player} - ${score}`
    //     }
    // }

    // const men = createPlayer('Nazar')
    // const women = createPlayer('Nastya')
// --------------------------------------------------------
                // Рекурсія - це процес, коли функція викликає саму себе.

