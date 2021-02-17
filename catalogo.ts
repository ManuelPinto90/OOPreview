import {Mobile}from "./mobile"

let movil1 : Mobile = new Mobile ("Nokia","3210","Nokia", "2Gb", "White", false, 3, 160 )
let movil2 : Mobile = new Mobile ("iPhone", "3G", "Apple", "5Gb", "Green",false, 5, 460)
let movil3 : Mobile = new Mobile ("Samsung", "Galaxy 10", "Samsung", "3Gb","Black", true, 5, 340)

let moviles = [movil1, movil2, movil3]  
    
for (let i = 0; i<moviles.length; i++)
{
    console.log(moviles[i].mostrarMovil())
}

movil1.setIs5G(true)
console.log(movil1.getIs5G())
movil1.setCameraNumber(5)
console.log(movil1.getCameraNumber())