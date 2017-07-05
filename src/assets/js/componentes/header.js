
'use strict';
const Header = (data,update) => {
  //console.log(data);
  const header = $('<header></header>');
  const section = $("<section></section>");
  const divContainerfluid = $("<div class='container-fluid'></div>");
  const divRow = $("<div class='row flex-container-row margin1x1'></div>");
  const divCol1 = $("<div class='col-xs-3 col-md-2'></div>");
  const aPintLog = $("<a href='#'></a>");
  const divPintLogHover = $("<div class='hover flex-container-column'></div>");
  const imgPintLog = $("<img src='assets/img/pinterest-logo.png' height='28px' width='28px'>");
  // const pPintLog = $("<p class='darkslategray-text-color'>Inicio</p>");
  const divCol2 = $("<div class='visible-xs col-xs-3'></div>");
  const divIcoSearchHover = $("<div class='hover flex-container-column'></div>");
  const icoSearch = $('<img style="font-size:24px; width: 20px;" src="assets/img/search.png" >');
  // const pIcoSeaerch = $("<p class='silver-text-color'>Buscar</p>");
  const divCol3 = $("<div class='hidden-xs col-md-4'></div>");
  const divInputGroup = $("<div class='input-group'></div>");
  const spanInpAdd = $("<span class='input-group-addon'></span>");
  const icoSearchHidden = $('<img style="font-size:24px; width: 20px" src="assets/img/search.png" >');
  const inputHiddenSearch = $("<input type='text' class='form-control' placeholder='Buscar'>");
  const divCol4 = $("<div class='col-xs-2 col-md-2'></div>");
  const aUser = $("<a href='#'></a>");
  const divUserHov = $("<div class='hover flex-container-column'></div>");
  const icoUser = $('<img style="font-size:24px" src="assets/img/icon-profile.png" >');
  // const pUser = $("<p class='silver-text-color'>Guardado</p>");
  const divCol5 = $("<div class='col-xs-2 col-md-2'></div>");
  const aTask = $("<a href='#'></a>");
  const divTaskHov = $("<div class='hover flex-container-column'></div>");
  const icoTask = $('<img style="font-size:24px; width:20px;" src="assets/img/menu-icon.png" >');
  // const pTask = $("<p class='silver-text-color'>Categorías</p>");
  const divCol6 = $("<div class='col-xs-2 col-md-2'></div>");
  const aOption =$("<a href='#'></a>");
  const divOptionHov = $("<div class='hover flex-container-column'></div>");
  const icoOption = $('<img style="font-size:24px" src="assets/img/message.png" >');

//EMMA
  const container = $('<div class="container"></div>');
  const row0 = $('<div class = "row "></div>');
  const colum = $('<div class="col-lg-6 col-lg-offset-3"></div>');
  const col1 = $('<div class="col-lg-6"></div>');
  const icon1 = $('<span><img src="assets/img/pencil.png" alt="pencil" ></span>');
  const icon2 = $('<span><img src="assets/img/arrow.png"  alt="arrow"></span>');
  const icon3 = $('<span><img src="assets/img/more.png" alt="more"></span>');
  const col2 = $('<div class="col-lg-6"></div>');
  const btn = $('<button class="btn btn-danger pull-right">Seguir tablero</button>');
  const row = $('<div class = "row"></div>');
  const col = $('<div class="col-lg-6 col-lg-offset-3"></div>');
  const col1_6 = $('<div class="col-lg-6 col-xs-4"></div>');
  const boardName = $('<h2 class="text-bold">'+data.name+'</h2>');
  const pins = $('<p><strong>'+data.pins+'</strong> Pines</p>');
  const followers = $('<p><strong>'+data.followers+'</strong> Seguidores</p>');
  const col2_6 = $('<div class="col-lg-4"></div>');
  const picture = $('<img class="img-circle pull-right" src="'+data.foto+'" alt="user">');

  header.append(section);
  section.append(divContainerfluid);
  divContainerfluid.append(divRow);

  divRow.append(divCol1);
  divCol1.append(aPintLog);
  divCol1.append(imgPintLog);

  divRow.append(divCol2);
  divCol2.append(divIcoSearchHover);
  // divIcoSearchHover.append(pIcoSeaerch);
  divIcoSearchHover.append(icoSearch);

  divRow.append(divCol3);
  divCol3.append(divInputGroup);
  divInputGroup.append(inputHiddenSearch);
  divInputGroup.append(spanInpAdd);
  spanInpAdd.append(icoSearchHidden);

  divRow.append(divCol4);
  divCol4.append(aUser);
  aUser.append(divUserHov);
  // divUserHov.append(pUser);
  divUserHov.append(icoUser);

  divRow.append(divCol5);
  divCol5.append(aTask);
  aTask.append(divTaskHov);
  // divTaskHov.append(pTask);
  divTaskHov.append(icoTask);

  divRow.append(divCol6);
  divCol6.append(aOption);
  aOption.append(divOptionHov);
  divOptionHov.append(icoOption);


  header.append(container);
  container.append(row0);
  container.append(row);
  row0.append(colum);
  colum.append(col1);
  col1.append(icon1);
  col1.append(icon2);
  col1.append(icon3);
  colum.append(col2);
  col2.append(btn);
  row.append(col);
  col.append(boardName);
  col.append(col1_6);
  col.append(col2_6);
  col1_6.append(pins);
  col1_6.append(followers);
  col2_6.append(picture);
  return header;
}
