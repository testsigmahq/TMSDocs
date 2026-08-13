---
title: 'Generate Test Cases'
page_title: 'Generate Test Cases (Ad-Hoc)'
metadesc: 'Write your prompt, click Generate with AI, and the Generator Agent builds your test cases. Learn how to trigger Ad-Hoc generation and read the generation summary.'
description: 'Learn how to trigger test case generation in Ad-Hoc and what the Generator Agent does during the process.'
noindex: false
order: 13.23
page_id: 'qi-home-ad-hoc-generate-test-cases'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Trigger Generation'
    url: '#trigger-generation'
  - type: link
    name: 'What Happens During Generation'
    url: '#what-happens-during-generation'
  - type: link
    name: 'Review the Generation Summary'
    url: '#review-the-generation-summary'
  - type: link
    name: 'After Generation'
    url: '#after-generation'
---

<br>

**Write your prompt, click Generate with AI, and the Generator Agent builds your test cases.**

---

This article covers how to trigger test case generation in Ad-Hoc and what the Generator Agent does during the process. Before generating, make sure you have attached your context sources and written your prompt. See [Attach Context Sources](https://testsigma.com/docs/arcus/qi-home/ad-hoc/attach-context-sources/) and [Write Effective Prompts](https://testsigma.com/docs/arcus/qi-home/ad-hoc/write-effective-prompts/).

---

> ## **Prerequisites**
>
> Before you begin, ensure that:
> - The Playground is open from **QI Home > Adhoc**. See [Attach Context Sources](https://testsigma.com/docs/arcus/qi-home/ad-hoc/attach-context-sources/) and [Write Effective Prompts](https://testsigma.com/docs/arcus/qi-home/ad-hoc/write-effective-prompts/) if you have not done this yet.
> - You have attached at least one context source and written your prompt.

---

## **Trigger Generation**

1. From the left navigation bar, go to **QI Home**.

2. The **Adhoc** tab opens by default. Click **Generate with Atto**.

3. In the **Playground**, attach your context sources and write your prompt.

4. Click **Generate with AI**.

The Generator Agent begins generating test cases. The generation log appears in the left panel, showing each step as it progresses.

---

## **What Happens During Generation**

After you click **Generate with AI**, the Generator Agent begins building your test cases. You can watch the progress in the left panel as each step completes. Generation typically takes 5–10 minutes depending on the amount of context attached.

<!-- screenshot: Left panel showing generation progress with steps marked complete -->

[[info | **NOTE**:]]
| The Generator Agent searches your existing test library during generation to avoid duplicating coverage you already have. If you want faster generation without this check, you can disable it in the Playground.

---

## **Review the Generation Summary**

When generation completes, the left panel shows a summary of what the Generator Agent produced.

<!-- screenshot: Generation summary showing test type breakdown and scenario-to-story table -->

The summary includes:

- **Test type breakdown**: The number of test cases by type: Functional, Non-Functional, User Experience, and Integration.
- **Scenarios with full test cases**: A table listing each scenario, its mapped story, and the number of test cases generated.
- **Reusable Step Groups proposed**: Step groups the Generator Agent identified from your test library that apply to the generated scenarios.
- **Remaining Scenario Outlines**: Scenarios that have been created as stubs but not yet fully filled. These are organized by area (for example, Search, Filters, Checkout). You can fill them later using the Playground.

[[info | **NOTE**:]]
| Remaining Scenario Outlines are not test cases yet. They are placeholders that flag areas needing coverage. See [Use Playground](https://testsigma.com/docs/arcus/qi-home/use-playground/) to generate full test cases from them.

---

## **After Generation**

Once generation completes, QI Home updates to show your new Ad-Hoc session in the left sidebar with the session title, total test case count, and In Progress status.

The main area switches to the session detail view with three tabs: **Tests**, **Coverage**, and **Test Plan**.

From here you can:

- Review and accept test cases from the **Tests** tab. See [Review and Accept Test Cases](https://testsigma.com/docs/arcus/qi-home/review-and-accept-test-cases/).
- Add more context or generate additional test cases by clicking **Open Playground**. See [Use Playground](https://testsigma.com/docs/arcus/qi-home/use-playground/).
- Track coverage and gaps from the **Coverage** tab. See [Coverage and Gaps](https://testsigma.com/docs/arcus/qi-home/coverage-and-gaps/).

---
