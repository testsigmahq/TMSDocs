---
title: 'Connect Claude Code'
page_title: 'Connect Claude Code'
metadesc: 'How to install and connect the Arcus plugin for Claude Code so your coding context is captured and sent to QI Home for test generation.'
description: 'How to install and connect the Arcus plugin for Claude Code so your coding context is captured and sent to QI Home for test generation.'
noindex: false
order: 13.42
page_id: 'qi-home-connect-claude-code'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Overview'
    url: '#overview'
  - type: link
    name: 'Why Arcus'
    url: '#why-arcus'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Install the Plugin'
    url: '#install-the-plugin'
  - type: link
    name: 'Log In and Connect Your Project'
    url: '#log-in-and-connect-your-project'
  - type: link
    name: 'How the Quality Intelligence Loop Works'
    url: '#how-the-quality-intelligence-loop-works'
  - type: link
    name: 'Map Your Context to a Sprint'
    url: '#map-your-context-to-a-sprint'
  - type: link
    name: 'Push Your Context'
    url: '#push-your-context'
  - type: link
    name: "Who It's For"
    url: '#who-its-for'
  - type: link
    name: 'Commands Reference'
    url: '#commands-reference'
  - type: link
    name: 'If You Also Use GitHub'
    url: '#if-you-also-use-github'
---

**Install the Arcus plugin for Claude Code so that your coding context is captured and sent to QI Home for test generation.**

The plugin hooks into each stage of a Claude Code session and captures it as structured events: your prompts, the tools Claude runs, the files it reads and writes, and subagent boundaries. When you are done, you push the captured context to QI Home with a single command. QA maps the context to the right sprint, and the Generator Agent creates test cases from your development activity.

---

## **Overview**

At a glance, Arcus:

* **Generates test cases from what you actually built**, with no manual authoring.
* **Finds the gaps** between what changed and what's tested, with a reason for each.
* **Plans and runs** those tests across Smoke, Feature, Regression, and Deep Regression suites.
* **Decides with a single Release Readiness score** and a GO / CONDITIONAL GO / NO-GO verdict.

---

## **Why Arcus**

AI coding agents have made it trivial to ship large changes fast. The bottleneck has moved: it's no longer writing the code, it's trusting it. Teams using Claude Code routinely merge features, refactors, and fixes faster than their QA process can keep up, and the gap between "the code is written" and "we know it works" keeps widening.

The traditional answer, writing tests by hand after the fact, is slow, always behind, and never tells you with confidence how much of what you just built is actually covered.

Arcus closes that gap by treating your Claude Code session as the source of truth for what changed. It captures the session automatically, turns it into tests you review rather than write, keeps a live map of what's covered, and rolls everything up into an evidence-backed release signal.

---

> ## **Prerequisites**
> 
> Before you begin, ensure that:
> * Claude Code (latest version recommended) is installed.
> * Python 3.9 or later is available on your PATH as python3. The plugin's lifecycle hooks are Python scripts. Python is installed by default on macOS and Linux.
> * Git is configured in your local environment.
> * You have an active project in Arcus by Testsigma.

[[info | **NOTE**:]]
| There is nothing to build. The plugin installs directly from the Claude Code plugin marketplace.

---

## **Install the Plugin**

1. In your terminal, run the following commands to add and install the Arcus plugin:

```
claude plugin marketplace add testsigmahq/arcus-claude-plugin
claude plugin install arcus@testsigma
```

---

## **Log In and Connect Your Project**

1. In Claude Code, run **/arcus:login**.

2. Complete the login flow in the browser. Return to Claude Code when prompted.

3. Run **/arcus:project &lt;project-id&gt;** to connect the plugin to your Arcus project. Replace **&lt;project-id&gt;** with your project ID from **Arcus > Settings > Project**. To see your available projects, run **/arcus:project** without an argument.

4. Start coding. The plugin begins capturing your context in the background.

[[info | **NOTE**:]]
| No data is sent to Arcus until you run **/arcus:push**. Logging in and setting your project does not start any upload.

---

## **How the Quality Intelligence Loop Works**

Once you push a session, Arcus runs that context through the Quality Intelligence loop: a continuous cycle that keeps your tests and your release signal in sync with the code.

**1. Generate**

