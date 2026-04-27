# The API Post Office

**Domain:** The City | **Book 6 of 12**

**Metaphor:** Envelopes, stamps, return addresses, and delivery protocols

**Technical Goal:** REST, SOAP, JSON payloads, HTTP status codes, authentication

---

## Part 1: The Metaphorical Story

### The Story of the Overworked Postman

> [Draft pending — a postman handles an exploding volume of letters in a growing city. Letters arrive addressed to the same building but for different departments. Some letters need a signature (auth). Some demand a reply in a specific format (response schema). Some arrive damaged or with the wrong address (4xx errors). The crisis: the postman's improvised system collapses when the city triples in size. The resolution introduces a formal postal code standard — every envelope must carry a sender, recipient, purpose header, and expected reply format. The turning point: when the postman enforces the standard, bad letters are rejected at the door instead of causing chaos inside.]

---

## Part 2: The Visual Blueprint

> Diagrams pending production. Planned sequence:
> 1. Metaphor bridge (envelope → HTTP request, stamp → auth token, postman → API gateway)
> 2. HTTP request anatomy (method, URL, headers, body)
> 3. HTTP response anatomy (status code, headers, body)
> 4. REST vs SOAP comparison
> 5. JSON structure and types
> 6. HTTP status codes by family (2xx, 3xx, 4xx, 5xx)
> 7. Authentication methods (API key, Bearer token, OAuth2 flow)
> 8. Rate limiting and retry logic

---

## Part 3: The Code Adapter

### Metaphor-to-Code Table (Outline)

| Story Element | Technical Name |
|---|---|
| The envelope | HTTP request |
| Sender address | request origin / auth header |
| Recipient address | endpoint URL |
| The letter contents | request body (JSON) |
| Signature required | authentication |
| Reply format | response schema / Content-Type |
| Delivery confirmation | 2xx response |
| Wrong address | 404 Not Found |
| Refused at door | 401 / 403 |

### Canonical Pattern (Python + curl)

> [Draft pending — `requests` library in Python, curl examples, a complete REST CRUD example, JSON parsing, error handling by status code]

### Antipattern

> [Draft pending — swallowing all errors with a single `except`, ignoring status codes, hardcoding auth tokens in source]

### Before / After

> [Draft pending]
