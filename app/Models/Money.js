import { generateId } from "../Utils/generateId.js";

export class Money {
  constructor(data) {
    this.id = data.id || generateId();
    this.budget = data.budget;
    this.price = data.price;
    this.type = data.type;
  }

  get Template() {
    return /*html*/ `
     <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex gap-3">
                    <input type="checkbox" />
                    <h4>${this.budget}</h4>
                     </div>
                  <div>${this.type}</div>
                </div>
                  </div>
                  <div>Money of ${this.price}</div>
                </div>
                <ul class="list-group elevation-1 mb-3">
                  <li class="d-flex justify-content-between list-group-item">
                    <span>Sell Old TV</span>
                    <span>$120</span>
                  </li>
                  <li class="d-flex justify-content-between list-group-item">
                    <span>Birthday Money</span>
                    <span>$60</span>
                  </li>
                  <li class="d-flex justify-content-between list-group-item">
                    <span>60 from the next 3 paychekcs</span>
                    <span>$180</span>
                  </li>
                </ul>
                <form class="bg-info rounded p-1" onsubmit="">
                  <div class="d-flex w-100">
                    <div class="flex-grow-1">
                      <input
                        class="form-control square-right"
                        type="text"
                        required
                        minlength="2"
                        name="name"
                        placeholder="Source of Savings..."
                      />
                      <label for="name" class="visually-hidden">Source</label>
                    </div>
                    <div>
                      <input
                        class="form-control square"
                        type="number"
                        required
                        min="0"
                        name="price"
                        placeholder="0.00"
                      />
                      <label for="price" class="visually-hidden">Money</label>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-info square-left"
                      title="Add Item"
                    >
                      <b><i class="mdi mdi-plus text-light"></i></b>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    `;
  }
}
