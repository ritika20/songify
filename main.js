/* $('.welcome-screen button').on('click', function() {
     var name = $('#name-input').val();
     if (name.length > 2) {
         var message = "Welcome, " + name;
         $('.main .user-name').text(message);
         $('.welcome-screen').addClass('hidden');
         $('.main').removeClass('hidden');
     } else {
         $('#name-input').addClass('error');
     }
 });
 $('.play-icon').on('click', function() {
     var song = document.querySelector('audio');
     if (song.paused == true) {
         console.log('Playing');
         $('.play-icon').removeClass('fa-play').addClass('fa-pause');
         song.play();
     } else {
         console.log('Pausing');
         $('.play-icon').removeClass('fa-pause').addClass('fa-play');
         song.pause();
     }
 });
 $('body').on('keypress', function(event) {
             if (event.keyCode == 32) {
                 var song = document.querySelector('audio');
                 if (song.paused == true) {
                     console.log('Playing');
                     $('.play-icon').removeClass('fa-play').addClass('fa-pause');
                     song.play();
                 } else {
                     console.log('Pausing');
                     $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                     song.pause();
                 }
             }
         });*/
         var currentSongNumber = 0;
var willLoop = 0;
var willShuffle = 0;
         var songs = [
            {
          'id':'0',
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
       'image': 'song1.jpg'
    },
      { 'id':'1',
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
        'image': 'song2.jpg'
    },
     {
       'id':'2',
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
        'image': 'song3.jpg'
    },
      {
        'id':'3',
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image': 'song4.jpg'
    }
  ];
function toggleSong() {           // function to toggle (play/pause)
var song = document.querySelector('audio');
if(song.paused == true) {
console.log('Playing');
$('.play-icon').removeClass('fa-play').addClass('fa-pause');
song.play();
}
else {
console.log('Pausing');
$('.play-icon').removeClass('fa-pause').addClass('fa-play');
song.pause();
}
}
function addSongNameClickEvent(songObj,position) {
  var songName = songObj.fileName;
 var id = '#song' + position;
$(id).click(function() {
var audio = document.querySelector('audio');
var currentSong = audio.src;
if(currentSong.search(songName) != -1)
{
toggleSong();
}
else {
audio.src = songName;
toggleSong();
changeCurrentSongDetails(songObj);
}
});
}
function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','images/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
}
function fancyTimeFormat(time)
{
 // Hours, minutes and seconds
 var hrs = ~~(time / 3600);
 var mins = ~~((time % 3600) / 60);
 var secs = time % 60;

 // Output like "1:01" or "4:03:59" or "123:03:59"
 var ret = "";

 if (hrs > 0) {
     ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
 }

 ret += "" + mins + ":" + (secs < 10 ? "0" : "");
 ret += "" + secs;
 return ret;
}
function updateCurrentTime() {                  ///function to update current time
  var song = document.querySelector('audio');
 var currentTime = Math.floor(song.currentTime);
 currentTime = fancyTimeFormat(currentTime);
 var duration = Math.floor(song.duration);
 duration = fancyTimeFormat(duration);
 $('.time-elapsed').text(currentTime);
 $('.song-duration').text(duration);
}
$(document).ready(function(){
    // Do Something
  changeCurrentSongDetails(songs[0]); /* use to display the image initially*/
  for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        /*console.log(obj.name);*/
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
      }

updateCurrentTime();
$('#songs').DataTable({
  paging:false
});

});
setInterval(function() {
updateCurrentTime();
},1000);
$('.play-icon').on('click', function() {         // work on click
toggleSong();
});
$('.fa-repeat').on('click',function() {
    $('.fa-random').addClass('disabled');
    $('.fa-repeat').toggleClass('disabled');
    willLoop = 1 - willLoop;
});
$('.fa-random').on('click',function() {
   $('.fa-repeat').addClass('disabled');
    $('.fa-random').toggleClass('disabled');
    willShuffle = 1 - willShuffle;
});

