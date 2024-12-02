/***********************************
 * *****************************
 * tactiques  4-4-3 / 4-3-3
 * ******************************
************************************/



let tactiques = document.getElementById("tactiques");
let attaquant = document.getElementById("attaquant");
let centerPlayer = document.getElementById("centerPlayer");
let defenceur = document.getElementById("defenceur");
let Goal = document.getElementById("Goal");
let playCard = document.querySelectorAll(".player_card");

let ArrayGoals = [];
let Defenseur = [];
let Milieu = [];
let Attaquant = [];
let arrayAllPlayer = [];


// object forma position

const formations = {
    442: {
        front: ["LW", "RW"],
        middle: ["LM", "CM", "CM", "RM"],
        last: ["LB", "CM", "RB"],
        goal: ["GK"],
    },
    433: {
        front: ["LW", "ST", "RW"],
        middle: ["LM", "CM", "RM"],
        last: ["LB", "CB", "CB", "RB"],
        goal: ["GK"],
    },
};


const player_card = ` <div class="player empty" data-position="">
                            <img src="" alt="" class="image_player"> 
                            <h3 class="name_player"></h3> 
                            <div class="flag_club_logo"> 
                            <h2 class="position"></h2> 
                            <img src="" alt="" class="img_flag">
                                <img src="" alt="" class="club"> </div>
                                <div class="info_player"> 
                                    <p><strong class="rt"></strong></p>
                                    <div class="child_info"> 
                                        <p class="info">PAC :<span></span></p>
                                        <p class="info">SHO :<span></span></p> 
                                        <p class="info">PAS :<span></span></p> 
                                    </div> <div class="child_info"> 
                                        <p class="info"> DRI: <span></span></p>
                                        <p class="info"> DEF:<span></span></p>
                                        <p class="info" id="phy"> PHY:<span></span></p> 
                                        </div> 
                                    </div> 
                        </div> `;

const goalCard = ` <div class="player empty GK" data-position="GK"> <img src="" alt="" class="image_player_added"> <h3 class="name_player_added"></h3> <div class="flag_club_logo_added"> <h2 class="position">GK</h2> <img src="" alt="" class="img_flag"> <img src="" alt="" class="club"> </div> <div class="info_player_added"> <p><strong class="rt"></strong></p> <div class="child_info"> <p class="info">DIV: <span></span></p> <p class="info">HAD: <span></span></p> <p class="info">KIK: <span></span></p> </div> <div class="child_info"> <p class="info">REF: <span></span></p> <p class="info">SPD: <span></span></p> </div> </div> </div> `;



// cheak forma 4-4-2 or 4-3-3

function cheakFormstion(formation) {
    const forma = formations[formation];

    attaquant.innerHTML = "";
    centerPlayer.innerHTML = "";
    defenceur.innerHTML = "";
    Goal.innerHTML = "";


    forma.front.forEach((position) => {
        let card = document.createElement("div");
        card.innerHTML = player_card;
        card.firstElementChild.setAttribute("data-position", position);
        attaquant.appendChild(card.firstElementChild);
    });
    forma.middle.forEach((position) => {
        let card = document.createElement("div");
        card.innerHTML = player_card;
        card.firstElementChild.setAttribute("data-position", position);
        centerPlayer.appendChild(card.firstElementChild);
    });
    forma.last.forEach((position) => {
        let card = document.createElement("div");
        card.innerHTML = player_card;
        card.firstElementChild.setAttribute("data-position", position);
        defenceur.appendChild(card.firstElementChild);
    });
    forma.goal.forEach((position) => {
        let card = document.createElement("div");
        card.innerHTML = goalCard;
        card.firstElementChild.setAttribute("data-position", position);
        Goal.appendChild(card.firstElementChild);
    });
    document.querySelectorAll(".player.empty").forEach((el) => {
        el.addEventListener("click", () => {
            if (selectedPlayerIndex !== null) {
                addToPosition(selectedPlayerIndex, el);
                selectedPlayerIndex = null;
            }
        });
    });
}
tactiques.addEventListener("change", () => {
    cheakFormstion(tactiques.value);
});
cheakFormstion("442");


