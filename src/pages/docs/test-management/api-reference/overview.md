---
title: 'Overview: API Reference for Test Management'
page_title: 'Overview of API Reference for Test Management'
metadesc: 'Test Management APIs by Testsigma gives RESTful endpoints to automate test operations like creating test cases, managing test runs, and retrieving project metadata'
noindex: false
order: 13.1
page_id: 'apis-overview-management-by-testsigma'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Authentication'
    url: '#authentication'
  - type: link
    name: 'Pagination'
    url: '#pagination'
  - type: link
    name: 'Status Codes'
    url: '#status-codes'
---

<br>

**Get a complete view of common concepts necessary to interact with APIs successfully.**

---

Test Management API by Testsigma provides RESTful endpoints to automate test operations like creating test cases, managing test runs, and retrieving project metadata. This article discusses the common concepts required to interact with the API successfully, including authentication, pagination, and status codes.

---

## **Authentication**
Test Management APIs use Bearer Token authentication.

You must include your API token in the Authorization header for every request. This token helps identify the user and enforce permissions accordingly.

> ### **Example header:**
> 
> **Authorization**: Bearer `<TEST_MANAGEMENT_API_TOKEN>`

You can generate and manage your API token from [here](https://test-management.testsigma.com/ui/settings/api_keys). The token must be kept secure, like a password.

---

## **Pagination**

When a response includes a large set of resources (e.g., test cases or test runs), pagination is applied to improve performance and usability. By default, the API returns 20 records per page.

> ### **Example:**
> 
> The following request retrieves only 2 projects:
> 
> **GET** `/api/v1/projects?name__NEQ=test&page_size=2`

In this example, `page_size=2` limits the number of results to 2 projects.

---

## **Status Codes**

Test Management API returns standard HTTP status codes to indicate the result of your request. In case of an error, additional information is included in the response body. 

The HTTP status codes in the API are listed below:

| **Status Code** | **Description**                                                          |
|-------------|------------------------------------------------------------------------------|
| 200         | OK – The request was successful.                                             |
| 401         | Unauthorized – API token is missing or invalid.                              |
| 404         | Not Found – The resource does not exist.                                     |
| 422         | Unprocessable Entity – Input is syntactically correct but semantically invalid. |
| 500         | Internal Server Error – Unexpected issue with the server.                    |

---