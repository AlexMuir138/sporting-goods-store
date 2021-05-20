import { ProxyState } from "../AppState.js";

export class GoodsController {
  constructor() {
    ProxyState.on('goods', this._drawGoods)
    this._drawGoods()
  }

  _drawGoods() {
    let template = ''
    ProxyState.goods.forEach(good => {
      template += /*html*/`
      <div class="col-lg-3 my-3" id="listings">
      <div class="card">
          <div> 
              <img src="http://placehold.it/500x500" height="200" /> 
           </div>
           <div class="card-body">
               <p>
                  <b>${good.name} ${good.stock}</b>
               </p>
               <p>
                   <em>$${good.price}</em>
               </p>
               </div>
               </div>
               <div class="row text-center m-3" id="buy">
               <div class="col-12">
               <button class="btn btn-info">
               Add Balls
               </button>
               </div>
               </div>
               </div>
      `
    })
    document.getElementById('listings').innerHTML = template
  }

  addGood()
}