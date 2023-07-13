
(function ($) {

	function addWidgetJs () {
		if (NSSite.w3Status.hasW3Access()) {
			$("[data-widget='researchreports']").on("ibm:init", function () {
				$(this).prepend('<div class="ibm-rule ibm-alternate ibm-gray-30 ibm-margin-top-2 msrb"><hr/></div><p class="ibm-margin-top-1 ibm-margin-bottom-2 ibm-h2">Research findings</p>');	
			});

			$.ajax({
				url: "https://uxresearch.w3ibm.mybluemix.net/api/widget/js/",
				dataType: "script",
				cache: true
			});
		}
	}
	
	NSSite.w3Status.subscribe("ready", "uxresearchwidget", addWidgetJs).runAsap(addWidgetJs);
	
})(jQuery);
