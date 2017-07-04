'use strict';

const itemBoard = (board) => {
  const item = $('<a href ="details.html?id='+id+'" class="item"></a>');
  const img = $('<img src="'+board.src+'"/>');
  const title = $('<h5>'+board.title+'</h5>');
  const description = $('<p>'+board.description+'</p>');
  const div = $('<div></div>');
  const foto = $('<img src="'+board.src+'"/>');
  const user = $('<h5>'+board.title+'</h5>');
  const name_board = $('<p>'+board.description+'</p>');
  div.append(foto,user,name_board);
  item.append(img,title,description,div);

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
