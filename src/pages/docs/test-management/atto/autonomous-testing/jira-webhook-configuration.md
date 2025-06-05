---
title: "Two-Way Integration with Jira via Webhook"
page_title: "Two-Way Integration with Jira via Webhook"
metadesc: "Testsigma allows a two-way integration between a Jira project & test management project via WebHook to synchronize test activities & issue status updates between both systems."
noindex: false
order: 11.42
page_id: "jira-webhook-configuration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Configuring Jira Webhook Integration"
  url: "#configuring-jira-webhook-integration"
---


---

Test Management by Testsigma allows a two-way integration between a Jira project and a test management project via Webhook. By configuring the Webhook in Jira, you can automatically synchronize test activities and issue status updates between both systems. This helps maintain consistent traceability, streamline workflows, and reduce manual updates during the testing lifecycle. This article discusses two-way integration between a Jira project and a test management project via Webhook.

---

> ## **Prerequisites**
> 
> Before you begin, ensure that you have the **Webhook URL** from **Project Settings**. 

---

## **Configuring Jira Webhook Integration**

1. Log in to your Jira account and ensure a project is available for integration.

2. Navigate to **Settings > System**.
   ![System](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/tms-doc-images/Jira_Webhook_System.png)

3. In the left navigation bar, go to **Advanced > WebHooks**. 
   ![Webhooks](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/tms-doc-images/Jira_Webhook_Settings.png)

4. In the **Webhooks** page, click **+ Create a WebHook**. 
   ![Create Webhook](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/tms-doc-images/Jira_Create_Webhook.png)

5. In the **New Webhook Listener** section, enter the following details:

   ### **Basic Information:**
   1. Enter a **Name**.
   2. Select **Status** as **Enabled**.  
   3. In the **Webhook URL** box, enter the URL (You can get this URL from **Project > Project Settings > Webhook URL** in **Testsigma Test Management**).
   4. Click **Generate Secret**.
   
   ![Webhook Listener](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/tms-doc-images/Jira_Webhook_Listener.png)

   ### **Configure Events:**
   
   1. Under **Jira Software Related Events**, select the following options under **Sprint**: ***created***, ***deleted***, ***updated***, ***started***, and ***closed***.
   
   ![Software Events](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/tms-doc-images/Jira_Events_WH.png)

   2. Under **Issue Related Events**, do the following:
         - In the **JQL query box**, enter: ***project in ("ProjectName") AND sprint is not EMPTY***
         - Under **Issue**, select ***created***, ***updated***, and ***deleted***.
   
   ![Issue Events](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/tms-doc-images/Jira_issue_events.png)


6. Click **Create** to save the configuration and activate two-way integration.
   
   ![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/tms-doc-images/Jira_webhook_Create.png)


<br>

> ### **Resources:**
> 
> <Br>
> 
> For more information, see [Jira WebHooks](https://developer.atlassian.com/server/jira/platform/webhooks/).


---