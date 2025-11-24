if (true) {
  let a = 10;  
  var b = 20;  

console.log(b);  
console.log(a); 
}


const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);  
console.log(profile?.user?.details?.phone);  


const config = {
  system: {
    title: "Application",
    build: "2.5"
  }
};


const ownerName = config.system?.owner?.fullName;

console.log(ownerName); 
