function search() {

const townListElement=document.getElementById('towns');
const searchTextElement=document.getElementById('searchText');
const resultElement=document.getElementById('result');
//vzimame value
const searchText=searchTextElement.value;

let matchCount=0;

for (const townElement of townListElement.children) {
 if(townElement.textContent.toLowerCase().includes(searchText.toLowerCase())){
   townElement.style.textDecoration='underline';
   townElement.style.fontWeight='bold';

   matchCount++;
 }
resultElement.textContent=`${matchCount} matches found`;
   
}




}
