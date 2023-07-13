/**

	Base settings that are used throughout the JS files for reuse/prevent duplication of code/values.
	Same thing/concept that v18 has.

**/


// Setup namespace
var NSSite = {};

// Set URLs used for AJAX'ing of external vs. internal content.
NSSite.ajax = {
	baseUrls: {
		external: "",
		internal: "https://nsinternal.w3ibm.mybluemix.net",
		internalPreview: "https://nsinternal-preview.w3ibm.mybluemix.net"
	},
	useBaseUrl: ""
};

NSSite.ajax.useBaseUrl = NSSite.ajax.baseUrls.external;

