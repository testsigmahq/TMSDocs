---
title: 'Manage Test Runs in Jira App'
page_title: 'Manage Test Runs in Jira'
metadesc: 'The Test Management by Testsigma app simplifies your workflow by allowing you to manage test runs & test case results directly within Jira.'
noindex: false
order: 9.13
page_id: 'manage-test-runs-in-jira-app'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'View Linked Test Runs from Testsigma'
    url: '#view-linked-test-runs-from-testsigma'
  - type: link
    name: 'Update Test Case Results from Jira'
    url: '#update-test-case-results-from-jira'
  - type: link
    name: 'Add Defects from the Jira App'
    url: '#add-defects-from-the-jira-app'
  - type: link
    name: 'Link Defects to Existing Issues'
    url: '#link-defects-to-existing-issues'
---

<br>

**Learn how to manage test runs and update test case status directly within Jira using Test Management by Testsigma.**

---

The Test Management by Testsigma app simplifies your workflow by allowing you to manage test runs and test case results directly within Jira. You can update test results, add or link defects, and manage linked test cases from within the Jira issue view.

---

> ## **Prerequisites**
> 
> Before you begin, ensure that your Testsigma project is connected to a Jira project in Test Management by Testsigma.

---

## **View Linked Test Runs from Testsigma**

1. Open the Jira issue in a linked Jira project.

2. Click **Jira App Actions**, and then select **Test Management by Testsigma**.
   ![Testsigma App Connection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Connect_Testsigma_to_Issue.png)

[[info | **NOTE**:]]
| Test runs that include test cases associated with the Jira issue are automatically displayed.

---

## **Update Test Case Results from Jira**

1. In the Jira issue, go to **Test Management by Testsigma > Linked Test Runs**.
   ![Test Runs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Linked_Test_Runs_In_Jira.png)

2. Expand the test run.

3. Click the **Status** next to the test case, and choose the appropriate result from the dropdown.
   ![Update Result](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Status_Dropdown_in_Jira.png)

4. Refresh the page to view the updated status in **Linked Test Cases**.

[[info | **NOTE**:]]
| The test case status will also update in Test Management by Testsigma.

---

## **Add Defects from the Jira App**

1. In the Jira issue, go to **Test Management by Testsigma > Linked Test Runs**.
   ![Test Runs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Linked_Test_Runs_In_Jira.png)

2. Expand the test run.

3. Click the **meatballs menu (⋯)** next to the test case, and click **Add defect**.
   ![Add defect](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Add_Defect_from_Jira_TMS.png)

4. In the **Add Defect** dialog:
   - Select an **Issue Type**.
   - Enter a **Summary**.
   - (Optional) Enter a **Description**.
   - Select the **Status**.
   - Select the **Assignee**.
   - Click **Add**.
  
   ![Add Defect](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Add_defect_Button_Jira.png)

5. The defect is created and added to Jira.

---

## **Link Defects to Existing Issues**

1. In the Jira issue, go to **Test Management by Testsigma > Linked Test Runs**.
   ![Test Runs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Linked_Test_Runs_In_Jira.png)

2. Expand the test run.

3. Select the **meatballs menu (⋯)** next to the test case, and click **Link a defect**.
   ![Link a defect](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Link_Defect_from_Jira.png)

4. In the **Link a Defect** dialog, select the existing issue to link from the **Bug/Defect** dropdown.
   ![Select Issue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Link_defect_dialog.png)

5. Click **Link**.
   ![Link](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Link_defect_Button.png)

6. The defect is linked to the selected issue.

---