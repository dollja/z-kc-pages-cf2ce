//----------------------------------------------------------------------------------------------
// Contact module for whole standard site
//----------------------------------------------------------------------------------------------

// Enable contact us module if page open with in IBM network
(function($, IBM) {
	
	function showContactModule () {
		if (!NSSite.w3Status.hasW3Access()) {
			return;
		}

		$(function() {
			var cModule = '<div id="ibm-contact-module"><h2 class="ibm-bold">Contact us</h2><ul class="ibm-live-assistance-list"><li><a class="ibm-forward-link" href="https://w3-connections.ibm.com/forums/html/forum?id=e6256cb8-2c41-4c85-8acb-d3749b9ddef7">Request a new pattern (pattern forum)</a></li><li><a class="ibm-forward-link" href="https://w3-connections.ibm.com/forums/html/forum?id=a535f638-da1e-42cc-987a-5e807c2ca078">Ask a question (general forum)</a></li><li><a class="ibm-forward-link" href="https://w3-connections.ibm.com/forums/html/forum?id=6f046498-77b1-4291-925f-27ef1d926111">Report an issue (bug/issue forum)</a></li></ul></div>';

			$('#ibm-content-main').append(cModule);

			IBM.common.module.contactmodule.init();
		});

	}

	// Subscribe to w3status event and show contact module if user has w3 access.
	NSSite.w3Status.subscribe("ready", "showcm", showContactModule).runAsap(showContactModule);

})(jQuery, IBMCore);
