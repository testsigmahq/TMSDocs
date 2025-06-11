---
title: 'Test Cases: The Core of Testing'
page_title: 'Test Cases in Test Management by Testsigma'
metadesc: 'This article discusses managing test cases in Test Management by Testsigma | Managing test cases involves creating, editing, moving, and deleting them in test management'
noindex: false
order: 3.2
page_id: 'test-cases-in-testsigma-test-management'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Interactive Demo'
    url: '#interactive-demo'
  - type: link
    name: 'Create Test Cases'
    url: '#create-test-cases'
  - type: link
    name: 'Test Case Properties'
    url: '#test-case-properties'
  - type: link
    name: 'Edit Test Cases'
    url: '#edit-test-cases'
  - type: link
    name: 'Delete Test Cases'
    url: '#delete-test-cases'
  - type: link
    name: 'Bulk Actions on Test Case List'
    url: '#bulk-actions-on-test-case-list'
---

---

A test case defines a specific scenario to be tested, including detailed steps, preconditions, expected results, and other relevant information. Test cases are stored in a repository and structured in a hierarchical tree format, with folders and subfolders for better organization.

Managing test cases involves creating, editing, moving, and deleting them. This article discusses how to manage test cases in test management.

---

> ## **Prerequisites**
>
> Before you begin, ensure that a Project and Folders are created in Testsigma.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(57.41% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/yezyzhuzvhrx?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Create Test Cases**

1. From the **Dashboard**, go to **Test Cases** and click **+ Create Test Case**.

   Alternatively, click the kebab menu (three dots) next to the **Folder/Sub Folder** and select **Create Test Case** from the dropdown menu.

2. On the **Test Case Details** page, enter the **Title** and optional **Description**.

3. Choose a **Template Type** from the dropdown menu in the **Test Case Properties** section.

   _For selecting a template, refer to the Test Case Templates section._

4. Select any additional properties in the **Test Case Properties** section to further organize your test case.

5. Add your test steps. Once completed, click **Create Test Case** to finalize and add the test case.

---

## **Test Case Properties**

The following properties help you classify and organize test cases:

- **Location**: The folder where the test case will be stored upon creation.

- **Priority**: Defines the urgency and execution order of the test case.

- **Owner**: The team member responsible for the test case.

- **Reviewer**: The team member who will review the test case.

- **Automation Type**: Specifies the automation status of the test case: - Automated - Not Automated - Automation Not Required - Can’t Be Automated - Obsolete

- **Status**: The current state of the test case in the testing lifecycle (e.g., **Draft, Active, In Progress, Outdated**).

- **Test Case Type**: Defines the type based on the test case's purpose and testing approach (e.g., **Functional, Regression, Smoke**, etc.).

[[info | **NOTE**:]]
| The **Test Case Properties** are editable under **Settings > Manage Properties**.

---

## **Edit Test Cases**

1. From the **Dashboard**, go to **Test Cases** and click any test case from the **Test Case List** section to open the **Quick View** overlay.

2. In the **Quick View** overlay, click the **Edit** icon.

3. Update the **Test Case Name**, **Test Steps**, **Folder**, **Properties**, and any other necessary fields.

4. Once done, click **Update Test Case** to save the changes.

5. The test case will be updated.

   Alternatively, you can click the Kebab menu corresponding to the test case and select **Edit** from the dropdown menu to make changes.

---

## **Delete Test Cases**

1. From the **Dashboard**, go to **Test Cases**.

2. Click the **Kebab menu** corresponding to the test case and select **Delete** from the dropdown menu.

3. On the **Delete Test Case?** dialog, click **Delete Test Case** to confirm deletion.

---

## **Bulk Actions on Test Case List**

1. From the **Dashboard**, go to **Test Cases**.

2. Press **Command + K**, then select **Bulk Update Test Cases** from the **Testsigma Command Center**.

3. Perform bulk actions such as:
   - Change test case properties
   - Move test cases to a different folder
   - Delete multiple test cases at once

---
