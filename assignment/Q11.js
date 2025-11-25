function processProduct(products){
    const namelist=products.map(p=>p.name);

    products.forEach(p=>{
        const message=
        p.price>50
        ? `${p.name}  is above $50`
        : `${p.name}  is below $50`;
       console.log(message) 
    });
    return namelist
}
const iteam =[
    {name:"Laptop",price: 1000},
    {name:"Mouse",price:20}

];
processProduct(iteam)