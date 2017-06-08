/**
 * Fades the site in once loaded.
 */
function siteFadeIn() {
  $('body').addClass('fade-in');
}

/**
 * Initializes the cup smoke effect.
 */
function initCodeCup() {

  // Random code bit array
  var i, codeBit, codeBits = [];
  for(i=0; i<7; i++) {
      codeBits.push(".codebit-"+i);
  }
  shuffle(codeBits);
  i = 0;

  // Code smoke effect
  var interval = setInterval(function (){
      codeBit = codeBits[i];
      $(codeBit).addClass('code-smoke-part');
      i++;

      if (i === 7) {
          clearInterval(interval);
      }  
  },750);

}

/**
 * Adds the video hover effect to thumbnails.
 */
function initVideo() {

  // Hover effect for thumbnails
  $(".project-container").hover( hoverVideo, hideVideo );

}

/**
 * Play webm video on hover.
 * 
 * @param {object}
 * @returns {void}
 */
function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

/**
 * Stop webm video on mouse leave.
 * 
 * @param {object}
 * @returns {void}
 */
function hideVideo(e) {
    $('video', this).get(0).pause();
    $('video', this).get(0).currentTime = 0;
}

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

