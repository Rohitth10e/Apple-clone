let body=document.querySelector("body");

let btn=document.querySelector(".btn-change");

let mode='light';

let modeChange=()=>{
    if(mode==='light'){
        mode='dark';
        body.classList.add("dark");
        body.classList.remove("light");
        btn.innerHTML=`Light mode`;
    }else{
        mode='light';
        body.classList.add("light");
        body.classList.remove("dark");
        btn.innerHTML=`Dark Mode`;
    }
}

btn.addEventListener("click",modeChange);