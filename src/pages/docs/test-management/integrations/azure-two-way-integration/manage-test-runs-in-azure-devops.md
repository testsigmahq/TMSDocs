---
title: 'Manage Test Runs in Azure DevOps'
page_title: 'Manage Test Runs in Azure DevOps'
metadesc: 'The Test Management by Testsigma app simplifies your workflow by enabling you to manage test runs and test case results directly within Azure DevOps.'
noindex: false
order: 9.23
page_id: 'manage-test-runs-in-azure-devops'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'View Linked Test Runs from Azure DevOps'
    url: '#view-linked-test-runs-from-azure-devops'
  - type: link
    name: 'Update Test Case Results from Azure DevOps'
    url: '#update-test-case-results-from-azure-devops'
  - type: link
    name: 'Add Defects from Azure DevOps'
    url: '#add-defects-from-azure-devops'
  - type: link
    name: 'Link Defects to Existing Issues'
    url: '#link-defects-to-existing-issues'

---

<br>

**Learn how to manage test runs and update test case status directly within DevOps using Test Management by Testsigma.**

---

The Test Management by Testsigma app simplifies your workflow by allowing you to manage test runs and test case results directly within Azure DevOps. You can update test results, add or link defects, and manage linked test cases from within the Azure DevOps issue view.

---

> ## **Prerequisites**
> 
>  Before you begin, ensure that your Testsigma project is connected to an Azure DevOps project in Test Management by Testsigma.

---

## **View Linked Test Runs from Azure DevOps**

1. Sign in to **Azure DevOps** and navigate to your project.

2. Go to **Boards > Work items**.
![Work Items](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_link_test_case_1.png)

3. Open the required work item.
![required work item](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_link_test_case_2.png)

4. In the work item details page, click the **Test Management by Testsigma** tab.
![TMS tab](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_link_test_case_3.png)

5. View the linked test runs associated with the work item.
![Work Item](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_test_runs_1.png)

[[info | **NOTE**:]]
| - Test runs that include test cases associated with the Azure DevOps issue are automatically displayed.

---

## **Update Test Case Results from Azure DevOps**

1. In the **Azure DevOps** issue, go to **Test Management by Testsigma > Linked Test Runs**.
![Work Item](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_test_runs_1.png)

2. Expand the test run.

3. Click the **Status** next to the test case, and choose the appropriate result from the dropdown.
![Status](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_test_runs_2.png)

4. Refresh the page to view the updated status in **Linked Test Cases**.

[[info | **NOTE**:]]
| - The test case status will also be updated in Test Management by Testsigma.

---

## **Add Defects from Azure DevOps**

1. In the **Azure DevOps** issue, go to **Test Management by Testsigma > Linked Test Runs**.
![Work Item](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_test_runs_1.png)

2. Expand the test run.

3. Click the **meatballs menu (⋯)** next to the test case, and click **Add defect**.
![Add defect](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_test_runs_3.png)

4. In the **Add Defect** dialog, the **Work Item Type**, **Title**, and **Description** are automatically filled in by the Atto AI agent. If needed, edit the fields and click **Add**.
![Add](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_test_runs_4.png)

5. The defect is created and added to **Azure DevOps**.

---

## **Link Defects to Existing Issues**

1. In the Azure DevOps issue, go to **Test Management by Testsigma > Linked Test Runs**.
![Work Item](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_test_runs_1.png)

2. Expand the test run.

3. Select the **meatballs menu (⋯)** next to the test case, and click **Link a defect**.
![Link a defect](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_test_runs_5.png)

4. In the **Link Defect** dialog:
   - Select the **Work Item Type**.
   - Under **Azure DevOps Work Items**, choose the existing work item from the dropdown.
   - Click **Link**.![Link a defect](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_test_runs_6.png)

5. The defect is linked to the selected issue.

---