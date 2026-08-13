---
title: 'Learn Test Case Live (Cloud)'
page_title: 'Learn Test Case Live (Cloud)'
metadesc: 'Let the Runner Agent walk through your test case on a cloud browser on Testsigma Lab and generate automated steps for you — no scripts required.'
description: 'Learn how to run Agentic Learning on a cloud browser to automate a test case.'
noindex: false
order: 13.31
page_id: 'qi-home-learn-test-case-live-cloud'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Start Agentic Learning'
    url: '#start-agentic-learning'
  - type: link
    name: 'During the Learning Session'
    url: '#during-the-learning-session'
  - type: link
    name: 'Save to Your Library'
    url: '#save-to-your-library'
  - type: link
    name: 'Status Indicators'
    url: '#status-indicators'
---

<br>

**Let the Runner Agent walk through your test case on a cloud browser and generate automated steps for you.**

---

Agentic Learning (Cloud) opens a browser on Testsigma Lab, walks through each step of your test case on your live application, and generates automated steps based on what it observed. You do not write any scripts. When the session completes, you review the output and save it to your library.

Use Cloud when you do not want to set up anything locally. Testsigma Lab provides the browser and the execution environment.

---

> ## **Prerequisites**
>
> Before you begin, ensure that:
> - You have a test case saved in your library with manual steps.
> - Your application is accessible from a cloud environment (publicly accessible URL or a configured test environment).

---

## **Start Agentic Learning**

1. Open a test case from your library or from the session detail view.

2. At the bottom of the test case, click **Learn and Automate**.

3. In the **Learn and Automate** dialog, select the **Application** type: **Web**, **Android**, or **iOS**.

4. Under **Test Lab**, select **Testsigma Lab**.

5. Click **Launch**. A new browser tab opens with the Agentic Learning panel.

---

## **During the Learning Session**

When the browser tab opens, the Runner Agent introduces itself and displays the test case steps in the Agentic Learning panel.

The Runner Agent begins walking through each step on your live application. As each step is validated, it is marked with a checkmark in the panel.

**What you can do during learning:**

- Watch the Runner Agent execute each step in the browser.
- If it gets stuck or waits for your input, a banner appears: "Atto is waiting on your input to continue learning." Click **Go to Session** to provide guidance. See [Live Learning Controls](https://testsigma.com/docs/arcus/qi-home/automation/agentic-learning/live-learning-controls/).
- Click **Start Learning Live App** to begin interactive learning if it has not started automatically.

---

## **Save to Your Library**

1. Review the generated automated steps.

2. Click **Save to Library**.

3. In the **Save to Library** dialog, select the folder where this test case belongs.

   <!-- screenshot: Save to Library folder selection dialog -->

4. Click **Save**.

A success screen confirms the test case is now automated, showing the number of steps automated, the time Agentic Learning took, and an estimate of time saved compared to manual execution.

<!-- screenshot: "Your first test is automated" success screen with stats -->

5. Click **Go to Test Case** to return to the test case detail view.

[[info | **NOTE**:]]
| If you click **Reject** instead of **Save to Library**, the automated steps are discarded. The test case remains manual. You can run Agentic Learning again at any time.

---

## **Status Indicators**

While Agentic Learning is running, the test case shows a status on the sprint or Ad-Hoc session view.

| Status | What it means |
| :--- | :--- |
| **Agentic Learning in progress** | Learning is running. The Runner Agent is walking through the steps. |
| **Atto needs user's input** | The Runner Agent has paused and is waiting for you to provide guidance in the browser session. |
| **Learn and Automated** | Learning completed and automated steps were saved successfully. |

---
