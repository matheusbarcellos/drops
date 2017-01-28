var appId = '1603683489940372';
var connected = false;
var loginscores = false;
var CONFIRM_YES = 1, CONFIRM_NO = 0;

var loggedin = 0;

var friendCache = {
  me: {},
  //user: {},
  permissions: [],
  //friends: [],
  //invitable_friends: [],
  //apprequests: [],
  scores: [],
  //games: [],
  reRequests: {}
};

function retrievestatus() {
    
  if (localStorage.loggedin) {

        if (loggedin != Number(localStorage.loggedin)) {

            loggedin = Number(localStorage.loggedin);

        } else {

            localStorage.loggedin = String(loggedin);

        };

    } else {

        localStorage.loggedin = String(loggedin);

    };
    
    if (loggedin === 1) {
        
	   loginAgain();
      
    };
    
};

function retrievescorerecord () {
    
    if (connected === true) {
        
        if (friendCache.scores.length != 0) {
            var iscore = 0;
            while (iscore < friendCache.scores.length) {
                if (friendCache.scores[iscore].user.id===friendCache.me.id) {
                    
                    /*
                    if (localStorage.scorerecord) {

                        if (friendCache.scores[iscore].score < Number(localStorage.scorerecord)) {

                            scorerecord = Number(localStorage.scorerecord);
                            sendScore(scorerecord, function(){});

                        } else {

                            scorerecord = friendCache.scores[iscore].score;
                            localStorage.scorerecord = String(scorerecord);

                        }

                    } else {

                        scorerecord = friendCache.scores[iscore].score;
                        localStorage.scorerecord = String(scorerecord);

                    }
                    */
                    
                    scorerecord = friendCache.scores[iscore].score;
                    localStorage.scorerecord = String(scorerecord);
                    document.getElementById("scorerecord").innerHTML = scorerecord;
                    
                };

                iscore++;

            };
        };
        
    } else {
        
        if (localStorage.scorerecord) {

            scorerecord = Number(localStorage.scorerecord);
            document.getElementById("scorerecord").innerHTML = scorerecord;

        } else {
            
            localStorage.scorerecord = String(scorerecord);
            
        };
        
    };
    
    document.getElementById("scorerecord").innerHTML = scorerecord;

};

function onAuthResponseChange(response) {
  console.log('onAuthResponseChange', response);
  if( response.status == 'connected' ) {
	getPermissions();
  }
}

function onStatusChange(response) {
    
  if( response.status != 'connected' ) {
    /*
    if (loggedin === 1) {
        
	   loginAgain();
      
    };
    */
  } else {
      
	getPlayer();
      
  }
  //start = true;
}

function getPlayer() {
    
  getMe(function(){
	  getPermissions(function(){
		if(hasPermission('user_friends')) {
            
		  //getFriends(function(){
              
			//name = friendCache.me.first_name;
			getScores(function(){
                retrievescorerecord();
                loginscores = true;
            });
			connected = true;
            document.getElementById("pic").src = friendCache.me.picture.data.url;
            document.getElementById("loginbutton").style.display = "none";
            retrievescorerecord();
              
		  //});
            
		} else {
            
			//name = friendCache.me.first_name;
			getScores(function(){
                retrievescorerecord();
                loginscores = true;
            });
			connected = true;
            document.getElementById("pic").src = friendCache.me.picture.data.url;
            document.getElementById("loginbutton").style.display = "none";
            retrievescorerecord();
            leaderboard();
            
		}
	  });
	});  
    
};

function login(callback) {

    //showConfirmationPopup('Do you want to login?', function(response){
        
        //if( response == CONFIRM_YES ) {
            
            FB.login(callback, {scope: 'user_friends,publish_actions', return_scopes: true});
            //getPlayer();
            loggedin = 1;
            localStorage.loggedin = String(loggedin);
            retrievescorerecord();
            
        //};
        
    //});
    
}

function loginAgain(callback) {

    FB.login(callback, {scope: 'user_friends,publish_actions', return_scopes: true});
    //getPlayer();
    loggedin = 1;
    localStorage.loggedin = String(loggedin);
    retrievescorerecord();
    
}

function logout() {
    
    showConfirmationPopup('You are about to logout. Are you sure? :(', function(response){
        
        if( response == CONFIRM_YES ) {
                        
            FB.logout(function(response) {});
            document.getElementById("pic").src = "images/mask.png";
            document.getElementById("loginbutton").style.display = "inline";
            document.getElementById("havefriends").style.display = "none";
            loginscores = false;
            loggedin = 0;
            localStorage.loggedin = String(loggedin);
            retrievescorerecord();
            
        };
        
    });
    
};

function getMe(callback) {
    
  getFriendCacheData('me', callback, {fields: 'id,name,first_name,picture.width(290).height(290)'});
    
}

function getPermissions(callback) {
    
  getFriendCacheData('permissions', callback);
    
}

function hasPermission(permission) {
    
  for( var i in friendCache.permissions ) {
	if(
	  friendCache.permissions[i].permission == permission
	  && friendCache.permissions[i].status == 'granted' )
	  return true;
  }
  return false;
    
}
/*
function getFriends(callback) {
    
  getFriendCacheData('friends', callback, {fields: 'id,name,first_name,picture.width(256).height(256)'});
    
}

function getInvitableFriends(callback) {
  getFriendCacheData('invitable_friends', callback,
    {fields: 'name,first_name,picture',limit: 8});
}
*/
function getScores(callback) {
    
  getFriendCacheData('scores', callback, {fields: 'score,user.fields(id,first_name,name,picture.width(256).height(256))'});
    
}

