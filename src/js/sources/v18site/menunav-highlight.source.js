/**
	
	

**/

(function($, IBM) {
	
	// Highlight this page in the menu nav HTML.
	function highlightThisPageMenunav () {
		var $navHtml = $(".ibm-sitenav-menu-container"),
			afterThis = "/web/";

		$navHtml.find("a").each(function() {
			var baseIndexNum = $(this).attr("href").indexOf(afterThis),
				pathAfter = $(this).attr("href").substr(baseIndexNum + afterThis.length);

			//window.console.log(baseIndexNum, pathAfter, window.location.pathname.indexOf(pathAfter));
			if (baseIndexNum > -1 && window.location.pathname.indexOf(pathAfter) > -1) {
				$(this).parent().addClass('ibm-highlight');
			}
		});
	}
	
	// Run onload.
	$(highlightThisPageMenunav);

})(jQuery, IBMCore);
