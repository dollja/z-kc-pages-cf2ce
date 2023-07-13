/**
	
	This is the function that sets whether or not the user currently has internal access (w3).
	We check if they do, and if so, we set the dynamic content/AJAX URLs to point to internal server.

	This also contains a feature like v18 has where you can force the page to use a particular setup/type of content:
	 - external 
	 - internal
	 - internal-preview 

	This allows you to test any version of the site content, and specifically the ability to test internal
	 content that you commit to 'preview' branch of 'internal' site repo.

	This switch simply changes the URL that is used for the AJAX call to either be external, internal, 
	 or internal-preview server.



	@class NSSite.w3Status

**/

(function($, IBM) {

	var me = IBM.namespace(NSSite, "w3Status"),
		myEvents = IBM.common.util.eventCoordinator(me, "w3statuscheck", ["ready"]);

	// Function to actively get the user's current status if they are connected. We only call this if they
	//  are not connected. LS is set if they are/were connected once in this session so we check LS first and 
	//  don't even call this if they have w3 LS flag.
	function checkInternalStatus () {
		$.ajax({
			url: "//ibmdev.webmaster.ibm.com/api/status.php",
			dataType: 'jsonp',
			timeout: 3000,
			success: function () {
				me.setW3Flag(true);
			},
			error: function() {
				me.setW3Flag(false);
				
				// If the dynamic content element has a the 'redirect' flag, it means there no "public" content to show
				//  the user if they don't have w3 access, so redirect them to the A-Z list.
				// This should probably be handled differently and every page have some little bit of public content.
				// TODO: Santelia: Enable some minimal public content for every page.
				if ($('[data-redirect="true"]').length > 0) {
					window.location.href = "/standards/web/";
				}
			},
			complete: function () {
				myEvents.publish("ready");
			}
		});
	}


	/// URL param switch code to override ajax setting.
	function hasForcedContent () {
		var showcontent = IBM.common.util.url.getParam("showcontent"),
			forced = false;

		if (showcontent === "external") {
			me.setW3Flag(false);
			forced = true;
		}
		else if (showcontent === "internal") {
			me.setW3Flag(true);
			forced = true;
		}
		else if (showcontent === "internal-preview") {
			me.setW3Flag(true);
			// Special set the internal URL to use here.
			NSSite.ajax.useBaseUrl = NSSite.ajax.baseUrls.internalPreview;
			forced = true;
		}

		return forced;
	}


	// Public function to check if user has stored w3 access. Used by other scripts in here.
	me.hasW3Access = function () {
		if (!IBM.common.util.storage.isSupported()) {
			return false;
		}
		return sessionStorage.getItem("EI_HIDE_CONTENT_STATUS") === "x";
	};


	me.setW3Flag = function (b) {
		if (b) {
			NSSite.ajax.useBaseUrl = NSSite.ajax.baseUrls.internal;
			if (IBM.common.util.storage.isSupported()) {
				sessionStorage.setItem("EI_HIDE_CONTENT_STATUS", "x");
			}
		}
		else {
			NSSite.ajax.useBaseUrl = NSSite.ajax.baseUrls.external;
			if (IBM.common.util.storage.isSupported()) {
				sessionStorage.removeItem("EI_HIDE_CONTENT_STATUS");
			}
		}
	};


	// Check w3 access and set if we should show internal content or not.
	// Overridable via URL param:  ?showcontent=internal
	// Steps:
	// 1. Check if they force what content to show, that overrides anything.
	// 2. Check if they have the w3 access flag we set in localstorage.
	// 3. Last, check if they currently have w3 access.

	if (!hasForcedContent()) {
		if (me.hasW3Access()) {
			me.setW3Flag(true);
			
			// Some weird thing with event, need to delay it because it's like publish here will fire before the event
			//  is actually created. Need to check v18 event function to see if there's some async thing there.
			setTimeout(function () {
				myEvents.publish("ready");
			}, 10);
		}
		else {
			checkInternalStatus();
		}
	}
	else {
		// Fire event so dynamic content can get injected from proper source.
		setTimeout(function () {
			myEvents.publish("ready");
		}, 10);
	}



})(jQuery, IBMCore);