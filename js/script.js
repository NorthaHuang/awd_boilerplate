(function ($) {
  'use strict'; // 採用嚴格模式

  /*==================== Vaiables ====================*/

  // Constant
  var STD_DURATION = 300;





  /*==================================================*\
          Initialization
  \*==================================================*/
  console.log('%cStart Build...', logInfoStyle);

  // Load Header
  $('header').load('includes/_site_header.html', _headerCallback);

  function _headerCallback() {
    console.log('%cHeader Completed', logSafeStyle);
    // Load Footer
    $('footer').load('includes/_site_footer.html', _footerCallback);
  }

  function _footerCallback() {
    console.log('%cFooter Completed', logSafeStyle);
    console.log('%cImages Start Loading...', logInfoStyle);

    var imgProgressNum = 0; // 目前下載數量
    $('window, img').imagesLoaded({
        background: true
      })
      .always(mainFunction) // Go Main Function
      // .fail(function () {
      //   console.log('%cSome Images is broken...', logErrorStyle);
      // })
      // .progress(function (instance) {
      //   imgProgressNum++;
      //   console.log('%c' + imgProgressNum + '/' + instance.elements.length, logInfoStyle);
      // });
  }





  /*==================================================*\
          Main Function
  \*==================================================*/
  function mainFunction() {
    /*==================== Initialization ====================*/
    console.log('%cBuild Completed!', logSafeStyle);

    // 綁定 lightbox 相關按鈕
    // lightbox.init();  
    
    // Resize
    $win.on('resize', _resize).resize();

    // Remove Loading Layer
    $('.loading').fadeOut(STD_DURATION, function () {
        $(this).remove();
    });



    /* Start Coding Here */

    



    /*==================== Google Analytics ====================*/
    /*
     * 如果有 GA 請啟用
     * 並至 /js.lib/ga.js 修改客戶GA ID
     */
    // bindGABtn();
  }





  /*==================================================*\
                      $Library
  \*==================================================*/
  function _resize() {
    getSize();
  }

  function getSize() {
    winW = $win.width();
    winH = $win.height();
  }
})(jQuery);