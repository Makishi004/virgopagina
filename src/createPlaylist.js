const fs = require('fs'); 
// import * as fs from 'fs';	//Modulo de NodeJS para controlar archivos del sistema
const dir = `../music`;
const files = fs.readdirSync(dir);


let songs = [];

let musicDir = `../music/`;
for (const file of files) {
	songs.push(musicDir + file)
}



console.log(songs);

fs.writeFile('playlist.js', `let allSongs = '${songs}';
	allSongs = allSongs.split(',');

	const cuco = [];
	const natalia_lafourcade = [];
	const dojacatxmendes = [];
	const monsieur = [];
	const babi = [];
	const lol = [];
	const unknown = [];

	let songs = [];

	for (let i = 0; allSongs.length > i; i++) {
		if (allSongs[i].includes("Babi_-_")) babi.push(allSongs[i]);	
		else if(allSongs[i].includes("Monsieur_-_")) monsieur.push(allSongs[i]);
		else if(allSongs[i].includes("League_of_Legends_-_")) lol.push(allSongs[i]);	
		else if(allSongs[i].includes("Cuco_-_")) cuco.push(allSongs[i]);	
		else if(allSongs[i].includes("Doja_Cat_x_Mendes_-_")) dojacatxmendes.push(allSongs[i]);	
		else if(allSongs[i].includes("Natalia_Lafourcade_-_")) natalia_lafourcade.push(allSongs[i]);	
		else unknown.push(allSongs[i]);	
	};
	songs = [];
		songs.push(babi);
		songs.push(lol);
		songs.push(monsieur);
		songs.push(dojacatxmendes);
		songs.push(natalia_lafourcade);
		songs.push(cuco);

	exports.songs = songs;
	console.log(songs);`, function (error) {
	if (error) {
		console.log(error);
	}
	console.log('Archivo creado.');
});

// export { songs };