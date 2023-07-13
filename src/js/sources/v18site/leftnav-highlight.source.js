
(function($) {
	
	// Highlight this page in the left nav HTML.
	function highlightThisPageLeftnav () {
		var $navHtml = $("#ibm-navigation"),
			paths = window.location.pathname.split("/"),
			eles = [],
			urlseg;

		// Stop if this page doesn't have a left nav.
		if (!$navHtml[0]) {
			return;
		}

		
		if (paths[paths.length - 1].indexOf(".html") > 0) {
			urlseg = "/" + paths[paths.length - 3] + "/" + paths[paths.length - 2];
			eles = $navHtml.find("a[href*='" + urlseg + "']");
		}
		else {
			eles = $navHtml.find("a[href*='../" + window.location.pathname.substr(26, 50) + "']");
		}

		//console.info("../" + window.location.pathname.substr(26, 50));

		eles.each(function() {
			$(this).attr('aria-selected', "true")
				.parent().parent().parent()
					.addClass('active')
					.attr('aria-expanded', "true");
		});
	}

	
	// Run onload.
	$(highlightThisPageLeftnav);


})(jQuery);
