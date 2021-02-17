"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.setName = function (newName) {
        this.name = newName;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.setLocation = function (newLocation) {
        this.location = newLocation;
    };
    MobileLibrary.prototype.getMobile = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.setMobiles = function (newMobile) {
        this.mobiles = newMobile;
    };
    MobileLibrary.prototype.getTotalPrices = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.setTotalPrices = function (newTotalPrice) {
        this.totalPrice = newTotalPrice;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var resultadoPrecios = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            resultadoPrecios += this.mobiles[i].getPrice();
        }
        return resultadoPrecios;
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("This is all my mobiles :");
        for (var i = 0; i < this.getMobile().length; i++) {
            console.log(this.mobiles[i].mostrarMovil());
        }
        console.log("Price Overall :" + this.totalPriceCalculation());
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
