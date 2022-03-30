class MyClass {
	constructor(nom, prenom, age, nationalite) {
		this.name = nom;
		this.firstname = prenom;
		this.age = age;
		this.nationality = nationalite;
	}

	get nomComplet () {
		return(this.firstname+" "+this.name);
	}
}

let test = new MyClass("Doe", "John", 99, "unknown");
console.log(test);