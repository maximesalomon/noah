class Ark {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  float() {
    return "I've been built by Noah, of course I float!";
  }
}

const noahs_ark = new Ark();

noahs_ark.id = 1;
noahs_ark.name = "Noah's Ark";
