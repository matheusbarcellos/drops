var i = [0, 0], ii = 0;
var colorface = ["#C9B4E3", "#B1EBF7", "#BEFF95", "#FEFF99", "#FFCC8E", "#FD8181", "#8D563E"];
var colorback = ["#C19EF2", "#99DBF4", "#BEE987", "#FEF27A", "#F6C681", "#D78181", "#71492D"];
var timer = null;
var speed = 500;
var timeranimation = null;
var a = 0;
var speedanimation = 400;
var userAgent = null;
var ads = false;
var android = false;
var adloaded = false;
var nobadge = false;
var ismobile = false;
var timerinterstitial = null;

var admobid = {
      interstitial: 'ca-app-pub-8981199425859729/8716144697'
      //reward: 'ca-app-pub-8981199425859729/9056588291'
    };

function timerchangecolor() {
    
    timer = setInterval(function(){
        
        uichangecolor(6);

    }, speed);
    
};

function uichangecolor(reset) {
    
    if ((i[0] + 1) > reset) {

        i[0] = 0;

    } else {

        i[0]++;

    };
    
    if (ii === 0) {

        document.getElementById("buglilac").style.display = "none";
        svgdroplilac.getElementById("dropsface").setAttribute("fill", colorface[i[0]]);
        svgdroplilac.getElementById("dropsback1").setAttribute("fill", colorback[i[0]]);
        svgdroplilac.getElementById("dropsback2").setAttribute("fill", colorback[i[0]]);
        svgdroplilac.getElementById("dropsback3").setAttribute("fill", colorback[i[0]]);
        svgdroplilac.getElementById("dropsback4").setAttribute("fill", colorback[i[0]]);
        svgdroplilac.getElementById("dropsback5").setAttribute("fill", colorback[i[0]]);
        svgdroplilac.getElementById("dropsback6").setAttribute("fill", colorback[i[0]]);
        svgdroplilac.getElementById("dropsback7").setAttribute("fill", colorback[i[0]]);
        svgdroplilac.getElementById("dropsback8").setAttribute("fill", colorback[i[0]]);
        svgdroplilac.getElementById("dropsback9").setAttribute("fill", colorback[i[0]]);
        
        if ((ads === true) && (adloaded === false)) {
            
            if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
            adloaded = true;
            
        };
        
    } else if (ii === 1) {
        
        document.getElementById("profile").style.opacity = "0.25";
        document.getElementById("profile").style.filter  = 'alpha(opacity=25)';
        document.getElementById("reward").style.opacity = "0.25";
        document.getElementById("reward").style.filter  = 'alpha(opacity=25)';
        document.getElementById("spread").style.opacity = "0.25";
        document.getElementById("spread").style.filter  = 'alpha(opacity=25)';
        document.getElementById("leaderboard").style.opacity = "0.25";
        document.getElementById("leaderboard").style.filter  = 'alpha(opacity=25)';
        document.getElementById("bugblue").style.display = "none";
        svgdropblue.getElementById("dropsface").setAttribute("fill", colorface[i[0]]);
        svgdropblue.getElementById("dropsback1").setAttribute("fill", colorback[i[0]]);
        svgdropblue.getElementById("dropsback2").setAttribute("fill", colorback[i[0]]);
        svgdropblue.getElementById("dropsback3").setAttribute("fill", colorback[i[0]]);
        svgdropblue.getElementById("dropsback4").setAttribute("fill", colorback[i[0]]);
        svgdropblue.getElementById("dropsback5").setAttribute("fill", colorback[i[0]]);
        svgdropblue.getElementById("dropsback6").setAttribute("fill", colorback[i[0]]);
        svgdropblue.getElementById("dropsback7").setAttribute("fill", colorback[i[0]]);
        svgdropblue.getElementById("dropsback8").setAttribute("fill", colorback[i[0]]);
        svgdropblue.getElementById("dropsback9").setAttribute("fill", colorback[i[0]]);
        
    } else if (ii === 2) {
        
        document.getElementById("buggreen").style.display = "none";
        svgdropgreen.getElementById("dropsface").setAttribute("fill", colorface[i[0]]);
        svgdropgreen.getElementById("dropsback1").setAttribute("fill", colorback[i[0]]);
        svgdropgreen.getElementById("dropsback2").setAttribute("fill", colorback[i[0]]);
        svgdropgreen.getElementById("dropsback3").setAttribute("fill", colorback[i[0]]);
        svgdropgreen.getElementById("dropsback4").setAttribute("fill", colorback[i[0]]);
        svgdropgreen.getElementById("dropsback5").setAttribute("fill", colorback[i[0]]);
        svgdropgreen.getElementById("dropsback6").setAttribute("fill", colorback[i[0]]);
        svgdropgreen.getElementById("dropsback7").setAttribute("fill", colorback[i[0]]);
        svgdropgreen.getElementById("dropsback8").setAttribute("fill", colorback[i[0]]);
        svgdropgreen.getElementById("dropsback9").setAttribute("fill", colorback[i[0]]);
        
    } else if (ii === 3) {
        
        document.getElementById("bugyellow").style.display = "none";
        svgdropyellow.getElementById("dropsface").setAttribute("fill", colorface[i[0]]);
        svgdropyellow.getElementById("dropsback1").setAttribute("fill", colorback[i[0]]);
        svgdropyellow.getElementById("dropsback2").setAttribute("fill", colorback[i[0]]);
        svgdropyellow.getElementById("dropsback3").setAttribute("fill", colorback[i[0]]);
        svgdropyellow.getElementById("dropsback4").setAttribute("fill", colorback[i[0]]);
        svgdropyellow.getElementById("dropsback5").setAttribute("fill", colorback[i[0]]);
        svgdropyellow.getElementById("dropsback6").setAttribute("fill", colorback[i[0]]);
        svgdropyellow.getElementById("dropsback7").setAttribute("fill", colorback[i[0]]);
        svgdropyellow.getElementById("dropsback8").setAttribute("fill", colorback[i[0]]);
        svgdropyellow.getElementById("dropsback9").setAttribute("fill", colorback[i[0]]);
        
    } else if (ii === 4) {
        
        document.getElementById("bugorange").style.display = "none";
        svgdroporange.getElementById("dropsface").setAttribute("fill", colorface[i[0]]);
        svgdroporange.getElementById("dropsback1").setAttribute("fill", colorback[i[0]]);
        svgdroporange.getElementById("dropsback2").setAttribute("fill", colorback[i[0]]);
        svgdroporange.getElementById("dropsback3").setAttribute("fill", colorback[i[0]]);
        svgdroporange.getElementById("dropsback4").setAttribute("fill", colorback[i[0]]);
        svgdroporange.getElementById("dropsback5").setAttribute("fill", colorback[i[0]]);
        svgdroporange.getElementById("dropsback6").setAttribute("fill", colorback[i[0]]);
        svgdroporange.getElementById("dropsback7").setAttribute("fill", colorback[i[0]]);
        svgdroporange.getElementById("dropsback8").setAttribute("fill", colorback[i[0]]);
        svgdroporange.getElementById("dropsback9").setAttribute("fill", colorback[i[0]]);
        
    } else if (ii === 5) {
        
        document.getElementById("bugred").style.display = "none";
        svgdropred.getElementById("dropsface").setAttribute("fill", colorface[i[0]]);
        svgdropred.getElementById("dropsback1").setAttribute("fill", colorback[i[0]]);
        svgdropred.getElementById("dropsback2").setAttribute("fill", colorback[i[0]]);
        svgdropred.getElementById("dropsback3").setAttribute("fill", colorback[i[0]]);
        svgdropred.getElementById("dropsback4").setAttribute("fill", colorback[i[0]]);
        svgdropred.getElementById("dropsback5").setAttribute("fill", colorback[i[0]]);
        svgdropred.getElementById("dropsback6").setAttribute("fill", colorback[i[0]]);
        svgdropred.getElementById("dropsback7").setAttribute("fill", colorback[i[0]]);
        svgdropred.getElementById("dropsback8").setAttribute("fill", colorback[i[0]]);
        svgdropred.getElementById("dropsback9").setAttribute("fill", colorback[i[0]]);
        
    } else if (ii === 6) {
    
        document.getElementById("reward").style.opacity = "1";
        document.getElementById("reward").style.filter  = 'alpha(opacity=100)';
        document.getElementById("bugchocolate").style.display = "none";
        svgdropchocolate.getElementById("dropsface").setAttribute("fill", colorface[i[0]]);
        svgdropchocolate.getElementById("dropsback1").setAttribute("fill", colorback[i[0]]);
        svgdropchocolate.getElementById("dropsback2").setAttribute("fill", colorback[i[0]]);
        svgdropchocolate.getElementById("dropsback3").setAttribute("fill", colorback[i[0]]);
        svgdropchocolate.getElementById("dropsback4").setAttribute("fill", colorback[i[0]]);
        svgdropchocolate.getElementById("dropsback5").setAttribute("fill", colorback[i[0]]);
        svgdropchocolate.getElementById("dropsback6").setAttribute("fill", colorback[i[0]]);
        svgdropchocolate.getElementById("dropsback7").setAttribute("fill", colorback[i[0]]);
        svgdropchocolate.getElementById("dropsback8").setAttribute("fill", colorback[i[0]]);
        svgdropchocolate.getElementById("dropsback9").setAttribute("fill", colorback[i[0]]);
        
    };
    
};

