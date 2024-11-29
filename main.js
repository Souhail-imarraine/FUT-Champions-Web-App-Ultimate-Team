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



function tactique(){
    tactiques.addEventListener("change", () => {

        // make empty container     
        attaquant.innerHTML = "";
        centerPlayer.innerHTML = "";
        defenceur.innerHTML = "";
        Goal.innerHTML = "";

        // get value Select 
        let valueSelected = tactiques.value;
    
        if(valueSelected === "442"){
    
            attaquant.innerHTML =
                `
                 <div class="player" data-Positionnement="LW">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="https://cdn.sofifa.net/players/020/801/25_120.png" alt="" class="image_player">
                        <h3 class="name_player">Cristiano Ronaldo</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
    
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Kevin De Bruyne</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                `
    
                centerPlayer.innerHTML = `
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                
                `
    
                defenceur.innerHTML = `
                     <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                `
    
                Goal.innerHTML = `
                
                     <div class="player GK">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">GK</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                
                `
    
        }else if(valueSelected === "433") {
    
            attaquant.innerHTML =
                `
                 <div class="player" data-Positionnement="LW">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="https://cdn.sofifa.net/players/020/801/25_120.png" alt="" class="image_player">
                        <h3 class="name_player">Cristiano Ronaldo</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
    
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Kevin De Bruyne</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
    
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Kevin De Bruyne</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                `
    
                centerPlayer.innerHTML = `
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                
                `
    
                defenceur.innerHTML = `
                     <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
                    <div class="player">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">RW</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                `

                Goal.innerHTML = `
                
                     <div class="player GK">
                        <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                        <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                        <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
                        <h3 class="name_player">Messi</h3>
                        <div class="flag_club_logo">
                            <h2 class="position">GK</h2>
                            <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
                            <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
                        </div>
                        <div class="info_player">  
                            <p><strong class="rt">93</strong></p>  
                            <div class="child_info">
                                <p class="info">PAC :<span> 85</span></p>  
                                <p class="info">SHO :<span> 92</span></p>  
                                <p class="info">PAS :<span> 91</span></p>  
                            </div>
                            <div class="child_info">
                                <p class="info"> DRI: <span> 95</span></p>  
                                <p class="info"> DEF:<span> 35</span></p>  
                                <p class="info" id="phy"> PHY:<span>65</span></p>  
                            </div>
                        </div>  
                    </div>
         `
        }
    });
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
            
        }else {
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




function validationForm(){
    myForm.addEventListener("submit", (e)=> {
        e.preventDefault();
        if(playerPosition){
            let inputs = myForm.querySelectorAll("input[type='number'], input[type='text'], input[type='file']");
            let errorValidate = document.querySelector('.error_validation');
            let valid = true;
            inputs.forEach(input => {
                if(!input.value) {
                    valid = false ;
                    input.style.borderColor = "red";
                }else {
                    input.style.borderColor = "green";
                }
            });

            if(valid) {
                errorValidate.textContent = "succes";
                errorValidate.style.color = "green";


                addPlayer();
                afficherPlayer(arrayAllPlayer);

            }else {
                errorValidate.textContent = "all fields are required";
                errorValidate.style.color = "red";

            }
        }

    })
    }

validationForm()


let btnAddPlayer = document.getElementById("Add_player");

function addPlayer(){

        let name = myForm.playerName;
        let playerClub = myForm.playerClub ;
        let playerNationality = myForm.playerNationality;
        let playerRating = parseInt(myForm.playerRating.value)|| 0;
        let mySelect = myForm.playerPosition;

    if(mySelect.value === "GK") {
            let playerRating = parseInt(myForm.playerRating.value) || 0;
            let diving = parseInt(myForm.diving.value) || 0;
            let handling = parseInt(myForm.handling.value) || 0;
            let kicking = parseInt(myForm.kicking.value) || 0;
            let reflexes = parseInt(myForm.reflexes.value) || 0;
            let speed = parseInt(myForm.speed.value) || 0;
            let playerPosition = mySelect.value || "";
            let photoPlayer = myForm.photoPlayer.value || "this file is not defined";
            let flag = myForm.photoPlayer.value || "this flag is not defined";
            let logo = myForm.logo.value || "this logo is not defined";

            let player = {
                name : name.value,
                playerClub : playerClub.value,
                playerNationality: playerNationality.value,
                playerRating : playerRating,
                playerPosition: playerPosition,
                diving : diving,
                handling : handling,
                kicking: kicking,
                reflexes : reflexes,
                speed : speed,
                photoPlayer: photoPlayer,
                flag: flag,
                logo: logo
            }
    
            ArrayGoals.push(player);
            arrayAllPlayer.push(player);
            console.log(ArrayGoals);
            console.log(arrayAllPlayer);

        }else {

            let pace = parseInt(myForm.pace.value) || 0;
            let playerShooting = parseInt(myForm.playerShooting.value) || 0;
            let playerPassing = parseInt(myForm.playerPassing.value) || 0;
            let playerDribbling = parseInt(myForm.playerDribbling.value) || 0;
            let  playerDefending = parseInt(myForm.playerDefending.value) || 0;
            let playerPhysical = parseInt(myForm.playerPhysical.value) || 0;
            let playerPosition = mySelect.value || "";
            let photoPlayer = myForm.photoPlayer.value || "this file is not defined";
            let flag = myForm.flag.value || "this flag is not defined";
            let logo = myForm.logo.value || "this logo is not defined";



            console.log(pace);
            console.log(playerShooting);
            console.log(playerPassing);
            console.log(playerDribbling);
            console.log(playerDefending);
            console.log(playerPhysical);
            console.log(photoPlayer);


            let player = {
                name : name.value,
                playerClub : playerClub.value,
                playerNationality: playerNationality.value,
                playerRating : playerRating,
                pace : pace,
                playerPassing : playerPassing,
                playerShooting : playerShooting,
                playerPosition: playerPosition,
                playerDribbling: playerDribbling,
                playerDefending : playerDefending,
                playerPhysical : playerPhysical,
                photoPlayer: photoPlayer,
                flag : flag,
                logo: logo
            }

            if(mySelect.value === "ST" || mySelect.value === "LW" || mySelect.value === "RW"){
                Attaquant.push(player);
                arrayAllPlayer.push(player);

            }else if(mySelect.value === "RM" || mySelect.value === "LM" ||  mySelect.value === "CM"){
                Milieu.push(player);
                arrayAllPlayer.push(player);
            }else{
                Defenseur.push(player);
                arrayAllPlayer.push(player);
            }
            console.log(Attaquant);

            console.log(Milieu);
            console.log(Defenseur);
            console.log(arrayAllPlayer)
        } 
        
        myForm.reset();
    }



    function afficherPlayer(arrayAllPlayer){
        let containerRemplacement = document.querySelector(".ihtiyat_player");

        arrayAllPlayer.forEach((e)=>{

                containerRemplacement.innerHTML = 
                `
                        <div class="player"> 
                            <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
                            <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
                            <img src="${e.photoPlayer}" alt="" class="image_player">
                            <h3 class="name_player">${e.name}</h3>
                            <div class="flag_club_logo">
                                <h2 class="position">${e.playerPosition}</h2>
                                <img src="${e.flag}" alt="" class="img_flag">
                                <img src="${e.logo}" alt="" class="clubgit ">
                            </div>
                            <div class="info_player">  
                                <p><strong class="rt">${e.playerRating}</strong></p>  
                                <div class="child_info">
                                    <p class="info">PAC :<span> ${e.pace}</span></p>  
                                    <p class="info">SHO :<span> ${e.playerShooting}</span></p>  
                                    <p class="info">PAS :<span> ${e.playerPassing}</span></p>  
                                </div>
                                <div class="child_info">
                                    <p class="info"> DRI: <span> ${e.playerDribbling}</span></p>  
                                    <p class="info"> DEF:<span> ${e.playerDefending}</span></p>  
                                    <p class="info" id="phy"> PHY:<span>${e.playerPhysical}</span></p>  
                                </div>
                            </div>  
                        </div>
                `
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




// function return my cardPlayer

// function myCardPlayer(arrayAllPlayer){

//     return `
//                     <div class="player">
//                         <i class="fa-solid fa-pen-to-square" style="color: #74C0FC;" id="edit"></i>
//                         <i class="fa-solid fa-delete-left" style="color: #ff0000;" id="delete"></i>
//                         <img src="Lionel_Messi_fifa_21.webp" alt="" class="image_player">
//                         <h3 class="name_player">Messi</h3>
//                         <div class="flag_club_logo">
//                             <h2 class="position">GK</h2>
//                             <img src="/Flag_of_Argentina.svg.webp" alt="" class="img_flag">
//                             <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="club">
//                         </div>
//                         <div class="info_player">  
//                             <p><strong class="rt">93</strong></p>  
//                             <div class="child_info">
//                                 <p class="info">PAC :<span> 85</span></p>  
//                                 <p class="info">SHO :<span> 92</span></p>  
//                                 <p class="info">PAS :<span> 91</span></p>  
//                             </div>
//                             <div class="child_info">
//                                 <p class="info"> DRI: <span> 95</span></p>  
//                                 <p class="info"> DEF:<span> 35</span></p>  
//                                 <p class="info" id="phy"> PHY:<span>65</span></p>  
//                             </div>
//                         </div>  
//                     </div>
//     `
// }

// console.log(arrayAllPlayer);