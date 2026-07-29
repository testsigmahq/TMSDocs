---
title: 'Overview: Developer Context Mapping'
page_title: 'Overview: Developer Context Mapping'
metadesc: 'An overview of how Developer Context Mapping in Arcus connects GitHub pull requests and CLI coding context to test generation in QI Home.'
description: 'An overview of how Developer Context Mapping in Arcus connects GitHub pull requests and CLI coding context to test generation in QI Home.'
noindex: false
order: 13.40
page_id: 'qi-home-context-mapping-overview'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'What Developer Context Mapping Does'
    url: '#what-developer-context-mapping-does'
  - type: link
    name: 'The Mapping Model'
    url: '#the-mapping-model'
  - type: link
    name: 'What Atto Generates After Mapping'
    url: '#what-atto-generates-after-mapping'
  - type: link
    name: 'When CLI Context and a Pull Request Overlap'
    url: '#when-cli-context-and-a-pull-request-overlap'
  - type: link
    name: 'Supported Tools'
    url: '#supported-tools'
  - type: link
    name: 'Prerequisite'
    url: '#prerequisite'
---

Developer Context Mapping connects the tools your developers already use to the Quality Intelligence loop in Arcus. When a developer opens a pull request or finishes working in a CLI tool, Atto captures that context and surfaces it in QI Home for test generation. Developers keep their existing workflow. QA reviews what arrives and maps it to the right sprint or Ad-Hoc session.

---

## **What Developer Context Mapping Does**

Developer Context Mapping captures two types of developer activity:

**Pull requests** from GitHub. When the Arcus GitHub App is installed and connected to a repository, every pull request raised in that repository flows into QI Home automatically.

**Coding context** from CLI tools. When a developer works in Claude Code, Cursor, GitHub Copilot, or Codex with the Arcus plugin installed, their activity is captured in the background. The developer pushes the context to QI Home when they are done.

Both types land in the **Unmapped Context** view. Nothing is generated until the context is mapped to a sprint or Ad-Hoc session.

---

## **The Mapping Model**

Every incoming context entry, whether a pull request or captured coding activity, starts in one of three states.

**Unmapped**

All context lands here first. Atto shows an AI-generated suggestion for which sprint and story the context belongs to. You review the suggestion and map it manually, or dismiss it if it is not relevant.

**Sprint**

Context mapped to a sprint contributes to test generation for that sprint. Atto generates new test cases or updates existing ones based on the context content. The sprint's coverage, pass rate, and release readiness metrics update accordingly.

Context routes to a sprint automatically when:

* A pull request title or description contains a Jira ticket ID (GitHub integration).
* A developer runs `/arcus:map <ticket-key>` before pushing their context (CLI integrations).

**Ad-Hoc**

Context mapped to an Ad-Hoc session is for work not tied to a sprint, such as hotfixes, experiments, or cross-sprint refactors. Ad-Hoc mapping is always done manually from the Unmapped Context view.

---

## **What Atto Generates After Mapping**

Mapping is the trigger. Once context is assigned to a sprint or Ad-Hoc session, Atto produces:

* **Test cases** based on the pull request diff or captured context. You review each case and accept, edit, or reject it before it is added to the sprint.
* **Coverage gaps** identifying areas of the change with no corresponding tests.
* **A test plan** organized into Smoke, Feature, Regression, and Deep Regression suites.

Execution results from these test plans feed the Quality Intelligence Metrics. See [Quality Intelligence Metrics](https://testsigma.com/docs/test-management/qi-home/quality-intelligence-metrics/) for how Coverage, Pass Rate, Confidence, Release Readiness, and Release Gate are calculated.

---

## **When CLI Context and a Pull Request Overlap**

Developers using a CLI tool often raise a pull request for the same work they captured as context. Atto handles this automatically:

* **Context still unmapped when the PR is raised** — Atto converts it into a GitHub context. The CLI context and the pull request are unified as a single entry in Unmapped Context. Its prompt history and code changes are analyzed together with the PR diff.

* **Context already mapped when the PR is raised** — The pull request is auto-mapped to the same sprint or Ad-Hoc session. No further action is needed.

Developers who run `/arcus:map` early do not need to take any action when they raise the PR. The mapping carries forward.

---

## **Supported Tools**

| Tool | What it captures | Setup |
|------|-----------------|-------|
| GitHub | Pull requests from connected repositories | [Connect GitHub](https://testsigma.com/docs/test-management/qi-home/context-mapping/connect-github/) |
| Claude Code | Coding context: prompts, tool calls, file changes | [Connect Claude Code](https://testsigma.com/docs/test-management/qi-home/context-mapping/connect-claude-code/) |
| Cursor | Coding context: prompts, tool calls, file changes | [Connect Cursor](https://testsigma.com/docs/test-management/qi-home/context-mapping/connect-cursor/) |
| GitHub Copilot | Coding context: prompts, tool calls, file changes | [Connect GitHub Copilot](https://testsigma.com/docs/test-management/qi-home/context-mapping/connect-github-copilot/) |
| Codex | Coding context: prompts, tool calls, file changes | [Connect Codex](https://testsigma.com/docs/test-management/qi-home/context-mapping/connect-codex/) |

You can connect any combination of tools. Most teams connect GitHub and at least one CLI tool.

---
