
/*jshint es5: false */
(function myfun() {
    "use strict";
    var myInput = document.getElementById("pwd"), letter = document.getElementById("letter"), capital = document.getElementById("capital"), number = document.getElementById("number"), length = document.getElementById("length"), message = document.getElementById("message"), generic;

    var validators = {
        lowerCaseLetters: /[a-z]/g,
        upperCaseLetters: /[A-Z]/g,
        numbers: /[0-9]/g,
        length: 8
    };
    
    class Generic {
        addClass(el,className){
            el.classList.add(className);
        }
        removeClass(el,className){
            el.classList.remove(className);
        }
        addEvent(el,event,callback){
            el.addEventListener(event, callback);
        }
    }

function eventListners(){
	generic.addEvent(myInput,'keyup',keyupC);
	generic.addEvent(myInput,'focus',focusC);
	generic.addEvent(myInput,'blur',blurC);
}



var focusC =function(){
	message.style.display="block";
}

var blurC =function(){
	message.style.display= "none";
}

var keyupC = function(){
	var validate =new Validate();
	validate.check();
}

class Validate{
  check(){
	if (myInput.value.match(validators.lowerCaseLetters)){
		generic.removeClass(letter,"invalid");
		generic.addClass(letter,"valid");
	} else{
		generic.removeClass(letter,"valid");
		generic.addClass(letter,"invalid");
	}
      
      
	if(myInput.value.match(validators.numbers)){
		generic.removeClass(number,"invalid");
		generic.addClass(number,"valid");
	} else{
		generic.removeClass(number,"valid");
		generic.addClass(number,"invalid");
	}


	if(myInput.value.length>=validators.length){
		generic.removeClass(length,"invalid");
		generic.addClass(length,"valid");
	} else{
		generic.removeClass(length,"valid");
		generic.addClass(length,"invalid");
	}

	if(myInput.value.match(validators.upperCaseLetters)){
		generic.removeClass(capital,"invalid");
		generic.addClass(capital,"valid");
	} else{
		generic.removeClass(capital,"valid");
		generic.addClass(capital,"invalid");
	}
      
   }
 }  

	function init(){
		generic =new Generic();
		eventListners();
	}
	init();
}());