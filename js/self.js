//jQuery is required to run this code
$( document ).ready(function() {
    setBackgoundImage();

    scaleVideoContainer();


    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
    $("a.change").click(function() {
      setBackgoundImage();
    });

    var self_bar_height = $(".self-bar").outerHeight(true);
    var self_bar_width = $(".self-bar").outerWidth(true);
    var top = $(".self-bar").offset().top;
    var left = $(".self-bar").offset().left;
    console.log("self_bar_height " +self_bar_height);
    console.log("self_bar_width "+self_bar_width);
    console.log("top "+top);
    console.log("left "+left);
    var left_boundary = left;
    var top_boundary = top;
    var right_boundary = left+self_bar_width;
    var bottom_boundary = top + self_bar_height;

    var movie = true

    $(document).mousemove(function(e){
      if (e.pageX > left_boundary && e.pageX < right_boundary && 
          e.pageY > top_boundary && e.pageY < bottom_boundary){
        $(".self-bar").fadeIn();
      }
      else{
        $(".self-bar").fadeOut();
      }
    });

    // $('input[name="wd"]').blur(function(){
    //     if($(this).val().search("电影 ") == -1){
    //         movie = false;
    //     }else{
    //         movie = true;
    //     }
    // });

    $('#self-search').submit(function(){
        $keyword = $('#search-kw');
        if($keyword.val().search("电影 ")== 0){
            $keyword.val($keyword.val() + ' site::dy2018.com');
        }
    });


});

function scaleVideoContainer() {

    var height = $(window).height() ;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

function setBackgoundImage(){

    var url_base = "http://omskbxvsz.bkt.clouddn.com/";
    
    var images = ['avfj96.jpg', 'bltd88.jpg', 'bouo23.jpg', 'bzvg81.jpeg', 'deej31.jpg', 'ehzj11.jpg',  'gloj65.jpg', 'gzjc65.jpg',  'idve40.jpg', 'jaba61.jpg',  'mhoj76.jpg', 'muok34.jpg', 'oumj10.jpg',   'tkww38.jpg', 'vofi65.jpg', 'wgql48.jpg', 'wxko74.jpg'];

   var len = images.length;
   image_choice = images[Math.floor((Math.random()*len))];
   //alert(image_choice);

   document.body.style.backgroundImage="url(http://omskbxvsz.bkt.clouddn.com/"+image_choice+")";
    // $(this).css("background-image","url(\"./image/"+images[0]+"\")");
}

