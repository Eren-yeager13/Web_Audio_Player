let SongImage=document.querySelector('#image');
let SongTitel=document.querySelector('#name');
let audio=document.querySelector('#audio');
let progress=document.querySelector('#progress');
let progress_countainer=document.querySelector('#progress_countainer');
let backward=document.querySelector('#btn_backward');
let play=document.querySelector('#btn_play');
let froward=document.querySelector('#btn_froward');




// song titles

let songs=['Помню твое тело','Me Gustas Tu','Another Love','Un Poco Loco'];

let SondIndex=3
changeSong(songs[SondIndex]);

//changen songs 
function changeSong(song){
    SongTitel.innerHTML= song;
    SongImage.src=`images/${song}.jpg`;
    audio.src= `music/${song}.mp3`;
};

//bar of control functions
function PlaySong(){
    play.querySelector('i.fas').classList.remove('fa-play')
    play.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
    
};

function PauseSong(){
    play.querySelector('i.fas').classList.remove('fa-pause');
    play.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
};

function prevSong(){
    SondIndex--
    if (SondIndex<0){
        SondIndex= songs.length - 1
    }
    changeSong(songs[SondIndex])

    PlaySong()
};

function NextSong(){
    SondIndex++
    if (SondIndex>songs.length - 1){
        SondIndex= 0
    }
    changeSong(songs[SondIndex])

    PlaySong()
};

function updateProgress(e){
    let {duration,currentTime}=e.srcElement
    let progressPercent=(currentTime/duration)*100
    progress.style.width = `${progressPercent}%`
}

function cheange_time(y){
  let width=this.clientWidth
  let clickRendom=y.offsetX
  let duration = audio.duration

  audio.currentTime=(clickRendom/width)*duration
}

//----------------------------------------------------
let look=play.querySelector('i.fas');

play.addEventListener('click',() => {
    isPlaying = look.classList.contains('fa-play');

    if (isPlaying){
        PlaySong();
    }
    else{
        PauseSong();
    }
});

// CHANGE SONG EVENT 

audio.addEventListener('timeupdate',updateProgress)
progress_countainer.addEventListener('click',cheange_time)
audio.addEventListener('ended',NextSong)



function ChangeTheme(){

    if (SongImage.className == 'image' ){
       SongImage.classList.add('img-light');
        SongImage.classList.remove('image');
    }
    else{
        SongImage.classList.remove('img-light');
        SongImage.classList.add('image')
    };
//------------------------Progress------------------------------
     if (progress.className == 'progress' ){
         progress.classList.add('progress-light');
         progress.classList.remove('progress');
     }
     else{
         progress.classList.remove('progress-light');
         progress.classList.add('progress')
     }
//---------------------------Container---------------------------
let continer=document.querySelector('#continer');
    if (continer.className == 'continer' ){
        continer.classList.add('continer-light');
        continer.classList.remove('continer');
    }
   else{
        continer.classList.remove('continer-light');
       continer.classList.add('continer')
   }
//-----------------------Card-------------------------------
let card=document.querySelector('#card');
    if (card.className == 'card' ){
        card.classList.add('card-light');
        card.classList.remove('card');
    }
    else{
        card.classList.remove('card-light');
        card.classList.add('card')
    }
//-------------------Buttons---------------------------------------
//button 1
let button1=document.querySelector('#btn_backward');
button1.classList.add('btn')

if (button1.className =="btn"){
    button1.classList.add('btn-light')
    button1.classList.remove('btn')
 }
 else{
     button1.classList.add('btn')
     button1.classList.remove('btn-light')
}

//button 2

let button2=document.querySelector('#btn_play');
button2.classList.add('btn');

 if (button2.className =="btn"){
     button2.classList.add('btn-light')
     button2.classList.remove('btn')
}
else{
    button2.classList.add('btn')
    button2.classList.remove('btn-light')
}
//button 3

let button3=document.querySelector('#btn_froward');
button3.classList.add('btn')


if (button3.className =="btn"){
    button3.classList.add('btn-light')
    button3.classList.remove('btn')
}
else{
    button3.classList.add('btn')
    button3.classList.remove('btn-light')
}


}
