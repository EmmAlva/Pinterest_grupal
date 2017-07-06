'use strict';

const render = (root,data) => {
  root.empty();
  console.log(data);
  const wrapper = $('<div class="wrapper"></div>');
  if(state.page == "main"){
    wrapper.append(Header(data,_=>{ render(root) }));
    wrapper.append(Board(data,_=>{ render(root) }));
  }else{
    // wrapper.append(Modal(data,_=>{ render(root) }));
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
         console.log("Error al obtener data del usuario");
       }else {
         state.data.foto = response.data.image['60x60'].url;
         getInfo(state.user).then((response) => {
           //console.log(response,source);
           state.data.pins = response.data.counts.pins;
           state.data.followers = response.data.counts.followers;
           state.data.name = response.data.name;
          });
        getBoards(state.user).then((response) => {
          state.data.boards = response.data;
            render(root,state.data);
         });

       }
     });
     $('#myModal').modal('toggle');
});
