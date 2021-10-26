/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// import \"./mybulma/css/mystyles.css\";\r\n// import { songs } from './playlist.js';\r\n// const songs = require('./playlist.js');\r\n const { songs } = __webpack_require__(/*! ./playlist.js */ \"./src/playlist.js\");\r\n\t\r\n\tlet audio = new Audio(songs[0][0]);\r\n\tlet album = 0;\t//album actual\r\n\tlet albums = songs.length - 1; //albums totales menos 1\r\n\tlet song = 0;\t//cancion actual\r\n\tlet albumSongs = songs[album].length - 1; //canciones que tiene un album\r\n\r\nlet test = songs[0].length;\r\nconsole.log(test);\r\n\r\n\r\nconst reproductor = document.getElementById(\"reproductor\");\r\n\r\nconst play = document.querySelector(\".fa-play\");\t\t\t\t//PLAY\r\nconst stop = document.querySelector(\".fa-stop\");\t\t\t\t//DETENER\r\n\r\nconst volumeDown = document.querySelector(\".fa-volume-down\");\t//BAJAR VOLUMEN\r\nconst volumeUp = document.querySelector(\".fa-volume-up\");\t\t//SUBIR VOLUMEN\r\nconst volume = document.querySelector(\".fa-volume-off\");\t\t//SIN MUTEAR\r\nconst muted = document.querySelector(\".fa-volume-mute\");\t\t//MUTEADO\r\n\r\nconst backward = document.querySelector(\".fa-backward\");\t\t//ATRASAR 5 SEG\r\nconst forward = document.querySelector(\".fa-forward\");\t\t\t//ADELANTAR 5 SEG\r\nconst previousSong = document.querySelector(\".fa-step-backward\");//ANTERIOR CANCION\r\nconst nextSong = document.querySelector(\".fa-step-forward\");//SIGUIENTE CANCION\r\n\r\nconst previousAlbum = document.querySelector(\".fa-long-arrow-alt-left\");\r\nconst nextAlbum = document.querySelector(\".fa-long-arrow-alt-right \");\r\n\r\nconst restart = document.querySelector(\".fa-redo\");\t\t\t\t//REINICIAR\r\n\r\nplay.addEventListener(\"click\", ()=>{\r\n\tif (play.classList.contains(\"fa-play\")) audio.play();\r\n\telse if (play.classList.contains(\"fa-pause\")) audio.pause();\r\n\tplay.classList.toggle(\"fa-play\");\r\n\tplay.classList.toggle(\"fa-pause\");\r\n});\r\nstop.addEventListener(\"click\",()=>{\r\n\taudio.currentTime = 0;\r\n\tif (play.classList.contains(\"fa-pause\")) audio.pause();\r\n\tplay.classList.toggle(\"fa-pause\");\r\n\tplay.classList.toggle(\"fa-play\");\r\n});\r\n\r\nmuted.addEventListener(\"click\", ()=>{\r\n\tif (audio.volume != 0){\r\n\t\taudio.volume = 0;\r\n\t}\r\n\telse {\r\n\t\taudio.volume = 1;\r\n\t}\r\n\tmuted.classList.toggle(\"fa-volume-mute\");\r\n\tmuted.classList.toggle(\"fa-volume-off\");\r\n});\r\nvolumeDown.addEventListener(\"click\", ()=>{\r\n\tif (audio.volume <= 0.2) audio.volume = 0;\r\n\telse audio.volume -= 0.2;\r\n});\r\nvolumeUp.addEventListener(\"click\", ()=>{\r\n\tif (audio.volume >= 0.8) audio.volume = 1;\r\n\telse audio.volume += 0.2;\r\n});\r\n\r\nbackward.addEventListener(\"click\", ()=>{\r\n\taudio.currentTime -= 5;\r\n});\r\nforward.addEventListener(\"click\", ()=>{\r\n\taudio.currentTime += 5;\r\n});\r\nfunction anteriorSong(){\r\n\tif (song == 0){\r\n\t\tsong = 0;\r\n\t\taudio.setAttribute(\"src\",songs[album][0]);\r\n\t\tconsole.log(\"anteriorSong() Parece que no hay más canciones para dirigirse.\");\r\n\t}  \r\n\telse {\r\n\t\tfor (let i = 0; i < 1; i++) {\r\n\t\t\tsong -= 1;\r\n\t\t\taudio.setAttribute(\"src\",songs[album][song]);\r\n\t\t\tconsole.log(`anteriorSong() Se ha cambiado de canción.`);\r\n\t\t}\r\n\t}\r\n}\r\nfunction siguienteSong(){\r\n\tif (song == albumSongs || albumSongs == 0){\r\n\t\tsong = 0;\r\n\t\taudio.setAttribute(\"src\",songs[album][song]);\r\n\t\tconsole.log(\"anteriorSong() Parece que no hay más canciones para dirigirse.\");\r\n\t}\r\n\telse {\r\n\t\tfor (let i = 0; i < 1; i++) {\r\n\t\t\tsong += 1;\r\n\t\t\taudio.setAttribute(\"src\",songs[album][song]);\r\n\t\t\tconsole.log(`anteriorSong() Se ha cambiado de canción.`);\r\n\t\t}\r\n\t}\r\n}\r\npreviousSong.addEventListener(\"click\", ()=>{\r\n\taudio.currentTime = 0;\r\n\taudio.pause();\r\n\tanteriorSong();\r\n\taudio.play();\r\n\tconsole.log(audio);\r\n});\r\nnextSong.addEventListener(\"click\", ()=>{\r\n\taudio.currentTime = 0;\r\n\taudio.pause();\r\n\tsiguienteSong();\r\n\taudio.play();\r\n\tconsole.log(audio);\r\n});\r\nfunction anteriorAlbum(){\r\n\tif (album == 0){\r\n\t\talbum = 0;\r\n\t\talbumSongs = songs[album].length - 1;\r\n\t\taudio.setAttribute(\"src\",songs[album][0]);\r\n\t\tconsole.log(\"anteriorAlbum() Parece que no hay más albums para dirigirse.\");\r\n\t}  \r\n\telse {\r\n\t\tfor (let i = 0; i < 1; i++) {\r\n\t\t\talbum -= 1;\r\n\t\t\taudio.setAttribute(\"src\",songs[album][0]);\r\n\t\t\tconsole.log(`anteriorAlbum() Se ha cambiado de album.`);\r\n\t\t}\r\n\t}\r\n}\r\nfunction siguienteAlbum(){\r\n\tif (album == albums){\r\n\t\tconsole.log(\"siguienteAlbum() Parece que no hay más albums para dirigirse.\");\r\n\t}\r\n\telse{\r\n\t\tfor (let i = 0; i < 1; i++) {\r\n\t\t\talbum += 1;\r\n\t\t\talbumSongs = songs[album].length - 1;\r\n\t\t\taudio.setAttribute(\"src\",songs[album][0]);\r\n\t\t\tconsole.log(`siguienteAlbum() Se ha cambiado de album.`);\r\n\t\t}\r\n\t}\r\n}\r\npreviousAlbum.addEventListener(\"click\", ()=>{\r\n\taudio.currentTime = 0;\r\n\taudio.pause();\r\n\tsong = 0;\r\n\tanteriorAlbum();\r\n\taudio.play();\r\n\tconsole.log(audio);\r\n});\r\nnextAlbum.addEventListener(\"click\", ()=>{\r\n\taudio.currentTime = 0;\r\n\taudio.pause();\r\n\tsong = 0;\r\n\tsiguienteAlbum();\r\n\taudio.play();\r\n\tconsole.log(audio);\r\n});\r\n\r\nrestart.addEventListener(\"click\", ()=>{\r\n\taudio.currentTime = 0;\r\n\taudio.play();\r\n\tif (play.classList.contains(\"fa-play\")) {\r\n\t\tplay.classList.add(\"fa-pause\");\r\n\t\tplay.classList.remove(\"fa-play\");\r\n\t}\r\n});\r\nconsole.log(audio);\r\n\r\ndocument.write(audio);\n\n//# sourceURL=webpack://mybulma/./src/buttons.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons.js */ \"./src/buttons.js\");\n/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_buttons_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_script_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack://mybulma/./src/main.js?");

