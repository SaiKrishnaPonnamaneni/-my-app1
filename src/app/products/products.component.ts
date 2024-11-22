import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  [x: string]: any;

  


  products:any=[
  {name:'pen',price:10,rating:3,freeDelivery:'true'},
  {name:'phone',price:100,rating:4,freeDelivery:'false'},
  {name:'shirt',price:300,rating:3,freeDelivery:'true'},
  {name:'cap',price:400,rating:2,freeDelivery:'false'},
  {name:'mobileCase',price:100,rating:3,freeDelivery:'true'},
  {name:'remote',price:500,rating:5,freeDelivery:'false'}
  ];

  price1(){
    this.products=this.products.sort((a:any,b:any)=>a.price-b.price);
  }
  price2(){
    this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
  }
  rating1(){
    this.products=this.products.sort((a:any,b:any)=>a.rating-b.rating);

  }
  rating2(){
    this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating);

  }
  
  freeDeliver() {
    
     this.products = this.products.filter((product: any) => product.freeDelivery=='true');

  
  }
  charges(){
    this.products = this.products.map((product: any) => {
      if (product.freeDelivery=='false') {
        product.price= product.price + 100 
        return product;
      }
      return product;
    });
  }

  

  discount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price*0.5;
    return product
  });
}

  totalPrice(){
    let totalCost=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
    alert(totalCost);

  }
  totalItems(){
    let total=this.products.length;
    alert(total)
  }
  term:any="";
  search(){
    this.products=this.products.filter((product:any)=>product.name.includes(this.term))
  }

  name:string="";
  price:number=0;
  rating:number=0;
  freeDelivery:boolean=true;

  add(){
   let product={
    // name - main vlaues piina value,this.name -name:string="";
    name:this.name,
   price:this.price,
   rating:this.rating,
   freeDelivery:this.freeDelivery
  }
  this.products.unshift(product)
}
  
  


}

function totalPrice() {
  throw new Error('Function not implemented.');
}

