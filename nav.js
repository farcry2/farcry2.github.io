function navOn(){
    document.getElementById("btnOpen").style["opacity"]="0%";
    document.getElementById("btnOpen").style["z-index"]="-1";
    document.getElementById("btnClose").style["z-index"]="1";
    document.getElementById("btnClose").style["opacity"]="100%";


    document.getElementById("hBNav").style.transform="translateY(0px)"
}

function navOff(){
    document.getElementById("btnOpen").style["opacity"]="100%";
    document.getElementById("btnClose").style["opacity"]="0%";
    document.getElementById("btnOpen").style["z-index"]="1";
    document.getElementById("btnClose").style["z-index"]="-1";
    document.getElementById("hBNav").style.transform="translateY(-350px)"
}