function tactique() {
    tactiques.addEventListener("change", () => {
        const valueSelected = tactiques.value;
        if (valueSelected == "442") {
            attaquant.innerHTML = "";
            centerPlayer.innerHTML = "";
            defenceur.innerHTML = "";
            cheakFormstion("442");
        } else if (valueSelected == "433") {
            attaquant.innerHTML = "";
            centerPlayer.innerHTML = "";
            defenceur.innerHTML = "";
            cheakFormstion("433");
        }
    })
}

tactique();



/* ***************************
***** validation form  ******
*****************************
*****************************/

let myForm = document.forms.playerForm;
let position = myForm.playerPosition;




function playerPosition() {
    let containerInfoForm = document.querySelector(".container_info_form");

    position.addEventListener("change", () => {
        let positionValue = position.value;
        // containerInfoForm.innerHTML = ""; 

        if (positionValue === "GK") {

            containerInfoForm.innerHTML = `
                <div class="attribute-input">  
                    <label for="diving">Diving:</label>
                    <input type="number" id="diving" name="diving" min="0" max="100" placeholder="89" >                   
                </div>
                <div class="attribute-input">  
                    <label for="handling">Handling:</label>
                    <input type="number" id="handling" name="handling" min="0" max="100" placeholder="90" >                  
                </div>
                <div class="attribute-input">  
                    <label for="kicking">Kicking:</label>
                    <input type="number" id="kicking" name="kicking" min="0" max="100" placeholder="78" >                
                </div>
                <div class="attribute-input">  
                    <label for="reflexes">Reflexes:</label>
                    <input type="number" id="reflexes" name="reflexes" min="0" max="100" placeholder="99" >              
                </div>
                <div class="attribute-input">  
                    <label for="speed">Speed:</label>
                    <input type="number" id="speed" name="speed" min="0" max="100" placeholder="50" >             
                </div>
                <div class="attribute-input">  
                    <label for="photoPlayer">Photo:</label>
                    <input type="text" id="photoPlayer" name="photoPlayer" >          
                </div>
                 <div class="attribute-input">  
                    <label for="flag">Flag:</label>  
                    <input type="text" id="flag" name="flag">  
                </div>  
                 <div class="attribute-input">  
                    <label for="flag">logo:</label>  
                    <input type="text" id="logo" name="logo" placeholder="lien logo">  
                </div>  
            `;

        } else {
            containerInfoForm.innerHTML = `

                            <div class="attribute-input">  
                                <label for="playerPace">Pace:</label>  
                                <input type="number" id="playerPace" name="pace" min="0" max="99" placeholder="Enter pace (0-99)">  
                            </div>  
    
                            <div class="attribute-input">  
                                <label for="playerShooting">Shooting:</label>  
                                <input type="number" id="playerShooting" name="playerShooting" min="0" max="99" placeholder="Enter shooting (0-99)">  
                            </div>  
    
                            <div class="attribute-input">  
                                <label for="playerPassing">Passing:</label>  
                                <input type="number" id="playerPassing" name="playerPassing" min="0" max="99" placeholder="Enter passing (0-99)">  
                            </div>  
    
                            <div class="attribute-input">  
                                <label for="playerDribbling">Dribbling:</label>  
                                <input type="number" id="playerDribbling" name="playerDribbling" min="0" max="99" placeholder="Enter dribbling (0-99)">  
                            </div>  
    
                            <div class="attribute-input">  
                                <label for="playerDefending">Defending:</label>  
                                <input type="number" id="playerDefending" name="playerDefending" min="0" max="99" placeholder="Enter defending (0-99)">  
                            </div>  
    
                            <div class="attribute-input">  
                                <label for="playerPhysical">Physical:</label>  
                                <input type="number" id="playerPhysical" name="playerPhysical" min="0" max="99" placeholder="Enter physical (0-99)">  
                            </div>  
    
                            <div class="attribute-input">  
                                <label for="photoPlayer">Photo:</label>  
                                <input type="text" id="photoPlayer" name="photoPlayer" placeholder="lien image">  
                            </div>  
                            <div class="attribute-input">  
                                <label for="flag">Flag:</label>  
                                <input type="text" id="flag" name="flag" placeholder="lien flag">  
                            </div>  
                            <div class="attribute-input">  
                                <label for="flag">logo:</label>  
                                <input type="text" id="logo" name="logo" placeholder="lien logo">  
                            </div>  
            `;
        }
    });
}

