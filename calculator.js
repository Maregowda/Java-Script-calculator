
var screen=document.getElementById('screen'); //get the id=screen and assign to var screen
var show="";  // create empty string var show
var holder;   // create string holder 
var operator={"+":"add","-":"substract","*":"multiply","/":"devison","%":"modulo division"}; // create object of operators for comparison

function myFunction(e){
   
    // when click on "AC" execute this
    if (e.target.innerHTML=="AC"){
        screen.innerHTML="00";
        show="";

    }

    // when click on "del" execute this and delete last entry
    else if ((e.target.innerHTML=="del") && (show !=="")){
        show=show.substr(0,show.length-1)
        screen.innerHTML=show
    }
   
    // when click on "=" execute this and show answer on the screen
    else if (e.target.innerHTML=="=") {
       var ans=eval(holder);
       screen.innerHTML=ans;
       show=screen.innerHTML;
    } 
    
    //else addup(string concat) every click button to var show 
    else{
        show=show.concat(e.target.innerHTML)  // concate to show recursivly
        
        // to remove consecutive operators one after another
         if ((show[show.length-1] in operator ) && (show[show.length-2] in operator)) { 
            show=show.substr(0,show.length-1)
        }
        
        screen.innerHTML=show
        holder=screen.innerHTML; // using this "holder" in eval function 
      
       
    };

 
}
