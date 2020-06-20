    //A light switch that can be either on or off
    //Data type: boolean 
    //example: const lightswitch = true;

    //A user's email address
    //Data type: String 
    //Example: const users Email address = ""

    //A spaceship with a hull,laser blasters,tractor beam, and warp drive
    //Data type: array 
    // const spaceship = ['hull', 'laser blasters', 'tractor beam', 'wrap drive'];

    //A list of student names from our class
    //Data type: array
    // const student names = ['Mike', 'David', 'John'];

    //A list of students names from our class each with a location
    // Data type": Object
    //const classmate names = [
   // {
   //    firstname: 'John',
   //    location: 'California'
   //  }
   //  {
   //    firstname: 'Mike',
   //    location: 'Newyork'
   //  }
   //  ];
   //
   //
   // A student names from out class each witha location and each with a list of favorite tv shows 
   // Data type: object 
   // 
   // const studentnames = {
   //    classmate1:[
   //        person1:{
   //            name: "john",
   //            FavTvShows: 'Everybody loves raymond'
   //        };
//           person2:{
   //            name:"Mike"'  
   //            FavTvShows: "Criminal minds",
   //       },
   //       Person3: {
   //           name: "David"
   //            FavTvShows: 'Batman'
   //       };
   //  }


// Part2
//   const Rainbow_colors = ['Red', 'Oranged', 'Yellow', 'Green', 'Blue', 'Indigo'];
//   console.log(Rainbow_colors[4]);
//   
//  Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town 
//  that you lived in currently, and your favorite datatype:
//   
//  const myName = {
//  hobby: "Powerlifiting",
//  FavFood: "Chinese food",
//  Town: "Polaris",
//  DataType: "Boolean"  
//  };
// console.log(myName.hobby);
// 
// Crazy Object
//1- console.log(crazyObject.taco.salsa[5]);
// 2-console.log(crazyObject.larry.quotes[0]);
//3- console.log(crazyObject.larry.characters[2].favourtieHobby);
//4- console.lgo(crazyObject.larry.nickname[1]);
//5- console.lgog(crazyObject.larry.characters[1].name);
//
//
// Change the value of "limbo" to "null"
// inception.reality.dreamLayer1.dreamLayer2.dreamlayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = Null;
// console.log(inception.reality.dreamLayer1.dreamLayer2.dreamlayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
//
//
//     
const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
//
//
// create a new array called the bondFilms array of objects above into your JS file. Use for loops and conditionals and methods 
//
// function arrOfTitles(thing){
//    const bondTitles = [];
    
 //   for(let i = 0; i <thing.length; i++){
 //       console.log(arr[i]);
        bondTitles.push(thing[i].title);
 //   }
 //   console.log(bondTitles);
//}
//  create a new array oddBonds of only the bond films released on odd-numbered years 
//
// function oddNumberedYears(arr){
// const oddBonds = [];
// for(let i = 0; i<arr.length; i++){
// if(arr[i].year %2 != 0){
// oddBonds.push(arr[i]);
// console.log(true);
// }
//}
//console.log(oddBonds);
//

// Determin the total cumulative gross of the bond franchiser and consloe log the result. 
// function grossCumulative(arr){
// for(let i = 0; i<arr.length; i++){
//  console.log(arr[i].gross.replace(/\$|./g,''));
//}
//}
// grossCumulative(bondFilms);