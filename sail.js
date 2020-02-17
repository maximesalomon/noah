const uuidv4 = require("uuid/v4");

class Sail {
  constructor(id) {
    this.id = id;
  }
}

const sail = new Sail();
sail.id = uidv4();


// TODO INTERFACE