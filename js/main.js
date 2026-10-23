(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var v = function (k) { return (d.get(k) || '').toString().trim(); };
    var body = 'Hi Northstar Clips,\r\n\r\nI\'d like to get started.\r\n\r\n' +
      'Name: ' + v('name') + '\r\n' +
      'Podcast name: ' + v('show') + '\r\n' +
      'Episode link: ' + v('link') + '\r\n' +
      'Where I post: ' + v('where') + '\r\n' +
      'Notes: ' + v('notes') + '\r\n\r\nThanks!';
    window.location.href = 'mailto:northstarclips@mail.grokbot.com?subject=' +
      encodeURIComponent('Podcast clipping inquiry') + '&body=' + encodeURIComponent(body);
  });
})();
