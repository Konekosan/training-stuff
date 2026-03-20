class Usager {
    nom: string | null = null;
    prenom: string | null = null;
    age: number | null = null;
    date_naissance: Date | null = null;
    adresse: string | null = null;

    constructor(nom: string,
                prenom: string,
                age: number,
                date_naissance: Date,
                adresse: string
    ){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.date_naissance = date_naissance;
        this.adresse = adresse;
    }

}