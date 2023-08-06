let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset');

let hour= 0;
let min=0;
let sec=0;
let ms=0;
  
  start.addEventListener('click',function(){
  	key= true;
     display();

  });
  stop.addEventListener('click',function(){
  	key=false;
  });
  reset.addEventListener('click',function(){
  	key=false;
  	hour=0;
  	min=0;
  	sec=0;
  	ms=0;

  	 document.getElementById('hour').innerHTML="00";
       document.getElementById('min').innerHTML="00" ;
       document.getElementById('sec').innerHTML ="00";
       document.getElementById('ms').innerHTML="00";


  });

function display(){
    if(key)
    {
    	ms++;

    	if(ms==100)
    	{
    		sec++;
    		ms=0;
    	}
    	if(sec==60)
    	{
    		min++;
    		sec=0;
    	}
    	if(min==60)
    	{
    		hour++;
    		min=0;
    		sec=0;
    	}
    	let hourDisplay=hour;
    	let minDisplay=min;
    	let secDisplay=sec;
    	let msDisplay=ms;

    	if(hour<10)
    	{
          hourDisplay="0"+hourDisplay;
    	}
    	if(min<10)
    	{
    		minDisplay="0"+minDisplay;
    	}
    	if(sec<10)
    	{
    		secDisplay="0"+secDisplay;
    	}
    	if(ms<10){
    		msDisplay="0"+msDisplay;
    	}
       document.getElementById('hour').innerHTML=hourDisplay;
       document.getElementById('min').innerHTML=minDisplay ;
       document.getElementById('sec').innerHTML =secDisplay;
       document.getElementById('ms').innerHTML=msDisplay;
       setTimeout(display,10);
         }

}