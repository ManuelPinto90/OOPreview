import {Mobile}from "./mobile"
import { MobileLibrary } from "./mobileLibrary"

let movil1 : Mobile = new Mobile ("Nokia","3210","Nokia", "2Gb", "White", false, 3, 170 )
let movil2 : Mobile = new Mobile ("iPhone", "3G", "Apple", "5Gb", "Green",false, 5, 460)
let movil3 : Mobile = new Mobile ("Samsung", "Galaxy 10", "Samsung", "3Gb","Black", true, 5, 340)
let movil4 : Mobile = new Mobile ("LG", "SX-354", "LG", "5GB", "Purple", true, 3 , 250)

let arrayMovil = [movil1,movil2,movil3,movil4]

let mobileLibreriaP = new MobileLibrary("Mi tienda","Madrid", arrayMovil)
mobileLibreriaP.printLibrary()
movil1.setIs5G(true)
console.log(movil1.getIs5G())
movil1.setCameraNumber(5)
console.log(movil1.getCameraNumber())

