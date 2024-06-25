

const starsInputs = document.querySelectorAll(".rating.stars input");
const output = document.querySelector("#star-value");

const onStarClick = (e, star) => {
	output.value = star.value;	
};

Object.values(starsInputs).forEach((star) => {
	star.addEventListener("click", (e) => onStarClick(e, star));  
});


