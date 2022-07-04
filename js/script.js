
 
   $(document).ready(function(){
 
                   $(window).bind('scroll', function() {
 
                   var navHeight =  1;
 
                                                 if ($(window).scrollTop() > navHeight) {
 
                                                                 $('nav').addClass('fixed-menu');
 
                                                 }
 
                                                 else {
 
                                                                 $('nav').removeClass('fixed-menu');
 
                                                 }
 
                                });
 
                });

$(document).ready(function(){
   $('#cart-check').change(function(){
      if($(this).prop('checked')){
         $('#ffavor').show();
      }else{
         $('#ffavor').hide();
      }
   })
});

$(document).ready(function(){
   $('#cartss').change(function(){
      if($(this).prop('checked')){
         $('#carts-overlay').show();
      }else{
         $('#carts-overlay').hide();
      }
   })
});
// $(document).mouseup(function(event){
//    if($('#cartss').prop('checked')){
    
//       if(!$('#carts-overlay').is(event.target) && $('#carts-overlay').has(event.target).length === 0){
//          $('#cartss').prop('checked', false)
//       }
//    }  
// })

let increase = document.getElementsByClassName('quantity-btn quantity-add')
let decrease = document.getElementsByClassName('quantity-sub');
let quantity_num= document.getElementsByClassName('quantity-amt')



for(let i=0; i < increase.length; i++){
   let max_quantity= 10
   increase[i].addEventListener('click', function increment(){
      quantity= parseInt(quantity_num[i].innerText)
      if(quantity<max_quantity){
         quantity++
      }else{
         quantity=max_quantity
      }
      console.log(quantity)
      document.getElementsByClassName('quantity-amt')[i].innerText= quantity

   } )
}
for(let i=0; i < decrease.length; i++){
   decrease[i].addEventListener('click', function decrement(){
      quantity= parseInt(quantity_num[i].innerText)
      if(quantity>1){
         quantity--
      }else{
         quantity=1
      }
      console.log(quantity)
      document.getElementsByClassName('quantity-amt')[i].innerText= quantity

   } )
}


 