function uisetcolor(value) {
    
    i[1] = value;
    
    if (i[1] === 0) {
        
        document.getElementById("buttonlilac").style.display = "inline";
        
    } else if (i[1] === 1) {
        
        document.getElementById("buttonblue").style.display = "inline";
        
    } else if (i[1] === 2) {
        
        document.getElementById("buttongreen").style.display = "inline";
        
    } else if (i[1] === 3) {
        
        document.getElementById("buttonyellow").style.display = "inline";
        
    } else if (i[1] === 4) {
        
        document.getElementById("buttonorange").style.display = "inline";
        
    } else if (i[1] === 5) {
        
        document.getElementById("buttonred").style.display = "inline";
        
    } else if (i[1] === 6) {
        
        document.getElementById("buttonchocolate").style.display = "inline";
        
    };
    
};

function checkcolor(reset) {
    
  if (i[0] === i[1]) {
    
    if (ii > reset) {
        
        ii = 0;
        goodjob();
        speedup();
        document.getElementById("buglilac").style.display = "inline";
        document.getElementById("bugblue").style.display = "inline";
        document.getElementById("buggreen").style.display = "inline";
        document.getElementById("bugyellow").style.display = "inline";
        document.getElementById("bugorange").style.display = "inline";
        document.getElementById("bugred").style.display = "inline";
        document.getElementById("bugchocolate").style.display = "inline";
        
    } else {
        
        ii++;
        if (android === false) {

            playaudio(0);

        } else {

            playaudioPhoneGap(0);

        };
        
    };    
      
  } else {
      
        fail();
      
        if ((score > 0) && (score < scorerecord)) {
            
            timershowlives = setTimeout(function(){

                showlives();
                timershowlives = null;

            }, 2000);

            if (lives > 0) {

                lives--;
                localStorage.lives = String(lives);

            };

        } else if ((ads === true) && ((ii >= 1) || (score > 0))) {
            
            timerinterstitial = setTimeout(function() {
            
                if(AdMob) AdMob.showInterstitial(); 
                adloaded = false;
                timerinterstitial = null;

            }, 2000);
            
        };
      
        ii = 0;
        document.getElementById("buglilac").style.display = "inline";
        document.getElementById("bugblue").style.display = "inline";
        document.getElementById("buggreen").style.display = "inline";
        document.getElementById("bugyellow").style.display = "inline";
        document.getElementById("bugorange").style.display = "inline";
        document.getElementById("bugred").style.display = "inline";
        document.getElementById("bugchocolate").style.display = "inline";
      
  };
    
};

