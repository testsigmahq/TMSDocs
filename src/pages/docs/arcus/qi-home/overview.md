---
title: "Overview: QI Home"
page_title: "Overview of QI Home"
metadesc: 'QI Home is where the Generator Agent creates test cases from your requirements, the Coverage Agent tracks gaps, and the Runner Agent builds test plans and automates test execution in Arcus by Testsigma.'
description: 'An overview of QI Home, where the Generator Agent creates test cases, the Coverage Agent tracks coverage, and the Runner Agent builds test plans and automates test execution.'
noindex: false
order: 13.20
page_id: 'qi-home-overview'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Two Ways to Start Test Generation'
    url: '#two-ways-to-start-test-generation'
  - type: link
    name: 'After Test Cases Are Generated'
    url: '#after-test-cases-are-generated'
  - type: link
    name: 'Automation'
    url: '#automation'
  - type: link
    name: 'Developer Context Mapping'
    url: '#developer-context-mapping'
  - type: link
    name: 'Overview: Developer Context Mapping'
    url: 'https://testsigma.com/docs/arcus/qi-home/plugins/overview/'
  - type: link
    name: 'Connect GitHub'
    url: 'https://testsigma.com/docs/arcus/qi-home/plugins/connect-github/'
  - type: link
    name: 'Connect Claude Code'
    url: 'https://testsigma.com/docs/arcus/qi-home/plugins/connect-claude-code/'
  - type: link
    name: 'Connect Cursor'
    url: 'https://testsigma.com/docs/arcus/qi-home/plugins/connect-cursor/'
  - type: link
    name: 'Connect GitHub Copilot'
    url: 'https://testsigma.com/docs/arcus/qi-home/plugins/connect-github-copilot/'
  - type: link
    name: 'Connect Codex'
    url: 'https://testsigma.com/docs/arcus/qi-home/plugins/connect-codex/'
  - type: link
    name: 'Map GitHub Context'
    url: 'https://testsigma.com/docs/arcus/qi-home/plugins/map-github/'
  - type: link
    name: 'Map Developer Context'
    url: 'https://testsigma.com/docs/arcus/qi-home/plugins/map-developer-context/'
  - type: link
    name: "What's in This Section"
    url: '#whats-in-this-section'
  - type: link
    name: 'Getting Help'
    url: '#getting-help'
---

<br>

**QI Home is where you generate test cases, track coverage, and automate with AI.**

---

QI Home is where Arcus's AI agents keep your test suite in sync with what your team builds. The **Generator Agent** creates test cases from your requirements, the **Coverage Agent** tracks coverage against your modules and flags what's changed but untested, including developer activity from connected Claude Code, Cursor, GitHub Copilot, and Codex context and GitHub pull requests, and the **Runner Agent** builds test plans and automates test execution.

You do not write test cases from scratch. You give the Generator Agent the context it needs, and it generates test cases for you. You review what was generated, accept the cases that are accurate, and save them to your library. Coverage, test plans, and quality metrics update as you go.

There are two ways to start: Ad-Hoc, where you attach context manually and trigger generation yourself, and Sprints, where the Generator Agent detects a sprint start and begins generation automatically. Everything after generation works the same for both.

---

## **Two Ways to Start Test Generation**

QI Home gives you two starting points depending on how your team works. The generation trigger is different for each, but the rest of the workflow is identical.

### **Ad-Hoc**

Ad-Hoc lets you generate test cases on demand by attaching your own context sources, without tying them to a sprint. You open a new session, attach context sources, write a prompt, and click Generate. The Generator Agent reads what you have provided and generates test cases mapped to your features.

Context sources you can attach include:

- **Jira, Azure DevOps, Linear, or ClickUp** for user stories and requirements (requires the respective integration to be connected)
- **Confluence** for PRDs and specification documents (requires Confluence integration)
- **Figma** for UI designs and flows (requires Figma integration)
- **Files and Documents** such as PDFs, Word docs, or text files
- **Video Recording** for walkthroughs or recorded user flows