playerPosition();

let btnAddPlayer = document.getElementById("Add_player");


function validationForm() {
    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (playerPosition) {
            let inputs = myForm.querySelectorAll("input[type='number'], input[type='text'], input[type='file']");
            let errorValidate = document.querySelector('.error_validation');
            let valid = true;
            inputs.forEach(input => {
                if (!input.value) {
                    valid = false;
                    input.style.borderColor = "red";
                } else {
                    input.style.borderColor = "green";
                }
            });
            if (valid) {
                errorValidate.textContent = "succes";
                errorValidate.style.color = "green";

                addPlayer();
                afficherPlayer(arrayAllPlayer);
                deletePlayer();
                editPlayer();
                e.preventDefault();
            } else {
                errorValidate.textContent = "all fields are required";
                errorValidate.style.color = "red";

            }
        }

    })
}

validationForm()



function addPlayer() {
    let name = myForm.playerName;
    let playerClub = myForm.playerClub;
    let playerNationality = myForm.playerNationality;
    let playerRating = parseInt(myForm.playerRating.value) || 0;
    let mySelect = myForm.playerPosition;



    if (mySelect.value === "GK") {
        let playerRating = myForm.playerRating.value || 0;
        let diving = myForm.diving.value || 0;
        let handling = myForm.handling.value || 0;
        let kicking = myForm.kicking.value || 0;
        let reflexes = myForm.reflexes.value || 0;
        let speed = myForm.speed.value || 0;
        let playerPosition = mySelect.value;
        let photoPlayer = myForm.photoPlayer.value || "this file is not defined";
        let flag = myForm.photoPlayer.value || "this flag is not defined";
        let logo = myForm.logo.value || "this logo is not defined";

        let player = {
            name: name.value,
            playerClub: playerClub.value,
            playerNationality: playerNationality.value,
            playerRating: playerRating,
            playerPosition: playerPosition,
            diving: diving,
            handling: handling,
            kicking: kicking,
            reflexes: reflexes,
            speed: speed,
            photoPlayer: photoPlayer,
            flag: flag,
            logo: logo
        }

        ArrayGoals.push(player);
        arrayAllPlayer.push(player);

    } else {

        let pace = parseInt(myForm.pace.value) || 0;
        let playerShooting = parseInt(myForm.playerShooting.value) || 0;
        let playerPassing = parseInt(myForm.playerPassing.value) || 0;
        let playerDribbling = parseInt(myForm.playerDribbling.value) || 0;
        let playerDefending = parseInt(myForm.playerDefending.value) || 0;
        let playerPhysical = parseInt(myForm.playerPhysical.value) || 0;
        let playerPosition = mySelect.value || "";
        let photoPlayer = myForm.photoPlayer.value || "this file is not defined";
        let flag = myForm.flag.value || "this flag is not defined";
        let logo = myForm.logo.value || "this logo is not defined";

        let player = {
            name: name.value,
            playerClub: playerClub.value,
            playerNationality: playerNationality.value,
            playerRating: playerRating,
            pace: pace,
            playerPassing: playerPassing,
            playerShooting: playerShooting,
            playerPosition: playerPosition,
            playerDribbling: playerDribbling,
            playerDefending: playerDefending,
            playerPhysical: playerPhysical,
            photoPlayer: photoPlayer,
            flag: flag,
            logo: logo
        }

        if (mySelect.value === "ST" || mySelect.value === "LW" || mySelect.value === "RW") {
            Attaquant.push(player);
            arrayAllPlayer.push(player);
        } else if (mySelect.value === "RM" || mySelect.value === "LM" || mySelect.value === "CM") {
            Milieu.push(player);
            arrayAllPlayer.push(player);
        } else {
            Defenseur.push(player);
            arrayAllPlayer.push(player);
        }
    }
    myForm.reset();
}



