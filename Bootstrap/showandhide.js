$(document).ready(() => {
    $('#hide').click(() => {
      $('#favoritefood1').hide();
      $('#show').show();
    });
    $('#show').click(() => {
      $('#favoritefood1').show();
      $('#show').hide();
    });
  });