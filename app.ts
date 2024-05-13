//Excercise 2
//let personName:string = "ERIC";
//console.log(`hello${personName},would you like to learn some python today?`);

//let personname: string = "eric";

// Excersise 3
// Lowercase
//console.log("lowercase:", personName.toLowerCase()); 

// Uppercase
//console.log("uppercase:", personName.toUpperCase()); 

// Title case
//console.log("titlecase:", personName.replace(/\w\S*/g, (txt) => {
 // return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//})); 

//Excercise 4
//let quote: string = "A person who never made a mistake never tried anything new";
//let author: string = "Albert Einstein";

//console.log(`${quote} - once said${author}`);

//Excercise 5
//let qoute: string = "A person who never made a mistake never tried anything new";
//let famous_person= "Albert Einstein";
//let message=`${famous_person} once said, ${qoute}`;
//console.log(message);

//Excercise 6
//let name: string = `\n\t Babar Azam\t\n`;
//console.log(name);
//let stripped:string =name.trim();
//console.log(stripped)

//Excersise 7 & 8
//console.log(5+3);
//console.log(11-3);
//console.log(4 *2);
//console.log(16 /2);

//Excersise 9
//let favouriteNumber: number= 3;
//console.log(`My favouriteNumber is ${favouriteNumber}`);

//Excersise 10
//My name is saba
//Dated :15-04-2024
//this program will run simple code just like helloworld
//console.log('Helloworld is simple testing');

//Excersise 11
//let members: string[] = ['saba','mahnoor','zainab','saad','manahil'];
//for(let i=0; i<members.length; i++) {
 // console.log(members[i]);
//}
//Excercise 12
//let member: string[] = ['saba','mahnoor','zainab','saad','manahil'];
//let sms: string = 'Kl birthday he kis ki: ';
//for(let i=0; i<member.length; i++) {
  //console.log(sms + members[i]);
//}
//Excersise 13
//let transportation: string[] = ['bike','car','rikshaw','loading suzuki','bus'];
//for(let i=0; i<transportation.length; i++) {
  //console.log('I would like to own a:' + transportation[i]);
//}
//Excercise 14
  //let guest_list: string[] = ['sara','maheen','ashir','hammad','zoha','ibad'];
 // for(let i=0; i<guest_list.length; i++) {
   // console.log('Respect Sir/Madam: ' + guest_list[i] + ',\n We invited you
   // to dinner tomorrow.\n\n ThankYou');
  //}
 // export{guest_list}

  //Excercise 15
 // let guest_name: string[] = ['sara','maheen','ashir','hammad','zoha','ibad'];
//for(let i=0; i<guest_list.length; i++) {
 // console.log(`Respect Sir/Madam: ${guest_list[i]},\n We invited you to 
 //dinner tomorrow.\n\n ThankYou`);
//}

//let not_present: string = 'hammad';
//let new_guest: string = 'salman';{
//console.log('Respect Sir/Madam: ${guest_name[i]} ,\n We invited you to
// dinner tomorrow.\n\n ThankYou');
//}
 //console.log(`Mr.${not_present}will not coming tommorow dinner`);

//Excercie 16
//let new_person: string = 'salman';
//let guest_booking: string[] = ['Humaira', 'Ali', new_person, 'Aqsa'];

//console.log(`Respect Sir/Madam: ${guest_name[Number(new_person)]} ,\n We 
//invited you to dinner tomorrow.\n\n ThankYou`);

//let not_available: string = 'Humaira';
//console.log(`Mr.${not_available} will not be coming to tomorrow's dinner`);

//console.log('Good News! We found a bigger table so we are inviting 3 more guests.');

//guest_name.unshift('Parween');
//guest_name.splice(2, 0, 'Abid Shah');
//guest_name.push('Saima Ayub');

//for(let i=0; i<guest_name.length; i++) {
 // console.log(`Respect Sir/Madam: ${guest_name[i]} ,\n We invited you to dinner tomorrow.\n\n ThankYou`);
//}
//Excercise 17

//let guest_invitation: string[] = ['sara', 'maheen', 'ashir', 'hammad', 'zoha', 'ibad'];
//let not_come: string = 'hammad';
//let new_member: string = 'salman';

//console.log(`Mr.${not_come} will not be coming to tomorrow's dinner`);

