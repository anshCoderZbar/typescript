class User {
  name: string;
  age: number;
  email: string;
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  getUserData() {
    console.log(`${this.name}, ${this.age},${this.email}`);
  }
}
const newUser = new User("44", 22, "ajay@gmail.com");
newUser.getUserData();
