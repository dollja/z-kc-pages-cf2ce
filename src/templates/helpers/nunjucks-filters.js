


function setEnvs (njkEnv) {
	
	// Usage of headings:  
	//	{{ "This is my text"|heading1 }}

	njkEnv.addFilter('heading1', function (str) {
		return '<h2 class="ibm-type-f ibm-mt-10 ibm-mb-3">{str}</h3>'.replace(/{str}/, str);
	});

	njkEnv.addFilter('heading1_notop', function (str) {
		return '<h2 class="ibm-type-f ibm-mt-0 ibm-mb-3">{str}</h3>'.replace(/{str}/, str);
	});


	njkEnv.addFilter('heading2', function (str) {
		return '<h2 class="ibm-type-e ibm-mt-4 ibm-mb-2">{str}</h3>'.replace(/{str}/, str);
	});


	// Usage of this ohe:  
	//	{{ "This is my text"|heading3 }}
	//	{{ "This is my text"|heading3('ibm-mb2') }}
	njkEnv.addFilter('heading3', function (str, klass='') {
		if (klass) {
			klass = " "+klass;
		}
		return '<h2 class="ibm-type-d ibm-mt-4{klass}">{str}</h3>'.replace(/{str}/, str).replace(/{klass}/, klass);
	});


	// Code snippet template. Usage:
	// 
	// {% filter codesnippet %}  or includ gutter: {% filter codesnippet(true) %}
	// 	<p>This is a <span>code snippet</span> I want to show</p>
	// {% endfilter %}

	njkEnv.addFilter('code_snippet_widget', function (str, includeGutter=false) {
		var html = "";
		
		if (includeGutter) {
			html = '<pre data-widget="syntaxhighlighter" class="brush: js; html-script: true; gutter: true">' + str.trim() + '</pre>';
		}
		else {
			html = '<pre data-widget="syntaxhighlighter">' + str.trim() + '</pre>';
		}

		return html;
	});



 	njkEnv.addFilter('code_example', function (str) {
		var html = "";
      	
      	if (str) {
			html = `
				<div class="ibm-grid-container v18e">
		            <div class="ibm-background-white-core ibm-grid-col-sm-4-4 ibm-pt-8 ibm-pb-8 custom-code-example">
			            <div>
			                ` + str + `
		                </div>
		            </div>
		        </div>
		       `;
		}

		return html;

	});



	njkEnv.addFilter('code_snippet', function (str) {
		var html = "";

		if (str) {
			html = `
		        <div class="ibm-grid-container" style="margin-top: 2px;">
		            <div class="ibm-background-white-core ibm-grid-col-sm-4-4 ibm-pt-2 custom-codesnippet-con">
		                <div class="ibm-ind-link ibm-icononly custom-codesnippet-copy-button ibm-padding-bottom-0"><a class="ibm-copy-link ibm-background-white-core" href="#copysnippet" onclick="t=jQuery(this).parent().next('textarea').select();document.execCommand('copy');jQuery(this).next('.bx--btn--copy__feedback').show().delay(3000).fadeOut();return false;">Copy</a><div class="bx--btn--copy__feedback" data-feedback="Copied!"></div></div>
		                <textarea style="height:1px; position:absolute; z-index:-1;">
		                ` + str + `
		                </textarea>
		                
                    <p class="ibm-type-c ibm-pb-0">Code:</p>
		                <pre data-widget="syntaxhighlighter">
                    ` + str.trim() + `
                    </pre>
                    <p class="ibm-ind-link ibm-padding-bottom-0 custom-codesnippet-more-button ibm-right">
                        <a class="ibm-chevron-down-link ibm-background-white-core custom-codesnippet-showmore-text ibm-type-c" href="#">Show more code</a>
                        <a class="ibm-chevron-up-link ibm-background-white-core custom-codesnippet-showless-text" href="#">Show less code</a>
                    </p>

		            </div>

		        </div>
	        `;
		}

		return html;
	});

};


module.exports = {
	setEnvs: setEnvs
}
