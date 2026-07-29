---
title: 'Map Developer Context'
page_title: 'Map Developer Context'
metadesc: 'Map Claude Code, Cursor, GitHub Copilot, and Codex context to sprints or Ad-Hoc sessions so Atto can generate or update test cases based on development activity.'
description: 'Map Claude Code, Cursor, GitHub Copilot, and Codex context to sprints or Ad-Hoc sessions so Atto can generate or update test cases based on development activity.'
noindex: false
order: 13.47
page_id: 'qi-home-map-developer-context'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'View Unmapped CLI Context'
    url: '#view-unmapped-cli-context'
  - type: link
    name: 'Map Context to a Sprint'
    url: '#map-context-to-a-sprint'
  - type: link
    name: 'Map Context to an Ad-Hoc Session'
    url: '#map-context-to-an-ad-hoc-session'
  - type: link
    name: 'Map Multiple Context Entries at Once'
    url: '#map-multiple-context-entries-at-once'
  - type: link
    name: 'Dismiss Context'
    url: '#dismiss-context'
  - type: link
    name: 'When a Developer Also Uses GitHub'
    url: '#when-a-developer-also-uses-github'
  - type: link
    name: 'View Mapped Context'
    url: '#view-mapped-context'
---

**Map Claude Code, Cursor, GitHub Copilot, and Codex context to sprints or Ad-Hoc sessions so Atto can generate or update test cases based on development activity.**

When developers work in Claude Code, Cursor, GitHub Copilot, or Codex with the Arcus plugin installed and push context using `/arcus:push`, Atto surfaces it in the **Unmapped Context** view in QI Home. Each context entry includes an AI-generated suggestion for which module and sprint it belongs to. Once mapped, Atto generates test cases based on the development activity captured in that context.

For plugin setup on the developer side, see [Connect Claude Code](https://testsigma.com/docs/test-management/qi-home/context-mapping/connect-claude-code/), [Connect Cursor](https://testsigma.com/docs/test-management/qi-home/context-mapping/connect-cursor/), [Connect GitHub Copilot](https://testsigma.com/docs/test-management/qi-home/context-mapping/connect-github-copilot/), or [Connect Codex](https://testsigma.com/docs/test-management/qi-home/context-mapping/connect-codex/).

---

> ## **Prerequisites**
> 
> Before you begin, ensure that:
> * The developer has installed and connected the Arcus plugin for their CLI tool and pushed context at least once.
> * At least one sprint or Ad-Hoc session exists in the project.

---

## **View Unmapped CLI Context**

1. From the left navigation, go to **QI Home**.

2. In the left sidebar, click **View** next to **Unmapped Context**.

3. The **Unmapped Context** tab opens. CLI context is identified by its tool badge: Claude Code, Cursor, GitHub Copilot, or Codex.

Each CLI context entry shows:

* **Context title**
* **Author** — the developer whose activity produced this context
* **Service** — the module or service area this context relates to
* **Tests explored** — areas Atto identified in this context
* **Time** the context was pushed
* **AI Suggestion** — the module and sprint Atto recommends

[[info | **NOTE**:]]
| The mapping flow is identical for Claude Code, Cursor, GitHub Copilot, and Codex context. The steps below apply to all four tools.

---

## **Map Context to a Sprint**

1. On the context entry you want to map, click **Map to Module**.

2. In the **Map to Module** dialog, select the **Project** from the dropdown.

3. Under **Map to**, select **Sprint**.

4. Select the **Sprint** you want to map this context entry to.

5. Select the **Stories** within the sprint that this context relates to.

6. Review the **What happens next** message and click **Map**.

Atto triggers test generation for the selected sprint.

---

## **Map Context to an Ad-Hoc Session**

1. On the context entry you want to map, click **Map to Module**.

2. In the **Map to Module** dialog, select the **Project**.

3. Under **Map to**, select **Adhoc**.

4. Under **Existing Adhoc Session**, select a session, or select **+ Create New Adhoc Session**.

5. Click **Map**.

---

## **Map Multiple Context Entries at Once**

1. Select the checkboxes next to the context entries you want to map.

2. Click **Map to Module** in the bottom action bar.

3. In the **Map to Module** dialog, configure the mapping and click **Map**.

---

## **Dismiss Context**

If a context entry is not relevant to your test coverage, click **Dismiss**. It is removed from the Unmapped Context list.

---

## **When a Developer Also Uses GitHub**

If your team has GitHub connected and a developer raises a pull request for the same work they captured in CLI context, Atto handles the overlap automatically:

* **Context still unmapped**: Atto converts it into a GitHub context. The CLI context and the pull request unify as a single entry. You map it as a GitHub PR, not as separate CLI context.
* **Context already mapped**: The pull request is auto-mapped to the same sprint or Ad-Hoc session. No further action is needed.


---

## **View Mapped Context**

Click the **Mapped Context** tab to see all mapped context across all tools, the tests generated, and the sprints covered.

---
