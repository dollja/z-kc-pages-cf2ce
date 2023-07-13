/**

    Copy to clipboard plugin on syntax highlighter widget code snippets.

**/

(function($) {

    $(function() {

        // enable copy function only for supported browsers
        try {
            document.execCommand('copy');
            $('.ibm-syntax-container').each(function() {
                $(this).before('<p><button class="copy-clip-btn ibm-btn-small ibm-btn-blue-50 ibm-btn-pri ibm-margin-top-1" type="button" style="z-index: 1; margin-top: -36px;">Copy</button><span class="ibm-fadein ibm-background-yellow-10 ibm-fadeout" style="margin-left: 20px; padding:5px 20px;"></span></p>');
                $(this).css('padding-top', '20px');
            });

            if ($('.copy-clip-btn').length > 0) {
                var clipboard = new Clipboard('.copy-clip-btn', {
                    target: function(trigger) {
                        return $(trigger).parent().parent().find(".ibm-syntax-container td.code")[0];
                    }
                });

                clipboard.on('success', function(e) {
                    $(e.trigger).next('span').html('Copied to clipboard.');
                    $(e.trigger).next('span').removeClass("ibm-fadeout");

                    setTimeout(function() {
                        $(e.trigger).next('span').addClass("ibm-fadeout");
                    }, 2500);

                    e.clearSelection();
                });

                clipboard.on('error', function(e) {

                    $(e.trigger).next('span').html('To copy, press Ctrl + C or Command + C');
                    $(e.trigger).next('span').removeClass("ibm-fadeout");

                    setTimeout(function() {
                        $(e.trigger).next('span').addClass("ibm-fadeout");
                    }, 2500);
                });
            }
        }
        catch (e) {
        	// do nothing.
        }

    });

})(jQuery);