The **Generator Agent** reads the captured session, code changes, the prompts you gave Claude, the tools it ran, and drafts test cases for the behavior you actually built. You review each one and accept, edit, or reject it; accepted cases join your test suite. Nothing is auto-merged behind your back.

**2. Find gaps**

The **Coverage Agent** answers the question manual QA can never keep up with: what did we change that we haven't tested yet? It re-runs whenever context changes, a new Claude Code session or a pull request, or whenever you accept a case, and surfaces untested areas with a reason for each gap.

**3. Plan and execute**

Accepted cases roll up into auto-generated test plans, nested by scope:

| Plan | Scope |
|------|-------|
| Smoke | Critical-path sanity checks, fast feedback |
| Feature | Cases tied to the current feature or session |
| Regression | Existing behavior that shouldn't have broken |
| Deep Regression | Broad, exhaustive run across the product |

The **Runner Agent** executes these plans, automated runs against your configured machines and environments, or manual runs for cases that still need a human. See [Test Plans](https://testsigma.com/docs/arcus/qi-home/test-plans/) for how the nested plan hierarchy works.

**4. Measure and decide**

Execution results feed the Quality Intelligence metrics, which build on each other up to a single verdict:

| Metric | Question It Answers |
|--------|----------------------|
| Coverage | Of what should be tested, how much is approved and tested? |
| Pass Rate | Of the tests that ran, how many passed? |
| Confidence | How trustworthy are the results? |
| Release Readiness | On a 0 to 100 scale, how shippable is this sprint? |
| Release Gate | The verdict: GO / CONDITIONAL GO / NO-GO |

See [Quality Intelligence Metrics](https://testsigma.com/docs/arcus/qi-home/quality-intelligence-metrics/) for the full formulas and thresholds behind each metric.

---

## **Map Your Context to a Sprint**

Run **/arcus:map &lt;ticket-key&gt;** at any point before pushing to link your context to a sprint story. Replace **&lt;ticket-key&gt;** with the Jira ticket ID for the work you are doing.

```
/arcus:map PROJ-123
```

Running **/arcus:map** before pushing means your context arrives in QI Home already mapped to the correct sprint, and the test cases generated from it trace back to that ticket. QA does not need to route it manually from Unmapped Context.

[[info | **NOTE**:]]
| You can push without mapping. The context lands in Unmapped Context and waits there with its generated tests until you resolve it, either to a sprint or to an Ad-Hoc session. See [Map Developer Context](https://testsigma.com/docs/arcus/qi-home/plugins/map-developer-context/).

---

## **Push Your Context**

1. When you are done, run **/arcus:push** to upload the captured context to QI Home.

The context appears in QI Home under **Unmapped Context** (if you did not run **/arcus:map**) or under the mapped sprint (if you did).

---

## **Who It's For**

* **Developers** shipping with Claude Code who want their changes tested without breaking flow to write tests by hand.
* **QA and test engineers** who want generated cases to review and refine, plus a coverage map that updates itself instead of a stale spreadsheet.
* **Engineering leads and release managers** who need an objective, evidence-backed answer to "is this sprint safe to ship?" rather than a status-meeting guess.

---

## **Commands Reference**

| Command | What it does |
|---------|-------------|
| /arcus:help | Lists every Arcus command with a short explanation of what it does and how to use it |
| /arcus:login | Signs you in to Arcus so it can capture your sessions and use them for test generation |
| /arcus:logout | Signs you out and deletes the Arcus credentials stored locally on your machine |
| /arcus:project <project-id> | Shows your Arcus projects and sets one as the active project |
| /arcus:map <ticket-key> | Links a ticket key to the current context so it routes to the right sprint |
| /arcus:test | Generates end-to-end tests for the current repository, validates them, and offers to run them |
| /arcus:testsigma-tests | Authors new end-to-end tests, saves them under tests/, validates them offline, and offers to run them |
| /arcus:push | Uploads the test cases captured in this session to Arcus, assigned to a sprint or left unmapped |

---

## **If You Also Use GitHub**

If your team has the Arcus GitHub App installed and you raise a pull request for the same work you captured in this context, Arcus connects the two automatically:

* **Context still unmapped**: Arcus converts it into a GitHub context. The Claude Code context and the pull request are unified as a single entry in Unmapped Context.
* **Context already mapped**: The pull request is auto-mapped to the same sprint or Ad-Hoc session. No further action is needed.

---
