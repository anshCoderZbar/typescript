var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.getUserName = function () {
        console.log("".concat(this.name, " is playing"));
        this.getUserNameLength();
    };
    User.prototype.getUserNameLength = function () {
        console.log(this.name.length);
    };
    return User;
}());
var person = new User();
person.setName("ajay");
console.log(person.getUserName());
