'use strict';

const body = document.body;

// console.log(body);
// console.dir(body)
// console.log(body.childNodes)

const childNodes = body.childNodes;
// let arr = []
// for (let i = 0; i < childNodes.length; i++) {
    // arr.push(childNodes[i])
// console.dir(childNodes[i])
// }
// console.dir(arr)

// for(let node of childNodes){
    // console.dir(node)
// }

const children = body.children;
for (let i = 0; i < children.length; i++) {
    if(children[i].innerText == 'Узел'){
        children[i].innerText = 'aaaaaa'
    }     
 };

// console.log(children)

