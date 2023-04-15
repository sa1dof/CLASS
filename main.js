
/**
 * OBYEKT
 */
// let hater1 = {
//     firstName: 'Bill',
//     lastName: 'Geyts',
//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// console.log(hater1.fullName());

// let hater2 = {
//     firstName: 'Donald',
//     lastName: 'Dank',
//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// console.log(hater2.fullName());



/**
 * CLASS
 */
class Hater {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let hater1 = new Hater('Laziz',"Laziz")
hater1.fullName();

let hater2 = new Hater("Doktor","Dum")
hater2.fullName();


