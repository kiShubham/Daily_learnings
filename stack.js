//--------------- Stack-------------------------
// A stack is a linear data structure, which means that all elements are arranged in sequential order. It results that the push and pop operations can only happen at one end of the structure, in this case, the top of the stack.

// Sometimes there can be more than two operations in a stack data structure. Sometimes we might use the isEmpty operation to check if the stack is empty, and the peek operation to return the top element without modifying the stack.

// inside js there is no inbuilt stacks and queues ;
// therefore we use a class for stacks;

// agar stack ke andar kisi bhi property(result object ki) ka  initialize karna h, tou yha hame malum m ki class m hum use karte h ek constructor function ka initialize karne k liye.

//---------- stacks using array -------------------
/*


class Stacks{
    constructor(){ 
        this.arr = [];
        // arr is a stack ;
    }
    //now making a fn to add value in the (stack) array
    append(value){
        this.arr.push(value);
    }

    // now to find or to know the top element of the (stack)array we will write another fn name Peek();
    //top element =  last element ; latest element added;

    peek(){
        return this.arr[this.arr.length - 1]
    }

    // now to the element from the (stack) array ,another fn to delete last element or top element;

    delete(){
        this.arr.pop();
    }
}

let mystack = new Stacks();
console.log(mystack.arr); // [ ]
mystack.append(5);
console.log(mystack.arr);// [ 5 ] ;

//here array is the stack ;

mystack.append(4)
mystack.append(8)
mystack.append(9)
console.log(mystack.arr);// [ 5, 4, 8, 9 ] ;
console.log(mystack.peek()) // 9 
mystack.delete(); // delete last elem;
console.log(mystack.arr);// [ 5, 4, 8 ] ; 
console.log(mystack.peek()) // 8 

console.log(mystack); // Stacks { arr: [ 5, 4, 8 ] }


*/

//----------- stacks using linked list --------------------

/*
  //to create new node
  class Node {
    constructor(data) {
      this.value = data; //
      this.next = null; 
      //very imp -here null is claryfying that this is a node 
    }
  }

  class Stacks {
    constructor() {
      this.top = null; // node
      this.length = 0;
    }
    //when we had to add new element in the stack using linkedlist we will create new node ;either we can write in this class or we can write in separate class ,make seprate class Node;

    append(value) {
      let myNode = new Node(value);
      //now before appending check elements in linkedlist
      // 1.if linkedlist is empty
      if (this.length == 0) {
        this.top = myNode;
      }
      // 2.linkedlist is not empty;
      else {
        let holdingpointer = this.top; //holdingpointer become null
        this.top = myNode; // this.top become the myNode means the value;
        myNode.next = holdingpointer; // mynode.next means previous value of top become (holdingpointer)i.e, null ;
        //therefore,     null <--- top
      }
      this.length++; //updating the lenth of linked list ;
    }

    display() {
      return this.top;
    }

    // now to the element from the (stack) linked list ,another fn to delete last element or top element;

    // Null <-- 1 <-- 2 <-- 3; so here to delete '3',we have to put the top pointer on '2' and automatically the "3" would become a garbage value ;

    delete() {
      let newTop = this.top.next; // this.top = 3,this.top.next = 2;so now modify value of this.top to 2 ;
      this.top = newTop; //now  this.top = 2

      this.length--; //updating length of linkedlist;
    }
    
      // pop() {
      //   if (!this.top) {
      //     return null;
      //   }
      //   if (this.top === this.bottom) {//for this make this.bottom property inside constructor;
      //     this.bottom = null;
      //   }

      //   const newTop = this.top.next;
      //   this.top = newTop;
      //   this.length--;
      //   return this;
      // }
    
  }


  let mystack = new Stacks();
  //console.log(mystack);// Stacks { top: null, length: 0 }
  mystack.append(1);
  mystack.append(2);
  mystack.append(3);
  console.log(mystack.display());
  
  // Node { value: 3,
  //     next: Node { value: 2, 
  //                     next: Node { value: 1,
  //                                 next: null } 
  //                 }  
  //     }
  // raw => 1 --> 2 --> 3 --> Null;
      
     
  console.log(mystack.length); // 3

  mystack.delete(); //( Null <-- 1 <-- 2 <-- 3 ) to ( Null <-- 1 <-- 2 )
  console.log(mystack.length); // 2
  console.log(mystack.display()); // ( Null <-- 1 <-- 2 )
  
  // Node { value: 2, 
  //         next: Node { value: 1, 
  //                         next: null 
  //                         } 
  //     }  

*/ //----------------------------------------------------------------------------

//------------------------------ questions ------------------------------------------------

//  1. nearest greater element in right ; *************
/*
// let arr = [1, 3, 2, 4];
// ans =  [3, 4, 4,-1]
// let arr = [1, 3, 0, 0, 1, 2, 4];
//ans = [3,4,1,1,2,4,-1];
// let arr= [3,4,4,1];
// console.log(arr.reverse())
// let ans = [] ;
// console.log(!ans[ans.length -1]);

function nextLargerElement(n, arr) {
  let stack = []; //stack.top is stack[stack.length - 1]
  let ans = [];
  for (var i = n - 1; i >= 0; i--) {
    if (stack.length == 0) {
      ans.push(-1);
    } else if (stack[stack.length - 1] > arr[i]) {
      ans.push(stack[stack.length - 1]);
    } else if (stack[stack.length - 1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        ans.push(-1);
      } else if (stack[stack.length - 1] > arr[i]) {
        ans.push(stack[stack.length - 1]);
      }
    }
    // console.log(ans, arr[i], stack);
    // console.log(arr[i], stack, ans ,stack.length);
    stack.push(arr[i]);
  }
  return ans.reverse();
}

// let arr = [1, 3, 0, 0, 0, 1, 2]; // [3,-1,1,1,1,2,-1]
//ans = [3,4,1,1,2,4,-1];
console.log(nextLargerElement(arr.length, arr));

// class Stack{
//   constructor(){
//     this.arr = [] ;
//     this.top = arr[arr.length-1] ;
//   }
//   add(){
//     if(this.arr.length = 0){
//       return ans.push(-1)
//     }else if( )
//   }
//   display(){

//   }
// }

*/

// 2. nearest greater element to left ;****************

function nearestGreaterElementOnLeft(n, arr) {
  let ans = [];
  let stack = [];
  for (var i = 0; i < n; i++) {
    if (stack.length == 0) {
      ans.push(-1);
    } else if (stack[stack.length - 1] > arr[i]) {
      ans.push(stack[stack.length - 1]);
    } else if (stack[stack.length - 1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        ans.push(-1);
      } else if (stack[stack.length - 1] > arr[i]) {
        ans.push(stack[stack.length - 1]);
      }
    }
    stack.push(arr[i]);
  }
  return ans;
}

let arr = [1, 3, 4, 2];
// ans = [-1,-1,-1, 4]
console.log(nearestGreaterElementOnLeft(arr.length, arr));
