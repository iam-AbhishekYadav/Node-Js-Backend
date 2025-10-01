# # HTTP Status Codes

- HTTP status codes are three-digit numbers returned by an API
(Application Programming Interface) to indicate the status of a
request.
- These codes provide information about whether a request
was successful or not, and they are an important part of the API
development.
- The first digit of the status code specifies one of five standard
classes of responses.
- **Standard Classes** :
  - 1xx: Informational responses.
  - 2xx: Successful responses.
  - 3xx: Redirection responses.
  - 4xx: Client error responses.
  - 5xx: Server error responses.

    
## 1xx: Informational responses

- It indicates that the request was received and understood by the
server and it’s continuing the process.
- **`100`** : Continue.
- **`101`** : Switching Protocols.
- **`102`** : Processing.
- **`103`** : Early Hints.

## 2xx: Successful responses

- It indicates that the action requested by the client was received,
understood, and accepted.
- **`200`** : OK.
- **`201`** : Created.
- **`202`** : Accepted.
- **`203`** : Non-Authoritative Information.
- **`204v: No Content.

## 3xx: Redirection responses

- Many of these 3xx status codes are used in URL redirection or it
indicates the client must take additional action to complete the
request.
- **`301`** : Moved Permanently.
- **`302`** : Found.
- **`304`** : Not Modified.
- **`305`** : Use Proxy.
- **`307`** : Temporary Redirect.
- **`308`** : Permanent Redirect.

## 4xx: Client error responses

- This status code is intended for situations in which the error seems
to have been caused by the client.
- **`400`** : Bad Request.
- **`401`** : Unauthorized.
- **`403`** : Forbidden.
- **`404`** : Not Found.
- **`406`** : Not Acceptable.
- **`408`** : Request Timeout.

## 5xx: Server error responses

- It indicates that the server has encountered a situation where it
doesn’t know how to handle a request.
- **`500`** : Internal Server Error
- **`501`** : Not Implemented
- **`502`** : Bad Gateway
- **`503`** : Service Unavailable
- **`504`** : Gateway Timeout
- **`505`** : HTTP Version Not Supported

> [!NOTE]
> These are just a few examples of the many HTTP status codes that
can be returned by an API. It's important to understand the
meaning of each code and to handle them appropriately in the
client application. The HTTP status codes are standardized and are
used as a way for the server to communicate with the client about
the outcome of a request.
