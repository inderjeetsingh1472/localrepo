console.log("inder")
// let bhupinderjogi=document.getElementsByClassName("box")
// console.log(bhupinderjogi)

// bhupinderjogi[2].style.backgroundColor="red"
// document.getElementById("red").style.backgroundColor="red"

// document.querySelector(".box").style.backgroundColor="yellow" // work on first box
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="blue"
}) // to add style on all box element 
script.js:
document.getElementsByTagName("div")
HTMLCollection(7) [div.container, div.box, div.box, div#red.box, div.box, div.box, div.box, red: div#red.box]0: div.container1: div.box2: div.box3: div#red.box4: div.box5: div.box6: div.boxred: div#red.boxlength: 7[[Prototype]]: HTMLCollection
let e=document.getElementsByTagName("div")
undefined
e[4].matches(#red")
VM184:1 Uncaught SyntaxError: Unexpected identifier '#red'
e=document.getElementsByTagName("div")
HTMLCollection(7) [div.container, div.box, div.box, div#red.box, div.box, div.box, div.box, red: div#red.box]
e[4].matches("#red")
false
e[3].closest(".container")
<div class=​"container">​…​</div>​
document.querySelector(".container").contains(e[2])
true
