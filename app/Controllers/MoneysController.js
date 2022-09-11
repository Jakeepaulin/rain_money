import { appState } from "../AppState.js";
import { moneysService } from "../Services/MoneysService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawBudget() {
  let Template = "";
  appState.moneys.forEach((money) => (Template += money.Template));
  setHTML("budgets", Template);
}

export class MoneysController {
  constructor() {
    console.log("Controller is Working");
    _drawBudget();
    appState.on("budgets", _drawBudget);
    _drawBudget();
  }

  createItem() {
    try {
      // @ts-ignore
      window.event.preventDefault();
      // @ts-ignore
      const form = window.event.target;

      let formData = getFormData(form);

      moneysService.createMoney(formData);
      // @ts-ignore
      form.reset();

      console.log("Does this form look alright", formData);
    } catch (error) {
      error.log("[CREATE_ORDER]", error);
    }
  }
}
