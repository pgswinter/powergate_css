require('../sass/bundle.sass');

$('.hamburger_button ').click(function(e){
	e.preventDefault();
	var menu_wrap = $('.nav_wrap__header.tablet')
	var menu = menu_wrap.find('.nav')
	var click = $(this)
	menu.stop().toggleClass('active');
	$(document).one('click',function closeMenu(e){
		if(menu_wrap.has(e.target).length === 0){
            menu.removeClass('active');
        } else {
            $(document).one('click', closeMenu);
        }
	});
});