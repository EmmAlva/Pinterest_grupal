const getBoards = (user) => {
  return new Promise((resolve,reject) => {
   $.get('https://api.pinterest.com/v1/boards/'+user+'/web-ui/pins/?access_token=AcYxWKP4iewm8u6xHNYpdH0jG_XSFM4xDXwttGlEI1srRABH0wAAAAA&fields=note%2Cimage%2Cmetadata%2Cid%2Cboard%2Ccounts',(response,req,estado) => {
     if (estado.status != 200){
      reject(new Error("Error al obtener datos"));
    }else{
      resolve(response);
    }
   });
 });
}
const getUser= (user) => {
  return new Promise((resolve,reject) => {
   $.get('https://api.pinterest.com/v1/users/'+user+'/?access_token=AcpRN5v0eiIYiYz5hyKBHsb-iA76FM4qyiL9ukVEI1srRABH0wAAAAA&fields=first_name%2Cid%2Clast_name%2Curl%2Caccount_type%2Cbio%2Ccounts%2Ccreated_at%2Cimage%2Cusername',(response,req,estado) => {
     if (estado.status != 200){
      reject(new Error("Error al obtener datos"));
    }else{
      resolve(response);
    }
   });
 });
}
const getInfo= (user) => {
  return new Promise((resolve,reject) => {
    $.get('https://api.pinterest.com/v1/boards/'+user+'/web-ui/?access_token=AcpRN5v0eiIYiYz5hyKBHsb-iA76FM4qyiL9ukVEI1srRABH0wAAAAA&fields=id%2Cname%2Curl%2Cdescription%2Ccreator%2Ccreated_at%2Ccounts%2Cprivacy%2Creason',(response,req,estado) => {
     if (estado.status != 200){
      reject(new Error("Error al obtener datos"));
    }else{
      resolve(response);
    }
   });
 });
}
