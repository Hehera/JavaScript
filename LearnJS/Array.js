// const getSumOfGrades = results => {
//     let res = 0
//     for(let i = 0; i < results.length; i++) {
//       res += results[i].grade
//     }
//     return res
// };

// // Sample usage - do not modify
// const results = [{
//     date: "2018-12-13",
//     grade: 14
// }, {
//     date: "2018-12-15",
//     grade: 18
// }]
// // console.log(getSumOfGrades(results)); // 32


// const getAverageAge = users => {
//     let sum = 0
//     let count = 0
//    for(let i = 0; i < users.length; i++) {
//         sum += users[i].age
//         if(users[i].age) {
//             count++
//         }
//    }
//    return sum / count
// }

// // Sample usage - do not modify
// const users = [{
//     joined_on: "2018-12-13",
//     age: 14
// }, {
//     joined_on: "2018-12-15",
//     age: 18
// }];
// console.log(getAverageAge(users)); // 16



// const getTotalSales = users => {
//    let res = 0
//    users.forEach(user => {
//       res += user.subscription?.info?.value ?? 0
//    })

//    return res
// }

// // Sample usage - do not modify
// const users = [
//     {id: 1, name: "Alex"},
//     {id: 2, name: "Sam", subscription: {info: {value: 59}}},
//     {id: 3, name: "Charlie", subscription: {info: {value: 31}}}
// ];
// // console.log(getTotalSales(users)); // 90


// const getTemperatures = (recordings) => {
//    return recordings.map(recording => recording.temperature)
// }
    

// const recordings = [{
//     date: "2020-01-03",
//     temperature: 3
// }, {
//     date: "2020-01-04",
//     temperature: -4
// }];
// console.log(getTemperatures(recordings)); // [3, -4]




// const getFullNames = users => {
//   return users.map(user => `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`)
// }
// const users = [{
//     id: 1,
//     firstName: "Sam",
//     lastName: "Green"
// }, {
//     id: 2,
//     firstName: "Alex",
//     lastName: "Blue"
// }];
// console.log(getFullNames(users)); // ["SAM GREEN", "ALEX BLUE"]



// const getBigGroups = groups => groups.filter(group => group.details.messageCount >= 100)


// const sampleGroups = [
//    {
//       id: 1,
//       title: 'Football',
//       details: {
//          messageCount: 30,
//          public: true
//       }
//    },
//    {
//       id: 2,
//       title: 'Family',
//       details: {
//          messageCount: 1014,
//          public: false
//       }
//    }
// ]
// const getBigGroups = arrayOFObjects => {
//    arrayOFObjects.forEach(arrOfObj => {
//       const { messageCount, public } = arrOfObj.details
//       console.log(messageCount, public)
//    })
// }
// console.log(getBigGroups(sampleGroups))

// // const getFamilyGroup = groups => groups.find(group => group.title === "Family")


// const exportVerifiedUsers = users => {
//    //    let res = []
//    //    for (let i = 0; i < users.length; i++) {
//    //       if (users[i].isVerified) {
//    //         res.push(users[i].name)
//    //       }
//    //    }
//    //    return res.join(', ')
//    let res = []
//    const filtered = users.filter(user => user.isVerified)
//    console.log(filtered)
//    filtered.forEach(user => {
//       res.push(user.name)
//    })
//  return res.join(', ')
// }



// // Sample usage - do not modify
// const sampleUsers = [{
//     name: "Sam",
//     isVerified: true
// }, {
//     name: "Alex",
//     isVerified: false
// }, {
//     name: "Charlie",
//     isVerified: true
// }];
// console.log(exportVerifiedUsers(sampleUsers)); // "Sam, Charlie"


// const sumMessageCount = groups => {
//    let res = 0
//    groups.forEach(group => {
//       const { messageCount } = group.details
//       res += messageCount
//    })
//    return res
// }

// // Sample usage - do not modify
// const sampleGroups = [
//    {
//       id: 1,
//       title: 'Football',
//       details: {
//          messageCount: 30,
//          public: true
//       }
//    },
//    {
//       id: 2,
//       title: 'Family',
//       details: {
//          messageCount: 1014,
//          public: false
//       }
//    }
// ]
// console.log(sumMessageCount(sampleGroups)); // 1044

// const getCartTotal = products => {
//    let res = 0
//    products.forEach(product => {
//       const { price, quantity } = product
//       const myltiply = price * quantity
//       res += myltiply
//    })
//    return res
// }

// // Sample usage - do not modify
// const sampleProducts = [{
//     price: 10,
//     quantity: 3
// }, {
//     price: 5,
//     quantity: 4
// }]
// console.log(getCartTotal(sampleProducts)); // 50


// const getProduct = recordings => {
//    let res = []
//    recordings.forEach(record => {
//       res.push(record.value)
//    })
//    return res.reduce((acc,ind) => acc * ind)
// }
// // Sample usage - do not modify
// const sampleRecordings = [{
//     value: 2,
// }, {
//     value: 5
// }];
// console.log(getProduct(sampleRecordings)); // 10
