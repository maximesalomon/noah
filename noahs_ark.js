class Ark {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const noahs_ark = new Ark();

noahs_ark.id = 1
noahs_ark.name = "Noah's Ark"

console.log(noahs_ark.id + " " + noahs_ark.name);