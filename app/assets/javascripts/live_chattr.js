$(document).ready(function() {
  setTimeout(function() {
    var source = new EventSource('/browser');
    source.addEventListener('refresh', function(e) {
      window.location.reload();
    });
  }, 1);
});