$('.fa-step-backward').on('click',function() {

  var audio = document.querySelector('audio');
  if (willShuffle == 1) {
      var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
      var nextSongObj = songs[nextSongNumber-1];
      audio.src = nextSongObj.fileName;
      toggleSong();
      changeCurrentSongDetails(nextSongObj);
      currentSongNumber = nextSongNumber;
  }
  else if(currentSongNumber < 4) {
     var audio = document.querySelector('audio');
     var currentSong = audio.src;
     console.log(audio.src);
     for(var i =0; i < songs.length;i++) {
           var obj = songs[i];
           if(currentSong.search(obj.fileName) == -1)
           {
             continue;
           }
           else{

              currentSongNumber = i-1;
               if(currentSongNumber == -1){
                currentSongNumber = 3;
                audio.src = songs[3].fileName;
                            }
             else{
             audio.src = songs[i-1].fileName;
             break;
                  }
                }

         }

      var nextSongObj = songs[currentSongNumber];
      audio.src = nextSongObj.fileName;
      toggleSong();
      changeCurrentSongDetails(nextSongObj);
  }
  else if(willLoop == 1) {
      var nextSongObj = songs[0];
      audio.src = nextSongObj.fileName;
      toggleSong();
      changeCurrentSongDetails(nextSongObj);
      currentSongNumber =  1;
  }
  else {
      $('.play-icon').removeClass('fa-pause').addClass('fa-play');
      audio.currentTime = 0;
  }




});

$('.fa-step-forward').on('click',function() {
  var audio = document.querySelector('audio');
  if (willShuffle == 1) {
      var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
      var nextSongObj = songs[nextSongNumber-1];
      audio.src = nextSongObj.fileName;
      toggleSong();
      changeCurrentSongDetails(nextSongObj);
      currentSongNumber = nextSongNumber;
  }
  else if(currentSongNumber < 4) {
     var audio = document.querySelector('audio');
     var currentSong = audio.src;
     console.log(audio.src);
     for(var i =0; i < songs.length;i++) {
           var obj = songs[i];
           if(currentSong.search(obj.fileName) == -1)
           {
             continue;

           }
           else{
      
              currentSongNumber = i+1;
               if(currentSongNumber == 4){
                currentSongNumber = 0;
                audio.src = songs[0].fileName;
                            }
             else{
             audio.src = songs[i+1].fileName;
             break;
                  }
                }

         }

      var nextSongObj = songs[currentSongNumber];
      audio.src = nextSongObj.fileName;
      toggleSong();
      changeCurrentSongDetails(nextSongObj);
  }
  else if(willLoop == 1) {
      var nextSongObj = songs[0];
      audio.src = nextSongObj.fileName;
      toggleSong();
      changeCurrentSongDetails(nextSongObj);
      currentSongNumber =  1;
  }
  else {
      $('.play-icon').removeClass('fa-pause').addClass('fa-play');
      audio.currentTime = 0;
  }


});
function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
}
$('audio').on('ended',function() {
  var audio = document.querySelector('audio');
  if (willShuffle == 1) {
      var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
      var nextSongObj = songs[nextSongNumber-1];
      audio.src = nextSongObj.fileName;
      toggleSong();
      changeCurrentSongDetails(nextSongObj);
      currentSongNumber = nextSongNumber;
  }
  else if(currentSongNumber < 4) {
     var audio = document.querySelector('audio');
     var currentSong = audio.src;
     console.log(audio.src);
     for(var i =0; i < songs.length;i++) {
           var obj = songs[i];
           if(currentSong.search(obj.fileName) == -1)
           {
             continue;

           }
           else{
             console.log("hello");
              currentSongNumber = i+1;
               if(currentSongNumber == 4){
                currentSongNumber = 0;
                audio.src = songs[0].fileName;
                            }
             else{
             audio.src = songs[i+1].fileName;
             break;
                  }
                }

         }

      var nextSongObj = songs[currentSongNumber];
      audio.src = nextSongObj.fileName;
      toggleSong();
      changeCurrentSongDetails(nextSongObj);
  }
  else if(willLoop == 1) {
      var nextSongObj = songs[0];
      audio.src = nextSongObj.fileName;
      toggleSong();
      changeCurrentSongDetails(nextSongObj);
      currentSongNumber =  1;
  }
  else {
      $('.play-icon').removeClass('fa-pause').addClass('fa-play');
      audio.currentTime = 0;
  }



});
$('body').on('keypress',function(event) {
    var target = event.target;                            /* ye code check karega ki jo key press hui hai vo spacebar hai then check karega uska target input field ke nhi */
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});
function timeJump() {
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 5;
}
