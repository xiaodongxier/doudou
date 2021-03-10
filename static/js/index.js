setTimeout(function(){
    var mydom = document.querySelector('.youke-chat-window-frame iframe');
    var y = (mydom.contentWindow || mydom.contentDocument);
    if (y.document) y = y.document;
    y.querySelectorAll(".message-list-wrapper .message-list-operations + div")[0].style.display = "none";
  },2500)