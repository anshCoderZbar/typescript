class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getEmail() {
    console.log(`${this.name}@test.com`);
  }
}
class UserType extends User {
  type: string;
  constructor(name: string, type: string) {
    super(name);
    this.type = type;
  }
  getType() {
    return `my name is ${this.name} and my designation is ${this.type} `;
  }
}
const p1 = new UserType("ajay", "student");
console.log(p1.getType());
