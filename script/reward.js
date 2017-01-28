score = 0;
scorerecord = 0;
timerflash = null;
timerover = null;

var audiogoodjob = new Audio();
    audiogoodjob.src = Modernizr.audio.ogg ? 'audios/goodjob.ogg' : Modernizr.audio.mp3 ? 'audios/goodjob.mp3' :
    audiogoodjob.volume = 1;
var audiofail = new Audio();
    audiofail.src = Modernizr.audio.ogg ? 'audios/fail.ogg' : Modernizr.audio.mp3 ? 'audios/fail.mp3' :
    audiofail.volume = 1;
var audiosuccess = new Audio();
    audiosuccess.src = Modernizr.audio.ogg ? 'audios/success.ogg' : Modernizr.audio.mp3 ? 'audios/success.mp3' :
    audiosuccess.volume = 1;

var audiogoodjobPhoneGap;
var audiofailPhoneGap;
var audiosuccessPhoneGap;

function playaudioPhoneGap(index) {
    
    if (index === 0) {
        
        audiogoodjobPhoneGap.play();
        
    } else if (index === 1) {
        
        navigator.vibrate(1000);
        audiofailPhoneGap.play();
        
    } else if (index === 2) {
        
        audiosuccessPhoneGap.play();
        
    };
    
};

function playaudio(index) {
    
    if (index === 0) {
        
        /*
        if (audiogoodjob.currentTime != null) {

            audiogoodjob.pause();
            audiogoodjob.currentTime = 0;

        };
        */
        
        audiogoodjob.play();
        
    } else if (index === 1) {
        
        /*
        if (audiofail.currentTime != null) {

            audiofail.pause();
            audiofail.currentTime = 0;

        };
        */
        
        audiofail.play();
        
    } else if (index === 2) {
        
        /*
        if (audiosuccess.currentTime != null) {

            audiosuccess.pause();
            audiosuccess.currentTime = 0;

        };
        */
        
        audiosuccess.play();
        
    };
    
};

function goodjob() {
    
    if (android === false) {
        
        playaudio(2);
        
    } else {
        
        playaudioPhoneGap(2);
        
    };
    
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
    document.getElementById("scoreplus").style.display = "inline";
    timergameover(1);
    
    score++;
    document.getElementById("score").innerHTML = score;
    document.getElementById("flash").style.display = "inline";
    document.getElementById("flash").className = "active";
    timergordon();
    
};

function fail() {
    
    if (android === false) {
        
        playaudio(1);
        
    } else {
        
        playaudioPhoneGap(1);
        
    };
    
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
    
    if (score <= scorerecord) {
        
        document.getElementById("gameover").style.display = "inline";
        timergameover(0);
        
    } else {
        
        document.getElementById("newrecord").style.display = "inline";
        timergameover(0);
        
    }
    
    if (connected === true) {

        getScores(function(){});

    };
    
    retrievescorerecord();
    
    if ((score > 0) && (score < scorerecord)) {
        
        document.getElementById("flash").style.display = "inline";
        document.getElementById("flash").className = "activefail";
        timergordon(); 
        
    } else if (score > scorerecord) {
        
        document.getElementById("flash").style.display = "inline";
        document.getElementById("flash").className = "activefailbutnotfail";
        timergordon(); 
        scorerecord = score;
        localStorage.scorerecord = String(scorerecord);        
        setScore();
        
        document.getElementById("scorerecord").innerHTML = scorerecord;
        
    };
    
    speed = 500;
    
};

function timergordon() {
    
    timerflash = setTimeout(function(){

        document.getElementById("flash").className = "";
        document.getElementById("flash").style.display = "none";
        timerflash = null;

    }, 1000);
    
};

function timergameover(index) {
    
    timerover = setTimeout(function(){

        if (index === 0) {
            
            score = 0;
            speed = 500;
            clearInterval(timer);
            timerchangecolor();
            
        };
        
        document.getElementById("score").innerHTML = score;
        document.getElementById("gameover").style.display = "none";
        document.getElementById("scoreplus").style.display = "none";
        document.getElementById("newrecord").style.display = "none";
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
        timerover = null;

    }, 2000);
    
};