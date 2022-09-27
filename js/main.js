$(document).ready(function(){
   $('.menu__burger').click(function(event){
      $('.menu__burger,.menu').toggleClass('menu_active')
      $('body').toggleClass('lock')
   })
   $('.menu a').each(function(){
      let location = window.location.protocol + '//' + window.location.host + window.location.pathname;
      let link = this.href;
      if(location == link){
         $(this).parent().addClass('header_active');
      }
   })
})

$(document).ready(function(){
   $('.side-bar__title').click(function(event){
      $('.icon-triangle,.title_text,.side-bar__item').toggleClass('side-bar_active')
   })
})
