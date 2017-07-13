export class Init{

load(){
  if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
  console.log('No todos found... Creandooo....');
  var todos = [
    {
      text: 'Podes agregar los items que quieras'
    },
    {
      text: 'Click, luego editame'
    },
    {
      text: 'Borrame  --->'
    }
  ];

  localStorage.setItem('todos', JSON.stringify(todos));
  return

} else {
  console.log('found todos');
}
}};
