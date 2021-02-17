"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var movil1 = new mobile_1.Mobile("Nokia", "3210", "Nokia", "2Gb", "White", false, 3, 160);
var movil2 = new mobile_1.Mobile("iPhone", "3G", "Apple", "5Gb", "Green", false, 5, 460);
var movil3 = new mobile_1.Mobile("Samsung", "Galaxy 10", "Samsung", "3Gb", "Black", true, 5, 340);
var moviles = [movil1, movil2, movil3];
console.log(movil1.mostrarMovil());