//console.log('Good News! We found a bigger table so we are inviting 3 more guests.');
//guest_name.unshift('Parween');
//guest_name.splice(2, 0, 'Abid Shah');
//guest_name.push('Saima Ayub');

//for(let i=0; i<guest_name.length; i++) {
 // console.log(`Respect Sir/Madam: ${guest_name[i]} ,\n We invited
 // you to dinner tomorrow.\n\n ThankYou`);
//}

//console.log('\nSorry we can not arrange a big table, only two persons will be invited');
//while(guest_name.length > 2) {
  //let removed_guest = guest_name.pop();
  //console.log(`Sorry Mr.${removed_guest}, you are not invited for dinner.`);
//}

//for(let i=0; i<guest_name.length; i++) {
  //console.log(`Respect Sir/Madam: ${guest_name[i]} ,\n You are still invited.
  //\n\n ThankYou`);
//}

//guest_name.splice(0, 2);
//console.log(guest_name);

//Excercise 19
  //let guest_list: string[] = ['sara','maheen','ashir','hammad','zoha','ibad'];
//for(let i=0; i<guest_list.length; i++) {
 // console.log('Respect Sir/Madam: ' + guest_list[i] + ',\n We invited you to
 // dinner tomorrow.\n\n ThankYou');
//}
//export{guest_list}
//console.log('n\ PRINTING NUMBER OF GUEST INVITED');
//console.log(`we had finally invited ${guest_list.length} from excercse 14`);

//Excercise 20

//let languages :string[] = ['urdu','english','hindi','chinese','german']
//console.log("list of languages:");
//for(let top of languages){
  // console.log(top);
//}
//Excercise 21

//interface Item {
  //name: string;
  //price: number;
//}

// Create two objects
//const book: Item = {
  //name: 'ESSENTIAL TYPESCRIPT',
  //price: 550
//}

//const apple: Item = {
  //name: 'apple',
  //price: 250
//}

//console.log(`book name: ${book.name}, price: $${book.price}`);
//console.log(`apple name: ${apple.name}, price: $${apple.price}`);

//Excercise 22
//let array: (string |number) [] =['saba','manahil',5,8,3,4,'M.Saad Shah']
//console.log(array[6]);
//console.log(array[1]);
//console.log(array[0]);
//console.log(array[3]);

//Excercise 23
//let car = 'subaru';
//Test 1:Equality comparison(True)
//console.log("Is car == 'subaru'? I predict True.");
//console.log(car == 'subaru');//True

//Test 2: Strict equality comparison(True)
//console.log("Is car === 'subaru'? I predict True.");
//console.log(car === 'subaru');//True

//Test 3: Inequality comparison(False)
//console.log("Is car != 'subaru'? I predict False.");
//console.log(car != 'subaru');//False

//Test 4: Strict inequality comparison(False)
//console.log("Is car !== 'subaru'? I predict False.");
//console.log(car !== 'subaru');//False

//Test 5: Less than comparison(False)
//console.log("Is car < 'subaru'? I predict False.");
//console.log(car < 'subaru');//False (Iexicographic comparison)

//Test 6: Greater than comparison(False)
//console.log("Is car > 'subaru'? I predict False.");
//console.log(car > 'subaru');//False (Iexicographic comparison)

//Test 7: Less than or equal comparison(True)
//console.log("Is car <= 'subaru'? I predict True.");
//console.log(car <= 'subaru');//True

//Test 8: Greater than or equal comparison(True)
//console.log("Is car >= 'subaru'? I predict True.");
//console.log(car >= 'subaru');//True

//Test 9: Checking truthiness(True)
//console.log("Is car ? I predict True.");
//console.log(car);//True (non-empty string is truthy)

//Test 10: Checking falsiness(False)
//console.log("Is |car? I predict False.");
//console.log(car);//False (negation of a truthy value)

