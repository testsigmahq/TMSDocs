---
title: 'Use Playground'
page_title: 'Use Playground'
metadesc: 'Open the Playground to add context, generate more test cases, and refine what Atto produced for any sprint or Ad-Hoc session.'
description: 'Learn how to use the Playground to add context, generate more test cases, and refine Atto output.'
noindex: false
order: 13.25
page_id: 'qi-home-use-playground'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Open the Playground'
    url: '#open-the-playground'
  - type: link
    name: 'Add More Context'
    url: '#add-more-context'
  - type: link
    name: 'Generate More Test Cases'
    url: '#generate-more-test-cases'
  - type: link
    name: 'Review Test Cases from the Playground'
    url: '#review-test-cases-from-the-playground'
---

<br>

**Open the Playground to add context, generate more test cases, and refine what Atto produced.**

---

The Playground is the interactive workspace where you work with Atto after the initial test case generation. Use it to add context you missed the first time, describe specific flows you want Atto to cover, fill scenario outlines that are still empty, or trigger an additional round of generation for the same sprint or session.

The Playground is available from any sprint or Ad-Hoc session detail view after generation completes.

---

> ## **Prerequisites**
>
> Before you begin, ensure that:
> - You have at least one sprint or Ad-Hoc session with generated test cases.

---

## **Open the Playground**

1. From the left navigation bar, go to **QI Home**.

2. Select a Sprint or Ad-Hoc session from the sidebar.

3. Click **Open Playground** in the top right of the session detail view.

The Playground opens. The left panel shows the generation log from the most recent generation run. The right panel shows the test cases for the current session, filterable by status.

---

## **Add More Context**

If the initial generation missed something or you have new artifacts to share, add them before triggering another round.

1. In the **Add Context** bar at the bottom of the prompt input, click the source you want to add — **Jira**, **Azure DevOps**, **Linear**, **ClickUp**, **Confluence**, or **+** for **Figma**, **Files**, and **Video**.

2. Select the items and click **Save**.

For details on each source type, see [Attach Context Sources](https://testsigma.com/docs/test-management/qi-home/ad-hoc/attach-context-sources/).

---

## **Generate More Test Cases**

1. Follow the same steps mentioned in the above section, and in the prompt input area, describe the feature or flow you want Atto to cover.

2. Click **Generate with AI**. Atto generates additional test cases and adds them to the current session.

---

## **Review Test Cases from the Playground**

The right panel shows all test cases for the current session. Use the filter tabs to view by status:

- **All Test Cases**: Every generated test case
- **Pending**: Test cases not yet reviewed
- **Accepted**: Test cases saved to your library
- **Rejected**: Test cases dismissed

Select individual test cases, then accept or reject them directly from the Playground.

For the full review workflow, including saving test cases to your library, see [Review and Accept Test Cases](https://testsigma.com/docs/test-management/qi-home/review-and-accept-test-cases/).

---
