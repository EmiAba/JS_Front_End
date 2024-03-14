function solve(input){

    class Cat{
        constructor(name, age){
            this.name=name;
            this.age=Number(age);
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    //suzdava masiv ot key value pair
 const result=input
 .map(line=>line.split(' '))
 .map(([name, age])=> new Cat(name, age))
 .forEach(cat => cat.meow());



}
solve(['Mellow 2', 'Tom 5'])