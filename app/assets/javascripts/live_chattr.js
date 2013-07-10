$(document).ready(function() {
  // setTimeout(function() {
  //   var source = new EventSource('/browser');
  //   source.addEventListener('refresh', function(e) {
  //     window.location.reload();
  //   });
  // }, 1);
  setTimeout(function() {
    var source = new EventSource('/browser');
    source.addEventListener('message', function(e) {
      alert('hello');
    });
  }, 1000);
});