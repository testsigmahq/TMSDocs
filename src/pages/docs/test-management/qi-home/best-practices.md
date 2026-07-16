---
title: 'Best Practices'
page_title: 'QI Home Best Practices'
metadesc: 'Practical guidance for getting the most accurate test cases, the most useful coverage data, and the most reliable automation from QI Home.'
description: 'Best practices for generating test cases, reviewing, coverage, Agentic Learning, and developer session mapping in QI Home.'
noindex: false
order: 13.51
page_id: 'qi-home-best-practices'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Generating Test Cases'
    url: '#generating-test-cases'
  - type: link
    name: 'Reviewing and Accepting Test Cases'
    url: '#reviewing-and-accepting-test-cases'
  - type: link
    name: 'Coverage and Quality Metrics'
    url: '#coverage-and-quality-metrics'
  - type: link
    name: 'Agentic Learning'
    url: '#agentic-learning'
  - type: link
    name: 'Developer Session Mapping'
    url: '#developer-session-mapping'
---

<br>

**Practical guidance for getting the most accurate test cases, the most useful coverage data, and the most reliable automation from QI Home.**

---

This page collects practical guidance for getting the most accurate test cases, the most useful coverage data, and the most reliable automation from QI Home.

---

## **Generating Test Cases**

**Give Atto specific context, not broad context.** Attaching 50 Jira stories from across a project gives Atto too much to work with and produces generic test cases. Attach only the stories, designs, and documents relevant to what you are testing right now. Smaller, focused context produces better output.

**Name your testing goal in the prompt.** Start your prompt with the feature or user flow you want to test. "Generate test cases for the checkout flow" is more useful than "Generate test cases for the payment module." A specific goal produces test cases with scenario names that match what testers will recognize.

**Use the WHO + WHAT + HOW prompt structure for complex features.** For features with multiple user roles or device types, include that variation in the prompt: "Generate test cases for the login flow for both guest users and registered users, including failed login and account lockout scenarios." Atto generates separate scenario groups for each variation. See [Write Effective Prompts](https://testsigma.com/docs/test-management/qi-home/ad-hoc/write-effective-prompts/) for the full framework.

**Attach Figma designs for UI-heavy features.** When a feature has a specific layout or user interaction pattern, attaching the Figma frames gives Atto visual context that improves the accuracy of UI test cases. Select only the frames relevant to the current feature — not the entire file.

**Use the Playground to fill gaps, not to regenerate everything.** If the initial generation missed some areas, open the Playground and describe what is missing: "Generate edge case test cases for the search results page — specifically no results, typos, and special characters." This adds to your existing session rather than starting over.

---

## **Reviewing and Accepting Test Cases**

**Review by scenario, not by individual test case.** Atto groups test cases by scenario. Read the scenario name and the Impact tags first. If the scenario does not match what you expected, reject all test cases in that scenario and use the Playground to request a more specific generation. Reviewing scenario by scenario is faster than reviewing test case by test case.

**Accept test cases before running test plans.** Test plan coverage and Confidence metrics are based on accepted test cases. Running a test plan before accepting test cases will produce incomplete results. Review and accept first, then run.

**Reject rather than ignore.** Pending test cases count as gaps and reduce your coverage percentage. If a test case is clearly wrong or out of scope, reject it. A rejected test case does not affect coverage. An ignored one does.

---

## **Coverage and Quality Metrics**

**Do not aim for 100% coverage at all times.** 100% coverage means you have accepted every generated test case. Not all generated test cases are necessary for every release. Use the Coverage tab to identify which modules have gaps and decide where to invest review time based on risk, not a percentage target.

**Interpret Release Gate thresholds in context.** The Release Gate thresholds are configurable per project. A "Not Ready" status does not automatically mean the release is blocked — it means the metrics have not reached the configured threshold. Understand what your project's thresholds are before interpreting the gate status. See [Quality Intelligence Metrics](https://testsigma.com/docs/test-management/qi-home/quality-intelligence-metrics/).

**Run at least Smoke before a release.** Even if you have not run Regression, running Smoke validates the most critical paths. Smoke results feed into Pass Rate and Confidence. A green Smoke run with strong coverage is a meaningful signal even when broader plans are not yet complete.

---

## **Agentic Learning**

**Use Cloud for fast setup, Local for restricted applications.** If your application has a publicly accessible URL, Cloud is faster to set up and requires nothing on your machine. Use Local when your application runs on a private network, a local build, or a device connected to your desktop.

**Let Atto complete the full learning session before generating.** If you stop the session early or Atto does not reach all steps, the generated automation may be incomplete. Let the full session run. If Atto gets stuck, provide input through the "Go to Session" prompt rather than ending the session.

**Re-learn after significant application changes.** Automated steps that were generated before a UI or flow change may fail when the application looks different. Use "Re-learn and Automate" to regenerate the steps from the current application state.

---

## **Developer Session Mapping**

**Map sessions promptly.** The longer a GitHub PR or Claude session sits unmapped, the less relevant its context becomes for test generation. Map sessions within the sprint they belong to for the most accurate test case updates.

**Use AI suggestions as a starting point.** Atto's module suggestions are based on the session content. Review them before accepting — a PR that touches multiple modules should be mapped to the most impacted one, not necessarily the first one Atto suggests.

---
