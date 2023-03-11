
function addCss(){
  const e = document.createElement('style');
  e.innerHTML = ` .iframeClose {
    position: fixed;
    left: 5px;
    top: 5px;
    background: url(/assets/images/icon-previous.png) no-repeat 50%;
    background-size: cover;
    width: 51px;
    height: 51px;
    display: none;
    z-index: 10;
    cursor: pointer;
  }
  .iframeClose.active {
    display: block;
  }`;  
  document.getElementsByTagName('head')[0].appendChild(e);
}

function addBtnHome(){
  var ex = document.createElement('div');
  ex.className = 'iframeClose active';
  ex.id = 'iframeClose';
  document.getElementsByTagName('body')[0].appendChild(ex);
}

window.addEventListener('load', function() {
  addCss();
  addBtnHome();

  var btn = document.getElementById("iframeClose");
  btn.addEventListener("click", returnHome);    
});

function returnHome(){
  if(window.hold == true){
    return;
  }
  location.href = "https://3kh0.co/";
}

//