//Excercise 24
//let car = 'corolla';
//let age = 24;
//let numbers = [1, 2, 3, 4, 5];
//**String Tests**
//Test 1:Equality (True)
//console.log("Is car == 'corolla'? I predict True.");
//console.log(car == 'corolla'); // (case insensitive)
//Test 2:Strict equality (Fale)
//console.log("Is car === 'corolla'? I predict False.");
//console.log(car === 'corolla'); // (case-sensitive)
//Test 3: Inequality (True)
//console.log("Is car != 'corolla'? I predict True.");
//console.log(car != 'corolla');
//Test 4: Inequality (False)
//console.log("Is car !== 'corolla'? I predict False.");
//console.log(car !== 'corolla'); //(case-sensitive)
//** Lower Function Tests**
//Test 5: Lowercase conversion(True)
//console.log("Is car.toLowerCase() =='corolla'?I pridict True.");
//console.log(car.toLowerCase() == 'corolla'); //(converted to lowercase)
//Test 6: Lowercase cnversion(False)
//console.log("Is car === car.toLowerCase()? I pridict False.");
//console.log(car === car.toLowerCase()); //(original value remain uppercase)
//** Numerical Tests**
//Test 7:Equality(True)
//console.log("Is age == 24? I pridict True.");
//console.log(age == 24);
//Test 8:Inequality(False)
//console.log("Is age != 30? I pridict False.");
//console.log(age != 30);
//Test 9:Greater than (False)
//console.log("Is age > 30? I pridict False.");
//console.log(age > 30);
//Test 10:Less than or equal (True)
//console.log("Is age <= 24? I pridict True.");
//console.log(age <= 24);
//** Logical Operators**
//Test 11:AND (True)
//console.log("Is age > 20 && age <30? I pridict True.");
//console.log(age > 20 && age > 30);
//Test 12:OR(False)
//console.log("Is age > 30 || age <18 ? I pridict False.");
//console.log(age > 24 || age < 18);
//** Array Tests**
//Test 13:In Array(True)
//console.log("Is 3 in a numbers?I pridict True.");
//console.log(3 in numbers);

//Test 14:Not in Array(False)
//console.log("Is 6 not in numbers?I pridict False.");
//console.log(6 in numbers);

//Excercise 25

//Create a variable called alien_color
//let alien_color: string="green";
//Write an if statement to test whether the alien’s color is green. If it is,
// print a message that the player just earned 5 points.
//if(alien_color =="green"){
  //console.log("the player just earned 5 points.")
//}
//Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
//alien_color="red";
//if(alien_color =="green"){
  //console.log("the player just earned 5 points.")
//}

//Excercise 26
//Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//let alien_color: string="green";
//If the alien’s color is green, print a statement that the player just earned
// 5 points for shooting the alien.
//if(alien_color =="green"){
 // console.log("the player just earned 5 points for shooting the aliens.")
//}
//else{
  //console.log("the player just earned 10 points.")
//}
//alien_color="red";
//if(alien_color =="green"){
  //console.log("the player just earned 5 points for shooting the aliens.")
//}

//Excercise 27
//let alien_color: string="green";
//If the alien is green, print a message that the player earned 5 points.
//if(alien_color =="green"){
  //console.log("the player  earned 5 points for shooting the aliens.")
//}
// If the alien is yellow, print a message that the player earned 10 points.
//if(alien_color =="yellow"){
  //console.log("the player just earned 10 points for shooting the aliens.")
//}
// If the alien is red, print a message that the player earned 15 points.
//if(alien_color =="red"){
  //console.log("the player just earned 15 points for shooting the aliens.")
//}
//else{
  //console.log("Please select right color.")
//}
//Write three versions of this program, making sure each message is printed
// for the appropriate color alien.
//version 2
 //alien_color="red";
 //if(alien_color =="green"){
  //console.log("the player  earned 5 points for shooting the aliens.")
//}
//if(alien_color =="yellow"){
  //console.log("the player just earned 10 points for shooting the aliens.")
//}
//if(alien_color =="red"){
 // console.log("the player just earned 15 points for shooting the aliens.")
//}
//else{
  //console.log("Please select right color.")
//}
//version 3
//alien_color="yellow";
 //if(alien_color =="green"){
 // console.log("the player  earned 5 points for shooting the aliens.")
//}
//if(alien_color =="yellow"){
  //console.log("the player just earned 10 points for shooting the aliens.")
//}
//if(alien_color =="red"){
  //console.log("the player just earned 15 points for shooting the aliens.")
//}
//else{
  //console.log("Please select right color.")
//}

//Excercise 28
//Write an if-else chain that determines a person’s stage of life. Set a value
// for the variable age, and then:
//If the person is less than 2 years old, print a message that the person is a baby.
//let age: number =25;
//if(age<2){
  //console.log("person is a baby.")
//}

//If the person is at least 2 years old but less than 4, print a message that 
//the person is a toddler.
//else if(age >=2 && age <4){
  //console.log("person is a toddler.")
//}