Use Ad-Hoc when:

- You are generating test cases outside a sprint cycle
- You want to control exactly what context the Generator Agent uses
- You are exploring coverage for a new feature, release, or exploratory session

### **Sprints**

Sprints mode generates test coverage automatically at the start of each sprint, pulling context straight from your linked stories. When a sprint starts in your connected project management tool, the Generator Agent detects it and shows a notification. You confirm generation, and it pulls in the context linked to the sprint stories, including Figma designs, Confluence pages, PRDs, and relevant pull requests, and begins generating test cases.

Use Sprints when:

- Your team works in agile sprints
- You want test coverage to start as soon as a sprint kicks off, without manually attaching anything
- You want the Generator Agent to use your Jira, Linear, ClickUp, or Azure DevOps stories as the primary source of truth

---

## **After Test Cases Are Generated**

Whether you use **Ad-Hoc** or **Sprints**, the next steps are the same. You review the test cases the Generator Agent produced, accept the ones that are accurate, and save them to your library. Coverage, test plans, and quality metrics update as you go.

[**Review and Accept Test Cases**](https://testsigma.com/docs/arcus/qi-home/review-and-accept-test-cases/) allows you to browse the generated test cases grouped by scenario, view step-by-step details for each case, and accept or reject them individually or in bulk. Test cases you save go into your library. Test cases you do not accept are tracked as gaps.

[**Coverage and Gaps**](https://testsigma.com/docs/arcus/qi-home/coverage-and-gaps/) shows you the coverage percentage per module, tracked by the Coverage Agent. Coverage is calculated as accepted test cases divided by accepted plus pending test cases, and rejected cases are excluded. Gaps are pending test cases that have not been accepted yet. They are your signal that certain areas of the application are not yet covered.

[**Test Plans**](https://testsigma.com/docs/arcus/qi-home/test-plans/) are generated automatically by the Runner Agent in four types: Smoke, Feature, Regression, and Deep Regression. Each type is a superset of the previous one. Smoke is always included in Feature, Feature in Regression, and Regression in Deep Regression. Plans are ready to run as soon as you have accepted test cases.

[**Quality Intelligence Metrics**](https://testsigma.com/docs/arcus/qi-home/quality-intelligence-metrics/) are five metrics shown in the session header that together tell you how confident you can be in the current build. The metrics are Coverage, Pass Rate, Confidence, Release Readiness, and Release Gate. They update as test cases are accepted and test runs are executed.

---

## **Automation**

Once a test case exists in your library, the Runner Agent can automate it without you writing any code or scripts.

**Agentic Learning** opens a browser, either on Testsigma Lab in the cloud or on your local device, and walks through the test case steps on your live application. The Runner Agent observes how the application behaves at each step, learns the element interactions, and generates automated steps. You review the output and save it to your library. The test case moves from manual to automated in a few minutes.

**Copilot** takes those automated steps and executes them in a browser with a live panel showing each step as it runs. You can pause the execution, add new steps mid-run, switch between manual and automated steps, and save the results when done. Copilot also works without Agentic Learning for running any test case interactively, which is useful for quick sanity checks or exploratory runs.

---

## **Developer Context Mapping**

Developer Context Mapping keeps your test coverage aligned with what your team is actually building.

When your developers work in Claude Code, Cursor, GitHub Copilot, or Codex, or open pull requests in GitHub, the Coverage Agent detects that context and surfaces it in the **Unmapped Context** view in QI Home. Each context entry includes an AI-generated suggestion for which module and sprint it belongs to. You review the suggestion and map it with a few clicks. Once mapped, the Generator Agent creates new test cases or updates existing ones based on the code changes or development activity captured.

See [Overview: Developer Context Mapping](https://testsigma.com/docs/arcus/qi-home/plugins/overview/) for how the Unmapped Context model works, when to use GitHub versus a CLI tool, and what happens when a developer raises a PR for work already captured as CLI context.

---

## **What's in This Section**

**Ad-Hoc**

- [Attach Context Sources](https://testsigma.com/docs/arcus/qi-home/ad-hoc/attach-context-sources/)
- [Write Effective Prompts](https://testsigma.com/docs/arcus/qi-home/ad-hoc/write-effective-prompts/)
- [Generate Test Cases](https://testsigma.com/docs/arcus/qi-home/ad-hoc/generate-test-cases/)

**Sprints**

- [Generate Test Cases](https://testsigma.com/docs/arcus/qi-home/sprints/generate-test-cases/)

**Shared Workflows**

- [Use Playground](https://testsigma.com/docs/arcus/qi-home/use-playground/)
- [Review and Accept Test Cases](https://testsigma.com/docs/arcus/qi-home/review-and-accept-test-cases/)
- [Coverage and Gaps](https://testsigma.com/docs/arcus/qi-home/coverage-and-gaps/)
- [Test Plans](https://testsigma.com/docs/arcus/qi-home/test-plans/)
- [Quality Intelligence Metrics](https://testsigma.com/docs/arcus/qi-home/quality-intelligence-metrics/)

**Automation**

- [Learn Test Case Live (Cloud)](https://testsigma.com/docs/arcus/qi-home/automation/agentic-learning/learn-test-case-live-cloud/)
- [Learn Test Case Live (Local)](https://testsigma.com/docs/arcus/qi-home/automation/agentic-learning/learn-test-case-live-local/)
- [Live Learning Controls](https://testsigma.com/docs/arcus/qi-home/automation/agentic-learning/live-learning-controls/)
- [Run Automated Test Case with Copilot](https://testsigma.com/docs/arcus/qi-home/automation/agentic-learning/run-automated-test-case-with-copilot/)
- [Execute Test Case in Cloud](https://testsigma.com/docs/arcus/qi-home/automation/copilot/execute-test-case-in-cloud/)
- [Execute Test Case in Local](https://testsigma.com/docs/arcus/qi-home/automation/copilot/execute-test-case-in-local/)
- [Execution Controls in Copilot](https://testsigma.com/docs/arcus/qi-home/automation/copilot/execution-controls-in-copilot/)

**Developer Context Mapping**

- [Overview](https://testsigma.com/docs/arcus/qi-home/plugins/overview/)
- [Connect GitHub](https://testsigma.com/docs/arcus/qi-home/plugins/connect-github/)
- [Connect Claude Code](https://testsigma.com/docs/arcus/qi-home/plugins/connect-claude-code/)
- [Connect Cursor](https://testsigma.com/docs/arcus/qi-home/plugins/connect-cursor/)
- [Connect GitHub Copilot](https://testsigma.com/docs/arcus/qi-home/plugins/connect-github-copilot/)
- [Connect Codex](https://testsigma.com/docs/arcus/qi-home/plugins/connect-codex/)
- [Map GitHub Context](https://testsigma.com/docs/arcus/qi-home/plugins/map-github/)
- [Map Developer Context](https://testsigma.com/docs/arcus/qi-home/plugins/map-developer-context/)

**Others**

- Best Practices
- [FAQs](https://testsigma.com/docs/arcus/qi-home/faqs/)

[[info | **NOTE**:]]
| QI Home requires an active project in Arcus by Testsigma. To attach context from Jira, Azure DevOps, Linear, ClickUp, Confluence, or Figma in Ad-Hoc, you need the respective integration connected to your project. Files, documents, and video recordings can be attached without any external integration. For Sprints, connect your project to a supported project management tool. For Developer Context Mapping, connect your Claude or GitHub account.

---

## **Getting Help**

For questions or support, reach out to the Testsigma team at **support@testsigma.com**.

---
