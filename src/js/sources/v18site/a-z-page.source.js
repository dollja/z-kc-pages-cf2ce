/**

	This file goes on A-Z page only.

**/

(function($, IBM) {

	function stripTags (txt) {
		var rex = /(<([^>]+)>)/ig;
		
		return txt.replace(rex, "");
	}

	$(function() {
		$("body").on("input", "#filterinput", function () {
			var txt = $(this).val().trim().toLowerCase();
			
			$("#ibm-a-z-main-section li").each(function() {
				var $li = $(this);

				if ($li.find('h3').text().toLowerCase().indexOf(txt) === -1) {
					$li.addClass("ibm-hide");
				}
				else {
					$li.removeClass("ibm-hide");
				}
			});

			if (txt === "") {
				$("#ibm-a-z-main-section li").removeClass("ibm-hide");
			}

			$("#ibm-a-z-main-section > div").each(function() {
				var $div = $(this),
					$totLi = $div.find("li");
			   
				if ($totLi.length === $div.find("li.ibm-hide").length) {
					$div.addClass("ibm-hide");
				}
				else {
					$div.removeClass("ibm-hide");
				}
			});
		});


		// Onload, if a query string was passed in from public search field, strip tags, 
		// prefill it in the test field and trigger event to do list filter. Fake search.
		if (IBM.common.util.url.getParam("q")) {
			$("#filterinput").val(stripTags(IBM.common.util.url.getParam("q")));
			setTimeout(function () {
				$("#filterinput").trigger("input");
			}, 1200);
		}

	});

})(jQuery, IBMCore);