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
var equal = 0;
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
} function updateTimer(){
    var song = document.querySelector('audio');
    var ct =song.currentTime;
    var td =song.duration;
    var percentage = (ct/td)*100;
    $(".progress-filled").css('width',percentage+"%");
    }
 function songslistdisplay(){
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
updateTimer();
}
$('.mood1').on('click',function(){
    $('.heading').addClass('hidden');
       $(".song-heading").html("Happy Songs");
      $('#mood-list').addClass('hidden');
      $('#heading').addClass('hidden');
      $('.main').removeClass('hidden');
      $('.main').addClass('mood1');
  songs = songs1 = [{
                'name': 'Buddhu Sa Mann Hai',
                'artist': 'Amaal Malik, Armaan Malik',
                'album': 'Kapoor & Sons',
                'duration': '3:26',
               'fileName': 'song1.mp3',
               'image' : 'song1.jpg'
            },
            {
                'name': 'Jaaniya O Jaaniya',
                'artist': 'Sidharth Basrur',
                'album': 'Haunted',
                'duration': '5:07',
                'fileName': 'song2.mp3',
                'image' : 'song2.jpg'
            },
            {
                'name': 'Safarnama',
                'artist': 'Lucky Ali',
                'album': 'Tamasha',
                'duration': '4:11',
                'fileName': 'song3.mp3',
                'image' : 'song3.jpg'
            },
            {
                'name': 'Why Not Me',
                'artist': 'Enrique Iglesias',
                'album': 'Euphoria',
                'duration': '3:38',
                'fileName': 'song4.mp3',
                'image' : 'song4.jpg'
            }];
  songslistdisplay();
});

