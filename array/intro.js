// task 1

// let classMates = ["ayan", "fidan", "sakina"];
// let classMates1 = classMates;

// classMates.push("leyla");

// classMates.shift();

// console.log(classMates);


// task 2

// let friendsName = ["fatime","laman","sefer"];

// friendsName[1] = "Classified";

// console.log(friendsName);


// task 3

// let numbers = [1, 2, 3, 4, 5];

// let newNumbers = numbers.slice();

// for (let i = 0; i < newNumbers.length; i++) {
//     newNumbers[i] = newNumbers[i]*2;
// }

// console.log("origional array", numbers);
// console.log("new array", newNumbers);


// task 4

// let episodes = ['New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];

// for (let i = 0; i < episodes.length; i++) {
//   console.log('Episode ' + (i + 4) + ': ' + episodes[i]);
// }

// task 5

// let input = prompt("pojaluysta, vvedite pyat chisel, razdelennix zapatimi:");

// let numbers = input.split(',').map(Number);

// let minNumber = Math.min(...numbers);

// console.log("naimenshee chislo:", minNumber);

// task 6

// let text = '32, 31, 34, 36, 31';

// let array = text.split(',');

// let newText = array.join(';');

// console.log(newText);



// push d0bavlaet nazat slovo 
// pop udalaet posledniy element 
// unshift dobavlayet vpered slovo 
// shift udalaet pervoye slovo



// const array = [
//     {
//       postId: 1,
//       id: 1,
//       name: "id labore ex et quam laborum",
//       email: "Eliseo@gardner.biz",
//       body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//     },
//     {
//       postId: 1,
//       id: 2,
//       name: "quo vero reiciendis velit similique earum",
//       email: "Jayne_Kuhic@sydney.com",
//       body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//     },
//     {
//       postId: 1,
//       id: 3,
//       name: "odio adipisci rerum aut animi",
//       email: "Nikita@garfield.biz",
//       body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
//     },
//     {
//       postId: 1,
//       id: 4,
//       name: "alias odio sit",
//       email: "Lew@alysha.tv",
//       body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
//     },
//     {
//       postId: 1,
//       id: 5,
//       name: "vero eaque aliquid doloribus et culpa",
//       email: "Hayden@althea.biz",
//       body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
//     },
//     {
//       postId: 2,
//       id: 6,
//       name: "et fugit eligendi deleniti quidem qui sint nihil autem",
//       email: "Presley.Mueller@myrl.com",
//       body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
//     },
//     {
//       postId: 2,
//       id: 7,
//       name: "repellat consequatur praesentium vel minus molestias voluptatum",
//       email: "Dallas@ole.me",
//       body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
//     },
//     {
//       postId: 2,
//       id: 8,
//       name: "et omnis dolorem",
//       email: "Mallory_Kunze@marie.org",
//       body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
//     },
//     {
//       postId: 2,
//       id: 9,
//       name: "provident id voluptas",
//       email: "Meghan_Littel@rene.us",
//       body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus",
//     },
//     {
//       postId: 2,
//       id: 10,
//       name: "eaque et deleniti atque tenetur ut quo ut",
//       email: "Carmen_Keeling@caroline.name",
//       body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
//     },
//   ];


//   const newArray = array.map(znacheniya =>
//     ({
//     name: znacheniya.name,
//     email: znacheniya.email

//     })
//   );
//   console.log(newArray); 

// let salary = [
//   [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//   [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//   [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//   [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
// ];

// task practika


//   function getAnnualSalary() {
//     let annualSalary = 0;
//     salary.forEach((array) => {
//       array.forEach((value) => {
//         annualSalary += value;
//       });
//     });
  
//     return `Anusual Salary: ${annualSalary}`;
//   }
  
//   console.log(getAnnualSalary());

// function getAnnualSalaryForEmployees(){
//   salary.map((value) => {
//     let 
//     return{firstEmployee : }
//   })


// }



//   const employees = [
//     "firstEmployee",
//     "secondEmployee",
//     "thirdEmployee",
//     "fourthEmployee",
//     "fifthEmployee",
//     "sixthEmployee",
//     "seventhEmployee",
//     "eighthEmployee",
//     "ninthEmployee",
//     "tenthEmployee"
//   ];