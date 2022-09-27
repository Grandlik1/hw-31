let ul = document.getElementById('ulId');
let arr = [];
for (let li of ul.children) {
    console.log(ul.childNodes.length);
    arr.push(li.innerHTML);
}
console.log(arr);