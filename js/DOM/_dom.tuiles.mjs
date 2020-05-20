import {
    buildings
} from '../Data/data.mjs';

const divBuildings = document.getElementById("buildings");

export const updateTuiles = () => {
    document.addEventListener("DOMContentLoaded", () => {
        // Création des tuiles du store
        for (let i = 0; i < buildings.length; i++) {
            let divCursor = document.createElement("div")
            divCursor.id = "building-" + `${buildings[i].name.toLowerCase()}`;
            divCursor.classList = "locked disabled";
            divBuildings.appendChild(divCursor);
            // creation div-classicon
            let divIcon = document.createElement("div");
            divIcon.classList = "icon";
            divCursor.appendChild(divIcon);
            //creation div-name
            let divName = document.createElement("div");
            divName.classList = "name";
            divName.textContent = `${buildings[i].name}`;
            divCursor.appendChild(divName);
            // creation div-cost
            let divCost = document.createElement("div");
            divCost.classList = "cost";
            divCost.textContent = `${buildings[i].cost}`;
            divCursor.appendChild(divCost);
            // creation div-number
            let divNumber = document.createElement("div");
            divNumber.classList = "number";
            divCursor.appendChild(divNumber);
        }
    });
}