---
title: 'Set Up Email Notifications'
page_title: 'Set Up Email Notifications'
metadesc: 'Set up tailored email alerts so your team never misses key updates on assignments, status changes, or reviews | Learn how to setup email notifications'
noindex: false
order: 10.82
page_id: 'setting-up-email-notifications'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Interactive Demo'
    url: '#interactive-demo'
  - type: link
    name: 'Entities Available for Email Notifications'
    url:  '#entities-available-for-email-notifications'
  - type: link
    name: 'Customize Email Notifications'
    url:  '#customize-email-notifications'
  - type: link
    name: 'Add Email Notifications in a Test Plan'
    url: '#add-email-notifications-in-a-test-plan'
---

<br>

**Configure custom email notifications to keep your team updated on important changes across your test assets.**

---


Test Management by Testsigma allows you to configure custom email notifications for various test entities. Email notifications help teams stay informed about key events such as assignments, status changes, and review updates. This article discusses customizing email notifications in Test Management by Testsigma. 

---

> ## **Prerequisites**
> 
> Before you begin, ensure that you are added as a user in Test Management by Testsigma.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.52% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/nrru35dh3ywo?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Entities Available for Email Notifications**

**1. Test Run Completed** <br>
Send email when a test run status changes or is completed

**2. Test Case Waiting on Review** <br>
Send email when a test case is submitted for review

**3. Test Case Approved**<br>
Send email when a test case is approved

**4. Test Case Rework Requested**<br>
Send email when a test case requires rework

**5. Comments Mentioned**<br>
Send email when a user is mentioned in a comment

**6. Test Run Added to Test Plan**<br>
Send email when a test run is added to a test plan

**7. Test Plan Completed**<br>
Send email when a test plan is completed

**8. Test Plan Daily Summary**<br>
Send daily summary email for test plan progress

[[info | **NOTE**:]]
| You can enable or disable email notifications for each test entity. Toggle notifications on for events you want to receive and off for those you do not need.

---

## **Customize Email Notifications**

1. From the left navigation bar, go to **Settings > Notifications**.

2. Expand **Notifications**, and click **Email**. This will open the **Customise Email Notifications** section. 

3. In the **Customise Email Notifications** section, hover over the entity you want to edit and click the **Edit icon**.

4. Update the **HTML Content** as needed.

[[info | **NOTE**:]]
| Click **Send Test Email** to send a test notification.

5. Click **Save** to apply the changes.

[[info | **NOTE**:]]
| To send notifications from your own email address, ensure SMTP is configured. For more information, see [SMTP Configuration in Test Management by Testsigma](https://testsigma.com/docs/test-management/settings/smtp-configuration/).

---

## **Add Email Notifications in a Test Plan**

1. From the left navigation bar, go to **Test Plans**.

2. Create a new test plan or open an existing one.

3. In the **Notifications** section, add the email addresses where you want to send notifications.
   ![Add Emails](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Email_Notification_Setup.png)

4. Notifications will be sent when the test plan is created or updated.

[[info | **NOTE**:]]
| You can add multiple email addresses, separated by commas.

---