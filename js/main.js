$(document).ready(function(){
   $('.menu__burger').click(function(event){
      $('.menu__burger,.menu').toggleClass('menu_active')
      $('body').toggleClass('lock')
   })
})