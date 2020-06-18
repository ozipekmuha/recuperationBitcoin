const url = "https://blockchain.info/ticker";

function recupererPrix(){


    //  creer une requete : 
    let requete = new XMLHttpRequest();

    requete.open('GET', url);
    // le premier parametre c'est un choix entre get ou post 
    // 2 eme parametres: L'URL qu'on a stocker dans const url 


    // retour que nous attendons 
    requete.responseType = "json"; // nous attendons du json 

    // envoi de la requete 
    requete.send();


    // des qu'on recoit une reponse on execute une fct 
    requete.onload = () => {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response; // on stock la reponse ( le gros fichier de bg )
                let prixEnEuro = reponse.EUR.last; 
                document.querySelector("#price_label").textContent = prixEnEuro; 
                console.log(prixEnEuro); 
            } else {
                alert('ya un probleme degage');
            }
        }
    }

    }


  setInterval(recupererPrix,100); 