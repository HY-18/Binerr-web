window.addEventListener('scroll',()=>{
    let nav=document.querySelector('nav');
    let windowposition=window.scrollY>0;
    nav.classList.toggle('scrooling-active',windowposition);
    nav.classList.remove('navchange');
    if(windowposition==0)
    {
        nav.classList.add('navchange');
    }
})

window.addEventListener('scroll',()=>{
    let h2=document.querySelector('h2');
    let windowposition=window.scrollY>0;
    h2.classList.toggle('scroolingheading-active',windowposition);
})

inputshadow=()=>{
    let input=document.getElementById('input');
    let output=document.getElementById('output');
    input.classList.add('input');
    output.classList.add('input');
}

giveoutput=()=>{
    let input=document.getElementById('input');
    let output=document.getElementById('output');
    let inputvalue=input.value;
    console.log(inputvalue);
    output.value=inputvalue;
}

let sections=document.querySelectorAll('section');
let li=document.querySelectorAll(".links");

window.addEventListener('scroll',()=>{
    let len=sections.length;
    while(--len && window.scrollY +97 <sections[len].offsetTop){}
        li.forEach(ltx=>{
            ltx.classList.remove('highlight');
            let a=ltx.firstElementChild;
           a.removeAttribute('style');
           if(ltx===li[len])
           {
               a.style.color='#00dfd2';
            }
            li[len].classList.add('highlight');
        })
})