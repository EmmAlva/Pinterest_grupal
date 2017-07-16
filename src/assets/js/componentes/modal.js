'use strict';

const Modal = (modal,index,update) => {
  const src=state.data.boards[index].image.original.url;
  var titulo = "";
   // state.data.boards[index].metadata.note;
  if(state.data.boards[index].metadata.article !== undefined){
    titulo = state.data.boards[index].metadata.article.name;
  }
  // const modal = $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"></div>');
  const header_modal = $('<button type="button" class="close modal--close" aria-label="Close"></button>');
  const close = $('<span aria-hidden="true" data-dismiss="modal">&times;</span>');
  const container_dialog = $('<div class="modal-dialog modal-lg" role="document"></div>');
  const content = $('<div class="modal-content"></div>');
  const content_header = $('<div class="modal-header"></div>');
  const title = $('<h2 class="modal-title" id="exampleModalLabel">'+titulo+'</h2>');
  const save = $('<button type="button" class="btn btn-danger pull-right" data-dismiss="modal">Save</button>');
  const modal_body = $('<div class="modal-body"></div>');
  const img = $('<img src="'+src+'" class="modal-content--img" alt="" width="100%">');
  const footer = $('<div class="modal-footer"></div>');
  const btn_footer = $('<button type="button" class="btn btn-info">Read it</button>');
  header_modal.append(close);
  content_header.append(title,save);
  modal_body.append(img);
  footer.append(btn_footer);
  content.append(content_header,modal_body,footer);
  container_dialog.append(content);
  modal.append(header_modal,container_dialog);

  return modal;
}
