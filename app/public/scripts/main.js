var test = true;

document.body.classList.remove('nojs');

try {
  var button = document.getElementById("nav-btn");
  var menu = document.getElementById("nav-menu");
  var list = menu.getElementsByTagName("ul")[0];
  var item = list.getElementsByTagName("li")[0];

  function getHeight() {
    return item.offsetHeight;
  }

  button.addEventListener("click", function() {
    if (list.offsetHeight > 0) {
      list.style.height =  0;
    } else {
      list.style.height = getHeight() + "px";
    }
  });
} catch(error) {
  console.warn('[Navigation] Navigation not existent');
}
