var User = /** @class */ (function () {
    function User(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    User.prototype.getUserData = function () {
        console.log("".concat(this.name, ", ").concat(this.age, ",").concat(this.email));
    };
    return User;
}());
var newUser = new User("44", 22, "ajay@gmail.com");
newUser.getUserData();
