---
title: "Autonomous Test Generator"
page_title: "Autonomous Test Generator in Testsigma"
metadesc: "Generate test cases automatically by integrating Jira with Testsigma Test Management | Activate the sprint, select stories and generate multiple test cases"
noindex: false
order: 11.41
page_id: "autonomous-test-generator"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Interactive Demo"
  url: "#Interactive Demo"
- type: link
  name: "Attach a Jira Project"
  url: "#attach-a-jira-project"
- type: link
  name: "View & Activate Jira Sprints in Atto"
  url: "#view--activate-jira-sprints-in-atto"
- type: link
  name: "View Sprint Details & Generate Test Cases"
  url: "#view-sprint-details--generate-test-cases"
---


<br>

**Activate a sprint, select user stories & generate multiple test cases with just a few clicks.**

---

You can generate test cases automatically by integrating Jira with Testsigma Test Management. Atto detects sprints from Jira and displays them on the Atto Home. You can activate a sprint and select user stories to generate multiple test cases with just a few clicks. This article discusses using Jira sprints to generate test cases in Testsigma Test Management automatically.

---

> ## **Prerequisites** 
> 
> Before you begin, ensure you have a project and are connected to a Jira project in Testsigma Test Management.

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

1. From the **Dashboard**, click the **Candy Box** icon, and then select **+ New Project**.

2. In the **Create a New Project** dialog, enter the **Project Name**, **Description**, and **Project Key**.

3. From the **Jira Project** dropdown, select the project you want to attach.

   Alternatively, you can also attach the Jira project from **Project Settings** overlay. 

---

## **View & Activate Jira Sprints in Atto**

1. From the **Dashboard**, click **Atto’s Home**.

2. Go to the **Other Sprints** tab to view all available sprints from your Jira project.

3. In the **Other Sprints** tab of **Atto’s Home**, you can see the following tabs:
   
   - **Inactive**: Displays sprints that are  imported from Jira but are not yet active in Testsigma. You can activate these sprints for test case generation.
   
   - **Completed**: Displays sprints that were previously activated and done with the test case generation.
   
   - **Deleted**: Displays sprints that are deleted in the Jira project.
   
   Use these filters to easily find the sprints you need based on their current workflow status.

4. Review the list of sprints. Each sprint card shows the **Sprint ID**, **Name**, **Number of stories** waiting for test generation, and the **Last Updated Date**.

5. Click **Activate** next to the sprint for which you want to generate test cases.

---

## **View Sprint Details & Generate Test Cases**

1. Once you activate a sprint, Atto displays the sprint details.

2. You can view high-level metrics, including:
   
   - Number of stories in **To Do**, **In Progress**, **Done**, and **Modified** states.
   
   - A tabbed view that lets you filter stories by status.

3. Click on any user story to start AI-powered test case generation

4. Atto generates multiple test cases using the data from the selected story.

5. Click on any test case to view details such as preconditions, test steps, and expected results.

6. Review the test case and select the folder where you want to save it.

7. Click **Accept** to add the test case to the selected folder.

8. Repeat steps 5–7 to review and save other generated test cases.

9. Atto automatically sets the story status to **In Progress** once test case generation completes.

10. Repeat these steps for each story in the sprint.

---