//If the person is at least 4 years old but less than 13, print a message that the
// person is a kid.
//else if(age >=4 && age <13){
  //console.log("person is a kid.")
//}

//If the person is at least 13 years old but less than 20, print a message
// that the person is a teenager.
//else if(age >=13 && age <20){
  //console.log("person is a teenager.")
//}
//If the person is at least 20 years old but less than 65, print a message
 //that the person is an adult.
 //else if(age >=20 && age <65){
  //console.log("person is a adult.")
//}
//If the person is age 65 or older, print a message that the person is an elder.
//else {
  //console.log("person is an elder.")
//}

//Excercise 29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series
// of independent if statements that check for certain fruits in your array.
//Make a array of your three favorite fruits and call it favorite_fruits.//Write five if statements. Each should check whether a certain kind of fruit
// is in your array. If the fruit is in your array, the if block should print
// a statement, such as You really like bananas!


//let favorite_fruits : string [] = ['apple','mango','strawberry']

//if (favorite_fruits.includes('strawberry')){
  //console.log("I really like strawberry!")
//}
//if (favorite_fruits.includes('apple')){
  //console.log("I really like apple!")
//}
//if (favorite_fruits.includes('mango')){
  //console.log("I really like mango!")
//}

//if (favorite_fruits.includes('orange')){
  //console.log("I really like orange!")
//}
//if (favorite_fruits.includes('banana')){
  //console.log("I really like bananas!")
//}

//Excercise 30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// Imagine you are writing code that will print a greeting to each user after
// they log in to a website. Loop through the array, and print a
// greeting to each user:
//If the username is 'admin', print a special greeting, such as 
//Hello admin, would you like to see a status report?
//Otherwise, print a generic greeting, such as Hello Eric,
 //thank you for logging in again.

//let users: string [] = ['saba','ibad','maheen','saad','admin']

//for(let user of users){
  //if(user ==="admin"){
    //console.log("Hello admin, would you like to see a status report?")
  //}
//else{
  //console.log(`Hello ${user},thank you for logging in again.`)
//}
//}

//Excersice 31
//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//If the list is empty, print the message We need to find some users!.
//let users: string [] = ['saba','ibad','maheen','saad','admin']
//if(users.length === 0){
  //console.log("We need to find some users!")
//}
  //Remove all of the usernames from your array, and make sure the correct
// message is printed.
//else{
  //users = [];
    //console.log("All users have been removed" + users.length )
  //}

//Excercise 32
//let current_users: string[] = ['laiba','faizan','admin','salman','manahil'];
//let new_users: string[] = ['iqra','amir','user8','admin','user3'];
//new_users.forEach((newUser) => {
  //if(
    //current_users.some(
      //(currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    //)
  //){
//     console.log(`${newUser} will need to add a new username.`)
//   }else {
//     console.log(`${newUser} is available.`);
//   }
// });

//Excercise 33
// let myNumber = [1,2,3,4,5,6,7,8,9]

 //for loop
// for(let i = 0; i < myNumber.length; i++){
//now we use condition
// if(myNumber[i] == 1){
//   console.log(`${myNumber[i]}st`);
// }
// else if(myNumber[i] == 2){
//   console.log(`${myNumber[i]}nd`);
// }
// else if(myNumber[i] == 3){
//   console.log(`${myNumber[i]}rd`);
// }
// else if(myNumber[i] >= 4 && myNumber[i] <= 9){
//   console.log(`${myNumber[i]}th`);
// }

// }
// Excercise 34
// let myPizza = ["tikka pizza","cheezy pizza","vegeterian pizza"]
 //print only names of pizza
// for(let i = 0; i < myPizza.length; i++) {
//   console.log(myPizza[i]);
// }
//printing names sentencs/message
// for(let i = 0; i < myPizza.length; i++) {
//   console.log(`I like to eat ${myPizza[i]}`);
// }

// console.log(`\nI really like to eat Pizzas.Pizza comes in a veriety of flavours and 
//  allowing individuals to customize it to their liking`);

//Excercise 35
// let animals: string [] = ["sheep","cow","goat"];

// animals.forEach(animal => {
//   console.log(`A ${animal} would make a good pet`);
// });
// console.log("Any of these animals would make a great pet!");

//Excercise 36
// function make_shirt(size: string, message: string) {
//   console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }

// make_shirt("medium","code of life");

//Excercise 37
// function make_shirt(size: string = "large", message: string = "I love typescript." ) {
//    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
//    }
  
