$(function(){
	$('.cabinet-page .cabinet-content .news .archive a').click(function() {
		$(this).toggleClass('active');
		$(this).next('ul').toggle();
	});
	$('.cabinet-page .cabinet-content .ballanse .history .select a').click(function() {
		$(this).toggleClass('active');
		$(this).next('ul').toggle();
	});
	$('.cabinet-page .cabinet-content .ballanse .top-info .select a').click(function() {
		$(this).toggleClass('active');
		$(this).next('ul').toggle();
	});
	$('.header .langs-block .lang, .header .langs-block .window').hover(
		function() {
			$('.header .langs-block .window').show();
		}, function() {
			$('.header .langs-block .window').hide();
		}
	);
	$('.popup .window .close').click(function() {
		$('.popup').fadeOut();
	});
	$('.header .logo .menu-button').click(function() {
		$('.header .logo ul').toggle();
	});

	$(".personal__employee-add").off().on("click", function() {
    var newItemHTML = `
        <div class="personal__employee-item new-item">
            <input class="personal__employee-input" type="text" placeholder="Фамилия и имя сотрудника">
        </div>
    `;
    $(newItemHTML).appendTo(".personal__employee-items").find(".personal__employee-input").val("");
	});














});