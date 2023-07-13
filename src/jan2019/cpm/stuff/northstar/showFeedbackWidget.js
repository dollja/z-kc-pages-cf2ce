function showFeedbackWidget() {
	// show link div
	var link = document.getElementById('ibm-contact-module');
	link.classList.add('ibm-active');
	
	//hide button
	var button = document.getElementById('z-feedback-button');
    button.classList.remove('ibm-active');
}