// let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
// const obj1={};
// const obj2={};
// for(const ele of n){
//   const x = ele.split(" ")[0];
//   const y = ele.split(" ")[1];
//   if(obj1[x] === undefined){
//     obj1[x] = 1;
//   } else{
//     obj1[x] += 1;
//   }
//   if(obj2[y] === undefined){
//     obj2[y] = 1;
//   } else{
//     obj2[y] += 1;
//   }
// }
// let sol1, sol2;
// for(const [k,v] of Object.entries(obj1)){
//   if(v===1) sol1 = k;
// }
// for(const [k,v] of Object.entries(obj2)){
//   if(v===1) sol2 = k;
// }
// console.log(sol1, sol2);

let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let[A,B]=[[],[]]
for(const ele of n){
  A.push(+ele.split(" ")[0])
  B.push(+ele.split(" ")[1])
}
getSol=arr=>{
  let a,b,c;
  a = arr[0];
  b = arr[1];
  c = arr[2];
  if(a===b)return c;
  else if(a===c)return b;
  else return a;
}
console.log(getSol(A),getSol(B))
