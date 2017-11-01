var person = {
    name: "Ana",
    size: 22,
    get goda() {
        return this.size;
    },
    set goda(da)
    {
        this.size = da < 0 ? "при меньше нуля выводит эту надпись как ИСТУНУ" : da > 122 ? 122: da;
    }
};


/*person.goda = 199;
console.log(person.size);
person.goda = -2;
console.log(person.size);
person.goda = 34;
console.log(person.size);*/

Object.getOwnPropertyDescriptor(person, "name")