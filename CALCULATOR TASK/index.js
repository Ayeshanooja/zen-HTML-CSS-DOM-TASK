var a= setInterval(()=>{
  var b=document.querySelector('.container').style.backgroundColor='#f0afb4'
  console.log(b)
  },1000)
  var c= setInterval(()=>{
    var d=document.querySelector('.container').style.backgroundColor='#98b0f3'
    console.log(d)
    },2000)
  
  function any(color,time){
    var prom= new Promise((res,rej)=>{
      console.log(prom);
      if(color=='#f0afb4')
      {
        document.querySelector('.container').style.backgroundColor=color
      }
      setTimeout(()=>{
        res('')
        document.querySelector('.container').style.backgroundColor=color
      },time)
    })
    return prom
  }
  any('#f0afb4',4000)
  .then((res)=>{
  any('#98b0f3',3000)
  })
  .then((res)=>{
    any('green',3000)
  })
  .then((res)=>{
    any('aqua',3000)
  })
  
  var unique=document.querySelector('#unique')
  unique.addEventListener('click',(e)=>{
      console.log(e)
      var data=document.querySelector('.data')
      console.log(eval(data.innerText))
      data.innerText=(eval(data.innerText))
  })
  var AC=document.querySelector('#AC')
  AC.addEventListener('click',(e)=>{
      var data=document.querySelector('.data')
      data.innerText=''
  })
  var DE=document.querySelector('.DE')
  DE.addEventListener('click',(e)=>{
      var data=document.querySelector('.data')
      data.innerText=data.innerText.toString().slice(0,-1)
  })
  function btn(e){
    var data = document.querySelector('.data');
  //   var a='+-*/%';
  //   var lst= data.innerText.toString().slice(0,data.length-1)
  //   var fir=e.innerText
  //   if((a.includes(lst))&&(a.includes(fir)))
  // {
  //     console.log(lst)
  // }
  // else
  // {
  //   console.log(e)
  //   data.innerText += e.innerText 
  // }
  console.log(e)
  data.innerText +=e.innerText
  }
  
  window.addEventListener('keydown',(e)=>{
    console.log(e)
    var data = document.querySelector('.data');
    if(e.code.includes('Digit'))
    {
      console.log(e.key)
      data.innerText +=e.key
    }
  
    if(e.code=='Equal'&&e.key=='=')
    
    {
     data.innerText =eval(data.innerText)
     console.log(eval(data.innerText))
    }
  
    if(e.key=='+'&&e.code=='Equal')
    {
      console.log(e.key)
      data.innerText+=e.key
    }
  
    if(e.key=='-'&&e.code=='Minus')
    {
      console.log(e.key)
      data.innerText+=e.key
    }
  
    if(e.key=='/'&&e.code=='Slash')
    {
      console.log(e.key)
      data.innerText+=e.key
    }
  
    if(e.key=='*'&&e.code=='Digit')
    {
      console.log(e.key)
      data.innerText+=e.key
    }
  
    if(e.key=='Backspace'&&e.code=='Backspace')
    {
      console.log(e.key)
      data.innerText=data.innerText.toString().slice(0,-1)
    }
  })
  
  