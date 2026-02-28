//API validation.
//response code validation: 200, 201, 202, 204, 400, 401, 403, 404, 500, 502, 503, 504

let status_code = 200;


switch (status_code) {
    case 200:
        console.log("Success");
        break;
    case 201:
        console.log("Created");
        break;
    case 202:
        console.log("Accepted");
        break;
    case 204:
        console.log("No Content");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case 401:
        console.log("Unauthorized");
        break;
    case 403:
        console.log("Forbidden");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Internal Server Error");
        break;
    case 502:
        console.log("Bad Gateway");
        break;
    case 503:
        console.log("Service Unavailable");
        break;
    case 504:
        console.log("Gateway Timeout");
        break;
    default:
        console.log("Invalid status code");
}

/*
Success
*/