function speedup() {

    if (score === 0) {
    
        speed = 500;
        clearInterval(timer);
        timerchangecolor();
        
    } else if (speed === 500) {
      
      speed = 400;
      clearInterval(timer);
      timerchangecolor();
      
  } else if (speed === 400) {
      
      speed = 300;
      clearInterval(timer);
      timerchangecolor();
      
  } else if (iOS === true) {
      
      if (speed === 300) {
      
          speed = 200;
          clearInterval(timer);
          timerchangecolor();

      } else if (speed === 200) {
      
          speed = 150;
          clearInterval(timer);
          timerchangecolor();

      };
      
  } else if (speed === 300) {
      
      speed = 250;
      clearInterval(timer);
      timerchangecolor();
      
  };
    
};

function speedupanimation() {
    
  speedanimation = 300;
  clearInterval(timeranimation);
  calltimeranimation();
    
};

function calltimeranimation() {
    
    timeranimation = setInterval(function(){
        
        if (buttonanimation === true) {
            
            if (a === 0) {
            
                clickanimation(0);
                a++;

            } else if (a === 1) {

                clickanimation(1);
                a = 0;

            };
            
        };

    }, speedanimation);
    
};

function itsalive() {
    /*
    if (!window.cordova) {
        facebookConnectPlugin.browserInit(appId);
    };
    */
    device();
    retrievestatus();
    retrievelives();
    retrievetime();
    
    getdroplilac = document.getElementById("droplilac");
    getdropblue = document.getElementById("dropblue");
    getdropgreen = document.getElementById("dropgreen");
    getdropyellow = document.getElementById("dropyellow");
    getdroporange = document.getElementById("droporange");
    getdropred = document.getElementById("dropred");
    getdropchocolate = document.getElementById("dropchocolate");

    lilac = window.getComputedStyle(getdroplilac);
    blue = window.getComputedStyle(getdropblue);
    green = window.getComputedStyle(getdropgreen);
    yellow = window.getComputedStyle(getdropyellow);
    orange = window.getComputedStyle(getdroporange);
    red = window.getComputedStyle(getdropred);
    chocolate = window.getComputedStyle(getdropchocolate);

    svgdroplilac = getdroplilac.contentDocument;
    svgdropblue = getdropblue.contentDocument;
    svgdropgreen = getdropgreen.contentDocument;
    svgdropyellow = getdropyellow.contentDocument;
    svgdroporange = getdroporange.contentDocument;
    svgdropred = getdropred.contentDocument;
    svgdropchocolate = getdropchocolate.contentDocument;
    
    timerchangecolor();
    uisetcolor(getRandomInt(0, 6));
    retrievescorerecord();
    
    calltimeranimation();
    
    setTimeout(function(){

        document.getElementById("loading").style.display = "none";
        showlives();

    }, 2000);

    window.requestAnimationFrame(loop);
    
};

