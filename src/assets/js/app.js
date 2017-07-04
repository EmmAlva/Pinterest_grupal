'use strict';

const render = (root,data) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(state.page == "main"){
    wrapper.append(Header(data,_=>{ render(root) }));
    // wrapper.append(Board(data,_=>{ render(root) }));
  }else{
    wrapper.append(Board(data,_=>{ render(root) }));

  }
  root.append(wrapper);
}
const state = {
  page: "main",
  user: null,
  data: {},
  pin: {}
};
$( _ => {
  const root = $("#root");

  state.user = 'arabelyuska';
  getUser(state.user).then((response) => {
       if(response.data == null){
         console.log("Error al obtener data");
       }else {
         state.data.foto = response.data.image['60x60'].url;
         getInfo(state.user).then((response) => {
           state.data.pins = response.data.counts.pins;
           state.data.followers = response.data.counts.followers;
           state.data.name = response.data.name;
          });
        getBoards(state.user).then((response) => {
          state.data.boards = response.data;
          // console.log(response.data[1].image.original.url);
         });
         render(root,state.data);
       }
     });
});
