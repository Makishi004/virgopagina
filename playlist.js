const fs = require('fs'); //Modulo de NodeJS para controlar archivos del sistema
const dir = `./music`;
const files = fs.readdirSync(dir);


const cuco = [];
const natalia_lafourcade = [];
const dojacatxmendes = [];
const monsieur = [];
const babi = [];
const lol = [];
const unknown = [];

let musicDir = `music/`;
for (const file of files) {
	if (file.startsWith("Babi_-_")) babi.push(musicDir + file);	
	else if(file.startsWith("Monsieur_-_")) monsieur.push(musicDir + file);
	else if(file.startsWith("League_of_Legends_-_")) lol.push(musicDir + file);	
	else if(file.startsWith("Cuco_-_")) cuco.push(musicDir + file);	
	else if(file.startsWith("Doja_Cat_x_Mendes_-_")) dojacatxmendes.push(musicDir + file);	
	else if(file.startsWith("Natalia_Lafourcade_-_")) natalia_lafourcade.push(musicDir + file);	
	else unknown.push(musicDir + file);	
}
console.log(`Babi: ${babi}
Monsieur: ${monsieur}
Cuco: ${cuco}
League of Legends: ${lol}
Doja Cay x Mendes: ${dojacatxmendes}
Natalia Lafourcade: ${natalia_lafourcade}`);

let songs = [];
	songs.push(babi);
	songs.push(lol);
	songs.push(monsieur);
	songs.push(dojacatxmendes);
	songs.push(natalia_lafourcade);
	songs.push(cuco);

export { songs };