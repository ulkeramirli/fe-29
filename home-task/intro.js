
// const products = [
//     {
//       id: 1,
//       title: "iPhone 9",
//       description: "An apple mobile which is nothing like apple",
//       price: 549,
//       category: "smartphones",
//     },
//     {
//       id: 2,
//       title: "iPhone X",
//       description:
//         "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//       price: 899,
//       category: "smartphones",
//     },
//     {
//       id: 3,
//       title: "Samsung Universe 9",
//       description:
//         "Samsung's new variant which goes beyond Galaxy to the Universe",
//       price: 1249,
//       category: "smartphones",
//     },
//     {
//       id: 4,
//       title: "OPPOF19",
//       description: "OPPO F19 is officially announced on April 2021.",
//       price: 280,
//       category: "smartphones",
//     },
//     {
//       id: 5,
//       title: "Huawei P30",
//       description:
//         "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//       price: 499,
//       category: "smartphones",
//     },
//     {
//       id: 6,
//       title: "MacBook Pro",
//       description:
//         "MacBook Pro 2021 with mini-LED display may launch between September, November",
//       price: 1749,
//       category: "laptops",
//     },
//     {
//       id: 7,
//       title: "Samsung Galaxy Book",
//       description:
//         "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
//       price: 1499,
//       category: "laptops",
//     },
//     {
//       id: 8,
//       title: "Microsoft Surface Laptop 4",
//       description:
//         "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
//       price: 1499,
//       category: "laptops",
//     },
//     {
//       id: 9,
//       title: "Infinix INBOOK",
//       description:
//         "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
//       price: 1099,
//       category: "laptops",
//     },
//     {
//       id: 10,
//       title: "HP Pavilion 15-DK1056WM",
//       description:
//         "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
//       price: 1099,
//       category: "laptops",
//     },
//   ];

//   const totalPrice = products.reduce((total,num) =>{
    
//     return total + num.price
//   }, );

// console.log(totalPrice);

// ----------------------------------

// task 4

// var wishlist = [
//    { title: "Tesla Model S", price: 90000 },
//    { title: "4 carat diamond ring", price: 45000 },
//    { title: "Fancy hacky Sack", price: 5 },
//    { title: "Gold fidgit spinner", price: 2000 },
//    { title: "A second Tesla Model S", price: 90000 }
// ];

// const totalPrice = wishlist.reduce((previousValue,currentValue) =>{

//   return previousValue + currentValue.price
// },0);

// console.log(totalPrice);

// -----------------------------------

// task 5

// var arrays = [
//   ["1", "2", "3"],
//   [true],
//   [4, 5, 6]
// ];

// const arr = arrays.reduce((total, num) =>{
//   return total.concat(num);     concat - ne menayet vnutrennost arraya prosrto sozdayet noviy

// },[]);

// console.log(arr);

// ------------------------------------

// task 6

// let voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults (arr){
 
//       let  numYoungVotes =   0;
//       let  numYoungPeople =  0;
//       let  numMidVotesPeople =  0;
//       let  numMidsPeople = 0;
//       let  numOldVotesPeople = 0;
//       let  numOldsPeople =  0;

//  arr.forEach(person => {

//   if (person.age >= 18 && person.age <= 25) {
//       numYoungPeople++;
//       if (person.voted) {
//          numYoungVotes++
//       }
//   } else if (person.age >= 26 && person.age <= 35) {
//       numMidsPeople++;
//       if (person.voted) {
//         return  numMidVotesPeople++;
//       }
//   } else if (person.age >= 36 && person.age <= 55) {
//       numOldsPeople++;
//       if (person.voted) {
//          return numOldVotesPeople++;
//       }
//   }
  
// }, );
// return {
//   numYoungVotes,
//   numYoungPeople,
//   numMidVotesPeople,
//   numMidsPeople,
//   numOldVotesPeople,
//   numOldsPeople
// }
// }
// console.log(voterResults(voters));
  

