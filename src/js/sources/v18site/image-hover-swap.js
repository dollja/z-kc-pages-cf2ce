/**

	This sets up basic image swap for SVG on hover.
	To work, you simply tag the <img> in the <a> with a class.
	The current requirement is: Hover images have to be white and have to have "_white" appended to filename.

**/

(function($, IBM) {

	function setupHoverImages() {
		$(".custom-imghover").each(function() {
			var $thisImg = $(this),
				imgsrc = $thisImg.attr("src");

			$thisImg.closest("a").on("mouseover", function() {
				$thisImg.attr("src", imgsrc.replace(".svg", "_white.svg"));
			}).on("mouseout", function() {
				$thisImg.attr("src", imgsrc);
			});

		});
	}


	$(function() {
		setupHoverImages();
	});

})(jQuery, IBMCore);