---
title: 'Run Automated Test Case with Copilot'
page_title: 'Run Automated Test Case with Copilot'
metadesc: 'After Agentic Learning generates automated steps, run them in a live browser session with Copilot to verify and save the automated test case.'
description: 'Learn how to run automated steps in Copilot as the final step of the Agentic Learning workflow.'
noindex: false
order: 13.34
page_id: 'qi-home-run-automated-test-case-with-copilot'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Run with Copilot After Agentic Learning'
    url: '#run-with-copilot-after-agentic-learning'
  - type: link
    name: 'After Execution'
    url: '#after-execution'
---

<br>

**After Agentic Learning generates automated steps, run them in a live browser session with Copilot.**

---

When Agentic Learning completes, a **Run with Copilot** button appears in the learning panel. Clicking it opens a Copilot session where the generated automated steps execute in sequence in a live browser. You watch each step run, confirm the results, and save the test case.

This is the final step in the Agentic Learning workflow. The test case moves from "automated steps generated" to "automated steps verified and saved."

---

> ## **Prerequisites**
>
> Before you begin, ensure that:
> - Agentic Learning has completed and automated steps have been generated. See [Learn Test Case Live (Cloud)](https://testsigma.com/docs/arcus/qi-home/automation/agentic-learning/learn-test-case-live-cloud/) or [Learn Test Case Live (Local)](https://testsigma.com/docs/arcus/qi-home/automation/agentic-learning/learn-test-case-live-local/).

---

## **Run with Copilot After Agentic Learning**

1. After Agentic Learning generates automated steps, click **Run with Copilot** in the panel.

   <!-- screenshot: Agentic Learning panel showing Run with Copilot, Save to Library, and Reject buttons after steps are generated -->

   A confirmation dialog appears: "This ends your Agentic Learning session and opens Copilot in a fresh machine."

2. Click **Continue** to proceed. The Agentic Learning session closes.

   <!-- screenshot: Confirmation dialog with Continue and Dismiss buttons -->

3. A new browser tab opens with the Copilot panel. The Copilot begins executing the automated steps.

   <!-- screenshot: Copilot execution showing steps running with checkmarks -->

For the full Copilot execution experience — including controls, step switching, and saving results — see [Execute Test Case in Cloud](https://testsigma.com/docs/arcus/qi-home/automation/copilot/execute-test-case-in-cloud/).

---

## **After Execution**

When Copilot finishes executing all steps, a confirmation dialog appears: "Test Case Executed Successfully."

1. Click **Save Test Case** to save the results.

2. In the **Save to Library** dialog, select the folder and click **Save**.

3. To end the session, click **Save and End** or **Reject and End**.

   <!-- screenshot: "Test Case Executed Successfully" dialog with Save Test Case button -->

[[info | **NOTE**:]]
| The cloud VM is released when you end the session. Any unsaved changes are lost.

---
