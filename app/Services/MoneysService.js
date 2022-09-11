import { appState } from "../AppState.js";
import { Money } from "../Models/Money.js";

class MoneysService {
  createMoney(formData) {
    let money = new Money(formData);
    appState.moneys = [money, ...appState.moneys];
    console.log(appState.moneys);
  }
}
export const moneysService = new MoneysService();
