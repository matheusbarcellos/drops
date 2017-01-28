var lives = 3;
var minutes = 3;
var seconds = 0;
var timerlives = null;
var showinglives = false;

function retrievelives() {
    
    if (localStorage.lives) {
        
        lives = Number(localStorage.lives);
        
    } else {
        
        localStorage.lives = String(lives);  
        
    };
    
};

function retrievetime() {
    
    if (localStorage.minutes) {
        
        minutes = Number(localStorage.minutes);
        
    } else {
        
        localStorage.minutes = String(minutes);  
        
    };
    
    if (localStorage.seconds) {
        
        seconds = Number(localStorage.seconds);
        
    } else {
        
        localStorage.seconds = String(seconds);  
        
    };
    
};

function lifetimer() {
    
    timerlives = setInterval(function(){
        
        if ((minutes >= 0) && (seconds > 0)) {
            
            seconds--;
            localStorage.seconds = String(seconds); 
            
        } else if ((minutes > 0) && (seconds === 0)) {
            
            minutes--;
            localStorage.minutes = String(minutes);
            seconds = 59;
            localStorage.seconds = String(seconds);
            
        } else if ((minutes === 0) && (seconds === 0)) {
            
            lives = 3;
            localStorage.lives = String(lives);
            minutes = 3;
            localStorage.minutes = String(minutes);
            seconds = 0;
            localStorage.seconds = String(seconds);
            hidelives();
            clearInterval(timerlives);
            timerlives = null;
            
        };
        
    }, 1000);
    
};

function showlives() {
    
    showinglives = true;
    
    document.getElementById("profile").style.opacity = "0.25";
    document.getElementById("profile").style.filter  = 'alpha(opacity=25)';
    document.getElementById("game").style.opacity = "0.25";
    document.getElementById("game").style.filter  = 'alpha(opacity=25)';
    document.getElementById("control").style.opacity = "0.25";
    document.getElementById("control").style.filter  = 'alpha(opacity=25)';
    document.getElementById("reward").style.opacity = "0.25";
    document.getElementById("reward").style.filter  = 'alpha(opacity=25)';
    document.getElementById("spread").style.opacity = "0.25";
    document.getElementById("spread").style.filter  = 'alpha(opacity=25)';
    document.getElementById("leaderboard").style.opacity = "0.25";
    document.getElementById("leaderboard").style.filter  = 'alpha(opacity=25)';
    
    document.getElementById("lives").style.display = "inline";
    
    
    //if ((ads === true) && (lives === 0)) {
        
        //document.getElementById("adbutton").style.display = "inline";
        
    //} else {
        
        document.getElementById("adbutton").style.display = "none";
        
    //};
    
    if (lives === 3) {
        
        document.getElementById("lifetimercontainer").style.display = "none";
        
        document.getElementById("three").style.display = "inline";
        document.getElementById("two").style.display = "none";
        document.getElementById("one").style.display = "none";
        document.getElementById("zero").style.display = "none";
        
        setTimeout(function() {
            
            hidelives();
            
        }, 2000);
        
    } else if (lives === 2) {
        
        document.getElementById("lifetimercontainer").style.display = "none";
        
        document.getElementById("three").style.display = "none";
        document.getElementById("two").style.display = "inline";
        document.getElementById("one").style.display = "none";
        document.getElementById("zero").style.display = "none";
        
        setTimeout(function() {
            
            hidelives();
            if (ads === true) {
                
                if(AdMob) AdMob.showInterstitial(); 
                adloaded = false;
                
            };
            
        }, 2000);
        
    } else if (lives === 1) {
        
        document.getElementById("lifetimercontainer").style.display = "none";
        
        document.getElementById("three").style.display = "none";
        document.getElementById("two").style.display = "none";
        document.getElementById("one").style.display = "inline";
        document.getElementById("zero").style.display = "none";
        
        setTimeout(function() {
            
            hidelives();
            if (ads === true) {
                
                if(AdMob) AdMob.showInterstitial(); 
                adloaded = false;
                
            };
            
        }, 2000);
        
    } else if (lives === 0) {
        
        document.getElementById("lifetimercontainer").style.display = "inline";
        
        document.getElementById("three").style.display = "none";
        document.getElementById("two").style.display = "none";
        document.getElementById("one").style.display = "none";
        document.getElementById("zero").style.display = "inline";
        
        lifetimer();
        
    };
    
};

function hidelives() {
    
    showinglives = false;
    
    document.getElementById("lives").style.display = "none";
    
    document.getElementById("profile").style.opacity = "1";
    document.getElementById("profile").style.filter  = 'alpha(opacity=100)';
    document.getElementById("game").style.opacity = "1";
    document.getElementById("game").style.filter  = 'alpha(opacity=100)';
    document.getElementById("control").style.opacity = "1";
    document.getElementById("control").style.filter  = 'alpha(opacity=100)';
    document.getElementById("reward").style.opacity = "1";
    document.getElementById("reward").style.filter  = 'alpha(opacity=100)';
    document.getElementById("spread").style.opacity = "1";
    document.getElementById("spread").style.filter  = 'alpha(opacity=100)'; 
    document.getElementById("leaderboard").style.opacity = "1";
    document.getElementById("leaderboard").style.filter  = 'alpha(opacity=100)';
    
};

function adreward() {
    
    //if(AdMob) AdMob.showRewardVideoAd(); 
    //adloadedreward = false;
    lives = 3;
    localStorage.lives = String(lives);
    minutes = 3;
    localStorage.minutes = String(minutes);
    seconds = 0;
    localStorage.seconds = String(seconds);
    hidelives();
    clearInterval(timerlives);
    timerlives = null;
    
};