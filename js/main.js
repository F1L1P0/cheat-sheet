let arr1 = [1, "dva", [3, "ctyri"], 5];
let arr2 = [1, "dva", [3, "ctyri"], 5, {6:"sest", 7: "sedm", "8to10":[8,9,10]}];
let obj1={"jedna" : 1, "dva" : 2, 3 : "ja jsem 3"};
let obj2={"jedna":1, "dva":2, "tri":3, ctyripet:[4,5]};
let obj3={"jedna" : 1, "dva" : 2, "tri" : 3};

// const items = [
//     {name:"bike", price:100},
//     {name:"tv", price:300},
//     {name:"pc", price:200},
//     {name:"phone", price:400},
//     {name:"album", price:20},
// ]
//                                                  fors
//------------------------------------------------------------------------------------------------------------
// for (let x of arr2){
//     console.log(x + "text");
// };

// for (let x in arr2){
//     console.log(arr2[x]+ "text");
// };
// arr1.forEach((v) => console.log(v));

// -----------------------------------------------------------------------------------------------------------
//                                                 objects

//iterace objektem x = nazev prvku v objektu object.keys(obj) = hodnota prvku
// for (let x of Object.keys(obj3)){
//     console.log(x + "->" + obj3[x]);
// }

// const filteredItems = items.filter((item)=> item.price>199);
// console.log(filteredItems);                                             return the filtred objects with values name:tv, price:300       ||filter||

// const mappedItems = items.map((item)=> item.name)
// console.log(mappedItems);                                               return just names of mapped objects                             ||map||

// const foundItem = items.find((item)=> {
//     return item.name == "tv";
// })
// console.log(foundItem);                                                 retrn object which name is equal to tv                          ||find||

//items.forEach((item)=>console.log(item.name));                           foreach item in items prints out name                           ||foreach||

//console.log(items.some((item)=>item.price<21));                 if any of object prices are lower than value (21) return true or false   ||some||
//console.log(items.every((item)=>item.price<401));           if every price in objects is smaller than value (401) return true or false   ||every||
// const total = items.reduce((currentTotal, item)=> {          currenttotal is previous value go from 0 to last|item is actaull item ve are going through   ||reduce||
//     return item.price = item.price + currentTotal;}
//     ,0);
// console.log(total);
// -----------------------------------------------------------------------------------------------------------
//                                                  promises

// let userLeft = true;
// let userWatchingCatMeme = false;

// function watchTutorialPromise(){
//     return new Promise((resolve, reject) => {
//         if (userLeft) {
//         reject({
//             name: ' User Left', 
//             message: '🙁'
//         })
//         } else if (userWatchingCatMeme) {
//         reject ({
//             name: ' User Watching Cat Meme', 
//             message: ' WebDevSimplified < Cat'
//         })
//         } else {
//         resolve('Thumbs up and Subscribe')}
//     })
// };

// watchTutorialPromise().then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error.name + error.message) 
// })

// let isHome = true;
// let hasHeadphones = false;

// function checkHome(){
//     return new Promise((resolve, reject)=>{
//         if(!isHome){
//             reject({
//                 state:"is not home",
//             })
//         }
//         else if(hasHeadphones){
//             resolve({
//                 state: "is home",
//                 hears:" cannot hear you coz of headphones"
//             })
//         }else
//         resolve({
//             state:"is home",
//             hears: "and can hear you"
//         })
//     })
// }

// checkHome().then((message)=>{
//     console.log(message.state + " " + message.hears);
// }).catch((error)=> {
//     console.log(error.state);
// })



// const fetchPokemon = async (id)=> {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     const data = await res.json();
//     console.log(data.name);
// }

// try {
//     fetchPokemon(5);
// } catch (err) {
//     console.error(err);
// }

//          API QUOTE GENERATOR (100ITEMS API RETURN MORE ARRAYS EACH 100)
const nextQuote = async ()=>{
  let randomNum = Math.floor(Math.random() * 100);
  let quotes = await fetch("https://type.fit/api/quotes");
  let quote= await quotes.json();
  let myQuote= quote[randomNum];
  document.querySelector("#quote-txt").innerText = "“"+ myQuote.text + "”";
  document.querySelector("#quote-author").innerText = myQuote.author;
  return myQuote;
}

try {
  nextQuote();
} catch (err) {
    console.error(err);
}

//          ACCORDION
  let accordion   = document.querySelector('.accordion');
  let accordionEl = accordion.querySelectorAll('.content-container');
  
accordion.onclick = ({target: elmAcc}) =>{
  if (!elmAcc.matches('.content-container > div.question')) return // select only this div

  let elContainer = elmAcc.closest('.content-container')
  console.log(elContainer);


  if (elContainer.classList.toggle('active'))
    accordionEl.forEach( panel => panel.classList.toggle('active', panel===elContainer))
  }

  // clicking outside will close accordion :
document.addEventListener('click', event =>
{
if (!accordion.contains(event.target)) 
  accordionEl.forEach( panel => panel.classList.remove('active'))
});