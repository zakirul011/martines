
// dropdown on hover for large screens
document.addEventListener("DOMContentLoaded", function(){
  if (window.innerWidth > 991) { // only for large screens
    document.querySelectorAll('.navbar .dropdown').forEach(function(e){
        const dropdown = bootstrap.Dropdown.getOrCreateInstance(e.querySelector('.dropdown-toggle'));
        e.addEventListener('mouseenter', function(){
            dropdown.show();
        });
        e.addEventListener('mouseleave', function(){
            dropdown.hide();
        });
    });
  }
});
