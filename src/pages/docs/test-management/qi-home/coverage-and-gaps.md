---
title: 'Coverage and Gaps'
page_title: 'Coverage and Gaps'
metadesc: 'Track how much of your feature is covered by accepted test cases and where the gaps are. Learn how Atto calculates coverage at the session and module level.'
description: 'Learn how coverage is calculated and how to review gaps by module in QI Home.'
noindex: false
order: 13.27
page_id: 'qi-home-coverage-and-gaps'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'How Coverage Is Calculated'
    url: '#how-coverage-is-calculated'
  - type: link
    name: 'View Coverage and Gaps'
    url: '#view-coverage-and-gaps'
  - type: link
    name: 'Understand the Coverage Tab'
    url: '#understand-the-coverage-tab'
  - type: link
    name: 'Review Gaps by Module'
    url: '#review-gaps-by-module'
  - type: link
    name: 'Coverage in the Session Header'
    url: '#coverage-in-the-session-header'
---

<br>

**Track how much of your feature is covered by accepted test cases and where the gaps are.**

---

Coverage tells you what percentage of your generated test cases have been accepted. Gaps are the test cases that have not been accepted yet. The more test cases you accept, the higher your coverage. Both coverage and gaps update in real time as you review test cases.

---

## **How Coverage Is Calculated**

Coverage is calculated using this formula:

**Coverage = Accepted ÷ (Accepted + Pending) × 100**

For example, if Atto generated 10 test cases and you have accepted 3, your coverage is 30%. The remaining 7 test cases are gaps.

Coverage appears at two levels:

- **Session level**: The overall coverage percentage for the full sprint or Ad-Hoc session, shown in the header next to the module count.
- **Module level**: Coverage per module, visible in the **Coverage** tab.

---

## **View Coverage and Gaps**

1. From the left navigation, go to **QI Home**.

2. Select a **Sprint** or **Ad-Hoc** session from the sidebar.

3. Click the **Coverage** tab.

---

## **Understand the Coverage Tab**

The Coverage tab shows test cases grouped by module. Each module row shows:

- **Module name**: The feature area the test cases belong to.
- **Coverage percentage**: How much of this module is covered by accepted test cases.
- **Test case count**: Total test cases generated for this module.
- **Gap count**: Test cases not yet accepted.

---

## **Review Gaps by Module**

1. Click a module name to expand it and see the individual gap items.

   Each gap shows:

   - **Test case title**: What the gap covers.
   - **Story ID**: The Jira story this test case maps to.
   - **Test type**: Functional, Non-Functional, User Experience, or Integration.
   - **Status**: Pending (not yet accepted or rejected).

2. Click a gap to open the test case detail view. From there you can accept or reject it.

[[info | **NOTE**:]]
| Gaps are not failed tests. They are pending test cases that Atto generated but you have not reviewed yet. Accepting a gap removes it from the gaps list and increases your coverage percentage.

---

## **Coverage in the Session Header**

The session header always shows your current coverage at a glance.

- **Before any test cases are accepted**: Coverage shows 0%, with the total module count.
- **As you accept test cases**: Coverage updates in real time.
- **Pass Rate, Confidence, and Release Readiness**: These show "Awaiting execution" until test runs are executed.
- **Release Gate**: Shows "**Not Ready**" until the configured thresholds are met.

For details on all five metrics, see [Quality Intelligence Metrics](https://testsigma.com/docs/test-management/qi-home/quality-intelligence-metrics/).

To generate test cases for modules with gaps, open the Playground from the session header. See [Use Playground](https://testsigma.com/docs/test-management/qi-home/use-playground/).

---
