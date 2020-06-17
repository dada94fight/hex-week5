$(document).ready(() => {
  // console.log('Hello Bootstrap4');

  $('#reply_btn').on('click', function(){
      $('#reply_container').css("display","block");
    });


  $('#cancel_btn').on('click', function(){
    $('#reply_container').css("display","none");
  });

// admin detail 視窗區塊

  //寫法一 (可正常展開和收回，但無法改變icon)
  // $('#expand_more').on('click', function(){
  //   $('#expand_moreIcon').toggleClass(function(){
  //     $('#expand_moreIcon').text('expand_less');
  //   });
  // })
  
  //寫法二 (可以正常展開且改變一次icon，但需要點按鈕的邊緣才能收回，且icon不會變回來)
  // $('#expand_more').on('click', function(){
  //   $("#expand_moreIcon").toggleClass(function(){
  //     $('#expand_moreIcon').html('<span class="material-icons text-primary" id="expand_moreIcon">expand_less</span>');
  //   });
  // });


});

