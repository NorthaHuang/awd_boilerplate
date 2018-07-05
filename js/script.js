(function ($) {
    'use strict';  // 採用嚴格模式

    /*==================== Global Vaiables ====================*/
    // Window, Document
    var $win = $(window);
    var winW;
    var winH;
    var $doc = $('html, body');

    // Constant
    var STD_DURATION = 300;



    
    
    /*==================================================*\
            Initialization
    \*==================================================*/
    var logSafeStyle = 'color: green; font-weight: bold;';
    var logErrorStyle = 'color: red; font-weight: bold;';
    var logInfoStyle = 'color: blue;';
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
        
        var imgProgressNum = 0;  // 目前下載數量
        $('window, img').imagesLoaded({ background: true })
            .always(mainFunction)  // Go Main Function
            .fail(function() {
                console.log('%cSome Images is broken...', logErrorStyle);
            })
            .progress(function(instance) {
                imgProgressNum++;
                // instance.elements.length 為 '所有圖片總數'
                console.log('%c' + imgProgressNum + '/' + instance.elements.length, logInfoStyle);
            });
    }

    


    
    /*==================================================*\
            Main Function
    \*==================================================*/
    function mainFunction() {
        /*==================== Initialization ====================*/
        console.log('%cBuild Completed!', logSafeStyle);
        
        // Remove Loading Layer
        // $('.loading').fadeOut(STD_DURATION, function () {
        //     $(this).remove();
        // });

        // Resize
        $win.on('resize', _resize).resize();



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