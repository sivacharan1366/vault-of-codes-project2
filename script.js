const ingredients =
document.getElementById("ingredients");

const stepsList =
document.getElementById("steps");

const steps =
document.querySelectorAll("#steps li");

let currentStep = 0;

document
.getElementById("toggleIngredients")
.addEventListener("click", () => {

    ingredients.classList.toggle("hidden");

});

document
.getElementById("toggleSteps")
.addEventListener("click", () => {

    stepsList.classList.toggle("hidden");

});

let timerStarted = false;
let totalTime = 45 * 60;

document
.getElementById("startCooking")
.addEventListener("click", () => {

    stepsList.classList.remove("hidden");

    if(steps.length > 0){
        steps[0].classList.add("active-step");
    }

    if(timerStarted) return;

    timerStarted = true;

    setInterval(() => {

        if(totalTime <= 0) return;

        totalTime--;

        let minutes =
        Math.floor(totalTime / 60);

        let seconds =
        totalTime % 60;

        document.getElementById("timer")
        .innerText =
        `${minutes}:${seconds
        .toString()
        .padStart(2,"0")}`;

    },1000);

});

document
.getElementById("nextStep")
.addEventListener("click", () => {

    if(currentStep < steps.length){

        steps[currentStep]
        .classList.remove("active-step");

        currentStep++;

        if(currentStep < steps.length){

            steps[currentStep]
            .classList.add("active-step");

        }

        let progress =
        (currentStep / steps.length) * 100;

        document.getElementById("progressBar")
        .style.width = progress + "%";
    }

    if(currentStep === steps.length){

        alert(
        "🎉 Recipe Complete! Enjoy your Chocolate Cake!"
        );
    }

});

document
.getElementById("printRecipe")
.addEventListener("click", () => {

    window.print();

});