$("#button").click(function(){
  $.ajax({
    url: 'eduuz.html',
    success: function(data) {
      $('#content').html(data);
    }
  });
});

$("#button1").click(function(){
  $.ajax({
    url: 'city.uz.html',
    success: function(data1) {
      $('#content').html(data1);
    }
  });
});

$("#button2").click(function(){
  $.ajax({
    url: 'internation.html',
    success: function(data2) {
      $('#content').html(data2);
    }
  });
});

$("#button3").click(function(){
  $.ajax({
    url: 'result.html',
    success: function(data3) {
      $('#content').html(data3);
    }
  });
});

$("#button4").click(function(){
  $.ajax({
    url: 'eurostudy.html',
    success: function(data4) {
      $('#content').html(data4);
    }
  });
});

$("#button5").click(function(){
  $.ajax({
    url: 'merit.html',
    success: function(data5) {
      $('#content').html(data5);
    }
  });
});

$("#button6").click(function(){
  $.ajax({
    url: 'eduhouse.html',
    success: function(data6) {
      $('#content').html(data6);
    }
  });
});