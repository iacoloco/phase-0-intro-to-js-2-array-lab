// Write your solution here
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    return [...cats,name]
}


function prependCat(name){
    return [name,...cats]
}
//1) index.js
//Array functions
//removeLastCat()
  //removes the last cat in the cats array and returns a new array, leaving the cats array unchanged:

  function removeLastCat(){
    return cats.slice(0,2)
  }
  
  function removeFirstCat(){
    return cats.slice(1,cats.length)
  }

  console.log(removeFirstCat());