function afficherPlayer(arrayAllPlayer) {
    let containerRemplacement = document.querySelector(".ihtiyat_player");
    containerRemplacement.innerHTML = "";

    arrayAllPlayer.forEach((e, index) => {
        let singleCard = document.createElement("div");
        singleCard.classList.add("single");

        if (e.playerPosition !== "GK") {
            singleCard.innerHTML = `
                <div class="player"> 
                    <i class="fa-solid fa-pen-to-square" onclick="editPlayer(${index})" style="color: #74C0FC;" class="edit"></i>
                    <i class="fa-solid fa-delete-left" style="color: #ff0000;" class="delete"></i>
                    <img src="${e.photoPlayer}" alt="" class="image_player_added">
                    <h3 class="name_player_added">${e.name}</h3>
                    <div class="flag_club_logo_added">
                        <h2 class="position">${e.playerPosition}</h2>
                        <img src="${e.flag}" alt="" class="img_flag">
                        <img src="${e.logo}" alt="" class="club">
                    </div>
                    <div class="info_player_added">  
                        <p><strong class="rt">${e.playerRating}</strong></p>  
                        <div class="child_info">
                            <p class="info">PAC: <span>${e.pace}</span></p>  
                            <p class="info">SHO: <span>${e.playerShooting}</span></p>  
                            <p class="info">PAS: <span>${e.playerPassing}</span></p>  
                        </div>
                        <div class="child_info">
                            <p class="info">DRI: <span>${e.playerDribbling}</span></p>  
                            <p class="info">DEF: <span>${e.playerDefending}</span></p>  
                            <p class="info" id="phy">PHY: <span>${e.playerPhysical}</span></p>  
                        </div>
                    </div>  
                </div>`;
        } else {
            singleCard.innerHTML = `
                <div class="player GK"> 
                    <i class="fa-solid fa-pen-to-square edit" onclick="editPlayer(${index})" style="color: #74C0FC;" ></i>
                    <i class="fa-solid fa-delete-left delete" style="color: #ff0000;"></i>
                    <img src="${e.photoPlayer}" alt="" class="image_player_added">
                    <h3 class="name_player_added">${e.name}</h3>
                    <div class="flag_club_logo_added">
                        <h2 class="position">${e.playerPosition}</h2>
                        <img src="${e.flag}" alt="" class="img_flag">
                        <img src="${e.logo}" alt="" class="club">
                    </div>
                    <div class="info_player_added">  
                        <p><strong class="rt">${e.playerRating}</strong></p>  
                        <div class="child_info">
                            <p class="info">DIV: <span>${e.diving}</span></p>  
                            <p class="info">HAD: <span>${e.handling}</span></p>  
                            <p class="info">KIK: <span>${e.kicking}</span></p>  
                        </div>
                        <div class="child_info">
                            <p class="info">REF: <span>${e.reflexes}</span></p>  
                            <p class="info">SPD: <span>${e.speed}</span></p>  
                        </div>
                    </div>  
                </div>`;
        }

        containerRemplacement.appendChild(singleCard);
    });
}




//***************** */ icon to affiche form ********************

let myIconForm = document.getElementById("afficherFormIcon");
let containerForm = document.querySelector(".container_form");
let secondIconForm = document.getElementById("afficherFormIconForm");

