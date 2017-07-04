'use strict';

const Modal = (itemSelect,data,update) => {
  const container = $('<div><div class="container"><h1>Cine laboratoria</h1></div></div>');
  const modal = $('<div class="container"><h1>Cine laboratoria</h1></div>');
  const grid = $('<div><div class="container"><h1>Cine laboratoria</h1></div></div>');
  container.append(modal,render(grid,data,update));
  return container;
}
