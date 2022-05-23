function createobj(a,s,d,f){
    this.type=a;
    this.desc=s;
    this.price=d;
    this.image=f;
}
let products=JSON.parse(localStorage.getItem("products")) || []
//document.querySelector("#add_product").innerHTML=“Add Product” 


 function fun1(e){
     event.preventDefault()

      let form=document.querySelector("#products")

      let type=form.type.value;
      let desc=form.desc.value;
      let price=form.price.value;
      let image=form.image.value;

      let x=new createobj(type,desc,price,image)
      products.push(x)
      //console.log(x)
      localStorage.setItem("products",JSON.stringify(products))

      document.getElementById("type").value=null;
      document.getElementById("desc").value=null;
      document.getElementById("price").value=null;
      document.getElementById("image").value=null;

      
 }