function toggleForm() {
    if (containerForm.style.display === "none") {
        containerForm.style.display = "block";
        myIconForm.classList.add("fa-xmark");
        myIconForm.classList.remove("fa-plus");
        myIconForm.style.display = "none";
    } else {
        containerForm.style.display = "none";
        myIconForm.classList.add("fa-plus");
        myIconForm.classList.remove("fa-xmark");
        myIconForm.style.display = "block";
    }
}

myIconForm.addEventListener("click", toggleForm);
secondIconForm.addEventListener("click", toggleForm);



// delete 
function deletePlayer() {
    let btnIcon = document.querySelectorAll(".fa-delete-left");
    btnIcon.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            var filter = arrayAllPlayer.findIndex(ele => ele.name.trim().toLowerCase() === e.target.parentNode.querySelector(".name_player_added").textContent.trim().toLowerCase());
            console.log(filter);
            if (filter > -1 && filter < arrayAllPlayer.length) {
                arrayAllPlayer.splice(filter, 1);
            }
            afficherPlayer(arrayAllPlayer);
        })
    })

}



// edit
function editPlayer(i) {
    const playerData = arrayAllPlayer[i];
    const deleted = playerData.name;
    console.log(deleted);

    myForm.reset();

    btnAddPlayer.style.display = "none";
    myForm["playerPosition"].value = playerData.playerPosition;
    myForm["photoPlayer"].value = playerData.photoPlayer;
    myForm["flag"].value = playerData.flag;
    myForm["logo"].value = playerData.logo;
    myForm["playerClub"].value = playerData.playerClub;
    myForm["playerNationality"].value = playerData.playerNationality;
    myForm["playerRating"].value = playerData.playerRating;

    if (playerData.playerPosition === "GK") {
        myForm["playerName"].value = playerData.name;
        myForm["diving"].value = playerData.diving;
        myForm["handling"].value = playerData.handling;
        myForm["kicking"].value = playerData.kicking;
        myForm["reflexes"].value = playerData.reflexes;
        myForm["speed"].value = playerData.speed;
    } else {
        myForm["playerName"].value = playerData.name;
        myForm["pace"].value = playerData.pace;
        myForm["playerShooting"].value = playerData.playerShooting;
        myForm["playerPassing"].value = playerData.playerPassing;
        myForm["playerDribbling"].value = playerData.playerDribbling;
        myForm["playerDefending"].value = playerData.playerDefending;
        myForm["playerPhysical"].value = playerData.playerPhysical;
    }
    toggleForm();

    document.getElementById("edit_player").addEventListener("click", () => {


        playerData.playerPosition = myForm["playerPosition"].value;
        playerData.photoPlayer = myForm["photoPlayer"].value;
        playerData.flag = myForm["flag"].value;
        playerData.logo = myForm["logo"].value;
        playerData.playerClub = myForm["playerClub"].value;
        playerData.playerNationality = myForm["playerNationality"].value;
        playerData.playerRating = myForm["playerRating"].value;

        if (playerData.playerPosition === "GK") {
            playerData.name = myForm["playerName"].value;
            playerData.diving = myForm["diving"].value;
            playerData.handling = myForm["handling"].value;
            playerData.kicking = myForm["kicking"].value;
            playerData.reflexes = myForm["reflexes"].value;
            playerData.speed = myForm["speed"].value;
        } else {
            playerData.name = myForm["playerName"].value;
            playerData.pace = myForm["pace"].value;
            playerData.playerShooting = myForm["playerShooting"].value;
            playerData.playerPassing = myForm["playerPassing"].value;
            playerData.playerDribbling = myForm["playerDribbling"].value;
            playerData.playerDefending = myForm["playerDefending"].value;
            playerData.playerPhysical = myForm["playerPhysical"].value;
        }


        containerForm.style.display = "none"
        toggleForm();
    })
    arrayAllPlayer = arrayAllPlayer.filter(element => element.name !== deleted);
    console.log(arrayAllPlayer);
}

