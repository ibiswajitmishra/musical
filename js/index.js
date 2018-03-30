function searchFunction(){
  var input, filter, ul, li, a, i;
  input=document.getElementById('ainput');
  filter=input.value.toUpperCase();
  ul= document.getElementById('wrapper');
  li= ul.getElementByTagName('div');

  for(i=0;i<li.length;i++)
  {
    a= li[i].getElementByTagName('h5')[0];
    if(a.innerHTML.toUpperCase().indexOf(filter)> -1){
      li[i].style.display= "";
    }
    else {
      li[i].style.display='none';
    }
  }
}
function themeChange() {
  document.body.style.backgroundColor = #111111;
}
document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);
