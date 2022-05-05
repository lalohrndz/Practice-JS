$btn = document.getElementById("ejMenu");
$icon = document.getElementById("btnIcon");
$slideMenu = document.getElementById("slideMenu");

$btn.addEventListener("click",e=>{
    if($icon.innerHTML == "add"){
        $icon.innerHTML = "remove";
        $slideMenu.style.display = "flex"
    }else{
        $icon.innerHTML = "add";
        $slideMenu.style.display = "none"
    }
})

$slideMenu.addEventListener("click",e=>{
    e.target.style.display = "none"
    $icon.innerHTML = "add"
})