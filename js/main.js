//OBJECTIVES
//1. D
//2. C
//3. B
//4. B
//5. C
//6. B
//7. A
//8. D
//9. D
//10.A
//11.D
//12.D
//13.A
//14.B
//15.C
//16.B
//17.D
//18.B
//19.C
//20.D

const stuDent ={
    name: 'Ada',
    age: 17,
    isPresent:true,
    greet() {
        console.log('Hi, i am ' + this.name);
        
    }
}
console.log(stuDent.name)
console.log(stuDent['age'])
stuDent.greet();



const phone={
    brand: 'Tecno',
    model: 'Spark 10',
    price: 120000,
    describe() {
        console.log(this.brand +' ' + this.model + ' ' + 'cost ₦' + this.price);
        
    }
}
phone.describe()

const car ={
    Make: 'Toyota',
    'top Speed': 180,
};
let propertyName = 'Make'
console.log(car['top Speed'])
//dot notation cannot handle properties with spaces



function createStudent(name, classname) {
    return{
        name,
        classname,
        intro() {
            return 'I am ' + name + ' from ' + classname
        }
    };   
}
const Ada=createStudent('Ada', 'SS1');
const Bayo=createStudent('Bayo', 'SS2');
const Chidi=createStudent('Chidi', 'SS3');

console.log(Ada.intro());
console.log(Bayo.intro());
console.log(Chidi.intro())


function createProduct(name, price) {
  return {
    name,
    price,
    showPrice() {
      return this.name + ' costs ₦' + this.price;
    },
    discountedPrice(percent) {
      const discount = this.price * (percent / 100);
      return this.price - discount;
    }
  };
}
const sneakers = createProduct('Jordan 4', 25000)
const Bag = createProduct('Gucci', 18000)
console.log(sneakers.showPrice())
console.log(sneakers.discountedPrice(10))

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.describe = function () {
        return 'Learning ' + this.title + ' by ' + this.author + (this.pages);
    };
}

const bookMe = new Book('Javascript', 'Ada Obi', 250);

const user = {name: 'Chidi'}
user.email = 'chidio@mail.com'
user.name = 'Chidi O';

delete user.email;
console.log(user)

const Phone = {
    brand: 'Infinix'
}
Phone.brand = 'Samsung'

