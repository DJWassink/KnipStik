var _MENU_OFFSET = 50;

var menu = document.getElementById('custom-bootstrap-menu');
window.onscroll = function(e) {
    if (window.pageYOffset > _MENU_OFFSET) {
        menu.classList.add('top-nav-collapse');
    } else {
        menu.classList.remove('top-nav-collapse');
    }
};

var menuHrefs = Array.prototype.slice.call(document.querySelectorAll('.page-scroll'));
menuHrefs.forEach(function(aHref) {
    aHref.onclick = function(e) {
        e.preventDefault();
        var targetHref = aHref.getAttribute('href');
        document.getElementById(targetHref.replace('#', '')).scrollIntoView({ behavior: 'smooth' });

        menuHrefs.forEach(function(aHref2) {
            aHref2.parentNode.classList.remove('active');
        });
        aHref.parentNode.classList.add('active');
    }
});

var menuCollapse = document.getElementById('navbar-collapse');
var buttonCollapse = document.getElementById('menu-toggle');
buttonCollapse.onclick = function(e) {
    menuCollapse.classList.toggle('in');
    buttonCollapse.classList.toggle('collapsed');
};