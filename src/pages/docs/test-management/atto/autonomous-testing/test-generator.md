---
title: 'Autonomous Test Generator'
page_title: 'Autonomous Test Generator in Testsigma'
metadesc: 'Generate test cases automatically by integrating Jira with Test Management by Testsigma | Activate the sprint, select stories and generate multiple test cases'
noindex: false
order: 11.41
page_id: 'autonomous-test-generator'
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
    name: 'Attach a Jira Project'
    url: '#attach-a-jira-project'
  - type: link
    name: 'View & Activate Jira Sprints in Atto'
    url: '#view--activate-jira-sprints-in-atto'
  - type: link
    name: 'View Sprint Details & Generate Test Cases'
    url: '#view-sprint-details--generate-test-cases'
  - type: link
    name: 'Synchronization of Jira Actions in Test Management'
    url: '#synchronization-of-jira-actions-in-test-management'
---

<br>

**Quickly turn Jira sprint stories into ready-to-run test cases with minimal effort.**

---

You can generate test cases automatically by integrating Jira with Test Management by Testsigma. Atto detects sprints from Jira and displays them on the Atto Home. You can activate a sprint and select user stories to generate multiple test cases with just a few clicks. This article discusses using Jira sprints to generate test cases in Test Management by Testsigma automatically.

---

> ## **Prerequisites**
>
> Before you begin, ensure you have a project and are connected to a Jira project in Test Management by Testsigma.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(57.41% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/wa5amwpajndw?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Attach a Jira Project**

1. On the **Dashboard**, click the **Candy Box** icon, and then select **+ New Project**.

2. In the **Create a New Project** dialog, enter the **Project Name**, **Description**, and **Project Key**.

3. From the **Jira Project** dropdown, select the project you want to attach.

   Alternatively, you can also attach the Jira project from the **Project Settings** overlay.

   ![Edit Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/tms-doc-images/TMS_Edit_Project.png)

---

## **View & Activate Jira Sprints in Atto**

1. On the **Dashboard**, click **Atto’s Home**.

2. Go to the **Other Sprints** tab to view all available sprints from your Jira project.

3. In the **Other Sprints** tab of **Atto’s Home**, you can see the following tabs:

   ![Other Sprints](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/tms-doc-images/Sprints_Atto.png)

   - **Inactive**: Displays sprints that are imported from Jira but are not yet active in Testsigma. You can activate these sprints for test case generation.

   - **Completed**: Displays sprints that were previously activated and done with the test case generation.

   - **Deleted**: Displays sprints that are deleted in the Jira project.

   Use these filters to easily find the sprints you need based on their current workflow status.

4. Review the list of sprints. Each sprint card shows the **Sprint ID**, **Name**, **Number of stories** waiting for test generation, and the **Last Updated Date**.

5. Select a sprint to view the list of stories associated with that sprint. The sprint view shows the following details:

   **a.** Sprint **Name** and **Duration**

   **b.** Tabs to filter stories by status: **All Stories, To Do, In Progress,** and **Done**

   **c.** Search by title box to find a specific story

   **d.** Story list with **ID**, **Title**, and **Current Status** (e.g., **To Do**)

   ![Sprint details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/tms-doc-images/Sprint_Details_Atto_Home.png)

6. Click **Activate** next to the sprint for which you want to generate test cases.

---

## **View Sprint Details & Generate Test Cases**

1. Once you activate a sprint in Jira, Atto detects and displays sprint details in a popup in Test Management by Testsigma.

2. Click **Start Generating Tests** to start generating tests for the attached stories. 
   ![Sprint Activate Popup](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Sprint_Activate_from_Jira.png)

3. Once the **Sprint** moves to **In Progress**, you can view high-level metrics, including:

   **a.** Sprint **Name**

   **b.** A completion percentage bar

   **c.** Number of stories in **To Do**, **In Progress**, **Done**, and **Modified** states.

   **d.** Search by title box to find a specific story

   **e.** Story list with **ID**, **Title**, and **Current Status** (e.g., **To Do**)

   ![Active Sprint](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/tms-doc-images/Active_Sprint_Atto.png)

4. Atto starts generating test cases using the data from the selected story.

5. Click on any test case to view details such as preconditions, test steps, and expected results.

6. Review the test case and select the folder where you want to save it.

7. Click **Accept** to add the test case to the selected folder.

8. Repeat steps 5–7 to review and save other generated test cases.

9.  Atto automatically sets the story status to **In Progress** once test case generation completes.

10. Repeat these steps for each story in the sprint.

[[info | **NOTE**:]]
|
| You can integrate a Jira project with a Test Management by Testsigma project using a WebHook. This integration synchronizes test activities and issue status updates between both systems.
|
| <br>
|
| For more information, see [Jira WebHooks](https://developer.atlassian.com/server/jira/platform/webhooks/).

---

## **Synchronization of Jira Actions in Test Management**

Atto automatically updates story statuses based on sprint activity and user actions. The following statuses help you track progress throughout the sprint lifecycle.


**1. Sprint Activation**  <br>

When you activate a sprint in Jira, Atto detects and displays sprint details in a popup in Test Management by Testsigma.
![Sprint Activate Popup](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Sprint_Activate_from_Jira.png)

**2. Story Modification** <br>

When a story is updated after test generation, Atto marks it as **Modified**. A "**Modified**" label appears next to the story in the sprint view.
![Modified Story](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Story_Modified_in_Jira.png)

**3. Accepting & Refining Test Cases** <br>

When a test case is generated, you can review and refine it using AI. After finalizing the test case, click **Accept** to save it.
![Refine with AI](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Refine_With_AI.png)

**4. Sprint Completion** <br>
When the sprint is closed in Jira, a "**Sprint Closed in Jira**" popup appears. Click **Mark as Done** to close the sprint in Test Management by Testsigma.
![Sprint Completion](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Sprint_Closed_in_Jira.png)

**5. Sprint Deletion in Jira** <br>
If a sprint is deleted in Jira, a "**Sprint Deleted in Jira**" popup appears in Atto. The sprint becomes read-only, you can view the content but cannot make changes.
![Sprint Deleted in Jira](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Deleted_Jira_Sprint.png)

**6. Story Movement Between Sprints** <br>
If a story is moved from one sprint to another, Atto displays a "**Moved**" label and shows a popup indicating the change.
![Story Moved](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Story_Moved_Jira.png)

**7. Story Deletion from Sprint** <br>
When a story is deleted from a sprint, it is only available in **View Mode**. Any test cases already generated for the story remain visible and accessible.
![Story Deletion](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Story_Deleted_Status.png)

---