---
title: 'Connect Cursor'
page_title: 'Connect Cursor'
metadesc: 'How to install and connect the Arcus plugin for Cursor so your coding context is captured and sent to QI Home for test generation.'
description: 'How to install and connect the Arcus plugin for Cursor so your coding context is captured and sent to QI Home for test generation.'
noindex: false
order: 13.43
page_id: 'qi-home-connect-cursor'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
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
    name: 'Map Your Context to a Sprint'
    url: '#map-your-context-to-a-sprint'
  - type: link
    name: 'Push Your Context'
    url: '#push-your-context'
  - type: link
    name: 'Commands Reference'
    url: '#commands-reference'
  - type: link
    name: 'If You Also Use GitHub'
    url: '#if-you-also-use-github'
---

**Install the Arcus plugin for Cursor so that your coding context is captured and sent to QI Home for test generation.**

When the plugin is installed and connected to a project, Atto captures your prompts, tool calls, and file changes as you work. When you are done, you push the context to QI Home with a single command. QA maps the context to the right sprint, and Atto generates test cases based on your development activity.

---

> ## **Prerequisites**
> 
> Before you begin, ensure that:
> * Cursor is installed.
> * You have an active project in Arcus by Testsigma.

---

## **Install the Plugin**

Install the Arcus plugin from the Cursor marketplace.

---

## **Log In and Connect Your Project**

1. In Cursor, run **/arcus:login**.

2. Complete the login flow in the browser. Return to Cursor when prompted.

3. Run **/arcus:project &lt;project-id&gt;** to connect the plugin to your Arcus project. Replace **&lt;project-id&gt;** with your project ID from **Arcus > Settings > Project**.

4. Start coding. The plugin begins capturing your context in the background.

[[info | **NOTE**:]]
| No data is sent to Arcus until you run **/arcus:push**. Logging in and setting your project does not start any upload.

---

## **Map Your Context to a Sprint**

Run **/arcus:map &lt;ticket-key&gt;** at any point before pushing to link your context to a sprint story.

```
/arcus:map PROJ-123
```

Running **/arcus:map** before pushing means your context arrives in QI Home already mapped to the correct sprint. QA does not need to route it manually from Unmapped Context.

[[info | **NOTE**:]]
| You can push without mapping. The context lands in Unmapped Context and QA maps it from there. See [Map Developer Context](https://testsigma.com/docs/test-management/qi-home/context-mapping/map-developer-context/).

---

## **Push Your Context**

1. When you are done, run **/arcus:push** to upload the captured context to QI Home.

The context appears in QI Home under **Unmapped Context** (if you did not run **/arcus:map**) or under the mapped sprint (if you did).

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

If your team has the Arcus GitHub App installed and you raise a pull request for the same work you captured in this context, Atto connects the two automatically:

* **Context still unmapped**: Atto converts it into a GitHub context. The Cursor context and the pull request are unified as a single entry in Unmapped Context.
* **Context already mapped**: The pull request is auto-mapped to the same sprint or Ad-Hoc session. No further action is needed.

---
