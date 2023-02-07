// console.log("Hello CodeSandbox");
// console.log("hello");
let a = { a: 6 };
let b = { a: 7 };
// // console.log(a + b);
// function av(a, b) {
//   return a + b;
// }
// console.log(av(a, b));

// apply method .
let num = [90, 100];
console.log(Math.max.apply(null, num)); //100
console.log(Math.min.apply(null, num)); //90;

// console.log("Hello CodeSandbox");

// " this " keyword
/*
let laptop1 = {
    cpu :"i5",
    ram : 8 ,
    brand : "dell",
    getConfig : function(){
        let storage = 100;
        console.log(storage);

        // console.log(cpu);
        //error :cpu is not defined.

        // console.log(laptop1.cpu);//i9
        console.log(this.cpu);//i9;
    }
}
// getConfig(); // this will not work cuz its a property of object, or call this a method;
laptop1.getConfig();
getConfig is a method :A method is a function which is a property of an object.
*/

let laptop2 = {
  cpu: "i8",
  ram: 8,
  brand: "hp",
  getConfig: function () {
    console.log(this.cpu);
  },
};
laptop2.getConfig();

//now lets compare laptop1 with laptop2
//creating a compare function ;
/*
  let compare = (laptop1,laptop2) => {
      if(laptop1.cpu > laptop2.cpu)
          console.log("laptop1")
      else console.log("laptop2");
  }
  compare(laptop1,laptop2);//laptop2;
  */

// now creating a property compare inside the Object;
let laptop1 = {
  cpu: "i5",
  ram: 8,
  brand: "dell",

  compare: function (other) {
    //other is just a parameter not a keyword like this.  ;
    if (this.cpu > other.cpu) console.log(this);
    else console.log(other);
  },

  getConfig: function () {
    console.log(this.cpu);
  },
};

//calling the function ,as it is property of laptop1;
laptop1.compare(laptop2); //laptop2{};

// ---------------------classes --------------------------------------------

//first learn constructor function

//this is a constructor function;
function Alien(name, tech) {
  this.name = name;
  this.tech = tech;
  // return this ;isko likhne ki jarurat nhi h cuz ye ek constructor function h ,default h ;
}

let alien1 = new Alien("hauser", "pegasus");
//the " new " keyword create new objects every time ;
let alien2 = new Alien("show", "java");
let alien3 = new Alien("dakota", "rocky");
let alien4 = Alien("akota", "rocky");

console.log(alien1);
//Alien { name: 'hauser', tech: 'pegasus' }
console.log(alien2);
//Alien { name: 'show', tech: 'java' }
console.log(alien3);
//Alien { name: 'dakota', tech: 'rocky' }
console.log(alien4); // undefined

//see everytime a new object from same function ; thus it is called a constructor function;
