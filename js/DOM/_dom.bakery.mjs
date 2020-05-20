const nomBoulangerie = document.querySelector("#bakery h2");
const stockCookies = document.querySelector("#cookiesStock span");
const cookiesSecond = document.querySelector("#cookiesPerSecond span");

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const updateBakery = (bakeryObjet) => {
    document.addEventListener("DOMContentLoaded", () => {
        // changement boulangerie
        nomBoulangerie.innerHTML = bakeryObjet._name;
        stockCookies.innerHTML = bakeryObjet._cookies;
        cookiesSecond.innerHTML = bakeryObjet._cookiesPerSecond;
    })
}

let grosCookie = document.getElementById("bigCookie");
let bakery = document.getElementById("bakery");

export const clickCookie = (myBakery) => {
    grosCookie.addEventListener("click", (e) => {
        stockCookies.innerHTML = myBakery.bakeCookies();

        let numberClick = document.createElement("div");
        numberClick.classList = "numberClick";
        numberClick.textContent = "+1";

        numberClick.style.position = "absolute";
        numberClick.style.top = e.clientY + "px";
        numberClick.style.left = e.clientX + "px";

        let soundClick = document.createElement("audio");
        soundClick.src = `/assets/sounds/click${entierAleatoire(1,7)}.mp3`;
        soundClick.play();

        bakery.appendChild(soundClick);
        bakery.appendChild(numberClick);

        setTimeout(function () {
            bakery.removeChild(numberClick)
        }, 3000);
        setTimeout(function () {
            bakery.removeChild(soundClick)
        }, 3000);

        // let cost = document.querySelector(".cost");
        // let buildingCursor = document.querySelector("#building-cursor");
        // let buildingGrandma = document.querySelector("#building-grandma");

        // console.log(cost.innerHTML);
        // console.log(stockCookies.innerHTML);

        // if(parseInt(stockCookies.innerHTML) > parseInt(cost.innerHTML)) {
        //     buildingCursor.className = "unlocked disabled";
        //     buildingGrandma.className ="unlocked disabled";
        // }

    })

}