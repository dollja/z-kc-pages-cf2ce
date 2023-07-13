
(function ($) {
    
    var snippetMaxHeight = 140;

    function setupShowmoreButton () {
        $(".custom-codesnippet-con").each(function () {
            var $codeCon = $(this),
                snippetHeight = $codeCon.find(".syntaxhighlighter").children("table").height();

            if (snippetHeight > snippetMaxHeight) {
                $codeCon.addClass("showmore");
            }

            $codeCon.find(".custom-codesnippet-more-button").on("click", "a", function (evt) {
                evt.preventDefault();

                if (!$codeCon.hasClass("expanded")) {
                    $codeCon.find(".syntaxhighlighter").css("max-height", snippetHeight + 40);
                }
                else {
                    $codeCon.find(".syntaxhighlighter").css("max-height", snippetMaxHeight);
                }

                $codeCon.toggleClass("expanded");
                
                // Have to wait for the CSS animation so the menu can get the proper height to adjust to.
                // so this has to be delayed a bit.
                setTimeout(adjustMenu, 275);
            });
        });
    }
    
    $(function () {
        setupShowmoreButton();
    });

})(jQuery);
