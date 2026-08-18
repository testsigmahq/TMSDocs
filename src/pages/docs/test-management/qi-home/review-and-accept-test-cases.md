---
title: 'Review and Accept Test Cases'
page_title: 'Review and Accept Test Cases'
metadesc: 'Review the test cases Atto generated, accept the ones that look right, and save them to your library. Learn the review workflow for sprints and Ad-Hoc sessions.'
description: 'Learn how to review, accept or reject, and save Atto-generated test cases to your library.'
noindex: false
order: 13.26
page_id: 'qi-home-review-and-accept-test-cases'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Open the Tests Tab'
    url: '#open-the-tests-tab'
  - type: link
    name: 'Browse Test Cases by Scenario'
    url: '#browse-test-cases-by-scenario'
  - type: link
    name: 'Review an Individual Test Case'
    url: '#review-an-individual-test-case'
  - type: link
    name: 'Accept or Reject Test Cases in Bulk'
    url: '#accept-or-reject-test-cases-in-bulk'
  - type: link
    name: 'Save Test Cases to Your Library'
    url: '#save-test-cases-to-your-library'
---

<br>

**Review the test cases Atto generated, accept the ones that look right, and save them to your library.**

---

After generation completes, Atto's test cases are in **Pending** status. They are not part of your library yet. Your job is to review them, accept the ones that are accurate and relevant, and save them. Test cases that are not accepted remain as gaps and count against your coverage.

The review experience is the same whether you generated test cases from a sprint or an Ad-Hoc session.

---

> ## **Prerequisites**
>
> Before you begin, ensure that:
> - You have at least one sprint or Ad-Hoc session with generated test cases.

---

## **Open the Tests Tab**

1. From the left navigation, go to **QI Home**.

2. Select an **Ad-Hoc** session or **Sprint** from the sidebar.

3. The session detail view opens with the **Tests** tab active by default.

The header shows the session title, total test case count, and a status bar with **Accepted**, **Pending**, and **Rejected** counts. The five Quality Intelligence Metrics are shown alongside the status bar.

---

## **Browse Test Cases by Scenario**

Test cases are grouped by scenario. Each scenario maps to a feature area or Jira story.

1. Click the arrow next to a scenario name to expand it.

Each expanded scenario shows:

- **Impact**: The modules this scenario affects, shown as tags (for example, Product Search, Payment Gateway).
- **Test cases list**: Individual test cases with their priority, name, module tag, type, and status.

---

## **Review an Individual Test Case**

1. Click a test case name to open the test case detail view.

   The detail view shows:

   - **Title and tags**: Name, module, test type (Functional, Non-Functional, User Experience, Integration), and status.
   - **Description**: What the test case verifies.
   - **Preconditions**: What must be true before the test runs.
   - **Steps and expected results**: The numbered test steps and what each step should produce.

2. Review the test case. If it looks right, click **Save to Library** at the bottom. If not, click **Reject**.

---

## **Accept or Reject Test Cases in Bulk**

1. Select the checkbox next to each test case you want to act on.

   A bottom action bar appears showing the number of selected test cases and three options: **Select All**, **Reject**, and **Save to Library**.

2. Click **Select All** to select all test cases in the current view.

3. Click **Save to Library** to accept the selected test cases. The folder selection dialog opens.

4. Click **Reject** to dismiss the selected test cases.

---

## **Save Test Cases to Your Library**

When you save a test case, you select the folder where it will be stored.

1. Click **Save to Library** on an individual test case or on the bulk action bar.

2. In the **Save to Library** dialog, browse the folder hierarchy and select the folder you want.

3. Click **Save**. The test cases are saved and their status changes from **Pending** to **Accepted**.

[[info | **NOTE**:]]
| Atto suggests a folder based on the feature taxonomy of your project. You can accept the suggestion or choose a different folder.

---

## **What Happens to Rejected and Unreviewed Test Cases**

- **Rejected** test cases are dismissed and do not count toward coverage.
- **Pending** test cases (not yet reviewed) are treated as gaps. They count against your coverage percentage until they are accepted or rejected.

Your coverage percentage updates in real time as you accept test cases. See [Coverage and Gaps](https://testsigma.com/docs/test-management/qi-home/coverage-and-gaps/) for how coverage is calculated.

---
