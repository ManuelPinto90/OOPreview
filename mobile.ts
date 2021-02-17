export class Mobile
{
    private name:string
    private model:string
    private trademark:string
    private sdSize:string
    private color:string
    private is5G:boolean
    private cameraNumber:number
    private price:number

    constructor(name:string, model:string, trademark:string,
                sdSize:string, color:string, is5G:boolean,
                cameraNumber:number, price:number)
    {
        this.name = name
        this.model = model
        this.trademark = trademark
        this.sdSize = sdSize
        this.color = color 
        this.is5G = is5G
        this.cameraNumber = cameraNumber
        this.price = price
    }
    public getName():string
     {
         return this.name
     }
    public setName(newName:string)
    {
        this.name = newName
    }
    public getModel():string
    {
        return this.model
    }
    public setModel(newModel:string)
    {
        this.model = newModel
    }
    public getTradeMark():string
    {
        return this.trademark
    }
    public setTradeMark(newTradeMark:string)
    {
        this.trademark = newTradeMark
    }
    public getSdSize():string
    {
        return this.sdSize
    }
    public setSdSize(newSdSize:string)
    {
        this.sdSize = newSdSize
    }
    public getColor():string
    {
        return this.color
    }
    public setColor(newColor:string)
    {
        this.color = newColor
    }
    public getIs5G():boolean
    {
        return this.is5G
    }
    public setIs5G(newIs5g:boolean)
    {
        this.is5G = newIs5g
    }
    public getCameraNumber():number
    {
        return this.cameraNumber
    }
    public setCameraNumber(newCameraNumber:number)
    {
        this.cameraNumber = newCameraNumber
    }
    public getPrice():number
    {
        return this.price
    }
    public setPrice(newPrice:number)
    {
        this.price = newPrice
    }
    public mostrarMovil()
    {
        return "The charasteristics of the mobile are : "+"\n"+
               "Name - " +this.name+"\n"+
               "Model - " +this.model+"\n"+
               "TradeMark - " +this.trademark+"\n"+
               "SdSize (GB)- " +this.sdSize+"\n"+
               "Color - " + this.color+"\n"+
               "5G - " +this.is5G+"\n"+
               "CameraNumber - "+this.cameraNumber+"\n"+
               "Price - "+ this.price+"\n"
    }
}