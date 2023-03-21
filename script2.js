let inp=document.getElementById("txt1");
let peop=document.getElementById("txt2");
let a=document.getElementById("amount");
let b=document.getElementById("total");
let btn=document.getElementsByClassName("button");
// console.log(btn);
let custom=document.getElementById("custom");
let str="";
Array.from(btn).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        str=e.target.innerHTML;
        // console.log();
    })
})
custom.addEventListener("click",()=>{
    custom.value="";
})
custom.addEventListener("input",()=>{
    str=custom.value;
})
console.log(str);

peop.addEventListener("input",()=>{
    console.log("ok");
    let rs=inp.value/peop.value;
    let per=(str.slice(0,str.length-1)/100)*rs;
    let tota=rs+per;
    a.innerHTML=`$${per}`;
    b.innerHTML=`$${tota}`;
    console.log(a);
})
let res=document.getElementById("res");
res.addEventListener("click",()=>{
    inp.value="";
    peop.value="";
    a.innerHTML=`$0.00`;
    b.innerHTML=`$0.00`;
})