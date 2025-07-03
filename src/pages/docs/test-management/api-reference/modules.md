---
title: 'API Modules for Test Management by Testsigma'
page_title: 'API Modules for Test Management by Testsigma'
metadesc: 'Use API Reference for Test Management by Testsigma to manage all modules like projects, test cases, test runs, test plans, folders, step groups, & settings'
noindex: false
order: 13.1
page_id: 'api-modules-for-test-management-by-testsigma'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'API Modules and Operations'
    url: '#api-modules-and-operations'
---

<br>

**Manage modules of test management like projects, folders, test cases, step groups, test runs, test plans & settings using APIs.**

---

You can now use API Reference for Test Management by Testsigma to manage all modules of test management like projects, test cases, test runs, test plans, folders, step groups, and custom fields. These APIs support automation workflows and integration with CI/CD pipelines.

Each module includes a set of RESTful endpoints that support standard CRUD operations, status updates, and data retrieval. Authentication is managed via Bearer tokens, which must be included in each request.

---

> ## **Prerequisites**
> 
> Before you begin, ensure you have API Token from Test Management by Testsigma.

---

## **API Modules and Operations**

| **Module**     | **Operation**                      | **Description**                                             |
|----------------|------------------------------------|-------------------------------------------------------------|
| **Projects**    | [Get Project by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#26e492ca-0c59-4dcc-b9a5-97af207a4df0)                  | Retrieve details of a project by ID                         |
|                | [Get List of Projects](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#be0ec8fd-0aed-4e71-8092-b79eae63728a)               | List all projects with filters                              |
|                | [Create Project](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#f5b4b726-36b2-4726-af3e-ba2502a62926)                     | Create a new project                                        |
|                | [Update Project by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#5e75885a-885a-43b6-8161-f68bbd7b3f4a)               | Update details of a specific project                        |
|                | [Delete Project by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#8161c4a4-738a-45e5-bad0-10b997e3b870)               | Permanently delete a project                                |
| **Folders**     | [Get Folder by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#88071b3b-f5f2-4598-ba59-70c774f9fe8c)                   | Fetch folder details by ID                                  |
|                | [List Folders](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#2e7dab63-f886-494b-8ea3-e7eff555af6b)                       | Get list of folders for a project                           |
|                | [Create Folder](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#c3050c49-efd4-4a1d-96ad-90289c0d52b5)                      | Create a new folder within a project                        |
|                | [Move Folder by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#1d9503c8-a7a5-4b9c-9caa-4779983d3560)                  | Move folder under a parent folder                           |
|                | [Update Folder by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#5ad36b37-81d1-449f-b972-a3d386e62c4a)                | Rename or reorder an existing folder                        |
|                | [Delete Folder by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#9cf1a360-4cbb-4ae8-b704-89a6bbb47ef9)                | Delete a folder permanently                                 |
| **Test Cases**  | [Get Test Case by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#9c09349f-5c16-4d29-9f8e-194576b6b841)                | Retrieve a specific test case                               |
|                | [List Test Cases](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#d07c9975-afd5-4874-93e2-2186ec3efa47)                    | View paginated list of test cases                           |
|                | [Create Test Case](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#f801f41c-f17e-4a4d-8369-993a90f093af)                   | Add a new test case to a project                            |
|                | [Update Test Case by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#9baff961-9f1d-491a-a666-5e77ae7e4913)             | Modify an existing test case                                |
|                | [Delete Test Case by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#c761c139-3db0-4537-a5fa-a45e632f1541)             | Remove a test case permanently                              |
| **Step Groups** | [Get Step Group by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#0baad7ba-19e7-4e9b-a07b-3b939269a354)               | Fetch step group by ID                                      |
|                | [List Step Groups](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#6e88c2e0-e3b2-4294-b9a9-60d396a13211)                   | List all step groups for a project                          |
|                | [Create Step Group](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#29c69813-2e9e-44b1-83ea-3539c3f48077)                  | Create a reusable step group                                |
|                | [Update Step Group by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#1d471dae-3b85-441d-9b0d-48c4980ef335)            | Modify an existing step group                               |
|                | [Delete Step Group by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#bf68d792-4feb-43cc-bc52-617c6b3c97c5)            | Remove a step group                                         |
| **Test Runs**   | [Get Test Run by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#e9a40e8e-8940-4b03-a257-821b656ffc33)                 | View test run details by ID                                 |
|                | [List Test Runs](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#581fbbb8-ccfd-492c-90a8-e0037d46378e)                     | List all test runs under a project                          |
|                | [Get Test Run Cases by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#c0833e36-3960-4efa-be08-eec7097f2b58)           | View test cases under a specific test run                   |
|                | [Create Test Run](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#617e16fd-0c19-42f3-b47e-81838151a45d)                    | Create a new test execution run                             |
|                | [Update Test Run by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#95b9cf04-634c-469d-886b-fa94cb9395d1)              | Update details of an existing test run                      |
|                | [Update Test Run Case Status](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#4bb1b8fa-81e7-4708-8a7a-4a676b256963)        | Update status for test cases within a run                   |
|                | [Assign User to Test Run Case](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#0cdf08d7-1793-4f2d-bdc7-f5c63aea5b38)       | Assign a user to a test case in a run                       |
|                | [Delete Test Run by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#bcd8a713-e3a6-4fb3-afb8-068205f969c6)              | Permanently remove a test run                               |
| **Report Imports** | [Junit Report Import](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#cfad67fa-6f46-4ab9-961b-97225539e231)       | Import JUnit test report into TMS                |
|                     | [Get Import Status](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#2c0c8d87-162b-41be-b34e-ba5e3294b13c)     | Retrieve the status of an ongoing or past import |
| **Test Plans**  | [Get Test Plan by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#973a8e43-85ab-4f8c-8255-6acb6a641df3)                | Retrieve a specific test plan                               |
|                | [List Test Plans](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#773d2a3a-6c20-4f75-9baf-ace8d607fe7c)                    | List all test plans in a project                            |
|                | [List Test Runs for Test Plan](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#72278cd3-6f9c-4463-9d95-b89e784a8276)       | Get all test runs under a specific test plan                |
|                | [Create Test Plan](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#29505382-8d48-4b5a-9cf0-b48d728bd389)                   | Define and initiate a new test plan                         |
|                | [Complete Test Plan by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#1c44f889-4efa-43d9-8e7c-851dffd11d78)           | Mark a test plan as complete                                |
|                | [Update Test Plan by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#9c97207a-d95f-4a89-b439-dab1decbf7d5)             | Update an existing test plan                                |
|                | [Delete Test Plan by ID](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#f19e054c-efe1-4dac-87a5-f53de498ba54)             | Delete a test plan permanently                              |
| **Settings**    | [Get Automation Types](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#896fa889-808c-4dde-b0fa-14c4fa1ccbdc)               | Fetch automation strategy metadata                          |
|                | [Get Test Case Types](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#3a6a72ba-b345-46af-b10b-25806b971809)                | Retrieve supported test case types                          |
|                | [Get Test Case Status](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#2189a1cb-c3d4-4049-b657-c37b26becb21)               | Fetch available test case statuses                          |
|                | [Get Test Case Priorities](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#d2c613c9-a510-44f9-8996-3704b52deace)           | Retrieve priority levels for test cases                     |
|                | [Get Test Run Status](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#eb9ce751-39c6-4f32-8945-3775f16ab50d)                | View status values for test runs                            |
|                | [Get Users](https://documenter.getpostman.com/view/40565679/2sB2xChp9y#d4c24ee5-da10-4f8e-9afa-93c4c0cd4084)                          | List available users for assignment                         |

---
