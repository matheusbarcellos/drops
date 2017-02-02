var timercontrol = null;
var firsttime = true;
var buttonanimation = true;

function hoverhandler(type) {
    
    if (firsttime === true) {
        
        if (type === 0) {
        
            buttonanimation = false;
            clickanimation(1);

        } else if (type === 1) {

            buttonanimation = true;

        };
        
    };
    
};

function clickhandler(index) {
    
    if (firsttime === true) {
        
        firsttime = false;
        buttonanimation = false;
        
    };
    
    if (index === 0) {
        
        document.getElementById("buttonlilac").style.display = "none";
        checkcolor(5);
        timercontrol = setTimeout(function(){

            uisetcolor(getRandomInt(0, 6));
            timercontrol = null;

        }, 200);
        
    } else if (index === 1) {
        
        document.getElementById("buttonblue").style.display = "none";
        checkcolor(5);
        timercontrol = setTimeout(function(){

            uisetcolor(getRandomInt(0, 6));
            timercontrol = null;

        }, 200);
        
    } else if (index === 2) {
        
        document.getElementById("buttongreen").style.display = "none";
        checkcolor(5);
        timercontrol = setTimeout(function(){

            uisetcolor(getRandomInt(0, 6));
            timercontrol = null;

        }, 200);
        
    } else if (index === 3) {
        
        document.getElementById("buttonyellow").style.display = "none";
        checkcolor(5);
        timercontrol = setTimeout(function(){

            uisetcolor(getRandomInt(0, 6));
            timercontrol = null;

        }, 200);
        
    } else if (index === 4) {
        
        document.getElementById("buttonorange").style.display = "none";
        checkcolor(5);
        timercontrol = setTimeout(function(){

            uisetcolor(getRandomInt(0, 6));
            timercontrol = null;

        }, 200);
        
    } else if (index === 5) {
        
        document.getElementById("buttonred").style.display = "none";
        checkcolor(5);
        timercontrol = setTimeout(function(){

            uisetcolor(getRandomInt(0, 6));
            timercontrol = null;

        }, 200);
        
    } else if (index === 6) {
        
        document.getElementById("buttonchocolate").style.display = "none";
        checkcolor(5);
        timercontrol = setTimeout(function(){

            uisetcolor(getRandomInt(0, 6));
            timercontrol = null;

        }, 200);
        
    };
    
};

function clickanimation(indexanimation) {
    
    if (i[1] === 0) {
        
        if (indexanimation === 0) {
            
            document.getElementById("buttonlilac").style.display = "none";
            
        } else if (indexanimation === 1) {
            
            document.getElementById("buttonlilac").style.display = "inline";
            
        };
        
    } else if (i[1] === 1) {
        
        if (indexanimation === 0) {
            
            document.getElementById("buttonblue").style.display = "none";
            
        } else if (indexanimation === 1) {
            
            document.getElementById("buttonblue").style.display = "inline";
            
        };
        
    } else if (i[1] === 2) {
        
        if (indexanimation === 0) {
            
            document.getElementById("buttongreen").style.display = "none";
            
        } else if (indexanimation === 1) {
            
            document.getElementById("buttongreen").style.display = "inline";
            
        };
        
    } else if (i[1] === 3) {
        
        if (indexanimation === 0) {
            
            document.getElementById("buttonyellow").style.display = "none";
            
        } else if (indexanimation === 1) {
            
            document.getElementById("buttonyellow").style.display = "inline";
            
        };
        
    } else if (i[1] === 4) {
        
        if (indexanimation === 0) {
            
            document.getElementById("buttonorange").style.display = "none";
            
        } else if (indexanimation === 1) {
            
            document.getElementById("buttonorange").style.display = "inline";
            
        };
        
    } else if (i[1] === 5) {
        
        if (indexanimation === 0) {
            
            document.getElementById("buttonred").style.display = "none";
            
        } else if (indexanimation === 1) {
            
            document.getElementById("buttonred").style.display = "inline";
            
        };
        
    } else if (i[1] === 6) {
        
        if (indexanimation === 0) {
            
            document.getElementById("buttonchocolate").style.display = "none";
            
        } else if (indexanimation === 1) {
            
            document.getElementById("buttonchocolate").style.display = "inline";
            
        };
        
    };
    
};