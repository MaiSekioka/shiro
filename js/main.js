let headerHeight = $('#header').height() - 20;


// ハンバーガーボタン

$('.burger-btn').on('click',function(){
  
  $(this).toggleClass('close');
  $('.nav-list-wrapper').slideToggle(500);
});

// スクロール
$(window).on('scroll',function(){
  // ヘッダーの変更
  if($(window).scrollTop() > headerHeight){
    $('.header-nav').addClass('change-color');
  } else {
    $('.header-nav').removeClass('change-color');
  }
  updateButton();
});

const updateButton = () => {
  if($(window).scrollTop() >= 320){
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut();
  }
}

// トップに戻るボタン
$('#back-to-top').on('click',function(){
  $('html,body').animate({
    'scrollTop': 0,
  },'slow');
})

// concept
$('#nav-link-concept').on('click',function(){

  let id = $(this).find('a').attr('href');
  let position = $(id).offset().top;

  $('html,body').animate({
    'scrollTop': position - 40,
  },'slow');

  $('.burger-btn').toggleClass('close');
  $('.nav-list-wrapper').slideToggle();
});

// work
$('#nav-link-work').on('click',function(){

  let id = $(this).find('a').attr('href');
  let position = $(id).offset().top;

  $('html,body').animate({
    'scrollTop': position - 40,
  },'slow');

  $('.burger-btn').toggleClass('close');
  $('.nav-list-wrapper').slideToggle();
});


// florist
$('#nav-link-florist').on('click',function(){

  let id = $(this).find('a').attr('href');
  let position = $(id).offset().top;

  $('html,body').animate({
    'scrollTop': position - 40,
  },'slow');

  $('.burger-btn').toggleClass('close');
  $('.nav-list-wrapper').slideToggle();
});

// information
$('#nav-link-information').on('click',function(){

  let id = $(this).find('a').attr('href');
  let position = $(id).offset().top;

  $('html,body').animate({
    'scrollTop': position - 120,
  },'slow');

  $('.burger-btn').toggleClass('close');
  $('.nav-list-wrapper').slideToggle();
});


// contact
$('#nav-link-contact').on('click',function(){

  let id = $(this).find('a').attr('href');
  let position = $(id).offset().top;

  $('html,body').animate({
    'scrollTop': position,
  },'slow');

  $('.burger-btn').toggleClass('close');
  $('.nav-list-wrapper').slideToggle();
});

// 更新時再表示
updateButton();