const uuidv4 = require("uuid/v4");

class Sail {
  constructor(id, height, width, lenght, color) {
    this.id = id;
    this.height = height; // in mm
    this.width = width; // in mm
    this.lenght = lenght; // in mm
    this.color = color;
  }
}

const sail = new Sail();
sail.id = uuidv4();
sail.height = 20000;
sail.width = 150000;
sail.lenght = 250000;
sail.color = "blue";
