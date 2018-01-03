$(function () {
    var $win = $(window)
    var winW
    var winH

    // Include
    $('header').load('includes/header.html');
    $('footer').load('includes/footer.html');




    // Main Function
    $win.imagesLoaded().always(mainFunction);

    function mainFunction() {

        $win.on('resize', _resize).resize();
    }





    /*==================================================
                        $Library
    ==================================================*/
    function _resize() {
        getSize()
    }

    function getSize(){
        winW = $win.width()
        winH = $win.height()
    }
});