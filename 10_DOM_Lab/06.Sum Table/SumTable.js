// function sumTable() {

// const  tdCostElements=document.querySelectorAll('tr td:last-of-type:not(#sum)');
// const tdSumElement=document.getElementById('sum');

//  const sum=Array.from(tdCostElements)
//  .reduce((sum,cost)=>sum+Number(element.textContent), 0);
// }
function sumTable() {

const  tdCostElements=document.querySelectorAll('tr td:last-of-type:not(#sum)');
const tdSumElement=document.getElementById('sum');

 const sum=Array.from(tdCostElements)
 .reduce((sum,cost)=>sum+Number(element.textContent), 0);
}