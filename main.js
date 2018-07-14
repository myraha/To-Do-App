// //what can the user do, what can the user see, what can the user expect
//
// //can add things to the list
// //can mark things as completed
// //can clear completed tasks (toggleClass "display none will be in the class")
// //can clear entire list ".remove in jquery"
// //can edit/ remove list item
//


//event listener/function to submit item
$(document).ready(
  function(){
    $('#addItem').click(function(){
      var add = $('input[name=task]').val();
      $('ul').append('<li>' + add + '</li>');
      //increment counter
      var val = parseFloat($('#counter').text());
      $('#counter').text(val+1)
    });

    $("input[name=task]").keyup(function(event){
      if(event.keyCode == 13){
        $("#addItem").click();
      }
    });

    //makes the list items editable on single click
    $('button').click(function(){
      $('li').attr('contenteditable','true');
    })
    //  double click to mark item as compeleted
    $(document).on('dblclick','li', function(){
      $(this).toggleClass('complete');
    });

    //event listener / function for button clear list
    $('#clearList').on('click',function(){
      $('li').remove()
      $('#counter').text(0)
    })

    //event listener / function for button clear completed
    $('#clearCompl').on('click',function(){
      var numberComplete = $("li.complete").length;
      $("li.complete").remove()
      //decrement counter
      var val = parseFloat($('#counter').text());
      $('#counter').text(val-numberComplete)
    })
  }
);
























// // function(e){
// //   e.preventDefault()
// // }
// //
// $(document).ready(function(){
//  $('form').on('submit',function(e){
//    e.preventDefault();
//  })
// })


//
//    // console.log(listItems)
//    // $('li').remove()
//    // listItems.forEach(function(item){
//    //   $('ul').append('<li>'+item+'</li>')
//
//  //event listener for ul
// //  $("ul").on("click","li", function(){
// //      $(this).toggleClass("hidden");
// //     console.log('works')
// //  })
// //
// //  //toggle items in ul
// //
// //  //event listener / function for button clear list
// //  $('#clearList').on('click',function(){
// //    listItems = []
// //    $('li').remove()
// //    console.log(listItems)
// //  })
// //
// //  //event listener/function to clear completed items
// //  $('#clearCompl').on('click', function(){
// // })
// //  });
//
//
//
//
//
// // var item = $("input").val();
// // totalSum = parseFloat(amount);
// // //display bet
// // $("#result").html(totalSum);
// // $("#enterAmount").val("");
