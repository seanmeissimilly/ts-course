function getSum(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  document.writeln(getSum(5, 3).toString());
  

class User
{
  name:string;
  email:string;
  age:number;
  constructor(name:string){this.name=name}
  register() {
    console.log(`Usuario ${this.name} registrado`)
  }
}
//{name:"David",email:"david@cuba.com", age:29}
var David=new User("David");
David.age=22

document.writeln(David.age.toString())