function getFriendCacheData(endpoint, callback, options) {
    
  if(endpoint) {
	var url = '/';
	if(endpoint == 'me') {
	  url += endpoint;
	} else if(endpoint == 'scores') {
	  url += appId + '/' + endpoint;
	} else {
	  url += 'me/' + endpoint;
	}
	FB.api(url, options, function(response) {
	  if( !response.error ) {
		console.log('getFriendCacheData',endpoint, response);
		friendCache[endpoint] = response.data ? response.data : response;
		if(callback) callback();
	  } else {
		console.error('getFriendCacheData',endpoint, response)
	  }
	});
  } else {
	getMe(function() {
	  getPermissions(function() {
		//getFriends(function() {
		  getScores(function() {
			  getScores(callback);
		  });
		//});
	  });
	});
  }
    
}

function sendScore(score, callback) {
    
  FB.api('/me/scores', function(response) {
	
      FB.api('/me/scores', 'post', { score: scorerecord }, function(response) {
		if( response.error ) {
		  console.error("Score NOT posted on Facebook", response);
            /*reRequest('publish_actions', function(){
              getPermissions(function(){

            sendScore(scorerecord, function(){});

              });
            });*/
		} else {
		  console.log("Score posted on Facebook", response);
		}
		getScores(function(){});
		//callback();
	  });
      
  });
}

function setScore() {
    
    if (connected === true) {	
        
        if( !hasPermission('publish_actions') && !friendCache.reRequests['publish_actions']) {
            
            showConfirmationPopup('NEW RECORD! Do you want to save it on Facebook?', function(response) {
                
              friendCache.reRequests['user_friends'] = true;
              if( response == CONFIRM_YES ) {
                reRequest('publish_actions', function(){
                  getPermissions(function(){
                      
                    sendScore(scorerecord, function(){});
                      
                  });
                });
              }
                
            });	
            
        } else {
            
          sendScore(scorerecord, function(){});
            
        }
        
    };
    
};

function leaderboard() {
  // Player hasn't granted user_friends and hasn't been re-asked this session
  if( !hasPermission('user_friends')
	&& !friendCache.reRequests['user_friends'] ) {

	showConfirmationPopup('Challenge your friends! Share all your joy and your frustration :)', function(response){

	  // Record that user has been re-asked this session
	  friendCache.reRequests['user_friends'] = true;

	  if( response == CONFIRM_YES ) {
		reRequest('user_friends', function(){
		  getPermissions(function(){
			//getFriends(function(){
                
			  getScores(function(){});
                renderScores();
                
			//});
		  });
		});
	  }
        
	});
      
  } else {
      
      renderScores();
      
  };
    
};

function showConfirmationPopup(message,callback) {
  var c = confirm(message);
  if(c){
	callback(CONFIRM_YES);
  } else {
	callback(CONFIRM_NO);
  }
}

function reRequest(scope, callback) {
  FB.login(callback, { scope: scope, auth_type:'rerequest'});
}

function renderScores() {
    
    if (friendCache.scores.length <= 1) { // No friends playing - just button
        
        document.getElementById("havefriends").style.display = "none";
        document.getElementById("invitebutton").style.display = "inline";
        
    } else if (friendCache.scores[0].user.id === friendCache.me.id) { // Have friends playing and player is the 1st - first and button
        
        document.getElementById("havefriends").style.display = "inline";
        document.getElementById("player").style.display = "none";
        document.getElementById("invitebutton").style.display = "inline";
        
        document.getElementById("firstpic").src = friendCache.scores[0].user.picture.data.url;
        document.getElementById("firstname").innerHTML = friendCache.scores[0].user.name;
        document.getElementById("firstscore").innerHTML = friendCache.scores[0].score;
        
    } else if (friendCache.scores[0].score === scorerecord) { // Have friends playing and player is tied with the 1st
        
        document.getElementById("havefriends").style.display = "inline";
        document.getElementById("player").style.display = "none";
        document.getElementById("invitebutton").style.display = "inline";
        
        document.getElementById("firstpic").src = friendCache.me.picture.data.url;
        document.getElementById("firstname").innerHTML = friendCache.me.name;
        document.getElementById("firstscore").innerHTML = scorerecord;
        
    } else { // Have friends playing and player isn't the 1st
        
        document.getElementById("havefriends").style.display = "inline";
        document.getElementById("player").style.display = "inline";
        document.getElementById("invitebutton").style.display = "none";
        
        document.getElementById("firstpic").src = friendCache.scores[0].user.picture.data.url;
        document.getElementById("firstname").innerHTML = friendCache.scores[0].user.name;
        document.getElementById("firstscore").innerHTML = friendCache.scores[0].score;
        
        document.getElementById("mepic").src = friendCache.me.picture.data.url;
        document.getElementById("mename").innerHTML = friendCache.me.name;
        document.getElementById("mescore").innerHTML = scorerecord;
        
    };
    
};
/*
function sendRequest() {
	FB.ui({
        
        method: 'apprequests',
        message: "I dare you to beat my amazingness!"
        
    }, function(response){
        console.log(response);
    });	
};
*/
function share() {
	FB.ui({
        
        method: "share",
        href: "https://barcellosm.github.io/drops/",
        
    });	
};

function sendMessenger() {
    
    FB.ui({
        
      method: 'send',
      link: 'https://barcellosm.github.io/drops/',
        
    });
    
};