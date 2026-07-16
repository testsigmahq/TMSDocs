---
title: 'Live Learning Controls'
page_title: 'Live Learning Controls'
metadesc: 'The controls available to you during an Agentic Learning session — panel controls, session states, providing input when Atto gets stuck, and re-learning a test case.'
description: 'Reference for the controls and session states available during an Agentic Learning session.'
noindex: false
order: 13.33
page_id: 'qi-home-live-learning-controls'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Panel Controls'
    url: '#panel-controls'
  - type: link
    name: 'Session States'
    url: '#session-states'
  - type: link
    name: 'Providing Input When Atto Gets Stuck'
    url: '#providing-input-when-atto-gets-stuck'
  - type: link
    name: 'Re-Learning a Test Case'
    url: '#re-learning-a-test-case'
---

<br>

**The controls available to you during an Agentic Learning session and what each one does.**

---

This page describes the controls available to you during an Agentic Learning session and what each one does.

---

## **Panel Controls**

The Agentic Learning panel appears alongside the browser during a live learning session. The following controls are available in the panel.

| Control | What it does |
| :--- | :--- |
| **Start Learning Live App** | Start the learning session. Atto begins walking through the test case steps on the live application. This button appears when the session is ready but has not yet started. |
| **Record Step** | Manually records the current state of the browser or device as a step. Use this if Atto misses a step or if you want to add a step that is not in the original test case. |
| **Pause** | Pauses Atto's execution. Atto stops walking through steps and waits for you to resume. |
| **Resume** | Resumes execution after a pause. |
| **Stop** | Ends the learning session without generating automated steps. |

<!-- screenshot: Agentic Learning panel during learning showing Start Learning Live App button and Record Step option -->

---

## **Session States**

The panel and the test case view reflect the current state of the learning session.

| State | What it means | What you see |
| :--- | :--- | :--- |
| **Learning** | Atto is actively walking through steps. | Steps list with spinner on the current step. "Learning..." status in the panel. |
| **Atto needs user's input** | Atto has reached a step it cannot complete without guidance. The session is paused. | Yellow banner on the test case view: "Atto is waiting on your input to continue learning." **Go to Session** button. |
| **Completed** | Atto has walked through all steps. | Steps list with checkmarks. "Generate Automated Steps", "Save to Library", and "Reject" buttons appear. |
| **Generation Failed** | Atto could not generate automated steps from the learned session. | "Generation Failed" error with an **Edit** option. |

---

## **Providing Input When Atto Gets Stuck**

When Atto needs your input, a banner appears on the test case view in Atto.

1. On the test case view, click **Go to Session** in the banner. The browser tab with the learning session opens.

   <!-- screenshot: Test case view showing the "Atto is waiting on your input to continue learning" banner with Go to Session button -->

2. In the browser, complete the action Atto could not perform. For example, if Atto stopped at a CAPTCHA or a multi-factor authentication step, complete it manually.

3. After completing the action, Atto resumes walking through the remaining steps automatically.

[[info | **NOTE**:]]
| If you close the browser tab without completing the required action, the learning session ends and you will need to start a new session.

---

## **Re-Learning a Test Case**

If a test case has already been automated and the application has changed, use **Re-learn and Automate** to update the automated steps.

1. On the test case view, click **Re-learn and Automate** in the top action bar. This button replaces **Learn and Automate** after a test case has been automated.

   <!-- screenshot: Test case view showing the Re-learn and Automate button in the action bar -->

2. The **Learn and Automate** dialog opens with the same configuration options as the initial learning session. Select your Application type, Test Lab, and Environment, then click **Launch**.

3. The new learning session runs the same way as the original. When it completes, save the new automated steps to your library. The previous automated steps are replaced.

[[info | **NOTE**:]]
| Re-learning does not delete the previous automated steps until you save the new ones. If you reject the new learning session, the original automated steps remain in your library.

---
