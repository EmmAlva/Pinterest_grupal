'use strict';

const Header = (data,update) => {
  //console.log(data);


  const header = $('<header></header>');
  const container = $('<div class="container"></div>');
  const row0 = $('<div class = "row"></div>');

  const row = $('<div class = "row"></div>');
  const col = $('<div class="col-lg-6 col-lg-offset-3"></div>');
  const col1_6 = $('<div class="col-lg-6"></div>');
  const boardName = $('<h2 class="text-bold">'+data.name+'</h2>');
  const pins = $('<p><strong>'+data.pins+'</strong> Pines</p>');
  const followers = $('<p><strong>'+data.followers+'</strong> sSeguidores</p>');
  const col2_6 = $('<div class="col-lg-6"></div>');
  const picture = $('<img class="img-circle pull-right" src="'+data.foto+'" alt="user">');

  header.append(container);
  container.append(row);
  row.append(col);
  col.append(boardName);
  col.append(col1_6);
  col.append(col2_6);
  col1_6.append(pins);
  col1_6.append(followers);
  col2_6.append(picture);

  return header;
}