$('.mood2').on('click',function(){
    $('.heading').addClass('hidden');
  $(".song-heading").html("Sad Songs");
      $('#mood-list').addClass('hidden');
      $('.main').removeClass('hidden');
      $('.main').addClass('mood2');
  songs = songs2 =[{  
                        'name': 'Channa Mereya',
                       'artist': 'Arijit Singh',
                       'album': 'Ae Dil Hai Mushkil',
                       'duration': '4:49',
                       'fileName': 'song5.mp3',
                       'image' : 'song5.jpg'
                },
                {    'name': 'Phir Bhi Tumko Chahunga',
                     'artist': 'Arijit Singh',
                     'album': 'Half Girlfriend',
                     'duration': '5:51',
                     'fileName': 'song6.mp3',
                     'image' : 'song6.jpg'
                },
                    {'name': 'Dhuaan Dhuaan',
                'artist': 'Arijit Singh',
                'album': 'Fugly',
                'duration': '3:40',
                'fileName': 'song7.mp3',
                'image' : 'song7.jpg'
            },
            {
                'name': 'Why Not Me',
                'artist': 'Enrique Iglesias',
                'album': 'Euphoria',
                'duration': '3:38',
                'fileName': 'song4.mp3',
                'image' : 'song4.jpg'
            }];
  songslistdisplay();
});
$('.mood3').on('click',function(){
    $('.heading').addClass('hidden');
      $(".song-heading").html("Romantic Songs");
      $(".song-heading").html("Romantic Songs");
      $('#mood-list').addClass('hidden');
      $('.main').removeClass('hidden');
      $('.main').addClass('mood3');
   songs = songs3 =[{  'name': 'Darkhaast',
                       'artist': 'Arijit Singh,Sunidhi Chouhan',
                       'album': 'Shivaay',
                       'duration': '6:14',
                       'fileName': 'song9.mp3',
                       'image' : 'song9.jpg'
                },
                {    'name': 'Mera Pehla Pehle Pyaar',
                     'artist': '--',
                     'album': 'Mera Pehla Pehle Pyaar',
                     'duration': '4:31',
                     'fileName': 'song10.mp3',
                     'image' : 'song10.jpg'
                },
                    {'name': 'Aye Dil Bata',
                'artist': 'Arijit Singh',
                'album': 'Ishq Actually',
                'duration': '5:42',
                'fileName': 'song11.mp3',
                'image' : 'song11.jpg'
            },
            {
                'name': 'Jaaniya O Jaaniya',
                'artist': 'Sidharth Basrur',
                'album': 'Haunted',
                'duration': '5:07',
                'fileName': 'song2.mp3',
                'image' : 'song2.jpg'
            }];  
  songslistdisplay();
});
$('.mood4').on('click',function(){
    $('.heading').addClass('hidden');

      $(".song-heading").html("RoadTrip Songs");
      $('#mood-list').addClass('hidden');
      $('.main').removeClass('hidden');
      $('.main').addClass('mood4');
        songs = songs4 =[{
                'name': 'Safarnama',
                'artist': 'Lucky Ali',
                'album': 'Tamasha',
                'duration': '4:11',
                'fileName': 'song3.mp3',
                'image' : 'song3.jpg'
            },
                {  'name': 'Darkhaast',
                       'artist': 'Arijit Singh,Sunidhi Chouhan',
                       'album': 'Shivaay',
                       'duration': '6:14',
                       'fileName': 'song9.mp3',
                       'image' : 'song9.jpg'
                },
                    {'name': 'Aye Dil Bata',
                'artist': 'Arijit Singh',
                'album': 'Ishq Actually',
                'duration': '5:42',
                'fileName': 'song11.mp3',
                'image' : 'song11.jpg'
            },
            {
                'name': 'Why Not Me',
                'artist': 'Enrique Iglesias',
                'album': 'Euphoria',
                'duration': '3:38',
                'fileName': 'song4.mp3',
                'image' : 'song4.jpg'
            }]  
  songslistdisplay();

});
$('.mood5').on('click',function(){
    $('.heading').addClass('hidden');

  $(".song-heading").html(" Pop Songs");
      $('#mood-list').addClass('hidden');
      $('.main').removeClass('hidden');
      $('.main').addClass('mood5');
     songs = songs5 =[{  'name': 'Russian Roulette',
                       'artist': 'Rihanna',
                       'album': 'Loud',
                       'duration': '3:47',
                       'fileName': 'song17.mp3',
                       'image' : 'song17.jpg'
                },
                {    'name': 'Rockabye Baby',
                     'artist': 'Clean Bandit',
                     'album': 'Rockabye',
                     'duration': '4:13',
                     'fileName': 'song18.mp3',
                     'image' : 'song18.jpg'
                },
                {'name': 'Despacito (TEGOS.RU)',
                'artist': 'Louis Fonsi, Daddy Yankee',
                'album': 'TEGOS.RU',
                'duration': '3:47',
                'fileName': 'song20.mp3',
                'image' : 'song20.jpeg'    
            },
            {    'name': 'Rockabye Baby',
                     'artist': 'Clean Bandit',
                     'album': 'Rockabye',
                     'duration': '4:13',
                     'fileName': 'song18.mp3',
                     'image' : 'song18.jpg'
                }] ;
  songslistdisplay();
});
$('.mood6').on('click',function(){
    $('.heading').addClass('hidden');

  $(".song-heading").html("Casual Songs");
      $('#mood-list').addClass('hidden');
      $('.main').removeClass('hidden');
      $('.main').addClass('mood6');
   songs = songs6 =[{
                'name': 'Safarnama',
                'artist': 'Lucky Ali',
                'album': 'Tamasha',
                'duration': '4:11',
                'fileName': 'song3.mp3',
                'image' : 'song3.jpg'
            },
                {
                'name': 'Why Not Me',
                'artist': 'Enrique Iglesias',
                'album': 'Euphoria',
                'duration': '3:38',
                'fileName': 'song4.mp3',
                'image' : 'song4.jpg'
            },
                    {'name': 'Aye Dil Bata',
                'artist': 'Arijit Singh',
                'album': 'Ishq Actually',
                'duration': '5:42',
                'fileName': 'song11.mp3',
                'image' : 'song11.jpg'
            },
            {
                'name': 'Why Not Me',
                'artist': 'Enrique Iglesias',
                'album': 'Euphoria',
                'duration': '3:38',
                'fileName': 'song4.mp3',
                'image' : 'song4.jpg'
            }];
  songslistdisplay();
});
$('.mood7').on('click',function(){
    $('.heading').addClass('hidden');
  $(".song-heading").html("Retro World Songs");
      $('#mood-list').addClass('hidden');
      $('.main').removeClass('hidden');
      $('.main').addClass('mood7');
 songs = songs7 =[{  'name': 'Mera Dil Bhi Kitna Pagal Hai',
                       'artist': 'Kumar Sanu,Alka Yagnik',
                       'album': 'Saajan',
                       'duration': '5:26',
                       'fileName': 'song25.mp3',
                       'image' : 'song25.jpg'
                },
                {    'name': 'Mera Pehla Pehle Pyaar',
                     'artist': '--',
                     'album': 'Mera Pehla Pehle Pyaar',
                     'duration': '4:31',
                     'fileName': 'song10.mp3',
                     'image' : 'song10.jpg'
                },
                    {  'name': 'Mera Dil Bhi Kitna Pagal Hai',
                       'artist': 'Kumar Sanu,Alka Yagnik',
                       'album': 'Saajan',
                       'duration': '5:26',
                       'fileName': 'song25.mp3',
                       'image' : 'song25.jpg'
                },
            {    'name': 'Mera Pehla Pehle Pyaar',
                     'artist': '--',
                     'album': 'Mera Pehla Pehle Pyaar',
                     'duration': '4:31',
                     'fileName': 'song10.mp3',
                     'image' : 'song10.jpg'
                }] ;
  songslistdisplay();
});
$('.mood8').on('click',function(){
  $('.heading').addClass('hidden');
  $(".song-heading").html("EDM Songs");
      $('#mood-list').addClass('hidden');
      $('.main').removeClass('hidden');
      $('.main').addClass('mood1');
 songs = songs8 =[{  'name': 'Titanium feat. Sia',
                       'artist': 'David Guetta, Sia',
                       'album': 'Nothing But the Beat',
                       'duration': '4:05',
                       'fileName': 'song29.mp3',
                       'image' : 'song29.jpg'
                },
                {    'name': 'Get Low',
                     'artist': 'Dillon Francis, DJ Snake',
                     'album': 'Get Low',
                     'duration': '3:34',
                     'fileName': 'song30.mp3',
                     'image' : 'song30.jpg'
                },
                   {  'name': 'Titanium feat. Sia',
                       'artist': 'David Guetta, Sia',
                       'album': 'Nothing But the Beat',
                       'duration': '4:05',
                       'fileName': 'song29.mp3',
                       'image' : 'song29.jpg'
                },
                {    'name': 'Get Low',
                     'artist': 'Dillon Francis, DJ Snake',
                     'album': 'Get Low',
                     'duration': '3:34',
                     'fileName': 'song30.mp3',
                     'image' : 'song30.jpg'
                }]    ;
  songslistdisplay();
});


/*$(document).ready(function(){
    // Do Something
   

});*/
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
$('.back').on('click',function() {
  $('.main').addClass('hidden');
  $('.mood-list').removeClass('hidden');


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
$(".fa-bar-chart").click(function(){

$(this).toggleClass("active");
if(equal==0)
{

equal=1;

$("svg").css("display","inline-block");
$(".content").css("display","none");
$(".contain").css("display","inline-block");
$(".contain").css("background","black");
}
else{
equal=0;
$("svg").css("display","none");
$(".content").css("display","inline-block");
$(".contain").css("display","none");
}

});
$(".fa-microphone").hover(function(){

$("ol").css("display","inline-block")


});

$(".fa-microphone").mouseout(function(){

$("ol").css("display","none")


});



    $(".player-progress").click(function(event) {
        var $this = $(this);

        // to get part of width of progress bar clicked
        var widthclicked = event.pageX - $this.offset().left;
        var totalWidth = $this.width(); // can also be cached somewhere in the app if it doesn't change

        // do calculation of the seconds clicked
        var calc = (widthclicked / totalWidth) * 100 ; // get the percent of bar clicked and multiply in by the duration


    var song = document.querySelector('audio');
    song.currentTime = (song.duration*calc)/100;

    updateTimer();



    });