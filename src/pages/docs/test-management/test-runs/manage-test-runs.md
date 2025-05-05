---
title: "Managing Test Runs"
page_title: "Managing Test Runs in Testsigma Test Management"
metadesc: "Manage test runs in Testsigma Test Management by editing, cloning, closing, or deleting them to maintain organized and efficient test execution."
noindex: false
order: 6.2
page_id: "create-test-runs"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Edit a Test Run"
  url: "#edit-a-test-run"
- type: link
  name: "Clone a Test Run"
  url: "#clone-a-test-run"
- type: link
  name: "Delete a Test Run"
  url: "#delete-a-test-run"
---

---

After creating a test run, you can manage it by editing its details, cloning it for reuse, closing it to prevent further modifications, or deleting it permanently. Editing lets you modify test run details, clone duplicates for future use, close locks it from further changes, and delete option removes the test run permanently. This article discusses managing test runs in Testsigma Test Management.

---

> ## **Prerequisites**
> 
> Before you begin, make sure test runs are created. For more information, see Test Runs.

---

## **Edit a Test Run**

1. From the Dashboard, go to **Test Runs** and click the kebab menu corresponding to the test run you want to edit.

   Alternatively, access the edit option from the **Test Run Details** page by clicking the pencil icon.

2. On the **Test Run Details** page, modify the **Title**, **Description**, **Test Run Properties**, and bulk select test cases to change **Assignees** and **Status**.

3. If test cases were added using filters, modify them to dynamically update test case selection.

   Alternatively, click **Update Test Cases** to access this option. 

---

## **Clone a Test Run**

1. From the **Dashboard**, go to **Test Runs** and click the kebab menu corresponding to the test run you want to clone.

2. Click **Clone Run** from the dropdown menu.

3. The cloned test run is added to the **Active Runs** list.

4. Modify the cloned test run by following the steps in **Edit a Test Run** section.

---

## **Close a Test Run**

1. From the **Dashboard**, go to **Test Runs** and click the kebab menu corresponding to the test run you want to close.

2. Click **Close Run** from the dropdown menu.

3. The test run is moved to the **Closed Runs** list.

[[info | **NOTE**:]]
| You can still clone closed test runs. 

---

## **Delete a Test Run**

1. From the **Dashboard**, go to **Test Runs** and click the kebab menu corresponding to the test run you want to delete.

2. In the **Delete Run?** dialog, click **Delete** to confirm deletion.


---