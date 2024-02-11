class User {

    constructor(a, b, c) {
        this.f_name = a
        this.l_name = b
        this.b_date = c
    }

    fullName(){
        return this.f_name +' '+ this.l_name;
    }
    age(){
        return new Date().getFullYear() - this.b_date
    }
    introducing() {
        return  `Hello én ${this.fullName()} vagyok, az életkorom ${this.age()} év.`;
    }


}


class Developer extends User {
    constructor(a, b, c){
        super(a, b, c)
        this.job = 'mobil app developer'
    }

introducing() {
    return  `Hello én ${this.fullName()} vagyok, az életkorom ${this.age()} év.A foglalkozásom: ${this.job}`;
}
}

const dev = new Developer('Kiss', 'Helga', 1950);
console.log( dev.introducing() );
