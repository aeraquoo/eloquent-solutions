var http = require("http");

ctypes = ["text/plain", "text/html", "application/json"];

// For each content type...
ctypes.forEach( function(type) {
    // make an HTTP request to author end-point
    http.request({
        hostname: "eloquentjavascript.net",
        path: "/author",
        method: "GET",
        headers: {
            // Accept the targeted content-type
            Accept: type
        }
    }, HttpHandler(type)).end();
});

/**
 * Higher order function for creating HTTP response handler functions with some
 * context information
 *
 * @param {string} type - the content-type used in the Accept header of the request (for
 * logging purposes)
 * @returns {function} handleResponse - a response-handler which know about `type`
 */
function HttpHandler(type) {
    return function(response) {
        response.setEncoding("utf-8");
        var body = "";
        response.on("data", function(chunk) {
            body += chunk;
        });
        response.on("end", function() {
            console.log( "\n---\n" + type + "\n---\n" + body + "\n---" );
        });
    };
}
