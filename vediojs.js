
  var id = document.getElementById("myData");
var url = 'https://www.youtube.com/watch?v=' + id;

$.getJSON('https://noembed.com/embed',
    {format: 'json', url: url}, function (data) {
    alert(data.title);
});