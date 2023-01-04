function gettime() {
    var date= new Date();
    var hr = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if(m < 10)
    {
        m = "0" + m
    }
    if(s < 10)
    {
        s = "0" + s
    }
    document.clockform.clock.value = hr + ":" + m + ":" + s;
    setTimeout("gettime()",100)
}
let screen=document.getElementById("res");
let buttons=document.querySelectorAll("button");
let screenValue="";
for(let item of buttons){
  item.addEventListener("click",(e) =>{
  buttonText=e.target.innerText;})
}
