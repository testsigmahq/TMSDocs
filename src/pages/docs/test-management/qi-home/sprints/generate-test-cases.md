---
title: 'Generate Test Cases'
page_title: 'Generate Test Cases (Sprints)'
metadesc: 'When a sprint starts, Atto detects it and generates test cases automatically from the sprint stories and linked artifacts. Learn how sprint detection works.'
description: 'Learn how sprint detection triggers automatic test case generation, and how to generate test cases for skipped sprints.'
noindex: false
order: 13.24
page_id: 'qi-home-sprints-generate-test-cases'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Confirm Generation When a Sprint Starts'
    url: '#confirm-generation-when-a-sprint-starts'
  - type: link
    name: 'What Atto Uses as Context'
    url: '#what-atto-uses-as-context'
  - type: link
    name: 'Generate Test Cases for an Unprocessed Sprint'
    url: '#generate-test-cases-for-an-unprocessed-sprint'
  - type: link
    name: 'What Happens During Generation'
    url: '#what-happens-during-generation'
  - type: link
    name: 'After Generation'
    url: '#after-generation'
---

<br>

**When a sprint starts, Atto detects it and generates test cases automatically.**

---

In Sprints, test case generation is triggered by your sprint workflow, not manually. When a sprint starts in your connected project management tool, Atto detects the new sprint and notifies you. You confirm, and Atto pulls context from the sprint stories and linked artifacts to generate test cases.

This article covers how sprint detection works, how to confirm or defer generation, and how to generate test cases for sprints that were skipped.

---

> ## **Prerequisites**
>
> Before you begin, ensure that:
> - You have an active project in Arcus by Testsigma.
> - Your project management tool (Jira, Azure DevOps, Linear, or ClickUp) is connected to your project.
> - The context sources linked in your sprint stories (Confluence pages, Figma designs, PRDs) are either publicly accessible or connected as integrations.

---

## **Confirm Generation When a Sprint Starts**

When a sprint starts in your connected project management tool, Atto automatically detects it and shows a notification.

1. From the left navigation bar, go to **QI Home**.

2. Select the **Sprints** tab.

3. When Atto detects a new sprint, a notification appears: **Atto has started to Generate your tests. A new sprint is live. Shall I start creating test cases for this?** The notification shows the sprint name and start date.

4. Click **Start Generating Tests** to begin. Atto moves the sprint to **In Progress** and begins generating test cases.

[[info | **NOTE**:]]
| Click **Not Now** to skip generation for now. The sprint stays in **To Do** status and appears in the Sprints sidebar with a **Generate Test Cases** link. You can trigger generation manually whenever you are ready.

---

## **What Atto Uses as Context**

Atto automatically pulls context from the sprint stories and their linked artifacts. You do not need to attach anything manually.

Context Atto uses includes:

- Story titles, descriptions, and acceptance criteria from your project management tool
- Confluence pages linked in sprint stories
- Figma designs linked in sprint stories
- PRDs and specification documents linked in sprint stories
- Relevant pull requests linked to sprint stories

[[info | **NOTE**:]]
| Atto can only read artifacts that are either publicly accessible or connected as integrations. If a Confluence page or Figma file is private and the integration is not set up, Atto will not be able to use it as context.

---

## **Generate Test Cases for an Unprocessed Sprint**

If you clicked **Not Now** on a sprint or if Atto missed a sprint notification, you can trigger generation manually.

1. From the left navigation bar, go to **QI Home** and select the **Sprints** tab.

2. In the left sidebar, find the sprint with **To Do** status.

3. Click **Generate Test Cases** next to the sprint name. Atto begins generating test cases using the same process as automatic detection.

---

## **What Happens During Generation**

Atto uses the same generation process as Ad-Hoc. You can watch the progress in the left panel as each step completes. Generation typically takes one to two minutes.

<!-- screenshot: Generation progress log in left panel showing steps completing -->

See [Generate Test Cases](https://testsigma.com/docs/test-management/qi-home/ad-hoc/generate-test-cases/) in the Ad-Hoc section for details on what Atto does during generation and how to read the generation summary.

---

## **After Generation**

When generation completes, the sprint moves to **In Progress** status in the sidebar. The main area shows the sprint detail view with three tabs: **Tests**, **Coverage**, and **Test Plan**.

From here you can:

- Review and accept test cases from the **Tests** tab. See [Review and Accept Test Cases](https://testsigma.com/docs/test-management/qi-home/review-and-accept-test-cases/).
- Add more context or generate additional test cases by clicking **Open Playground**. See [Use Playground](https://testsigma.com/docs/test-management/qi-home/use-playground/).
- Track coverage and gaps from the **Coverage** tab. See [Coverage and Gaps](https://testsigma.com/docs/test-management/qi-home/coverage-and-gaps/).

---
