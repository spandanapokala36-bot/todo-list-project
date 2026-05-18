

let color='light';
b=document.getElementById("mode");
console.log(b);

b.addEventListener('click',()   =>
{
    if(color==='light'){
        color='dark';
        b.innerText = "☀ Light Mode"
        document.body.style.backgroundColor='black';
        document.body.style.color='white'
    }
    else{
        color='light'
         b.innerText = "🌙 Dark Mode";
        document.body.style.backgroundColor='white';
        document.body.style.color='black'
    }
});
b2=document.getElementById("unorderdlist");
b1=document.getElementById("add");
text1=document.getElementById("text");
b1.addEventListener('click',() =>
{
    if(text1.value.trim()==''){
        alert("enter the to do list");
    }
    else{
        let d=document.createElement('li')
        d.append(text1.value);
        b2.append(d);
        text1.value="";
        let f=document.createElement('button');
        f.innerText='delete';
        f.className='delete-bin'
        d.append(f);
         f.addEventListener('click',()=>{
        d.remove()
        });
    }
   
});
text1.addEventListener('keydown',(evt)=>
{
    if(evt.key==='Enter' && text1.value.trim()!=''){
        let d=document.createElement('li')
        d.append(text1.value);
        b2.append(d);
        text1.value="";
        let f=document.createElement('button');
        f.innerText='delete';
        f.className='delete-bin'
        d.append(f);
        f.addEventListener('click',()=>{
        d.remove()
        });
    }
    
});
