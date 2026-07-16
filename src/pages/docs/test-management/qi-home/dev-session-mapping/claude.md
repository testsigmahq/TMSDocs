---
title: 'Map Claude Sessions'
page_title: 'Developer Session Mapping: Claude'
metadesc: 'Map Claude sessions to sprints or Ad-Hoc sessions so Atto can generate or update test cases based on development activity captured in the session.'
description: 'Learn how to map Claude sessions to sprints or Ad-Hoc sessions for coverage tracking.'
noindex: false
order: 13.42
page_id: 'qi-home-dev-session-mapping-claude'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'View Unmapped Claude Sessions'
    url: '#view-unmapped-claude-sessions'
  - type: link
    name: 'Map a Claude Session to a Sprint'
    url: '#map-a-claude-session-to-a-sprint'
  - type: link
    name: 'Map a Claude Session to an Ad-Hoc Session'
    url: '#map-a-claude-session-to-an-ad-hoc-session'
  - type: link
    name: 'Map Multiple Sessions at Once'
    url: '#map-multiple-sessions-at-once'
  - type: link
    name: 'View Mapped Sessions'
    url: '#view-mapped-sessions'
---

<br>

**Map Claude sessions to sprints or Ad-Hoc sessions so Atto can generate or update test cases based on development activity.**

---

When your developers work in Claude, Atto detects those sessions and shows them in the **Unmapped Sessions** view in QI Home. Each Claude session appears with an AI-generated suggestion for which module and sprint it belongs to. You review the suggestion and map it with a few clicks.

Once mapped, Atto generates new test cases or updates existing ones based on the developments captured in that Claude session.

---

> ## **Prerequisites**
>
> Before you begin, ensure that:
> - Your Claude account is connected to your project. Go to **Settings > Integrations** to connect.
> - At least one **Sprint** or **Ad-Hoc** session exists with generated test cases.

---

## **View Unmapped Claude Sessions**

1. From the left navigation, go to **QI Home**.

2. In the left sidebar, click **View** next to **Unmapped Sessions**.

3. The **Unmapped Sessions** tab opens. Claude sessions are identified by the Claude badge.

   <!-- screenshot: Unmapped Sessions tab showing Claude session entries with their badges -->

Each Claude session entry shows:

- **Session title**: What the Claude session covered.
- **Author**: The developer who ran the session.
- **Service**: The service or module the session relates to.
- **Tests explored**: The number of tests that were explored or discussed in the session.
- **Time**: When the session occurred.
- **AI Suggestion**: The module and sprint Atto recommends mapping this session to.

---

## **Map a Claude Session to a Sprint**

1. On the session you want to map, click **Map to Module**.

   <!-- screenshot: Unmapped Sessions showing a Claude session with Map to Module and Dismiss buttons -->

2. In the **Map to Module** dialog, select the **Project** from the dropdown.

3. Under **Map to**, select **Sprint**.

4. Select the **Sprint** you want to map this session to.

5. Select the **Stories** within the sprint that this session relates to.

   <!-- screenshot: Map to Module dialog for a Claude session with Sprint selected -->

6. Review the **What happens next** message and click **Map**.

Atto triggers test generation for the selected sprint. New test cases are generated or existing ones are updated based on the session content.

---

## **Map a Claude Session to an Ad-Hoc Session**

1. On the session you want to map, click **Map to Module**.

2. In the **Map to Module** dialog, select the **Project**.

3. Under **Map to**, select **Adhoc**.

4. Under **Existing Adhoc Session**, select the session you want to map to, or select **+ Create New Adhoc Session**.

5. Click **Map**.

---

## **Map Multiple Sessions at Once**

The bulk mapping flow is the same as GitHub. Select the checkboxes next to the sessions you want to map, then click **Map to Module** in the bottom action bar. See [Map GitHub Sessions](https://testsigma.com/docs/test-management/qi-home/dev-session-mapping/github/) for the bulk mapping steps.

---

## **Dismiss a Claude Session**

If a session is not relevant to your test coverage, click **Dismiss**. The session is removed from the Unmapped Sessions list.

---

## **View Mapped Sessions**

Click the **Mapped Sessions** tab to see all mapped Claude and GitHub sessions, the tests generated, and the sprints covered. The Mapped Sessions view is shared between GitHub and Claude sessions.

<!-- screenshot: Mapped Sessions tab showing both GitHub and Claude entries -->

---
