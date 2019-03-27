//Menu de démarrage:
console.log("bienvenue dans le gestionnaire des contacts");
console.log("1: Lister les contacts");
console.log("2: Ajouter un contact");
console.log("0: Quitter");

//Construction de l'objet contact
class contact{
	constructor(nom,prenom){
	this.nom=nom;
	this.prenom=prenom;
	}
	
	decrire(){
		return `Nom : ${this.nom}, prénom: ${this.prenom}`;
	}
}

//Construction du tableau de contacts
let listeContacts = [];
listeContacts.push(new contact("Lévisse","Carole"));
listeContacts.push(new contact("Mélodie","Nelsonne"));

//Navigation User
let saisie = "";
while (true){
	saisie = prompt("Choisissez une option : ");
	if(saisie === "1"){
			console.log("voici la liste de tous vos contact:");
			listeContacts.forEach(contact => {
			console.log(contact.decrire());
			});
	} else if(saisie === "2"){
			const saisieNom = prompt("Entrez un nom : ");
			const saisiePrenom = prompt("Entrez un prenom : ");
			listeContacts.push(new contact(saisieNom,saisiePrenom));
			console.log(`${saisieNom} ${saisiePrenom} a bien été ajouté à la liste des contacts`);
	} else if(saisie === "0"){
			console.log("Au revoir");
			break;
	}
}