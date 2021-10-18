
//		RESPONSIVE BUTTON CLICK(mobile and tablet)
const burger = document.querySelector("#burger");
const links = document.querySelector("#nav-links");


burger.addEventListener("click",()=>{
	links.classList.toggle("is-active");
});


//		NAVIGATION VERTICAL
//	Youtube
const onhover = document.getElementById("youtube-button");
const youtubers = document.getElementById("youtubers-list");

onhover.addEventListener("mouseover",()=>{
	setTimeout(()=>{youtubers.style.display = "block"},200);
});
onhover.addEventListener("mouseout",()=>{
	setTimeout(()=>{youtubers.style.display = "none"},5000)
});