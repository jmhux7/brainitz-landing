$(document).ready(function() {

  var firstName = $('.first-name');
  var lastName = $('.last-name');
  var school = $('.school');
  var district = $('.district');
  var email = $('.email');
  var state = $('.state');

  var myPlayer = videojs('vid1');

  $(".contentContainer").css("min-height", $(window).height());

  $("#modal-close").click(function() {
    if(!myPlayer.paused()) {
      myPlayer.pause();
    }
  });

  $('#playPause').click(function(){
    return myPlayer.paused() ? myPlayer.play() : myPlayer.pause();
  });

  $('.submit-email').click(function(){
    var newEmailKey = fb.database().ref().child('emails').push().key;
    var newEmail = {};

    newEmail['/emails/' + newEmailKey] = {
      first_name: firstName.val(),
      last_name: lastName.val(),
      school: school.val(),
      district: district.val(),
      email: email.val(),
      state: state.val()
    };
    return fb.database().ref().update(newEmail);
  })

})
