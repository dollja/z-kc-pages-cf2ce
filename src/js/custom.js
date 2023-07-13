$(document).ready(function() {

    if (!(jQuery.browser.chrome && jQuery.browser.versionNumber === 53)) {
        jQuery.getScript("//1.www.s81c.com/common/stats/ida_stats.js");
    }
    // $("#main-content-container").load("welcome.html");

});

// open_outage_schedule is defunct and unused...
function open_outage_schedule() {
    window.open("Outage.html", '_blank');
}

//load_page is defunct and unused...
function load_page(page, target) {
    // are we already on that page? if so, just scroll to the target
    // if not, load it, then scroll
    $("#main-content-container").load(
            page,
            function() {
                $('html, body').animate(
                        {
                            scrollTop : $(target).offset().top
                                    - $("div.ibm-sitenav-menu-container")
                                            .height()
                        });
            });
}