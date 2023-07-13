// Standard site pages have many internal contents (contents which can be access through internal IBM network).
// According to the network (external or internal), we have to toogle the content or hide the content.
// Below scripts are checking wheather user is in internal or external site according to that loading dynamic contents like left navigation, menu nav and some body content.

(function($, IBM) {

	// This is only called/run if they have w3 access, to AJAX in special 'internal only' content.
	function loadContent() {
		if (!NSSite.w3Status.hasW3Access()) {
			return;
		}

		$('.dynamic-content[data-type="content"]').each(function() {
			var $dynContentEl = $(this),
				url = NSSite.ajax.useBaseUrl + "/standards/web/content.php?file=" + $dynContentEl.data('file');

			$.ajax({
				url: url,
				dataType: 'html',
				timeout: 3000,
				success: function (data) {
					$dynContentEl.html(data);

					// Initializing northstar widgets dynamically, which is not initialized before
					$('[data-widget="syntaxhighlighter"]:not(.ibm-widget-processed)').syntaxhighlighter();
					$('[data-widget="twisty"]:not(.ibm-widget-processed)').twisty();
					$('[data-widget="videoplayer"]:not(.ibm-widget-processed)').videoplayer();
					$('[data-widget="showhide"]:not(.ibm-widget-processed)').showhide();

					$("select").select2();
					
					if (IBMCore.common.widget.checkboxradio) {
						$("form input:checkbox:not([data-init=false], [data-widget=checkbox]), form input:radio:not([data-init=false], [data-widget=checkbox]), table input:checkbox:not([data-init=false], [data-widget=checkbox]), table input:radio:not([data-init=false], [data-widget=checkbox])").each(function() {
							IBMCore.common.widget.checkboxradio.init(this);
						});
					}
				},
				error: function () {
					// Redirect the user to a-z because this page flagg itself as having no 'public' content.
					if ($('[data-redirect="true"]').length > 0) {
						window.location.href = "//" + window.location.host + "/standards/web/";
					}
				}
			});
		});
	}

	// This loads the left/menu nav.
	// TODO: This is only here because they didn't have SSIs or a way to include a common nav file on
	//  each page. When we create HBS template, we won't need this anymore except to AJAX the internal only
	//  version if the user has w3 access, like content does above.
	function loadnavs() {
		$('div.dynamic-content[data-type="leftnav"], div.dynamic-content[data-type="menunav"]').each(function() {
			var url,
				$navEl = $(this);

			// Set URL where to pull nav from, public (EI) or internal one.
			if (!NSSite.w3Status.hasW3Access()) {
				url = "/standards/web/partials/navs/" + $navEl.data('file');
			}
			else {
				url = NSSite.ajax.useBaseUrl + "/standards/web/content.php?file=/partials/navs/" + $navEl.data('file');
			}

			$.ajax({
				url: url,
				dataType: 'html',
				timeout: 3000,
				success: function (html) {
					var $navs = $(html);

					if ($navEl.data("type") === "leftnav") {

						var paths = window.location.pathname.split("/"),
							eles = [];

						if (paths[paths.length - 1].indexOf(".html") > 0) {
							var urlseg = "/" + paths[paths.length - 3] + "/" + paths[paths.length - 2];

							eles = $navs.find("a[href*='" + urlseg + "']");
						}
						else {
							eles = $navs.find("a[href*='" + window.location.pathname.substr(15, 50) + "']");
						}

						eles.each(function() {
							$(this).attr('aria-selected', "true");
							$(this).parent().parent().parent().addClass('active');
							$(this).parent().parent().parent().attr('aria-expanded', "true");
						});
					}
					else if ($navEl.data("type") === "menunav") {
						$navs.find("a[href*='" + window.location.pathname.substr(15, 5) + "']").each(function() {
							$(this).parent().addClass('ibm-highlight');
						});
						IBM.common.module.sitenavmenu.init();
					}

					$navEl.html($navs);				
				},
				error: function() {
					// If we can't load the internal version, set w3flag to false and call this again,
					//  to load external version nav.
					NSSite.w3Status.setW3Flag(false);
					loadnavs();
				},
				complete: function () {
					IBMCore.common.module.sitenavmenu.init();

					// Don't re-initialize leftnav.
					if ($("#ibm-primary-links")[0] && !$("#ibm-primary-links.ibm-widget-processed")[0]) {
						// Initializing left navigation animation, if left navigation not processed
						IBMCore.common.module.leftnav.init();
					}

					// Inject added navigation to the burger menu.
					// Delay it so it doesn't affect something else visible that's dynamic.
					setTimeout(function() {
						IBMCore.common.module.mobilemenu.addSiteNavigation();
					}, 1000);
				}
			});
		});
	}

	
	// Called from subscription to w3 access check so these know what type of content to load; internal or external.
	function loadDynamicContent () {
		$(function () {
			loadContent();
			loadnavs();
		});
	}


	// Subscribe to w3status event and load internal dynamic content if applicable.
	NSSite.w3Status.subscribe("ready", "showcontent", loadDynamicContent).runAsap(loadDynamicContent);


})(jQuery, IBMCore);