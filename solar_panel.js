const uuidv4 = require("uuid/v4");

class Solar_Panel {
  constructor(id) {
    this.id = id;
  }
}

class Squared_Solar_Panel extends Solar_Panel {
  constructor(id, type) {
    super(id);
    this.type = type;
  }
}

class Small_Squared_Solar_Panel extends Squared_Solar_Panel {
  constructor(id, type, modelName, height, width, efficiency) {
    super(id, type);
    this.modelName = modelName;
    this.height = height; // in mm
    this.width = width; // in mm
    this.efficiency = efficiency; // as an int % --> 0.2 = 20%
  }
  solarOutput(hoursOfSunlight) {
    const squared_meters =
      (small_squared_solar_panel.height * small_squared_solar_panel.width) /
      1000;
    const solarOutputKw =
      (squared_meters * this.efficiency * hoursOfSunlight) / 1000;
    console.log(`The solar output of ${this.modelName} is ${solarOutputKw}KW`);
    return solarOutputKw;
  }
}

const solar_panel = new Solar_Panel();
solar_panel.id = uuidv4();

const squared_wolar_panel = new Squared_Solar_Panel();
squared_wolar_panel.type = "square";

const small_squared_solar_panel = new Small_Squared_Solar_Panel();
small_squared_solar_panel.modelName = "S123Solar";
small_squared_solar_panel.height = 1000;
small_squared_solar_panel.width = 1000;
small_squared_solar_panel.efficiency = 0.2;

small_squared_solar_panel.solarOutput(5);