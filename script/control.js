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

function hint(type) {
    
    if (type === 0) {
        
        if (ii === 0) {
            document.getElementById("circles").style.opacity = "0.25";
            document.getElementById("circles").style.filter  = 'alpha(opacity=25)';
            
        } else if (ii === 6) {
            
            document.getElementById("circles").style.opacity = "0.25";
            document.getElementById("circles").style.filter  = 'alpha(opacity=25)';
            
        } else {
            
            document.getElementById("circles").style.opacity = "0.25";
            document.getElementById("circles").style.filter  = 'alpha(opacity=25)';
            
        };
        
    } else if (type === 1) {
        
        if (ii === 0) {
            
            
            document.getElementById("circles").style.opacity = "1";
            document.getElementById("circles").style.filter  = 'alpha(opacity=100)';
            
            
        } else if (ii === 6) {
            
            document.getElementById("circles").style.opacity = "1";
            document.getElementById("circles").style.filter  = 'alpha(opacity=100)';
            
        } else {
            
            document.getElementById("circles").style.opacity = "1";
            document.getElementById("circles").style.filter  = 'alpha(opacity=100)';
            
        };
        
        document.getElementById("droplilac").style.opacity = "1";
        document.getElementById("droplilac").style.filter  = 'alpha(opacity=100)';

        document.getElementById("dropblue").style.opacity = "1";
        document.getElementById("dropblue").style.filter  = 'alpha(opacity=100)';

        document.getElementById("dropgreen").style.opacity = "1";
        document.getElementById("dropgreen").style.filter  = 'alpha(opacity=100)';

        document.getElementById("dropyellow").style.opacity = "1";
        document.getElementById("dropyellow").style.filter  = 'alpha(opacity=100)';

        document.getElementById("droporange").style.opacity = "1";
        document.getElementById("droporange").style.filter  = 'alpha(opacity=100)';

        document.getElementById("dropred").style.opacity = "1";
        document.getElementById("dropred").style.filter  = 'alpha(opacity=100)';

        document.getElementById("dropchocolate").style.opacity = "1";
        document.getElementById("dropchocolate").style.filter  = 'alpha(opacity=100)';
        
    };
    
};