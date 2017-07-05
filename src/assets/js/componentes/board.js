'use strict';

const Board = (data,update) => {
  console.log(data.boards);
  console.log(state.data.foto);
  const container = $('<div class="container boards"></div>');
  reRender(container,data.boards,update)
  return container;
}

const itemBoard = (board) => {
  const item = $('<div class="boards__item"></div>');
  const img = $('<img class="boards__item--img" src="'+board.image.original.url+'"alt="" width="100%">');
  const div = $('<div class="container-fluid"></div>');
  const title = $('<h4>at Responsive <br>Website template</h4>');
  const description = $('<p>'+board.note+'</p>');
  const picture = $('<img class="img-circle" src="'+state.data.foto+'" alt="user">');
  const autor = $('<span class="col-xs-4 pull-right">Arbale <br>'+state.data.name+'</span>');

  div.append(title,description,picture,autor);
  item.append(img,div);
  return item;

}

const reRender = (container,arrayBoard,update) => {
  container.empty();
  if (arrayBoard.length > 0) {
    $.each(arrayBoard,(index,item) => {
      container.append(itemBoard(item,update));
    });
  } else {
    container.append($('<p>Boards no encontrado</p>'));
  }
}
