function afficheVille() {
            let nomVilleChoisie = document.getElementById("Ville").value;
            let villes = document.getElementsByClassName("weather_city");
            for (let i = 0; i < villes.length; i++) {
                if (villes[i].id === nomVilleChoisie) {
                    villes[i].style.display = "block";
                } else {
                    villes[i].style.display = "none";
                }
            }
        }