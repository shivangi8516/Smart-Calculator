let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue='';
for (item of buttons) {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        buttonText = e.target.innerText;
        //console.log("button clicked");
      //  console.log("Button text is", buttonText);
        if(buttonText =='X')
        {
            buttonText='*';
            screenValue+=buttonText
            screen.value=screenValue;
        }
        else if(buttonText=='=')
        {
            screen.value=eval(screenValue);
        }
        else if(buttonText=='C')
        {
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=='B')
        {
            screenValue=screen.value;
            screen.value=screenValue.substring(0,screenValue.length-1);
            screenValue="";
           // screen.value = screen.value.slice(0, - 1);
           // console.log("back button pressed");
        }
        else if(buttonText =='!')
        {
            screenValue=screen.value.length;
            n = Number(screen.value.substring(0, screenValue-1));
            let f=1;
            for(i=2;i<=n;i++)
            {
                f=f*i;
            }
            screen.value=f;
        }

        else if(buttonText=='sqrt')
        {
            screenValue=Math.sqrt(screen.value);
            screen.value=screenValue;

        }

        else if(buttonText=='tan')
        {
            screenValue=Math.tan(screen.value);
            screen.value=screenValue;
        }

        else if(buttonText=='sin')
        {
            screenValue=Math.sin(screen.value);
            screen.value=screenValue;
            
        }

        else if(buttonText=='cos')
        {
            screenValue=Math.cos(screen.value);
            screen.value=screenValue;
        }

        else if(buttonText=='log10')
        {
            screenValue=Math.log10(screen.value);
            screen.value=screenValue;
        }

        else if(buttonText=='degreeToRad')
        {
            screenValue=screen.value *(Math.PI / 180);
            screen.value=screenValue;
        }

        else if(buttonText=='radToDeg')
        {
            screenValue=screen.value /(Math.PI / 180);
            screen.value=screenValue;
        }

        else if(buttonText=='x2')
        {
            screenValue=screen.value *screen.value;
            screen.value=screenValue;
        }

        else if(buttonText=='+-')
        {
            screenValue=screen.value;
            if(screenValue.substring(0, 1) == "-")
		    screen.value = screenValue.substring(1, screenValue.length)
	        else
		    screen.value = "-" + screenValue;
        }


        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}