
/*'эквивалент 
window.addEventListener('load', () => { 
  //запуск после загрузки страницы
})  */
$(document).ready(function() {
  console.log('page loaded');
  $('div').css({'color': 'red'});
  $('.div').css({
    'color': 'green',
    'font-size': '30px'
  });
  $('#div').css({'font-style': 'italic'});

  //get data-attribute value
  let dataAttr = $('#h2').data('number');
  console.log(dataAttr);
  $('input[name="message"]').css({ 'border': '2px solid yellow'})
  $('ul li:nth-child(2)').css({ 'color': 'yellow'});
  $('div:has("p")').css({ 'color': 'yellow'});

  let attr = $('#input2').attr('name');
  console.log(attr);

  $('#input2').on('input', function() {
    $('.result').html($(this).val());
  })

  $('#btn').click(function() {
    console.log('hi');
    //$('.text').addClass('active');
    //$('.text').removeClass('active');
    //$('.text').toggleClass('active');
   
    //$('.text').show();
    //$('.text').hide();
    $('.text').toggle();
  })
  /*$('#btn').on('click', function() {
    console.log('hi');
  })*/

  $('#form').on('submit', function(){
    alert('form sent');
  })
})

