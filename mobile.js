"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    Mobile.prototype.getTradeMark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTradeMark = function (newTradeMark) {
        this.trademark = newTradeMark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setSdSize = function (newSdSize) {
        this.sdSize = newSdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.setIs5G = function (newIs5g) {
        this.is5G = newIs5g;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setCameraNumber = function (newCameraNumber) {
        this.cameraNumber = newCameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Mobile.prototype.mostrarMovil = function () {
        return "The charasteristics of the mobile are : " + "\n" +
            "Name - " + this.name + "\n" +
            "Model - " + this.model + "\n" +
            "TradeMark - " + this.trademark + "\n" +
            "SdSize (GB)- " + this.sdSize + "\n" +
            "Color - " + this.color + "\n" +
            "5G - " + this.is5G + "\n" +
            "CameraNumber - " + this.cameraNumber + "\n" +
            "Price - " + this.price + "\n";
    };
    return Mobile;
}());
exports.Mobile = Mobile;
