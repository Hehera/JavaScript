/* ---------------
 Масиви об'єктів
 ---------------*/
//Перетворення масивів об'єктів
 /*   1.Використання map
    const names = ["sam", "Alex"];
    const upperNames = names.map(name => name.toUpperCase());
    console.log(upperNames); // ["SAM", "ALEX"] */

    //1.1Додаткові випадки використання  map + join 
    // const csv = tweets.map(tweet => tweet.message).join(", ");
 /*
/*   2.Використання filter

    tweets.filter(tweet => {
    console.log(tweet); // visualize tweet
    return tweet.stats.likes > 30;
    })
    Переписання їх за допомогою функцій зі стрілками з неявним поверненням
    tweets.filter(tweet => tweet.stats.likes > 30);     
 */
/*
/*   3.Використання find 
    const searchId = 41241;
    const tweet = tweets.find(tweet => tweet.id === searchId);
    console.log(tweet)
*/
/*   4.Використання Some
    tweets.some(tweet => tweet.stats.likes > 30);//true
    tweets.some(tweet => tweet.stats.likes > 100);//false
*/
/*   5.Використання every
    tweets.every(tweet => tweet.status.likes > 10); 
    tweets.every(tweet => tweet.status.likes > 30);
/* 
/*   6.Використання reduce
    
    const grades = [10, 15, 5];
    const sum = grades.reduce((total, current) => { 
    return total + current
    }, 0);
*/

//Деструктуризація об'єкта
 /*Доступ до вкладених властивостей за допомогою деструктуризації об’єктів
    tweets.forEach(tweet => {
    const {likes, retweets} = tweet.stats;
    console.log(likes, retweets);
    });
 */ 
//Незміність
 /* Порівняння об'єктів і масивів
 Потрійне рівне === порівнює посилання, а не значення. Щоб порівняти за значеннями, тоді юзаєм глибоке порівняння.
 //Глибоке порівняння - це метод порівняння об'єктів або масивів за їхнім вмістом, а не за посиланнями на них.
 [] або new Array()
 {} або new Object()

 new Array() === new Array(); //false,тому що створює новий екземпляр масиву.
 new Object() === new Object(); //false,тому що створює новий екземпляр об'єкта.
  */
 /* Посилання на об'єкт(за допомогою присвоєння об'єкта)
     
   let firstArr = []
   let secondArr = firstArr;

   firstArr.push(10)

   console.log(secondArr)//10 тому ми не копіюємо firstArray, а лише створюємо посилання на нього.
   в результаті всеодно змінює об'єкт.
  */

 //Операції з незмінними масивами
  /* Ми не можете зробити масив або об’єкт незмінними,але можем створити копію (...),це називається неглибоким копіюванням.
  
    Створення копії

    const grades = [10, 20];
    const gradesCopy = [...grades];

    Більшість методів масиву, з якими ви знайомі, змінять вихідний масив.
    push,sort змінні.
    filter,map,reduce - незмінні
   */
 /* Незмінне додавання масиву
    const grades = [10, 20];
    const updated = [...grades, 15];
    console.log(updated); // [10, 20, 15] 
    onsole.log(grades); // [10, 20] (unchanged)
  */
 /* Оновлення/видалення незмінного масиву

    const grades = [10, 20, 15];
    const updated = grades.filter(grade => grade !== 20);
    console.log(updated); // [10, 15]
    console.log(grades); // [10, 20, 15] (unchanged)

    Операції з незмінними об’єктами

    const cloned = {...user};
    console.log(cloned);

  */    
//Операції з незмінними Об'єктами 
 /*Незмінне оновлення об'єкта
        const user = {
            id: 1,
            age: 23
        };
        const clonedUser = {
            ...user,
            age: user.age + 1
        };
        console.log(clonedUser); 
        console.log(user);
   */
 /*Незмінне видалення об'єкта
        const book = {
        id: 1,
        title: "Harry Potter",
        year: 2017,
        rating: 4.5
    }
    const {year, ...rest} = book;
    console.log(rest); // { id: 1, title: "Harry Potter", rating: 4.5}
    console.log(book); // {id: 1, title: "Harry Potter", year: 2017, rating: 4.5} (unchanged)
   */


