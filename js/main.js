 // Header Slides

 $(function() {
    $(".rslides").responsiveSlides({
      // prevText: "Previous",
      // nextText: "Next",
      // nav: true
    });
  });


 // Scroll Magic
var controller = new ScrollMagic.Controller();


var scene1 = new ScrollMagic.Scene({
  triggerElement: "#trigger1"
})
.setTween("#element1",0.5, { scale: 1.05})
.addIndicators({name:'animate 1'})
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: "#trigger2"
})
.setTween("#element2",1, { scale: 1.05, opacity: 1})
.addIndicators({name:'animate 2'})
.addTo(controller);

//Filter Plugin

$('.filter a').click(function(e) {
  e.preventDefault();
  var a = $(this).attr('href');
  a = a.substr(1);
  $('.gallery a').each(function() {
    if (!$(this).hasClass(a) && a != 'all')
      $(this).addClass('hide');
    else
      $(this).removeClass('hide');
  });
});

$('.gallery a').click(function(e) {
  e.preventDefault();
  var $i = $(this);
  $('.gallery a').not($i).toggleClass('pophide');
  $i.toggleClass('pop');
});


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
