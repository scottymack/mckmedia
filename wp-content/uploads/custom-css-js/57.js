<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(document).ready(function($) {
    $('#fullpage').fullpage({
        //options here
        scrollingSpeed: 1000,
        navigation: true,
        slidesNavigation: true,
      	responsive: 800,
      	afterLoad: function(anchorLink, index){
          var loadedSection = $(this);
          if (index.index == 1) {
            console.log($('.my-icon-element-selector'))
            $('.my-icon-element-selector').removeClass('elementor-invisible');
          }
        }
    });
    //methods
    $.fn.fullpage.setAllowScrolling(true);
});</script>
<!-- end Simple Custom CSS and JS -->
