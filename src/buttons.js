// import "./mybulma/css/mystyles.css";
// import { songs } from './playlist.js';
// const songs = require('./playlist.js');
 const { songs } = require('./playlist.js');
	
	let audio = new Audio(songs[0][0]);
	let album = 0;	//album actual
	let albums = songs.length - 1; //albums totales menos 1
	let song = 0;	//cancion actual
	let albumSongs = songs[album].length - 1; //canciones que tiene un album

let test = songs[0].length;
console.log(test);


const reproductor = document.getElementById("reproductor");

const play = document.querySelector(".fa-play");				//PLAY
const stop = document.querySelector(".fa-stop");				//DETENER

const volumeDown = document.querySelector(".fa-volume-down");	//BAJAR VOLUMEN
const volumeUp = document.querySelector(".fa-volume-up");		//SUBIR VOLUMEN
const volume = document.querySelector(".fa-volume-off");		//SIN MUTEAR
const muted = document.querySelector(".fa-volume-mute");		//MUTEADO

const backward = document.querySelector(".fa-backward");		//ATRASAR 5 SEG
const forward = document.querySelector(".fa-forward");			//ADELANTAR 5 SEG
const previousSong = document.querySelector(".fa-step-backward");//ANTERIOR CANCION
const nextSong = document.querySelector(".fa-step-forward");//SIGUIENTE CANCION

const previousAlbum = document.querySelector(".fa-long-arrow-alt-left");
const nextAlbum = document.querySelector(".fa-long-arrow-alt-right ");

const restart = document.querySelector(".fa-redo");				//REINICIAR

play.addEventListener("click", ()=>{
	if (play.classList.contains("fa-play")) audio.play();
	else if (play.classList.contains("fa-pause")) audio.pause();
	play.classList.toggle("fa-play");
	play.classList.toggle("fa-pause");
});
stop.addEventListener("click",()=>{
	audio.currentTime = 0;
	if (play.classList.contains("fa-pause")) audio.pause();
	play.classList.toggle("fa-pause");
	play.classList.toggle("fa-play");
});

muted.addEventListener("click", ()=>{
	if (audio.volume != 0){
		audio.volume = 0;
	}
	else {
		audio.volume = 1;
	}
	muted.classList.toggle("fa-volume-mute");
	muted.classList.toggle("fa-volume-off");
});
volumeDown.addEventListener("click", ()=>{
	if (audio.volume <= 0.2) audio.volume = 0;
	else audio.volume -= 0.2;
});
volumeUp.addEventListener("click", ()=>{
	if (audio.volume >= 0.8) audio.volume = 1;
	else audio.volume += 0.2;
});

backward.addEventListener("click", ()=>{
	audio.currentTime -= 5;
});
forward.addEventListener("click", ()=>{
	audio.currentTime += 5;
});
function anteriorSong(){
	if (song == 0){
		song = 0;
		audio.setAttribute("src",songs[album][0]);
		console.log("anteriorSong() Parece que no hay más canciones para dirigirse.");
	}  
	else {
		for (let i = 0; i < 1; i++) {
			song -= 1;
			audio.setAttribute("src",songs[album][song]);
			console.log(`anteriorSong() Se ha cambiado de canción.`);
		}
	}
}
function siguienteSong(){
	if (song == albumSongs || albumSongs == 0){
		song = 0;
		audio.setAttribute("src",songs[album][song]);
		console.log("anteriorSong() Parece que no hay más canciones para dirigirse.");
	}
	else {
		for (let i = 0; i < 1; i++) {
			song += 1;
			audio.setAttribute("src",songs[album][song]);
			console.log(`anteriorSong() Se ha cambiado de canción.`);
		}
	}
}
previousSong.addEventListener("click", ()=>{
	audio.currentTime = 0;
	audio.pause();
	anteriorSong();
	audio.play();
	console.log(audio);
});
nextSong.addEventListener("click", ()=>{
	audio.currentTime = 0;
	audio.pause();
	siguienteSong();
	audio.play();
	console.log(audio);
});
function anteriorAlbum(){
	if (album == 0){
		album = 0;
		albumSongs = songs[album].length - 1;
		audio.setAttribute("src",songs[album][0]);
		console.log("anteriorAlbum() Parece que no hay más albums para dirigirse.");
	}  
	else {
		for (let i = 0; i < 1; i++) {
			album -= 1;
			audio.setAttribute("src",songs[album][0]);
			console.log(`anteriorAlbum() Se ha cambiado de album.`);
		}
	}
}
function siguienteAlbum(){
	if (album == albums){
		console.log("siguienteAlbum() Parece que no hay más albums para dirigirse.");
	}
	else{
		for (let i = 0; i < 1; i++) {
			album += 1;
			albumSongs = songs[album].length - 1;
			audio.setAttribute("src",songs[album][0]);
			console.log(`siguienteAlbum() Se ha cambiado de album.`);
		}
	}
}
previousAlbum.addEventListener("click", ()=>{
	audio.currentTime = 0;
	audio.pause();
	song = 0;
	anteriorAlbum();
	audio.play();
	console.log(audio);
});
nextAlbum.addEventListener("click", ()=>{
	audio.currentTime = 0;
	audio.pause();
	song = 0;
	siguienteAlbum();
	audio.play();
	console.log(audio);
});

restart.addEventListener("click", ()=>{
	audio.currentTime = 0;
	audio.play();
	if (play.classList.contains("fa-play")) {
		play.classList.add("fa-pause");
		play.classList.remove("fa-play");
	}
});
console.log(audio);

document.write(audio);