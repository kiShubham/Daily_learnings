// console.log("Hello CodeSandbox");
// date = 7 frb 2023;

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

/**
 1.  A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword.
 
 2. The purpose of a constructor is to create a new object and set values for any existing object properties.
 
 3. The new object is then returned as the return value of the constructor. 

 */

//this is a constructor function;
/*

function Alien(name, tech) {
  this.name = name;
  this.tech = tech;
  // return this //here this is representing object;;return line likhne ki jarurat nhi h cuz ye ek constructor function h ,default h ;

  //what if we need to write a method;
  this.workoholic = function(){
    console.log(`hi this is ${this.name}`);
  } 
}

let alien1 = new Alien("hauser", "pegasus");
//the " new " keyword create new objects every time ;
let alien2 = new Alien("wanda", "java");
let alien3 = new Alien("dakota", "javascript");
let alien4 = Alien("akota", "c++");

console.log(alien1);
//Alien { name: 'hauser', tech: 'pegasus' }
console.log(alien2);
//Alien { name: 'wanda', tech: 'java' }
console.log(alien3);
//Alien { name: 'dakota', tech: 'javascript' }
console.log(alien4); // undefined

//see everytime a new object from same function ; thus it is called a constructor function;
//now we can also modify the value of property inside these obj;

alien1.tech = "blockchain";
console.log(alien1); //Alien { name: 'hauser', tech: 'blockchai0n' }
 
//calling method; of alien1 obj;
alien1.workoholic();// hi this is hauser
*/

//now ------------------classes-----------------------------------------------------
//pascal case -capital letter

/*
class Product {
  constructor(itemName, price, discount, code) {
    this.itemName = itemName;
    this.price = price;
    this.discount = discount;
    this.code = code;
  }
}

let pencil = new Product("apsara", 10, 2, "as20");


console.log(typeof pencil); // object ;
console.log(pencil); // Product { itemName: 'apsara', price: 10, discount: 2, code: 'as20' }

*/
/*

const product1 = class {
  // koi naam nhi likha h still product1.name = product1 hoga

  constructor(itemName, price, discount, code) {
    this.itemName = itemName;
    this.price = price;
    this.discount = discount;
    this.code = code;
  }
};
console.log(product1.name); //product1 ;

const product2 = class PP {
  // yha pe name likha h ,so product2.name = PP ;

  constructor(itemName, price, discount, code) {
    this.itemName = itemName;
    this.price = price;
    this.discount = discount;
    this.code = code;
  }
};
console.log(product2.name);
*/

//------------getter and setter ------------------

//use inside objects and classes as method;
// getter - use to get any parrticular property ,
//setter - use to modify the existing property iniside the object,classes;

//***understand that getter and settter are not functions as we call getter we dont use any parenthesis -> ()***

/*

const product1 = class {
  constructor(itemName, price, discount, code) {
    this.itemName = itemName;
    this.price = price;
    this.discount = discount;
    this.code = code;
  }

  get getDiscountValue(){
    return this.discount; //here we will get the latest value of the discount;
  }  
  set setDiscountValue(value){
    this.discount = value; // here we are changing or modifying the discount vlaue.,hence no need to return anything;
  }

  //method -> method is a function ,but getter is not ;
  discountValue(){
    return this.discount*this.price;
    //discount canbe changed by setter ,price here is constant;
  }

};

let apsara = new product1("apsara", 10, 2, "as20");
console.log(apsara);//product1 { itemName: 'apsara', price: 10, discount: 2, code: 'as20' }
console.log(apsara.getDiscountValue); // 2 ;
console.log( apsara.discountValue() );//20;
//***understand that getter and settter are not functions as we call getter we dont use any parenthesis -> ()***

apsara.setDiscountValue = 5 ;
console.log(apsara.getDiscountValue);// 5; now the latest discount is 5 ;
console.log(apsara.setDiscountValue);//undefined;kyuki return nhi kar rhe na kuch bhi ;

console.log( apsara.discountValue() );//50;

*/

//---------- how to extend a class -------------------------*********

//  one of the main use of classes or says oops object oriented programming is that we can extend class , this extend is not a feature of function ,function cannot be extended;

class Product {
  constructor(itemName) {
    this.itemName = itemName;
  }
  getItemName() {
    return this.itemName + " is a product";
  }
}

//now how to extend class
//what is extend means

//so extending means we will make a new class that will be a subclass/category/children of the Product class;
// like in furniture is a subclass of the product ,then utensils can be another class ,
// then electronics and so on , hence it is meant as a subclass/children of parent class.

class Furniture extends Product {
  constructor(itemName) {
    console.log("passed by furniture (super Fn)" + itemName);
    super(itemName);
  }

  //method
  getItemName() {
    return this.itemName + " is a Furniture";
  }
}

let pencil = new Product("pencil");
// console.log(pencil.getItemName());
//pencil is a product

let chair = new Furniture("chair");
console.log(chair.getItemName());
// passed by furniture (super Fn)chair
// chair is a Furniture

//-----------Super function
// The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's(parent) here Product's constructor.
