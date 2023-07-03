var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getEmail = function () {
        console.log("".concat(this.name, "@test.com"));
    };
    return User;
}());
var UserType = /** @class */ (function (_super) {
    __extends(UserType, _super);
    function UserType(name, type) {
        var _this = _super.call(this, name) || this;
        _this.type = type;
        return _this;
    }
    UserType.prototype.getType = function () {
        return "my name is ".concat(this.name, " and my designation is ").concat(this.type, " ");
    };
    return UserType;
}(User));
var p1 = new UserType("ajay", "student");
console.log(p1.getType());
