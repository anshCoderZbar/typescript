class User {
  name: "";
  email: "";
  login(user) {
    return `${user} is logged in now`;
  }
  logout(user) {
    return `${user} is logged in now`;
  }
}

const rajat = new User();
const kamal = new User();
console.log(rajat.login("rajat"));
console.log(rajat.logout("kamal"));
