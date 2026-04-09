
// class abc{

//    readonly x:number;    
//    constructor (m:number){   
//     this.x = m;
//     console.log("x is "+this.x);
//    }
//    public mymethod(){
//     console.log("hello world");
//    } 
// }
// const myobj = new abc(15);
// myobj.mymethod();
// //console.log(myobj.x);

// class xyz extends abc{
//     const y=10;
//     public yourmethod(){
//     console.log("welcome to typescript");
//     }
// }

// const myobj1 = new xyz(1);
// const myobj2:abc = new xyz(1);
// myobj1.yourmethod();
// myobj1.y;
// console.log(myobj1.y);


class methodoverloading{
    public add(a:number,b:number):number;
    public add(a:number,b:number,c:number,d:number):number;
   
    public add(a:number,b:number,c?:number,d?:number):number{
        if(c && d){
            return a+b+c+d;
        }else{
        return a+b;
    }
}}
const md = new methodoverloading();
//const result1 = md.add(2,3);
//console.log(result1);
const result2 = md.add(2,3,4,5);
console.log(result2);
//console.log(md.add(2,3,4));

class Parent{
    public parentmethod1(){
        console.log("This is parent method");
    }
    
    public parentmethod2(){
        console.log("This is parent method");
    }

    

}
class Child extends Parent{
    public childmethod1(){
        console.log("This is child method");
    }

    public childmethod2(){
        console.log("This is child method");
    }
}

const obj:Child = new Child();
obj.parentmethod1();
obj.parentmethod2();
obj.childmethod1();
obj.childmethod2(); 

const obj1:Parent = new Child();
obj1.parentmethod1();
obj1.parentmethod2();
//obj1.childmethod1();
//obj1.childmethod2();




