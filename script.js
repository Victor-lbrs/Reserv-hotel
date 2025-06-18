let form = document.querySelector("#form1"); // prends le form

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // empêche le refresh de la page

    let dateArrivee = document.getElementById("date-arrivee").value; // prend la valeur du champ grâce à l'id "date-arrivee"
    let dateDepart = document.getElementById("date-depart").value;

    if (dateArrivee >= dateDepart) {
        alert("la date de départ doit être inférieur à la date d'arrivée");
        return; // bloque l'envoi du form
    }

        // prend les données des champs
        let adulte = document.getElementById("adulte").value; 
        let enfant = document.getElementById("enfant").value;
        let chambre = document.getElementById("chambre").value;
        let travail;
            if (document.getElementById("travail").checked) { //vérifie si la case est cohée
              travail = "Oui";
                } else {
                     travail = "Non";
                } 

        // met a jour le bloc droite
        document.getElementById("conf-adulte").textContent = adulte;
        document.getElementById("conf-enfant").textContent = enfant;
        document.getElementById("conf-chambre").textContent = chambre;
        document.getElementById("conf-travail").textContent = travail;

        form.reset(); // remet les champs à 0
    });