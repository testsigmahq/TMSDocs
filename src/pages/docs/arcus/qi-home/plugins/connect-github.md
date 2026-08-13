---
title: 'Connect GitHub'
page_title: 'Connect GitHub'
metadesc: 'How to install and connect the Arcus GitHub App so pull requests from your repositories flow into QI Home for test generation.'
description: 'How to install and connect the Arcus GitHub App so pull requests from your repositories flow into QI Home for test generation.'
noindex: false
order: 13.41
page_id: 'qi-home-connect-github'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Install the Arcus GitHub App'
    url: '#install-the-arcus-github-app'
  - type: link
    name: 'Connect Jira for Auto-Mapping'
    url: '#connect-jira-for-auto-mapping'
  - type: link
    name: 'Verify the Connection'
    url: '#verify-the-connection'
  - type: link
    name: 'What Happens Next'
    url: '#what-happens-next'
---

**Connect the Arcus GitHub App to your repositories so that every pull request your team raises flows into QI Home for test generation.**

When the Arcus GitHub App is installed and connected to a project, the Coverage Agent detects every pull request raised in the connected repositories and surfaces it in the Unmapped Context view. QA maps each PR to a sprint or Ad-Hoc session, and the Generator Agent creates test cases based on the code changes. Developers do not change how they work.

---

> ## **Prerequisites**
> 
> Before you begin, ensure that:
> * You have an active project in Arcus by Testsigma.
> * You have admin access to the GitHub organization you want to connect.

---

## **Install the Arcus GitHub App**

1. Go to [github.com/apps/arcus-by-testsigma](https://github.com/apps/arcus-by-testsigma) and click **Install**.

2. Select the GitHub organization you want to connect.

3. Under **Repository access**, select **All repositories** or choose specific repositories.

4. Click **Install & Authorize**.

5. GitHub redirects you to Arcus. In the **Connect GitHub** dialog, select the **Workspace** and **Project** you want to link this installation to.

6. Click **Connect**.

The GitHub App is now installed. All pull requests raised in the connected repositories will appear in the **Unmapped Context** view in QI Home.

---

## **Connect Jira for Auto-Mapping**

If your project is connected to Jira, the Coverage Agent can auto-map pull requests to the correct sprint when the PR title or description contains a Jira ticket ID.

1. In Arcus, go to **Settings > Integrations**.

2. Under **Jira**, click **Connect** and complete the Jira connection flow.


Once Jira is connected, any PR with a ticket ID such as **PROJ-123** in the title or description is routed directly to the sprint that contains that story. The PR does not land in Unmapped Context. QA does not need to map it manually.

[[info | **NOTE**:]]
| If a PR does not contain a Jira ticket ID, it lands in Unmapped Context regardless of whether Jira is connected. QA maps it manually from there. See [Map GitHub Context](https://testsigma.com/docs/arcus/qi-home/plugins/map-github/).

---

## **Verify the Connection**

1. In Arcus, go to **Settings > Integrations**.

2. Under **GitHub**, confirm the organization name and repository list appear with a **Connected** status.

3. Raise a test pull request in one of the connected repositories.

4. Go to **QI Home** and click **View** next to **Unmapped Context**. The pull request should appear within a few seconds.

---

## **What Happens Next**

After a PR appears in Unmapped Context, a QA team member maps it to a sprint or Ad-Hoc session. The Generator Agent then creates test cases based on the PR diff.

If your developers also use a CLI tool (Claude Code, Cursor, GitHub Copilot, or Codex), their context unifies with the PR automatically when it is raised. 

---
