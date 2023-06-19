var a = "hello world";
console.log(a);
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.run = function () {
        console.log("Hello i am  and i am running");
    };
    return App;
}());
var rajat = new App();
rajat.run();
