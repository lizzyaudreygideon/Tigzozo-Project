function myFun() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
 
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


 
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('#menu a');
  var menu = document.getElementById('menu');
  
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      
      menu.style.display = 'none';

      window.scrollTo(0, 0);
     
      setTimeout(function() {
        menu.style.display = '';
      }, 5000);
    });
  });
});

