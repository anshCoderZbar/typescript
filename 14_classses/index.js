var User = /** @class */ (function () {
  function User() {}
  User.prototype.login = function (user) {
    return "".concat(user, " is logged in now");
  };
  User.prototype.logout = function (user) {
    return "".concat(user, " is logged in now");
  };
  return User;
})();
var rajat = new User();
var kamal = new User();
console.log(rajat.login("rajat"));
console.log(rajat.logout("kamal"));