// make_shirt();
// make_shirt("medium");
// make_shirt("small","Dive into coding");

//Excercise 38
// function describe_city(nameOfCity: string, country: string ="India" ) {
//      return`${country} is in ${nameOfCity}`;
//      };
 //3 cities
//    let city1 = describe_city("India","Delhi");
//    let city2 = describe_city("Pakistan","Islamabad");
//    let city3 = describe_city("China","Beijing");
//    let city4 = describe_city("Dubai","U.A.E");

//   console.log(city1);
//   console.log(city2);
//   console.log(city3);
//   console.log(city4);

//Excercise 39


// function city_country(city: string, country: string ) {
//    console.log(`"${city}, ${country}"`);
//        };
//    city_country("Karachi","Pakistan");

//    let mycities = city_country("Karchi","Pakistan");
//    console.log(mycities);

//    console.log(city_country("Dubai","UAE"));
//    console.log(city_country("Colombo","Srilanka"));
//    console.log(city_country("Delhi","India"));

//Excercise 40
//    function myAlbum (artistname: string, albumTitle: string){
//     return {artistname,albumTitle}
// }

// let album1 = myAlbum("ALI zafar", "PSL song");
// let album2 = myAlbum ("Azaan sami khan", "Ishq laa song");
// let album3 = myAlbum ("Ahmed Jahanzeb", "Ishq murshid song");

// console.log(album1);
// console.log(album2);
// console.log(album3);

 //number of tracks
// function myAlbum2 (artistname: string, albumTitle: string, numberOfTracks?: number){
//   return {artistname,albumTitle,numberOfTracks}
// }
// let album4 = myAlbum2("rahat fateh", "kalam",50);
// let album5 = myAlbum2 ("Atif aslam", "sufiyana kalam",10);
// let album6 = myAlbum2 ("saba", "typescript coding ");

// console.log(album4);
// console.log(album5);
// console.log(album6);

//Exercise 41 

// let magicians: string[] = ["brad", "rameez", "ainak wala"];

// function show_magician(magicians: string[]){
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }

//Excercise 42
  
// let magicians: string[] = ["brad", "rameez", "ainak wala"];

// function make_great(magicianArray: string[]): void {
//   for (let i = 0; i < magicianArray.length; i++) {
//     magicianArray[i] = 'the great ' + magicianArray[i];
//   }
// }

// function show_magician(magicians: string[]): void {
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }
// make_great(magicians);

// show_magician(magicians);

//Excercise 43
// let magicians: string[] = ["brad", "rameez", "ainak wala"];

// function copyArray(arr:string[]){
//   return[...arr]
// }
//  function make_great(magicianArray: string[]) {
//    for (let i = 0; i < magicianArray.length; i++) {
//      magicianArray[i] = 'the great ' + magicianArray[i];
//    }
//  }

//  function show_magician(magicians: string[]) {
//   magicians.forEach((magician) => {
//     console.log(magician);
//    });
// }


// const copyMagicianArray = copyArray(magicians)

//  make_great(copyMagicianArray);

//  console.log('This is my original array:');
 
//  show_magician(magicians);

//  console.log('This is my modified copy of the array:');
//  show_magician(copyMagicianArray);

//Excercise 44
// function makeSandwich (item:string[]){
//   console.log('Making your sandwich with:')

//   item.forEach(element => console.log("- " + element)); 

//     console.log('Enjoy your sandwich !');
//   }

//   makeSandwich(['cheeze','lattice','chicken']);

//   makeSandwich(['ketchup','lattice']);
  
//   makeSandwich(['cheeze','mayonise','chicken']);
  
//Excercise 45

// function exampleFunc (...param: string[]){

//   console.log(param)

// }

// exampleFunc('Taha','Ahmed','Hammad','Alive','Student');

//  function storeCarInfo(manufacturer: string,modelName: string,...extraOption: { [key: string]: any} []):
//  object{

//    const carInfo ={
//     manufacturer,
//      modelName
//      ...Object.assign({}, ...extraOption)
//    }
//  return carInfo
// };

// let answers =storeCarInfo('Honda','Civic',{color:'black'},{features:['navigation','Power window']})
// console.log(answers);

// let obj1 = {num1:1, num2:2}

// let obj2 = {num3:1, num2:5}

// let obj3 = Object.assign(obj1, obj2)

// console.log(obj3)
