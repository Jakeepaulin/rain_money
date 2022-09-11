import { MoneysController } from "./Controllers/MoneysController.js";

class App {
  // valuesController = new ValuesController();
  moneysController = new MoneysController();
}

window["app"] = new App();
