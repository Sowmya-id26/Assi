let nums = [10, 3, 7, 20, 13, 2];
let squ=nums.map(a=>a*a);
console.log(squ)

let prime=nums.filter(a=>{
      if(a<2)return false;
      for (let i=2; i<=Math.sqrt(a); i++){
        if(a%i===0)
            return false;
      }
      return true;
})
console.log(prime)

let total=nums.reduce((sum,a) => sum+a);
console.log(total)

let des=nums.sort((a,b) => b-a);
console.log(des)