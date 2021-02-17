"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var movil1 = new mobile_1.Mobile("Nokia", "3210", "Nokia", "2Gb", "White", false, 3, 160);
var movil2 = new mobile_1.Mobile("iPhone", "3G", "Apple", "5Gb", "Green", false, 5, 460);
var movil3 = new mobile_1.Mobile("Samsung", "Galaxy 10", "Samsung", "3Gb", "Black", true, 5, 340);
var moviles = [movil1, movil2, movil3];
for (var i = 0; i < moviles.length; i++) {
    console.log(moviles[i].mostrarMovil());
}
movil1.setIs5G(true);
console.log(movil1.getIs5G());
movil1.setCameraNumber(5);
console.log(movil1.getCameraNumber());
