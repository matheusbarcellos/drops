var timercontrol = null;
//var firsttime = true;
var buttonanimation = true;

function hoverhandler(type) {
    
    //if (firsttime === true) {
        
        if (type === 0) {
        
            buttonanimation = false;
            clickanimation(1);

        } else if (type === 1) {

            buttonanimation = true;

        };
        
    //};
    
};

function buttonbackground(type) {
    
    if (type === 0) {
        
        if (ii === 0) {
            
            document.getElementById("buttonlilac").style.display = "none";

        } else if (ii === 1) {

            document.getElementById("buttonblue").style.display = "none";

        } else if (ii === 2) {

            document.getElementById("buttongreen").style.display = "none";

        } else if (ii === 3) {

            document.getElementById("buttonyellow").style.display = "none";

        } else if (ii === 4) {

            document.getElementById("buttonorange").style.display = "none";

        } else if (ii === 5) {

            document.getElementById("buttonred").style.display = "none";

        } else if (ii === 6) {

            document.getElementById("buttonchocolate").style.display = "none";

        };
        
    } else if (type === 1) {
        
        if (ii === 0) {
            
            document.getElementById("buttonlilac").style.display = "inline";

        } else if (ii === 1) {

            document.getElementById("buttonblue").style.display = "inline";

        } else if (ii === 2) {

            document.getElementById("buttongreen").style.display = "inline";

        } else if (ii === 3) {

            document.getElementById("buttonyellow").style.display = "inline";

        } else if (ii === 4) {

            document.getElementById("buttonorange").style.display = "inline";

        } else if (ii === 5) {

            document.getElementById("buttonred").style.display = "inline";

        } else if (ii === 6) {

            document.getElementById("buttonchocolate").style.display = "inline";

        };
        
    };
    
};

function clickhandler(index) {
    
    /*
    if (firsttime === true) {
        
        firsttime = false;
        buttonanimation = false;
        
    };
    */
    
    buttonbackground(0);
    
    if (index === 0) {
        
        document.getElementById("buttonlilacdrop").style.display = "none";
        checkcolor(5);
        timercontrol = setTimeout(function(){

            uisetcolor(getRandomInt(0, 6));
            timercontrol = null;

        }, 200);
        
    } else if (index === 1) {
        
        document.getElementById("buttonbluedrop").style.display = "none";
        checkcolor(5);
        timercontrol = setTimeout(function(){

            uisetcolor(getRandomInt(0, 6));
            timercontrol = null;

        }, 200);
        
    } else if (index === 2) {
        
        document.getElementById("buttongreendrop").style.display = "none";
        checkcolor(5);
        timercontrol = setTimeout(function(){

            uisetcolor(getRandomInt(0, 6));
            timercontrol = null;

        }, 200);
        
    } else if (index === 3) {
        
        document.getElementById("buttonyellowdrop").style.display = "none";
        checkcolor(5);
        timercontrol = setTimeout(function(){

            uisetcolor(getRandomInt(0, 6));
            timercontrol = null;

        }, 200);
        
    } else if (index === 4) {
        
        document.getElementById("buttonorangedrop").style.display = "none";
        checkcolor(5);
        timercontrol = setTimeout(function(){

            uisetcolor(getRandomInt(0, 6));
            timercontrol = null;

        }, 200);
        
    } else if (index === 5) {
        
        document.getElementById("buttonreddrop").style.display = "none";
        checkcolor(5);
        timercontrol = setTimeout(function(){

            uisetcolor(getRandomInt(0, 6));
            timercontrol = null;

        }, 200);
        
    } else if (index === 6) {
        
        document.getElementById("buttonchocolatedrop").style.display = "none";
        checkcolor(5);
        timercontrol = setTimeout(function(){

            uisetcolor(getRandomInt(0, 6));
            timercontrol = null;

        }, 200);
        
    };
    
};

function clickanimation(indexanimation) {
    
    if (indexanimation === 0) {
            
        buttonbackground(0);

    } else if (indexanimation === 1) {

        buttonbackground(1);

    };
    
};