var loop = function() {
    
    if ((window.innerWidth) < (window.innerHeight)) {
        
        orientationhandler(0);
        
    } else {
        
        orientationhandler(1);
        
        if ((loggedin === 1) && (loginscores === true)) {
        
           renderScores();

        };
        
    };
    
    if (timerlives != null) {
        
        if (seconds > 9) {
            
            document.getElementById("lifetimer").innerHTML = minutes+":"+seconds;
            
        } else {
            
            document.getElementById("lifetimer").innerHTML = minutes+":0"+seconds;
            
        };
        
    };
        
    window.requestAnimationFrame(loop);

};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function device() {
    
    userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {

        document.getElementById("notmobile").style.display = "none";
        document.getElementById("mobile").style.display = "inline";
        document.getElementById("googleplaybadge").style.display = "none";
        nobadge = true;
        ismobile = true;
        clickdelay();

    } else if (/android/i.test(userAgent)) {
        
        document.getElementById("notmobile").style.display = "none";
        document.getElementById("mobile").style.display = "inline";
        document.getElementById("googleplaybadge").style.display = "inline";
        //nobadge = true;
        ismobile = true;
        //ads = true;
        //android = true;
        //audiogoodjobPhoneGap = new Media('/android_asset/www/audios/goodjob.mp3', function () {console.log("playaudioPhoneGap():Audio Success");}, function (err) {alert(err);});
        //audiofailPhoneGap = new Media('/android_asset/www/audios/fail.mp3', function () {console.log("playaudioPhoneGap():Audio Success");}, function (err) {alert(err);});
        //audiosuccessPhoneGap = new Media('/android_asset/www/audios/success.mp3', function () {console.log("playaudioPhoneGap():Audio Success");}, function (err) {alert(err);}); 
        clickdelay();

    } else if (/iPhone|iPod/.test(userAgent) && !window.MSStream) {

        document.getElementById("notmobile").style.display = "none";
        document.getElementById("mobile").style.display = "inline";
        document.getElementById("googleplaybadge").style.display = "none";
        nobadge = true;
        ismobile = true;
        //speedup();
        //speedupanimation();
        clickdelay();

    } else if (/iPad/.test(userAgent) && !window.MSStream) {

        document.getElementById("notmobile").style.display = "inline";
        document.getElementById("mobile").style.display = "none";
        document.getElementById("googleplaybadge").style.display = "none";
        nobadge = true;
        //speedup();
        //speedupanimation();
        clickdelay();

    } else {
        
        document.getElementById("googleplaybadge").style.display = "inline";  
        
    };
    
};

function clickdelay() {
    
    document.getElementById("buttonlilac").onclick = "";
    document.getElementById("buttonblue").onclick = "";
    document.getElementById("buttongreen").onclick = "";
    document.getElementById("buttonyellow").onclick = "";
    document.getElementById("buttonorange").onclick = "";
    document.getElementById("buttonred").onclick = "";
    document.getElementById("buttonchocolate").onclick = "";
    document.getElementById("buttondown").onclick = "";
    
};