/***/ }),

/***/ "./src/playlist.js":
/*!*************************!*\
  !*** ./src/playlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"songs\": () => (/* binding */ songs)\n/* harmony export */ });\nconst fs = __webpack_require__(/*! fs */ \"fs\"); //Modulo de NodeJS para controlar archivos del sistema\r\nconst dir = `./music`;\r\nconst files = fs.readdirSync(dir);\r\n\r\n\r\nconst cuco = [];\r\nconst natalia_lafourcade = [];\r\nconst dojacatxmendes = [];\r\nconst monsieur = [];\r\nconst babi = [];\r\nconst lol = [];\r\nconst unknown = [];\r\n\r\nlet musicDir = `music/`;\r\nfor (const file of files) {\r\n\tif (file.startsWith(\"Babi_-_\")) babi.push(musicDir + file);\t\r\n\telse if(file.startsWith(\"Monsieur_-_\")) monsieur.push(musicDir + file);\r\n\telse if(file.startsWith(\"League_of_Legends_-_\")) lol.push(musicDir + file);\t\r\n\telse if(file.startsWith(\"Cuco_-_\")) cuco.push(musicDir + file);\t\r\n\telse if(file.startsWith(\"Doja_Cat_x_Mendes_-_\")) dojacatxmendes.push(musicDir + file);\t\r\n\telse if(file.startsWith(\"Natalia_Lafourcade_-_\")) natalia_lafourcade.push(musicDir + file);\t\r\n\telse unknown.push(musicDir + file);\t\r\n}\r\nconsole.log(`Babi: ${babi}\r\nMonsieur: ${monsieur}\r\nCuco: ${cuco}\r\nLeague of Legends: ${lol}\r\nDoja Cay x Mendes: ${dojacatxmendes}\r\nNatalia Lafourcade: ${natalia_lafourcade}`);\r\n\r\nlet songs = [];\r\n\tsongs.push(babi);\r\n\tsongs.push(lol);\r\n\tsongs.push(monsieur);\r\n\tsongs.push(dojacatxmendes);\r\n\tsongs.push(natalia_lafourcade);\r\n\tsongs.push(cuco);\r\n\r\n\n\n//# sourceURL=webpack://mybulma/./src/playlist.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("\r\n//\t\tRESPONSIVE BUTTON CLICK(mobile and tablet)\r\nconst burger = document.querySelector(\"#burger\");\r\nconst links = document.querySelector(\"#nav-links\");\r\n\r\n\r\nburger.addEventListener(\"click\",()=>{\r\n\tlinks.classList.toggle(\"is-active\");\r\n});\r\n\r\n\r\n//\t\tNAVIGATION VERTICAL\r\n//\tYoutube\r\nconst onhover = document.getElementById(\"youtube-button\");\r\nconst youtubers = document.getElementById(\"youtubers-list\");\r\n\r\nonhover.addEventListener(\"mouseover\",()=>{\r\n\tsetTimeout(()=>{youtubers.style.display = \"block\"},200);\r\n});\r\nonhover.addEventListener(\"mouseout\",()=>{\r\n\tsetTimeout(()=>{youtubers.style.display = \"none\"},5000)\r\n});\n\n//# sourceURL=webpack://mybulma/./src/script.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;