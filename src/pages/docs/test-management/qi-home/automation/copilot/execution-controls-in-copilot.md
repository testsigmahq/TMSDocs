---
title: 'Execution Controls in Copilot'
page_title: 'Execution Controls in Copilot'
metadesc: 'The controls available in the Copilot panel during test case execution — panel controls, step tabs, step statuses, debug controls, and adding a new step.'
description: 'Reference for the controls available in the Copilot panel during test case execution.'
noindex: false
order: 13.37
page_id: 'qi-home-execution-controls-in-copilot'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Panel Controls'
    url: '#panel-controls'
  - type: link
    name: 'Step Tabs'
    url: '#step-tabs'
  - type: link
    name: 'Step Statuses'
    url: '#step-statuses'
  - type: link
    name: 'Debug Controls'
    url: '#debug-controls'
  - type: link
    name: 'Adding a New Step'
    url: '#adding-a-new-step'
---

<br>

**The controls available in the Copilot panel during test case execution.**

---

This page describes the controls available in the Copilot panel during test case execution.

---

## **Panel Controls**

The Copilot panel appears alongside the browser during execution. These controls are always visible in the panel header.

| Control | What it does |
| :--- | :--- |
| **Pause** | Pauses execution at the current step. The Copilot waits until you resume. |
| **Back** | Steps back to the previous step. |
| **Forward** | Steps forward to the next step. |
| **Settings** | Opens session settings. |
| **Rec** | Records the current session state as a step. |
| **Restart** | Restarts execution from the first step. Shown after steps have been generated. |
| **Stop** | Ends the execution session. |

<!-- screenshot: Copilot panel header showing Pause, Back, Forward, Settings, and Rec controls -->

---

## **Step Tabs**

The Copilot panel shows two tabs:

| Tab | What it shows |
| :--- | :--- |
| **Manual Steps** | The original manual test case steps. Use this to follow along or to compare with what Copilot is executing. |
| **Automated Steps** | The automated steps Copilot is executing. Each step shows its current status. |

<!-- screenshot: Copilot panel showing Manual Steps and Automated Steps tabs -->

[[info | **NOTE**:]]
| Switching to the Automated Steps tab while execution is running does not pause execution.

---

## **Step Statuses**

Each step in the Automated Steps panel shows one of the following statuses during execution.

| Status | What it means |
| :--- | :--- |
| Checkmark (green) | Step completed successfully. |
| Spinner | Step is currently executing. |
| Not started | Step has not been reached yet. |
| Failed | Step did not complete as expected. |

---

## **Debug Controls**

The bottom of the Copilot browser shows two debug indicators.

| Indicator | What it does |
| :--- | :--- |
| **Execution Point** | Marks the step where execution is currently paused or running. |
| **Debug Point** | A step you configured before launch where execution automatically pauses. Useful for investigating a specific step. |

<!-- screenshot: Bottom of Copilot browser showing Execution Point and Debug Point indicators -->

---

## **Switching Between Manual and Automated Steps**

The Copilot panel shows two view tabs that you can switch between at any time during execution without interrupting it.

- **Manual Steps**: The original manual test case steps. Use this to follow along with what Copilot is executing or to reference the expected behavior at each step.
- **Automated Steps**: The automated steps Copilot is currently executing. Each step shows its real-time status.

Switching between tabs only changes what you see in the panel. It does not pause or stop execution.

<!-- screenshot: Copilot panel showing Manual Steps and Automated Steps tabs during execution -->

---

## **Adding a New Step**

You can add a step during execution from the Automated Steps panel.

1. At the bottom of the steps list, click **Add new step**.

2. Enter the step details.

3. The new step is added to the current session.

<!-- screenshot: Copilot panel showing Add new step option at the bottom of the steps list -->

---