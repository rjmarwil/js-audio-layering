$(document).ready(function() {
  $digi1 = document.getElementById("didgi4");

  var playingTracks = [];

  $(".record").on("click", function() {
    var tracks = ['tracks/annoy.wav','tracks/didgi1.wav','tracks/didgi2.wav','tracks/didgi3.wav','tracks/didgi4.wav','tracks/entertain.wav'];
    var track = tracks[Math.floor(Math.random() * tracks.length)];

    if ($(this).hasClass("rotate")) {
      $('#stopwatch').timer('pause');
      $(this).toggleClass("rotate");
      stopTracks(playingTracks);
    }
    else {
      $('#stopwatch').timer('resume');
      $(this).toggleClass("rotate");
      playingTracks.push(playTrack(track));
      setTimeout(function(){
        playingTracks.push(playTrack(track));
      }, 2000);
      playSymphony();
    }
  });

  function playTrack(audio) {
    var track = new Audio(audio);
    track.play();
    return track;
  }

  function stopTracks(audio) {
    $.each (audio, function(i, el){
      el.pause();
    });
  }

  function playSymphony() {
    playingTracks.push(playTrack('tracks/drums2.wav'));
    playingTracks.push(playTrack('tracks/didgi2.wav'));
    playingTracks.push(playTrack('tracks/annoy.wav'));
  }

});
