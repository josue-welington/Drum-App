'use strict';
var container = document.querySelector('.container')

var sons ={
    'A':'./sounds/sounds_boom.wav',
    'S':'./sounds/sounds_clap.wav',
    'D':'./sounds/sounds_hihat.wav',
    'F':'./sounds/sounds_kick.wav',
    'G':'./sounds/sounds_openhat.wav',
    'H':'./sounds/sounds_ride.wav',
    'J':'./sounds/sounds_snare.wav',
    'K':'./sounds/sounds_tink.wav',
    'L':'./sounds/sounds_tom.wav',
}

function tocar(e){
    if(e == 'L'){
    let audio = new Audio(`${sons.L}`); 
    audio.play();}
    else if(e=='A'){
        let audio = new Audio(`${sons.A}`); 
    audio.play();
    }
    else if(e=='S'){
        let audio = new Audio(`${sons.S}`); 
    audio.play();
    }
    else if(e=='D'){
        let audio = new Audio(`${sons.D}`); 
    audio.play();
    }
    else if(e=='F'){
        let audio = new Audio(`${sons.F}`); 
    audio.play();
    }
    else if(e=='G'){
        let audio = new Audio(`${sons.G}`); 
    audio.play();
    }
    else if(e=='H'){
        let audio = new Audio(`${sons.H}`); 
    audio.play();
    }
    else if(e=='J'){
        let audio = new Audio(`${sons.J}`); 
    audio.play();
    }else if(e=='K'){
        let audio = new Audio(`${sons.K}`); 
    audio.play();
    }
}

function mostrar(q){
    var pressionando = q.key.toUpperCase();
    tocar(pressionando)
}
document.addEventListener('keypress',mostrar)





