console.log("helllo world")
/
script.js:1 helllo world
document.body
<body>​<div class=​"container">​…​</div>​<script src=​"script.js">​</script>​</body>​
document.body.childNodes
NodeList(5) [text, div.container, text, script, text]
document.body.childNodes[0]
#text
document.body.childNodes[3]
<script src=​"script.js">​</script>​
document.body.childNodes[1]
<div class=​"container">​…​</div>​
document.body.childNodes[1].childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
let cont = document.body.childNodes[1]
undefined
cont
<div class=​"container">​…​</div>​
cont.firstChild
#text
cont.lastChild
#textassignedSlot: nullbaseURI: "http://127.0.0.1:3000/67/index.html"childNodes: NodeList []data: "\n"firstChild: nullisConnected: truelastChild: nulllength: 1nextElementSibling: nullnextSibling: nullnodeName: "#text"nodeType: 3nodeValue: "\n"ownerDocument: documentparentElement: div.containerparentNode: div.containerpreviousElementSibling: div.boxpreviousSibling: div.boxtextContent: "\n"wholeText: "\n"[[Prototype]]: Text
cont.firstElementChild
<div class=​"box">​box1​</div>​
cont.lastElementChild.style.color="red"
'red'
cont.lastElementChild.style.backgroundColor="green"
'green'
document.body.firstElementChild
<div class=​"container">​…​</div>​<div class=​"box">​box1​</div>​<div class=​"box">​box2​</div>​<div class=​"box">​box3​</div>​<div class=​"box">​box4​</div>​<div class=​"box" style=​"color:​ red;​ background-color:​ green;​">​box5​</div>​</div>​
document.body.firstElementChild.childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
document.body.firstElementChild.children
HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
document.body.firstElementChild.children[0]

<div class=​"box">​box1​</div>​
document.body.firstElementChild.children[3]

<div class=​"box">​box4​</div>​
document.body.firstElementChild.children[3].nextElementSibling

<div class=​"box" style=​"color:​ red;​ background-color:​ green;​">​box5​</div>​
document.body.firstElementChild.children[3].previousElementSibling

<div class=​"box">​box3​</div>​
document.body.firstElementChild.children[3].previousSibling

#text
document.body.firstElementChild.children[3].parentElement

<div class=​"container">​…​</div>​