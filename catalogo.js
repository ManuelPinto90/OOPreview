"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var mobileLibrary_1 = require("./mobileLibrary");
var movil1 = new mobile_1.Mobile("Nokia", "3210", "Nokia", "2Gb", "White", false, 3, 170);
var movil2 = new mobile_1.Mobile("iPhone", "3G", "Apple", "5Gb", "Green", false, 5, 460);
var movil3 = new mobile_1.Mobile("Samsung", "Galaxy 10", "Samsung", "3Gb", "Black", true, 5, 340);
var movil4 = new mobile_1.Mobile("LG", "SX-354", "LG", "5GB", "Purple", true, 3, 250);
var arrayMovil = [movil1, movil2, movil3, movil4];
var mobileLibreriaP = new mobileLibrary_1.MobileLibrary("Mi tienda", "Madrid", arrayMovil);
mobileLibreriaP.printLibrary();
movil1.setIs5G(true);
console.log(movil1.getIs5G());
movil1.setCameraNumber(5);
console.log(movil1.getCameraNumber());
