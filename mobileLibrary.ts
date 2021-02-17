import {Mobile} from "./mobile"

export class MobileLibrary
{
    private name:string
    private location:string
    private mobiles: Mobile[]
    private totalPrice: number

    constructor(name:string, location:string, mobiles:Mobile[])
    {
        this.name = name
        this.location = location
        this.mobiles = mobiles
        this.totalPrice = this.totalPriceCalculation()
    }
    public getName():string
    {
        return this.name
    }
    public setName(newName:string)
    {
        this.name = newName
    }
    public getLocation():string
    {
        return this.location
    }
    public setLocation(newLocation:string)
    {
        this.location = newLocation
    }
    public getMobile():Mobile[]
    {
        return this.mobiles
    }
    public setMobiles(newMobile:Mobile[])
    {
        this.mobiles = newMobile
    }
    public getTotalPrices():number
    {
        return this.totalPrice
    }
    public setTotalPrices(newTotalPrice:number)
    {
        this.totalPrice = newTotalPrice
    }
    private totalPriceCalculation():number
    {
    let resultadoPrecios = 0
    for( let i = 0; i<this.mobiles.length; i++)
    {
        resultadoPrecios += this.mobiles[i].getPrice() 
    }
    return resultadoPrecios
    }
    public printLibrary()
    {   
        console.log("This is all my mobiles :")
        for (let i = 0; i<this.getMobile().length; i++)
        {
            console.log(this.mobiles[i].mostrarMovil())
        }
        console.log("Price Overall :"+this.totalPriceCalculation())     
    }    
}
