jQuery( document ).ready(function( $ ) {

    /*---- Главное меню ----*/
	// var scrollTop = 0;
	// $(window).on('scroll', function() {
	// 	var scrollNow = $(window).scrollTop();
	// 	if(scrollNow > scrollTop && scrollNow > 400){
	// 		$('#main-nav').addClass('navbar-active');
	// 	} 
	// 	else {
	// 		$('#main-nav').removeClass('navbar-active');
	// 	}
	// });

	// // плавный скроллинг
	// $("a[href*=#nav]").on("click", function (e) {
	// 	var anchor = $(this);
	// 	$('html, body').stop().animate({
	// 		scrollTop: $(anchor.attr('href')).offset().top - 5
	// 	}, 777);
	// 	e.preventDefault();
	// 	return false;
	// });

/*---- Слайдеры ----*/
// $('.slider').slick({
//     dots: true,
//     arrows: false,
//     autoplay: true,
//       autoplaySpeed: 4000
// });

/*---- Маска ввода номера телефона ----*/
//     $("#secondScreenFormTel").inputmask('+38 (999) 999-99-99');

/*---- Модальные окна ----*/
// $('#myModalButton').click(function(e){
//     e.preventDefault();
//     $("#myModal").modal('show');
// });

/*---- ContactForm 7 ----*/
// document.addEventListener( 'wpcf7mailsent', function( event ) {
//     if(event.detail.contactFormId=="21"){ // 32 это id формы для отслеживания
//         dataLayer.push({'event': 'question'})
//         var name = $(".questions input[name=client-name]").val();
//         $('#questName').text(name);
//         $("#questionsModal").modal('show');
//     }
// }, false );




});