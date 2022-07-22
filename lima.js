class Mkulima {
  
    constructor() {
      this.farms = [];
      this.products = [];
      this.orders = [];
      this.addFarm= function(farmId,name,farmer,phone,address){
            this.farms.push({farmId,name,farmer,phone,address})
      }
      this.removeFarm=function(id){
         let targetFarm= this.farms.find(item=>item.farmId===id)
         let farmIndex=this.farms.indexOf(targetFarm)
         this.farms.splice(farmIndex,1)
      }
      this.updateFarm=function(oldId,newFarmId, newName, newFarmer, newPhone, newAddress){
              let targetFarm= this.farms.find(item=>item.farmId===oldId)
              targetFarm.farmId = newFarmId
              targetFarm.name=newName
              targetFarm.farmer=newFarmer
              targetFarm.phone=newPhone
              targetFarm.address=newAddress
      }
      this.getFarm=function(id){
          console.log(this.farms.find(object=>object.farmId===id))
      }
      this.addProduct= function(productId,name,price){
          this.farms.push({productId,name,price})
    }
    this.removeProduct=function(id){
       let productIndex= this.products.findIndex(item=>item.productId===id)
       this.farms.splice(productIndex,1)
    }
    this.updateProduct=function(oldId,newId, newName, newPrice){
            let product= this.products.find(item=>item.productId===oldId)
            product.farmId=newId
            product.name=newName
            product.farmer=newPrice
    }
    this.getProductb=function(id){
      console.log(this.products.find(product=>product.farmId===id))
     }
  
  
    this.printProducts=function(){
      console.log(this.products)
     }
     this.calculateOrderCost=function(id,quantity){
      let product= this.products.find(item=>item.productId===id)
      console.log(`For ${quantity} of ${product.name}, the cost of your order is ${product.price*quantity}`)
      this.orders.push(product)
      this.order
  
     }
  }
  }
  
  let MkulimaPlatform= new Mkulima()
  MkulimaPlatform.addFarm("100","Tomatoe farm","Effence","0748103961","Ngong,Kajiado")
  MkulimaPlatform.addFarm("620","Maize farm","Shiku","0757240049","Kimana,Kajiado")
  
  
  MkulimaPlatform.updateFarm("100","120","Tea farm", "Kamau","0701516250","Kajiado")
  
  console.log(MkulimaPlatform.farms)
  
  MkulimaPlatform.getFarm("120")
//   console.log(farms);
  
  
