---
title: "Overview: QI Home"
page_title: "Overview of QI Home"
metadesc: 'QI Home is where Atto generates test cases from your requirements, tracks coverage, builds test plans, and automates test execution in Test Management by Testsigma.'
description: 'An overview of QI Home, where Atto generates test cases, tracks coverage, builds test plans, and automates test execution.'
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
    name: 'Developer Session Mapping'
    url: '#developer-session-mapping'
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

QI Home is where Atto, the AI feature in Test Management by Testsigma, generates test cases from your requirements, tracks coverage against your modules, builds test plans, and automates test execution. It also detects developer activity from connected Claude sessions and GitHub pull requests, so your test coverage stays current with what your team is building.

You do not write test cases from scratch. You give Atto the context it needs, and it generates test cases for you. You review what was generated, accept the cases that are accurate, and save them to your library. Coverage, test plans, and quality metrics update as you go.

There are two ways to start: Ad-Hoc, where you attach context manually and trigger generation yourself, and Sprints, where Atto detects a sprint start and begins generation automatically. Everything after generation works the same for both.

---

## **Two Ways to Start Test Generation**

QI Home gives you two starting points depending on how your team works. The generation trigger is different for each, but the rest of the workflow is identical.

### **Ad-Hoc**

Ad-Hoc lets you generate test cases on demand by attaching your own context sources, without tying them to a sprint. You open a new session, attach context sources, write a prompt, and click Generate. Atto reads what you have provided and generates test cases mapped to your features.

Context sources you can attach include:

- **Jira, Azure DevOps, Linear, or ClickUp** for user stories and requirements (requires the respective integration to be connected)
- **Confluence** for PRDs and specification documents (requires Confluence integration)
- **Figma** for UI designs and flows (requires Figma integration)
- **Files and Documents** such as PDFs, Word docs, or text files
- **Video Recording** for walkthroughs or recorded user flows

Use Ad-Hoc when:

- You are generating test cases outside a sprint cycle
- You want to control exactly what context Atto uses
- You are exploring coverage for a new feature, release, or exploratory session

### **Sprints**

Sprints mode generates test coverage automatically at the start of each sprint, pulling context straight from your linked stories. When a sprint starts in your connected project management tool, Atto detects it and shows a notification. You confirm generation, and Atto pulls in the context linked to the sprint stories, including Figma designs, Confluence pages, PRDs, and relevant pull requests, and begins generating test cases.

Use Sprints when:

- Your team works in agile sprints
- You want test coverage to start as soon as a sprint kicks off, without manually attaching anything
- You want Atto to use your Jira, Linear, ClickUp, or Azure DevOps stories as the primary source of truth

---

## **After Test Cases Are Generated**

Whether you use **Ad-Hoc** or **Sprints**, the next steps are the same. You review the test cases Atto generated, accept the ones that are accurate, and save them to your library. Coverage, test plans, and quality metrics update as you go.

**Review and Accept Test Cases** allows you to browse the generated test cases grouped by scenario, view step-by-step details for each case, and accept or reject them individually or in bulk. Test cases you save go into your library. Test cases you do not accept are tracked as gaps.

**Coverage and Gaps** shows you the coverage percentage per module. Coverage is calculated as accepted test cases divided by accepted plus pending test cases, and rejected cases are excluded. Gaps are pending test cases that have not been accepted yet. They are your signal that certain areas of the application are not yet covered.

**Test Plans** are generated automatically by Atto in four types: Smoke, Feature, Regression, and Deep Regression. Each type is a superset of the previous one. Smoke is always included in Feature, Feature in Regression, and Regression in Deep Regression. Plans are ready to run as soon as you have accepted test cases.

**Quality Intelligence Metrics** are five metrics shown in the session header that together tell you how confident you can be in the current build. The metrics are Coverage, Pass Rate, Confidence, Release Readiness, and Release Gate. They update as test cases are accepted and test runs are executed.

---

## **Automation**

Once a test case exists in your library, Atto can automate it without you writing any code or scripts.

**Agentic Learning** opens a browser, either on Testsigma Lab in the cloud or on your local device, and walks through the test case steps on your live application. Atto observes how the application behaves at each step, learns the element interactions, and generates automated steps. You review the output and save it to your library. The test case moves from manual to automated in a few minutes.

**Copilot** takes those automated steps and executes them in a browser with a live panel showing each step as it runs. You can pause the execution, add new steps mid-run, switch between manual and automated steps, and save the results when done. Copilot also works without Agentic Learning for running any test case interactively, which is useful for quick sanity checks or exploratory runs.

---

## **Developer Session Mapping**

Developer Session Mapping keeps your test coverage aligned with what your team is actually building.

When your developers work in Claude or open pull requests in GitHub, Atto detects those sessions and surfaces them in the Unmapped Sessions view in QI Home. Each session includes a suggestion for which module and sprint it belongs to. You review the suggestion and map the session with a few clicks.

Claude session detection is central to this flow. When a developer works in Claude, Atto captures the context from that session, including prompts and code changes. Once a session is mapped, Atto triggers test generation for that sprint. Based on the changes captured in the session (such as new code or a merged PR), Atto generates new test cases or updates existing ones. This keeps your test coverage in sync with what your developers are building without requiring anyone to create that link manually.

---

## **What's in This Section**

**Ad-Hoc**

- Attach Context Sources
- Write Effective Prompts
- Generate Test Cases

**Sprints**

- Generate Test Cases

**Shared Workflows**

- Use Playground
- Review and Accept Test Cases
- Coverage and Gaps
- Test Plans
- Quality Intelligence Metrics

**Automation**

- Learn Test Case Live (Cloud)
- Learn Test Case Live (Local)
- Live Learning Controls
- Run Automated Test Case with Copilot
- Execute Test Case in Cloud
- Execute Test Case in Local
- Execution Controls in Copilot

**Developer Session Mapping**

- GitHub
- Claude

**Others**

- Best Practices
- FAQs

[[info | **NOTE**:]]
| QI Home requires an active project in Test Management by Testsigma. To attach context from Jira, Azure DevOps, Linear, ClickUp, Confluence, or Figma in Ad-Hoc, you need the respective integration connected to your project. Files, documents, and video recordings can be attached without any external integration. For Sprints, connect your project to a supported project management tool. For Developer Session Mapping, connect your Claude or GitHub account.

---

## **Getting Help**

For questions or support, reach out to the Testsigma team at **support@testsigma.com**.

---
