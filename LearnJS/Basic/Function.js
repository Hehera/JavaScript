/* ----------
 Замикання 
 ---------- */
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
// --------------------------------------------------------



/*------
Класи
-------*/
 /*Класи дозволяють краще організувати код, згрупувавши код (змінні та функції) в один клас.
  Класи можна перевикористовувати
  Клас — це фабрика , яка може створювати екземпляри(Кожен екземпляр, створений з класу, є унікальним.)
  Клас є шаблоном для створення об'єктів, тоді як екземпляр - це конкретний об'єкт, створений за допомогою цього класу. 
 */
/*Визначення класу,створення екземпляру класу
 
    // Приклад 1
    class Person {//визначення класу
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    }
   // Створення екземпляру класу
    const person1 = new Person('John', 30);
    Виведення даних екземпляру
    console.log(person1.name); // Виведе "John"
    console.log(person1.age);  // Виведе 30

    /* const person1 = new Person('John', 30); При виклику змінних конструктора name, age не будуть доступні в інших методах цього класу,тому треба їх захопити і помістити у змінну */

     // Приклад 2
     /*class Person {
        constructor(firstName, lastName) {
            // захопити параметр firstName у змінну екземпляра this.firstName
            this.firstName = firstName;
            this.lastName = lastName;
        }
        }
        const person = new Person("Sam", "Green");
  */

        /*Змінні екземпляра 
        Змінна екземпляра — це змінна, яка належить до певного екземпляра класу.
        Змінна екземпляра доступна в будь-якому методі екземпляра.
        
*/
/*Функції-конструктори, оператор "new"
 // Звичайний синтаксис {...} дозволяє створити тільки один об’єкт. Проте часто нам  потрібно створити багато однотипних об’єктів,вористовуємо функції констуктори.

 // Це можна зробити за допомогою функції-конструктора та оператора "new".

 1.Ім’я функції-конструктора повинно починатися з великої літери.
 2.Функції-конструктори повинні виконуватися лише з оператором "new".
 this - силається на новий об'єкт.

        Приклад 1
        function User(name) {
        this.name = name;
        this.isAdmin = false;
        }

        let user = new User("Джек");

        alert(user.name); // Джек
        alert(user.isAdmin); // false

  Коли функція виконується з new,створюється новий порожній об’єкт, якому присвоюється this.

  Приклад 2
 function User(name) {
    // this = {};  (неявно)
  
    // додає властивості до this
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (неявно)
   }
   User()

   let user = new User('Jack') цей запис дає те саме,якщо написати:

        let user = {
        name: "Джек",
        isAdmin: false
        };


    технічно будь-яка функція (окрім стрілкових функцій, оскільки вони не мають власного this) може бути використана як конструктор.
*/ 
/*Методи екземплярів
     Методи екземпляра — це функції, які можна викликати на екземплярі класу.   
    /*Приклад 1:
    class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() { метод екземпляра
        return `${this.firstName} ${this.lastName}`;
    }
    }
    const person = new Person("Sam", "Green");
    console.log(person.getFullName()); // "Sam Green"
*/
/*ООП - об'єктно орієнтовне програмування
    Об’єктно-орієнтоване програмування (ООП) – це коли ви описуєте реальний світ за допомогою класів (які потім можете створювати екземпляри, які створюють об’єкти).
    Приклад 1 Використання ООП
    class User {
    constructor(firstName, lastName, prefix, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
        this.age = age;
    }

    getFullName() {
        return `${this.prefix}. ${this.firstName} ${this.lastName}`;
    }

    canVote() {
        return this.age >= 18;
    }
 }

    // Sample usage
    const user1 = new User("Sam", "Doe", "Mrs", 20);
    console.log(user1.getFullName()); // "Mrs. Sam Doe"
    console.log(user1.canVote()); // true
    const user2 = new User("Alex", "Green", "Mr", 17);
    console.log(user2.getFullName()); // "Mr. Alex Green"
    console.log(user2.canVote()); // false

    Приклад 2 Використання без класів
    const getFullName = (firstName, lastName, prefix) => {
    return `${prefix}. ${firstName} ${lastName}`;
 }

 const canVote = (age) => {
     return age >= 18;
  } 

 // Sample usage
 console.log(getFullName("Sam", "Doe", "Mrs")); // "Mrs. Sam Doe"
 console.log(canVote(20)); // true
 console.log(getFullName("Alex", "Green", "Mr")); // "Mr. Alex Green"
 console.log(canVote(17)); // false
*/
/*-----------------------------
 this Контекст виклику функції
------------------------------*/
// this у використані строгого і не в строгому режимі дещо відрізняється
/*this в методах об'єкта
    const person = {
    name: 'john',
    age: 25,
    sayHello: function () {
        console.log(`${this.name}`)
    }
    }
    person.sayHello()

    У методі sayHello ми використовуємо «this» для посилання на об'єкт person і виведення значення властивості name.
*/
/*this в класах

 Частим використанням «this» є контекст функцій-конструкторів.
 Функції-конструктори використовуються для створення нових об'єктів на основі певного  шаблону. У такому контексті «this» вказує на об'єкт, який створюється.
 
 function Person(name, age) {
    this.name = name
    this.age = age
 }
 const john  = new Person('John',25)
 console.log(john)
 У цьому прикладі функція-конструктор Person має два параметри — name і age. Коли ми  створюємо новий об'єкт за допомогою оператора new, «this» вказує на цей об'єкт. Тому  властивості name і age присвоюються саме цьому об'єкту.
*/
/*this в функціях

 //Використання «this» може бути не таким очевидним, коли його використовують в звичайних  функціях або зв'язаних методах. У звичайних функціях «this» зазвичай вказує на глобальний  об'єкт window (у браузері) або глобальний об'єкт global (у середовищі Node.js).
    //Приклад з посиланням на глобальний об'єкт window
    function greet() {
        console.log(`Hello,i'm ${this}`)
    }
    greet()//Hello,i'm [object Window] 

   //Контекст виклику — це об'єкт, на якому викликається метод. Для правильного використання «this» у зв'язаних методах можна використовувати методи bind, call або apply.
*/
/*Використання методу bind,call,apply
 call використовується для виклику функції-конструктора з вказаним значенням this та передачею аргументів.

 1)bind(), який використовується для прив'язки значення ключового слова це незалежно від того, як викликана функція.
 2) call використовується для виклику функції-конструктора з вказаним значенням this та передачею аргументів.
 3)apply() схожий на call, але він приймає масив аргументів замість окремих аргументів.
 Використовується так: func.apply(context, [arg1, arg2, ...]);
    
   //Використання call
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    const john = {};

    Person.call(john, "John", 25);
    console.log(john.name); // Виведе "John"
    console.log(john.age); // Виведе 25
        //Пояснення
   Person.call(john, "John", 25) 
  Person(функція-конструктор).call(метод)(john(об'єкт новий в якості першого аргумента), "John", 25(передаєм аргументи функції-конструктора));

        //Приклад 2 
    const person = {
        name: 'John',
        age: 25
     }
        function sayHello() {
        console.log(`Привіт,я ${this.name}`)
        }
        sayHello.call(person)//Привіт,я John

        У цьому прикладі ми використовуємо метод call для прив'язки до контексту функції sayHello об'єкта person. 
*/
/*this в стрілковій функції
 //стрілкові функції не мають власного значення this і беруть його із зовнішнього контексту,тобто в зовнішній області видимості, де вона була оголошена.

 Вони не можуть бути використані як функції-конструктори. Тому не можна створити екземпляр об'єкта за допомогою стрілкової функції.

 Вони не мають доступу до ключових слів super та arguments.

 Вони зручні для використання в контекстах, де потрібно мати доступ до значень «this» з зовнішнього контексту.


    // Приклад 
    function outerFunction() {
        this.name = 'John'


        const innerArrowFunction = () => {
            console.log(this.name)//"John", беручи значення з контексту зовнішньої функції
        }

        innerArrowFunction()
    }

    outerFunction()
*/
/*this анонімних функціях
    Вони можуть мати власне значення «this», яке визначається контекстом виклику. Значення «this» в анонімній функції залежить від того, як саме вона була викликана.

    Вони можуть бути використані як функції-конструктори для створення нових об'єктів.

    Вони мають доступ до ключових слів super та arguments, які дозволяють отримувати доступ до батьківських об'єктів та аргументів функції відповідно.

    Вони зручні для використання в контекстах, де потрібно динамічно прив'язати значення «this» до об'єкту, який викликав функцію.

        // Приклад 
    const onj = {
        name:'John',
        sayHello:function() {
            console.log(`Hello,i'm ${this.name}`)
        }

        (function(){
            console.log(`${this.name}`);
        })()undefined
    }

    obj.sayHello()

    якщо this присвоїти у змінну не буде  const self = this; не буде undefined

    // У цьому прикладі метод sayHello має доступ до this.name, оскільки він був викликаний на об'єкті obj. Однак анонімна функція всередині методу sayHello не має власного значення «this».
*/
/*Як визначати «this» в JavaScript?
 Отже, для визначення «this» JavaScript можна виділити таку схему:
    Викликається глобальна функція?
 Так: «this» посилається на глобальний об'єкт (наприклад, window у браузері або global в  Node.js).
    Викликається функція-метод об'єкта?
 Так: «this» посилається на об'єкт, на якому була викликана функція.
    Викликається функція-конструктор за допомогою new?
 Так: «this» посилається на новостворений функцією-конструктором об'єкт.
    Використовується метод call, apply або bind?
 Так: «this» встановлюється явно через перший аргумент методу call, apply або bind.
    Використовується стрілкова функція?
 Так: «this» береться з батьківського контексту, де вона була створена, і не може бути  змінене.
    Використовується анонімна функція?
 Залежить від контексту, в якому анонімна функція була викликана. Це може бути глобальний  об'єкт, об'єкт, на якому була викликана функція, або може бути власне значення «this»,  встановлене явно.
*/ 







