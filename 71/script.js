:3000/favicon.ico:1 
        
        
       Failed to load resource: the server responded with a status of 404 (Not Found)
document.querySelector(".box")
<div class=​"box">​hey i am a box​</div>​
document.querySelector(".container").innerHTML
'\n        <div class="box">hey i am a box</div>\n    '
document.querySelector(".box").innerHTML
'hey i am a box'
document.querySelector(".container").innerText
'hey i am a box'
document.querySelector(".container").outerHTML
'<div class="container">\n        <div class="box">hey i am a box</div>\n    </div>'
document.querySelector(".container").tagName
'DIV'
document.querySelector(".container").nodeName
'DIV'
document.querySelector(".container").textContent
'\n        hey i am a box\n    '
// document.querySelector(".container").hidden=true
// true
document.querySelector(".box").innerHTML="inderjeet singh dandiwal"
'inderjeet singh dandiwal'
document.querySelector(".box").hasAttribute("style")
false
document.querySelector(".box").getAttribute("style")
'display: flex;'
document.querySelector(".box").setAttribute("style","display:inlline")
undefined
document.querySelector(".box").getAttribute("style")

'display:inlline'
document.querySelector(".box").attributes
NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
document.querySelector(".box").removeAttribute("style")
undefined
document.designMode="on"
'on
document.querySelector(".box").dataset
DOMStringMap {createdby: 'inderjeet'}