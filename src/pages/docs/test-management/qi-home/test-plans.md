---
title: 'Test Plans'
page_title: 'Test Plans'
metadesc: 'Atto automatically generates four nested test plan types for every sprint and Ad-Hoc session: Smoke, Feature, Regression, and Deep Regression. Learn how to review and run them.'
description: 'Learn how Atto auto-generates the four test plan types, and how to review, accept, and link them.'
noindex: false
order: 13.28
page_id: 'qi-home-test-plans'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'The Four Plan Types'
    url: '#the-four-plan-types'
  - type: link
    name: 'Open the Test Plan Tab'
    url: '#open-the-test-plan-tab'
  - type: link
    name: 'Review a Test Plan'
    url: '#review-a-test-plan'
  - type: link
    name: 'Accept or Reject Test Plans'
    url: '#accept-or-reject-test-plans'
  - type: link
    name: 'Link an Automated Test Plan'
    url: '#link-an-automated-test-plan'
  - type: link
    name: 'Understand Test Runs'
    url: '#understand-test-runs'
---

<br>

**Atto automatically generates test plans for every sprint and Ad-Hoc session. Review them, understand their scope, and run them when you are ready.**

---

Atto generates four types of test plans as soon as test cases exist in your session. You do not create or configure them manually. Each plan type covers a different scope of your test cases, and they are always generated as a nested set, meaning the narrowest plan is always a subset of the next broader one.

---

> ## **Prerequisites**
>
> Before you begin, ensure that:
> - Test cases have been generated and accepted for the session. See [Review and Accept Test Cases](https://testsigma.com/docs/test-management/qi-home/review-and-accept-test-cases/).
> - You are viewing a sprint or Ad-Hoc session in QI Home.

---

## **The Four Plan Types**

Atto generates these four test plan types automatically. Each is a superset of the one before it.

| Plan Type | Scope |
| :--- | :--- |
| **Smoke** | The smallest set of test cases covering critical user paths. Runs fast. |
| **Feature** | All Smoke test cases, plus test cases covering individual feature behaviors. |
| **Regression** | All Feature test cases, plus test cases covering integration points and edge cases. |
| **Deep Regression** | All Regression test cases, plus extended and non-functional test cases. |

Smoke is always included in Feature, Feature in Regression, and Regression in Deep Regression. Running Deep Regression validates everything that Smoke, Feature, and Regression would have covered.

[[info | **NOTE**:]]
| The topmost plan type that Atto generates defines the scope used to calculate the Confidence metric. The topmost plan type you actually execute provides the pass rate results. If Atto generates all four types but you only run Smoke, Confidence reflects that the narrowest coverage was validated. See [Quality Intelligence Metrics](https://testsigma.com/docs/test-management/qi-home/quality-intelligence-metrics/).

---

## **Open the Test Plan Tab**

1. From the left navigation bar, go to **QI Home**.

2. Select a **Sprint** or **Ad-Hoc** session from the sidebar.

3. Click the **Test Plan** tab.

---

## **Review a Test Plan**

1. Select a **Sprint** or **Ad-Hoc** session from the sidebar.

2. Click the **Test Plan** tab.

3. Click a plan type tab — **Smoke**, **Feature**, **Regression**, or **Deep Regression** — to open that plan. The plan header shows:

   - The plan name
   - An **Auto Generated Plan** badge
   - A one-line description of what the plan covers
   - The current plan status: **Plan Accepted** or pending review
   - The total test case count and a pass/fail progress bar

4. Review the test case breakdown below the progress bar:

   - **Passed**: test cases that have passed in the latest run
   - **Failed**: test cases that failed
   - **Others**: test cases with a status other than passed or failed

---

## **Machine Configuration Detection**

Atto detects the application type from your test cases and suggests a machine configuration for each test plan. The detected types include Web, Android, and iOS.

[[info | **NOTE**:]]
| Machine configuration detection uses the test case steps and context to determine the application type. If your session includes test cases for multiple application types, Atto may suggest separate configurations for each plan.

---

## **Accept or Reject Test Plans**

Accepting is a single global action. Clicking Accept Plan accepts all four plans at once — Smoke, Feature, Regression, and Deep Regression. You cannot accept individual plan types separately.

When you accept, Atto creates the following in your project:

- All four test plans under Plans, each named **[Sprint Name] | [Plan Type] Testing** (for example, **Sprint 2 — Hotel Discovery | Smoke Testing**), with an auto-generated description summarizing the feature areas and scenario count.
- A set of test runs under each plan, one run per feature area or module (for example, **Sprint 2 — Hotel Discovery | Smoke Testing | Amenities, Category Filter, Navigation**, and so on).
- All test runs also appear in the global **Test Runs** list, where they can be filtered, assigned, and tracked across all plan types.

Each plan detail page shows the total test case count, overall progress percentage, a status breakdown (Untested, Passed, Failed, Blocked, Retest, Skipped, In Progress), the test plan schedule, and notification settings.

To accept the test plans:

1. In the session, click the **Test Plan** tab.

2. Review the plans across the four tabs — **Smoke**, **Feature**, **Regression**, and **Deep Regression**.

3. Click **Accept Plan**.

4. Atto creates all four plans and their test runs in your project.

5. To reject the test plans, click **Reject**.

---

## **Link an Automated Test Plan**

After accepting the test plans, you can link each plan type to an existing test plan in Testsigma. Linking connects the Atto-generated plan to your automation setup so that automated run results flow back into Atto.

[[info | **NOTE**:]]
| Linking is done per plan type. You can link the Smoke plan to a Testsigma smoke plan, the Feature plan to a feature plan, and so on.

1. In the session, click the **Test Plan** tab and open the plan type tab you want to link.

2. In the plan header, click **Link plan** next to **Automated Test Plan**. The **Link Testsigma Automated Test Plan** modal opens.

3. Select the following:

   - **Project**: The Testsigma project to link to
   - **Application**: The application under that project
   - **Version**: The application version
   - **Test Plan**: The existing Testsigma test plan to link

4. Click **Link**. Once linked, the Grid test plan shows the Arcus plan reference under Test Management Tool in its Test Plan Details panel.

---

## **Understand Test Runs**

Each test run represents a set of test cases grouped by feature area or module within a plan. When you accept the test plans, Atto creates one test run per feature area across all four plan types. These runs appear both inside their respective plan and in the global Test Runs list.

Each run in the plan shows the run ID, name, number of tests, scheduled date range, and an overall progress bar.

Each run tracks six test case statuses:

| Status | Meaning |
| :--- | :--- |
| **Untested** | Test case has not been executed yet |
| **Passed** | Test case executed and passed |
| **Failed** | Test case executed and failed |
| **Blocked** | Test case cannot be executed due to a dependency or blocker |
| **Retest** | Test case requires re-execution |
| **Skipped** | Test case was intentionally skipped |
| **In Progress** | Test case execution is ongoing |

Use the **Active Runs** and **Closed Runs** tabs to switch between ongoing and completed runs. Use the filter bar (Created at, Assignee, Label, Test Machine, Test Plan) to narrow the runs list.

---
