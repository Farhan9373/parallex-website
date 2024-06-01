// let text = document.getElementsByClassName('text');
// let treeLeft = document.getElementsByClassName('tree-left');
// let treeRight = document.getElementsByClassName('tree-right');
// let gateLeft = document.getElementsByClassName('gate-left');
// let gateRight = document.getElementsByClassName('gate-right');


// window.addEventListener('scroll', () => {
//     let value = window.scrollY;
//     text.style.marginTop = value * 2.5 + 'px';
//     treeLeft.style.left = value * -1.5 + 'px';
//     treeRight.style.left = value * -1.5 + 'px';
//     gateLeft.style.left = value *0.5 + 'px';
//     gateRight.style.left=value*-0.5+'px';
// });
let text = document.querySelector('.text');
let treeLeft = document.querySelector('.tree-left');
let treeRight = document.querySelector('.tree-right');
let gateLeft = document.querySelector('.gate-left');
let gateRight = document.querySelector('.gate-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (text) text.style.marginTop = value * 2.5 + 'px';
    if (treeLeft) treeLeft.style.left = value * -1.5 + 'px';
    if (treeRight) treeRight.style.left = value * 1.5 + 'px';
    if (gateLeft) gateLeft.style.left = value * 0.5 + 'px';
    if (gateRight) gateRight.style.left = value * -0.5 + 'px';
});
