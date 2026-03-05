---
title: 'Azure DevOps Integration with Test Management by Testsigma'
page_title: 'Azure DevOps Integration with Test Management by Testsigma'
metadesc: 'Test Management by Testsigma integrates with Azure DevOps to link test defects to work items, improving traceability and collaboration.'
noindex: false
order: 9.8
page_id: 'azure-devops-integration-with-test-management-by-testsigma'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Integrate Azure DevOps'
    url: '#integrate-azure-devops'
  - type: link
    name: 'Link Defects to Azure DevOps'
    url: '#link-defects-to-azure-devops'
  - type: link
    name: 'Link Defects to an Existing Work Item'
    url: '#link-defects-to-an-existing-work-item'
  - type: link
    name: 'Link Defects to a New Azure DevOps Work Item'
    url: '#link-defects-to-a-new-azure-devops-work-item'

---

<br>

**Integrate Azure DevOps with Test Management by Testsigma to seamlessly link defects to Azure DevOps work items.**

---

Test Management by Testsigma allows seamless integration with Azure DevOps, enabling you to link test defects directly to Azure DevOps work items. This improves traceability, streamlines defect management, and enhances collaboration between QA and development teams.

---

> ## **Prerequisites**
> 
> Before you begin, ensure you have:
>    - An active Azure DevOps account.
>    - Required permissions to access projects and create work items.

---

## **Integrate Azure DevOps**

1. From the **Dashboard**, go to **Settings > Integrations**.

2. Click **Setup Integration** next to **Azure DevOps**.

3. If the integration is successful, the status displays as **Connected**.

---

## **Link Defects to Azure DevOps**

1. From the **Dashboard**, go to **Test Runs**.

2. Open a test run from the list.

3. Click the test case to log a defect. This opens the **Quick View** overlay.

4. The Atto AI agent automatically fills in the **Project**, **Work Item Type**, **Title**, and **Description** fields. If needed, edit the required fields and click **Add**.

You can either link to an existing Azure DevOps work item or create a new work item.

---

## **Link Defects to an Existing Work Item**

1. Open a test case from the test run. This opens the **Quick View** overlay.

2. Click **Add a Defect**.

3. On the **Add a Defect** overlay, select the **Link to Existing Work Item** tab.

4. Choose the Azure DevOps work item(s) you want to link with the defect.

5. Click **+ Add Defect** to complete the linking.

[[info | **NOTE**:]]
| -  You can link a defect to multiple existing work items.

---

## **Link Defects to a New Azure DevOps Work Item**

1. Open a test case from the test run.

2. Click **Add a Defect**.

3. In the **Add a Work Item – Azure DevOps** overlay, select **Create a New Issue**.

4. Enter the required details such as:
   - Project
   - Work Item Type
   - Title
   - Description
   - Tags
   - Assignee
   - Area Path
   - Priority
   - Iteration Path

5. Click **Create Work Item**.

---