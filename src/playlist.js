let allSongs = './music/Babi_-_3_kilos.mp3,./music/Babi_-_Cocaína.mp3,./music/Babi_-_Incondicional.mp3,./music/Babi_-_Se_me_fue.mp3,./music/Cuco_-_Piel_canela.mp3,./music/Doja_Cat_x_Mendes_-_Say_So.mp3,./music/League_of_Legends_-_Legends_Never_Die.mp3,./music/League_of_Legends_-_Phoenix.mp3,./music/League_of_Legends_-_Take_Over_Worlds_2020.mp3,./music/Monsieur_-_Nuestra_canción.mp3,./music/Natalia_Lafourcade_-_Lo_que_construimos.mp3';
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
	console.log(songs);