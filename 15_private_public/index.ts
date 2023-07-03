class User {
  name: "";
  setName(name) {
    this.name = name;
  }
  getUserName() {
    console.log(`${this.name} is playing`);
    this.getUserNameLength();
  }
  private getUserNameLength() {
    console.log(this.name.length);
  }
}

const person = new User();
person.setName("ajay");
console.log(person.getUserName());
