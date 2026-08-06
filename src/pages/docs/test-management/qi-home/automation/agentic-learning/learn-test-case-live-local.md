---
title: 'Learn Test Case Live (Local)'
page_title: 'Learn Test Case Live (Local)'
metadesc: 'Run Agentic Learning on your own device or a connected mobile device using Testsigma Terminal, for applications that are not publicly accessible.'
description: 'Learn how to run Agentic Learning locally on web, Android, and iOS using Testsigma Terminal.'
noindex: false
order: 13.32
page_id: 'qi-home-learn-test-case-live-local'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Local Web: Start Agentic Learning'
    url: '#local-web-start-agentic-learning'
  - type: link
    name: 'Local Android: Start Agentic Learning'
    url: '#local-android-start-agentic-learning'
  - type: link
    name: 'Local iOS: Start Agentic Learning'
    url: '#local-ios-start-agentic-learning'
  - type: link
    name: 'During the Learning Session'
    url: '#during-the-learning-session'
---

<br>

**Run Agentic Learning on your own device or a connected mobile device using Testsigma Terminal.**

---

Agentic Learning (Local) works the same way as Cloud — Atto walks through your test case on a live application and generates automated steps — but the browser or device runs on your local machine instead of Testsigma Lab. Use Local when your application is not publicly accessible, when you need to test against a local build, or when you are automating mobile test cases on a physical device or emulator.

Local execution requires Testsigma Terminal to be running on your desktop.

---

> ## **Prerequisites**
>
> Before you begin, ensure that:
> - You have a test case saved in your library with manual steps.
> - Testsigma Terminal is installed and running on your desktop. Download it from the **Learn and Automate** dialog if you have not installed it yet.
> - For mobile (Android or iOS): a physical device or emulator is connected to your machine and recognized by Testsigma Terminal.

---

## **Local Web: Start Agentic Learning**

1. Open a test case from your library or from the session detail view.

2. At the bottom of the test case, click **Learn and Automate**.

3. In the **Learn and Automate** dialog, select the **Application** type: **Web**.

4. Under **Test Lab**, select **Local Devices**.

5. Select the **Environment** from the dropdown.

6. Select the **Browser** you want to use.

   <!-- screenshot: Learn and Automate dialog with Local Devices selected and Browser field visible -->

7. Click **Launch**.

   If Testsigma Terminal is not running, a prompt appears with a **Launch Terminal** button and a download link for your operating system.

   <!-- screenshot: Testsigma Terminal required prompt with Launch Terminal button and download link -->

Once Terminal is running and connected, the learning session opens in a browser on your machine. The Agentic Learning panel behavior is the same as Cloud. See [Learn Test Case Live (Cloud)](https://testsigma.com/docs/test-management/qi-home/automation/agentic-learning/learn-test-case-live-cloud/) for the learning session flow, generating automated steps, and saving to your library.

---

## **Local Android: Start Agentic Learning**

1. Open a test case and click **Learn and Automate**.

2. In the **Learn and Automate** dialog, select **Application** type: **Android**.

3. Under **Test Lab**, select **Local Devices**.

4. Under **Test Machines**, select the connected machine running your device.

5. Under **Device**, select the connected Android device or emulator.

6. Under **App Details**, choose how you want to specify the app:

   - **External link**: Paste a URL to the app package.
   - **Uploaded apps**: Select an app you have already uploaded to Testsigma.
   - **Add Manually**: Enter the app details by hand.

   <!-- screenshot: Learn and Automate dialog for Android Local showing Test Machines, Device, and App Details fields -->

7. Select the **Environment** from the dropdown.

8. Click **Launch**.

---

## **Local iOS: Start Agentic Learning**

The iOS flow uses the same dialog as Android Local. Select **iOS** as the Application type and connect your iOS device or simulator through Testsigma Terminal.

1. Open a test case and click **Learn and Automate**.

2. In the **Learn and Automate** dialog, select **Application** type: **iOS**.

3. Under **Test Lab**, select **Local Devices**.

4. Under **Test Machines**, select the connected machine your iOS device or simulator is attached to.

5. Under **Device**, select your connected iPhone, iPad, or iOS simulator.

6. Under **App Details**, choose how to specify the app:

   - **External link**: Paste the URL to the iOS app package (.ipa).
   - **Uploaded apps**: Select a previously uploaded .ipa.
   - **Add Manually**: Enter app details by hand.

   <!-- screenshot: Learn and Automate dialog for iOS Local showing Device and App Details fields -->

7. Select the **Environment** and click **Launch**.

---

## **During the Learning Session**

The Agentic Learning panel behavior is the same for Local as it is for Cloud. Atto walks through the steps, marks each one with a checkmark, and waits for your input if it gets stuck. See [Live Learning Controls](https://testsigma.com/docs/test-management/qi-home/automation/agentic-learning/live-learning-controls/) for controls available during the session.

After learning completes, generate and save automated steps following the same steps as Cloud. See [Learn Test Case Live (Cloud)](https://testsigma.com/docs/test-management/qi-home/automation/agentic-learning/learn-test-case-live-cloud/).

---
