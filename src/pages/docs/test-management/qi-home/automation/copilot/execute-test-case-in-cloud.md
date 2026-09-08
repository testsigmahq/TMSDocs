---
title: 'Execute Test Case in Cloud'
page_title: 'Execute Test Case in Cloud'
metadesc: 'Run a test case interactively in a cloud browser on Testsigma Lab with Copilot executing each step, without setting up anything locally.'
description: 'Learn how to execute a test case in a cloud browser with Copilot.'
noindex: false
order: 13.35
page_id: 'qi-home-execute-test-case-in-cloud'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Start a Copilot Session'
    url: '#start-a-copilot-session'
  - type: link
    name: 'During Execution'
    url: '#during-execution'
  - type: link
    name: 'Complete the Session'
    url: '#complete-the-session'
---

<br>

**Run a test case interactively in a cloud browser with Copilot executing each step.**

---

Copilot opens a cloud browser on Testsigma Lab and executes your test case steps with a live panel showing each step as it runs. Use Cloud execution when you want to run a test case without setting up anything locally.

---

> ## **Prerequisites**
>
> Before you begin, ensure that:
> - You have a test case with automated steps saved in your library. Automated steps are required for Copilot execution. See [Learn Test Case Live (Cloud)](https://testsigma.com/docs/test-management/qi-home/automation/agentic-learning/learn-test-case-live-cloud/).
> - Your application is accessible from a cloud environment.

---

## **Start a Copilot Session**

1. Open a test case from your library.

2. In the top action bar, hover over the **Run** button. A dropdown appears with three options:

   - **Run with AI**: Re-runs the learning flow using AI browser control.
   - **Run Automated Steps**: Executes the saved automated script without a live browser.
   - **Run with Copilot**: Executes steps interactively in a live browser.

3. Click **Run with Copilot**.

4. In the **Run with Copilot** dialog, confirm the settings:

   - **Test Lab**: Testsigma Lab (pre-selected for Cloud)
   - **Debug Point**: Select a step where you want execution to pause, or leave as None.
   - **Environment**: Select the test environment.
   - **Run till failed step**: Toggle on if you want execution to stop at the first failed step.
   - **Additional Settings** and **Desired Capabilities**: Expand if needed.

5. Click **Launch**.

---

## **During Execution**

The cloud VM takes 10 to 20 seconds to provision.

When the browser is ready, the Copilot panel opens alongside it. Steps execute in sequence. Each completed step is marked with a green checkmark.

For the full list of controls available during execution, see [Execution Controls in Copilot](https://testsigma.com/docs/test-management/qi-home/automation/copilot/execution-controls-in-copilot/).

---

## **Complete the Session**

When all steps have been executed, a dialog confirms the result.

1. Click **Save Test Case** to save the execution results.

2. In the **Save to Library** dialog, select the folder and click **Save**.

3. To end the session and release the cloud VM:

   - Click **Save and End** to save all changes and close the browser.
   - Click **Reject and End** to close the browser without saving.
   - Click **Dismiss** to keep the browser open.

[[info | **NOTE**:]]
| The cloud VM is released when you end the session. Dismissing the dialog keeps the VM running and continues to consume resources.

---