function orientationhandler(index) {
  
    
        
        if (index === 0) {

            // Profile
            document.getElementById("pic").className = "verticalprofilepic";
            document.getElementById("mask").className = "verticalprofilepic";
            document.getElementById("loginbutton").className = "verticalprofilepic";
            
            
            document.getElementById("pic").style.width = "8.726851851851852%";
            document.getElementById("pic").style.maxWidth = "188.5";
            
            document.getElementById("mask").style.width = "13.54166666666667%";
            document.getElementById("mask").style.maxWidth = "292.5";
            
            document.getElementById("loginbutton").style.width = "8.726851851851852%";
            document.getElementById("loginbutton").style.maxWidth = "188.5";
            document.getElementById("loginbutton").style.top = "4.716276041666667%";
            
            // Game
            // width: 12.15277777777778%;
            document.getElementById("lilac").className = "verticaldropbackground verticallilac";
            document.getElementById("blue").className = "verticaldropbackground verticalblue";
            document.getElementById("green").className = "verticaldropbackground verticalgreen";
            document.getElementById("yellow").className = "verticaldropbackground verticalyellow";
            document.getElementById("orange").className = "verticaldropbackground verticalorange";
            document.getElementById("red").className = "verticaldropbackground verticalred";
            document.getElementById("chocolate").className = "verticaldropbackground verticalchocolate";
            
            document.getElementById("droplilac").className = "verticaldrop verticallilac";
            document.getElementById("dropblue").className = "verticaldrop verticalblue";
            document.getElementById("dropgreen").className = "verticaldrop verticalgreen";
            document.getElementById("dropyellow").className = "verticaldrop verticalyellow";
            document.getElementById("droporange").className = "verticaldrop verticalorange";
            document.getElementById("dropred").className = "verticaldrop verticalred";
            document.getElementById("dropchocolate").className = "verticaldrop verticalchocolate";
            
            document.getElementById("buglilac").className = "verticalbugdropbackground verticallilac";
            document.getElementById("bugblue").className = "verticalbugdropbackground verticalblue";
            document.getElementById("buggreen").className = "verticalbugdropbackground verticalgreen";
            document.getElementById("bugyellow").className = "verticalbugdropbackground verticalyellow";
            document.getElementById("bugorange").className = "verticalbugdropbackground verticalorange";
            document.getElementById("bugred").className = "verticalbugdropbackground verticalred";
            document.getElementById("bugchocolate").className = "verticalbugdropbackground verticalchocolate";
            
            // Control            
            document.getElementById("buttonlilac").className = "verticalbutton verticalbuttonup";
            document.getElementById("buttonblue").className = "verticalbutton verticalbuttonup";
            document.getElementById("buttongreen").className = "verticalbutton verticalbuttonup";
            document.getElementById("buttonyellow").className = "verticalbutton verticalbuttonup";
            document.getElementById("buttonorange").className = "verticalbutton verticalbuttonup";
            document.getElementById("buttonred").className = "verticalbutton verticalbuttonup";
            document.getElementById("buttonchocolate").className = "verticalbutton verticalbuttonup";
            
            document.getElementById("buttondown").className = "verticalbutton verticalbuttondown";
            
            
            document.getElementById("buttondown").style.width = "auto";
            document.getElementById("buttondown").style.maxWidth = "552";
            
            // Game Over
            document.getElementById("gameovertext").style.width = "51.42777777777778%";
            document.getElementById("gameovertext").style.maxWidth = "1110.84";
            document.getElementById("gameovertext").style.top = "50%";
            
            // Score +1
            document.getElementById("scoreplustext").style.width = "34.97087962962963%";
            document.getElementById("scoreplustext").style.maxWidth = "755.371";
            document.getElementById("scoreplustext").style.top = "50%";
            
            // New Record
            document.getElementById("newrecordtext").style.width = "64.29712962962963%";
            document.getElementById("newrecordtext").style.maxWidth = "1388.818";
            document.getElementById("newrecordtext").style.top = "50%";
            
            // Reward
            document.getElementById("dropmirrorreward").style.width = "5.141203703703704%";
            document.getElementById("dropmirrorreward").style.maxWidth = "111.05";
            document.getElementById("dropmirrorreward").style.top = "4.705677083333333%";
            document.getElementById("dropmirrorreward").style.left = "6.737268518518519%";
            
            document.getElementById("scorecontainer").style.width = "31.06481481481481%";
            document.getElementById("scorecontainer").style.maxWidth = "671";
            document.getElementById("scorecontainer").style.top = "4.716276041666667%";
            document.getElementById("scorecontainer").style.left = "29.97685185185185%"; 
            
            document.getElementById("score").className = "verticalscoretext";
            
            document.getElementById("dropmirrorrecord").style.width = "5.141203703703704%";
            document.getElementById("dropmirrorrecord").style.maxWidth = "111.05";
            document.getElementById("dropmirrorrecord").style.top = "4.705677083333333%";
            document.getElementById("dropmirrorrecord").style.left = "93.75657407407407%";
            
            document.getElementById("scorecontainerrecord").style.width = "31.06481481481481%";
            document.getElementById("scorecontainerrecord").style.maxWidth = "671";
            document.getElementById("scorecontainerrecord").style.top = "4.716276041666667%";
            document.getElementById("scorecontainerrecord").style.left = "70.11574074074074%";  
            
            document.getElementById("scorerecord").className = "verticalscoretext";
            
            
            // Spread            
            if (ismobile === true) {
                
                if (nobadge === false) {
                
                    document.getElementById("googleplaybadge").className = "mobileverticalbadge";

                };
                
                document.getElementById("messenger").className = "verticalspreadbutton";
                document.getElementById("whatsapp").className = "verticalspreadbutton";
                document.getElementById("line").className = "verticalspreadbutton";
                document.getElementById("kakao").className = "verticalspreadbutton";
                
                document.getElementById("kakao").style.left = "7.87037037037037%";
                document.getElementById("line").style.left = "21.01851851851852%";
                document.getElementById("whatsapp").style.left = "80.9400462962963%";
                document.getElementById("messenger").style.left = "92.62347222222222%";
                
            } else {
                
                if (nobadge === false) {
                
                    document.getElementById("googleplaybadge").className = "verticalbadge";
                    
                    document.getElementById("twitterweb").style.left = "80.9400462962963%";

                } else {
                    
                    document.getElementById("twitterweb").style.left = "7.87037037037037%";
                    
                };
                
                document.getElementById("messengerweb").className = "verticalspreadbutton";
                document.getElementById("twitterweb").className = "verticalspreadbutton";
                
                document.getElementById("messengerweb").style.left = "92.62347222222222%";
                
            };
            
            // Leaderboard
            document.getElementById("leaderboard").style.display = "none";
            
            
            //Life  
            if (showinglives === true) {
                
                document.getElementById("heart").style.width = "27.77777777777778%";
                document.getElementById("heart").style.maxWidth = "600";
                document.getElementById("heart").style.top = "50%";

                if (lives === 3) {

                    document.getElementById("three").style.width = "5.259259259259259%";
                    document.getElementById("three").style.maxWidth = "113.6";
                    document.getElementById("three").style.top = "49.47916666666667%";

                } else if (lives === 2) {

                    document.getElementById("two").style.width = "5.189814814814815%";
                    document.getElementById("two").style.maxWidth = "112.1";
                    document.getElementById("two").style.top = "49.47916666666667%";

                } else if (lives === 1) {

                    document.getElementById("one").style.width = "3.740740740740741%";
                    document.getElementById("one").style.maxWidth = "80.8";
                    document.getElementById("one").style.top = "49.47916666666667%";

                } else if (lives === 0) {

                    document.getElementById("lifetimercontainer").style.width = "26.67643518518519%";
                    document.getElementById("lifetimercontainer").style.maxWidth = "576.211";
                    document.getElementById("lifetimercontainer").style.top = "26.56901041666667%";

                    document.getElementById("lifetimer").className = "verticallifetimertext";

                    document.getElementById("zero").style.width = "5.62962962962963%";
                    document.getElementById("zero").style.maxWidth = "121.6";
                    document.getElementById("zero").style.top = "49.47916666666667%";

                };
                /*
                if (ads === true) {

                    document.getElementById("adbutton").style.width = "23.61111111111111%";
                    document.getElementById("adbutton").style.maxWidth = "510";
                    document.getElementById("adbutton").style.top = "74.19786458333333%";
                    document.getElementById("adbutton").style.left = "51.85185185185185%";

                };
                */
            };

        } else if (index === 1) {

            // Profile
            document.getElementById("pic").className = "profilepic";
            document.getElementById("mask").className = "profilepic";
            document.getElementById("loginbutton").className = "profilepic";
            
            
            document.getElementById("pic").style.width = "5.6640625%";
            document.getElementById("pic").style.maxWidth = "290";
            
            document.getElementById("mask").style.width = "8.80859375%";
            document.getElementById("mask").style.maxWidth = "451";
            
            document.getElementById("loginbutton").style.width = "5.6640625%";
            document.getElementById("loginbutton").style.maxWidth = "290";
            document.getElementById("loginbutton").style.top = "7.397777777777778%";
            
            // Game
            if (friendCache.scores.length <= 1) {
            
                document.getElementById("lilac").className = "nofriendsdropbackground lilac";
                document.getElementById("blue").className = "nofriendsdropbackground blue";
                document.getElementById("green").className = "nofriendsdropbackground green";
                document.getElementById("yellow").className = "nofriendsdropbackground yellow";
                document.getElementById("orange").className = "nofriendsdropbackground orange";
                document.getElementById("red").className = "nofriendsdropbackground red";
                document.getElementById("chocolate").className = "nofriendsdropbackground chocolate";

                document.getElementById("droplilac").className = "nofriendsdrop lilac";
                document.getElementById("dropblue").className = "nofriendsdrop blue";
                document.getElementById("dropgreen").className = "nofriendsdrop green";
                document.getElementById("dropyellow").className = "nofriendsdrop yellow";
                document.getElementById("droporange").className = "nofriendsdrop orange";
                document.getElementById("dropred").className = "nofriendsdrop red";
                document.getElementById("dropchocolate").className = "nofriendsdrop chocolate";

                document.getElementById("buglilac").className = "nofriendsbugdropbackground lilac";
                document.getElementById("bugblue").className = "nofriendsbugdropbackground blue";
                document.getElementById("buggreen").className = "nofriendsbugdropbackground green";
                document.getElementById("bugyellow").className = "nofriendsbugdropbackground yellow";
                document.getElementById("bugorange").className = "nofriendsbugdropbackground orange";
                document.getElementById("bugred").className = "nofriendsbugdropbackground red";
                document.getElementById("bugchocolate").className = "nofriendsbugdropbackground chocolate";
                
            } else {
              
                document.getElementById("lilac").className = "dropbackground lilac";
                document.getElementById("blue").className = "dropbackground blue";
                document.getElementById("green").className = "dropbackground green";
                document.getElementById("yellow").className = "dropbackground yellow";
                document.getElementById("orange").className = "dropbackground orange";
                document.getElementById("red").className = "dropbackground red";
                document.getElementById("chocolate").className = "dropbackground chocolate";

                document.getElementById("droplilac").className = "drop lilac";
                document.getElementById("dropblue").className = "drop blue";
                document.getElementById("dropgreen").className = "drop green";
                document.getElementById("dropyellow").className = "drop yellow";
                document.getElementById("droporange").className = "drop orange";
                document.getElementById("dropred").className = "drop red";
                document.getElementById("dropchocolate").className = "drop chocolate";

                document.getElementById("buglilac").className = "bugdropbackground lilac";
                document.getElementById("bugblue").className = "bugdropbackground blue";
                document.getElementById("buggreen").className = "bugdropbackground green";
                document.getElementById("bugyellow").className = "bugdropbackground yellow";
                document.getElementById("bugorange").className = "bugdropbackground orange";
                document.getElementById("bugred").className = "bugdropbackground red";
                document.getElementById("bugchocolate").className = "bugdropbackground chocolate";
                
            };
            
            // Control  
            if (friendCache.scores.length <= 1) {
            
                document.getElementById("buttonlilac").className = "nofriendsbutton buttonup";
                document.getElementById("buttonblue").className = "nofriendsbutton buttonup";
                document.getElementById("buttongreen").className = "nofriendsbutton buttonup";
                document.getElementById("buttonyellow").className = "nofriendsbutton buttonup";
                document.getElementById("buttonorange").className = "nofriendsbutton buttonup";
                document.getElementById("buttonred").className = "nofriendsbutton buttonup";
                document.getElementById("buttonchocolate").className = "nofriendsbutton buttonup";

                document.getElementById("buttondown").className = "nofriendsbutton";
                
            } else {
              
                document.getElementById("buttonlilac").className = "button buttonup";
                document.getElementById("buttonblue").className = "button buttonup";
                document.getElementById("buttongreen").className = "button buttonup";
                document.getElementById("buttonyellow").className = "button buttonup";
                document.getElementById("buttonorange").className = "button buttonup";
                document.getElementById("buttonred").className = "button buttonup";
                document.getElementById("buttonchocolate").className = "button buttonup";

                document.getElementById("buttondown").className = "button";
                
            };
            
            
            document.getElementById("buttondown").style.width = "16.54296875%";
            document.getElementById("buttondown").style.maxWidth = "847";
            
            // Game Over
            document.getElementById("gameovertext").style.width = "33.37859375%";
            document.getElementById("gameovertext").style.maxWidth = "1708.984";
            document.getElementById("gameovertext").style.top = "45.16107638888889%";
            
            // Score +1
            document.getElementById("scoreplustext").style.width = "14.75333984375%";
            document.getElementById("scoreplustext").style.maxWidth = "755.371";
            document.getElementById("scoreplustext").style.top = "45.16107638888889%";
            
            // New Record
            document.getElementById("newrecordtext").style.width = "27.1253515625%";
            document.getElementById("newrecordtext").style.maxWidth = "1388.818";
            document.getElementById("newrecordtext").style.top = "45.16107638888889%";
            
            // Reward
            document.getElementById("dropmirrorreward").style.width = "3.4341796875%";
            document.getElementById("dropmirrorreward").style.maxWidth = "175.83";
            document.getElementById("dropmirrorreward").style.top = "7.745%";
            document.getElementById("dropmirrorreward").style.left = "3.67021484375%"; 
            
            document.getElementById("scorecontainer").style.width = "24.66796875%";
            document.getElementById("scorecontainer").style.maxWidth = "1263";
            document.getElementById("scorecontainer").style.top = "7.397777777777778%";
            document.getElementById("scorecontainer").style.left = "20.849609375%"; 
            
            document.getElementById("score").className = "scoretext";
            
            document.getElementById("dropmirrorrecord").style.width = "3.4341796875%";
            document.getElementById("dropmirrorrecord").style.maxWidth = "175.83";
            document.getElementById("dropmirrorrecord").style.top = "7.745%";
            document.getElementById("dropmirrorrecord").style.left = "96.3812890625%";
            
            document.getElementById("scorecontainerrecord").style.width = "24.66796875%";
            document.getElementById("scorecontainerrecord").style.maxWidth = "1263";
            document.getElementById("scorecontainerrecord").style.top = "7.397777777777778%";
            document.getElementById("scorecontainerrecord").style.left = "79.16015625%";
            
            document.getElementById("scorerecord").className = "scoretext";
            
            // Spread            
            if (ismobile === true) {
                
                if (nobadge === false) {
                
                    document.getElementById("googleplaybadge").className = "mobilebadge";

                };
                
                document.getElementById("messenger").className = "spreadbutton";
                document.getElementById("whatsapp").className = "spreadbutton";
                document.getElementById("line").className = "spreadbutton";
                document.getElementById("kakao").className = "spreadbutton";
                
                document.getElementById("kakao").style.left = "3.78125%";
                document.getElementById("line").style.left = "9.328125%";
                document.getElementById("whatsapp").style.left = "90.71009765625%";
                document.getElementById("messenger").style.left = "96.27025390625%";
                
            } else {
                
                if (nobadge === false) {
                
                    document.getElementById("googleplaybadge").className = "badge";
                    
                    document.getElementById("twitterweb").style.left = "90.71009765625%";

                } else {
                    
                    document.getElementById("twitterweb").style.left = "3.78125%";
                    
                };
                
                document.getElementById("messengerweb").className = "spreadbutton";
                document.getElementById("twitterweb").className = "spreadbutton";
                
                document.getElementById("messengerweb").style.left = "96.27025390625%";
                
            };
            
                        
            // Leaderboard
            document.getElementById("leaderboard").style.display = "inline";
            
            
            //Life
            if (showinglives === true) {
                
                document.getElementById("heart").style.width = "13.671875%";
                document.getElementById("heart").style.maxWidth = "700";
                /*
                if (ads === true) {

                    document.getElementById("lifetimercontainer").style.top = "20.85649305555556%";

                    document.getElementById("heart").style.top = "47.91666666666667%";

                    document.getElementById("adbutton").style.width = "11.9140625%";
                    document.getElementById("adbutton").style.maxWidth = "610";
                    document.getElementById("adbutton").style.top = "76.39576388888889%";
                    document.getElementById("adbutton").style.left = "50.9765625%";

                    if (lives === 3) {

                        document.getElementById("three").style.width = "2.624453125%";
                        document.getElementById("three").style.maxWidth = "134.372";
                        document.getElementById("three").style.top = "47.10649305555556%";

                    } else if (lives === 2) {

                        document.getElementById("two").style.width = "2.563515625%";
                        document.getElementById("two").style.maxWidth = "131.252";
                        document.getElementById("two").style.top = "47.10649305555556%";

                    } else if (lives === 1) {

                        document.getElementById("one").style.width = "1.795234375%";
                        document.getElementById("one").style.maxWidth = "91.916";
                        document.getElementById("one").style.top = "47.10649305555556%";

                    } else if (lives === 0) {

                        document.getElementById("lifetimercontainer").style.width = "13.07353515625%";
                        document.getElementById("lifetimercontainer").style.maxWidth = "669.365";

                        document.getElementById("lifetimer").className = "lifetimertext";

                        document.getElementById("zero").style.width = "2.77083984375%";
                        document.getElementById("zero").style.maxWidth = "141.867";
                        document.getElementById("zero").style.top = "47.10649305555556%";

                    };

                } else {*/

                    document.getElementById("heart").style.top = "50%";

                    if (lives === 3) {

                        document.getElementById("three").style.width = "2.624453125%";
                        document.getElementById("three").style.maxWidth = "134.372";
                        document.getElementById("three").style.top = "49.18982638888889%";

                    } else if (lives === 2) {

                        document.getElementById("two").style.width = "2.563515625%";
                        document.getElementById("two").style.maxWidth = "131.252";
                        document.getElementById("two").style.top = "49.18982638888889%";

                    } else if (lives === 1) {

                        document.getElementById("one").style.width = "1.795234375%";
                        document.getElementById("one").style.maxWidth = "91.916";
                        document.getElementById("one").style.top = "49.18982638888889%";

                    } else if (lives === 0) {

                        document.getElementById("lifetimercontainer").style.top = "22.93979166666667%";

                        document.getElementById("zero").style.width = "2.77083984375%";
                        document.getElementById("zero").style.maxWidth = "141.867";
                        document.getElementById("zero").style.top = "49.18982638888889%";

                    };

                //};
                
            };

        };  
    
};