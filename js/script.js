;(function () {
    'use strict';

    var $win = $(window);
    var winW;
    var winH;
    var logStyle = 'color: red;';
    
    /*==================================================
            Initialize
    ==================================================*/
    // Load Header
    $('header').load('includes/_header.html', _headerCallback);

    function _headerCallback(){
        console.log('%cHeader Download Completed.', logStyle);
        
        // Load Footer
        $('footer').load('includes/_footer.html', _footerCallback);
    }

    function _footerCallback(){
        console.log('%cFooter Download Completed.', logStyle);

        // Final: Go to  Main Function
        $win.imagesLoaded().always(mainFunction);
    }

    


    
    /*==================================================
            Main Function
    ==================================================*/
    function mainFunction() {

        // $win.on('resize', _resize).resize();
    }





    /*==================================================
                        $Library
    ==================================================*/
    // function _resize() {
    //     getSize()
    // }

    // function getSize(){
    //     winW = $win.width()
    //     winH = $win.height()
    // }
})();