const $linkDOM = document.querySelector(".link-DOM");

$linkDOM.style.backgroundColor = "#fafafa"
$linkDOM.style.color = "#aaa"

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));