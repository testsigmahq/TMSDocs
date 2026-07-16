---
title: 'Execute Test Case in Local'
page_title: 'Execute Test Case in Local'
metadesc: 'Run a test case with Copilot on your local device or a connected mobile device using Testsigma Terminal, for applications that are not publicly accessible.'
description: 'Learn how to execute a test case with Copilot on web, Android, and iOS locally.'
noindex: false
order: 13.36
page_id: 'qi-home-execute-test-case-in-local'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Local Web: Start Execution'
    url: '#local-web-start-execution'
  - type: link
    name: 'Local Android: Start Execution'
    url: '#local-android-start-execution'
  - type: link
    name: 'Local iOS: Start Execution'
    url: '#local-ios-start-execution'
  - type: link
    name: 'Complete the Session'
    url: '#complete-the-session'
---

<br>

**Run a test case with Copilot on your local device or a connected mobile device.**

---

Local execution uses your own machine or a connected device instead of Testsigma Lab. Use Local when your application is not publicly accessible, when you need to test against a local build, or when you are executing mobile test cases on a physical device or emulator.

Local execution requires Testsigma Terminal to be running on your desktop.

---

> ## **Prerequisites**
>
> Before you begin, ensure that:
> - You have a test case with automated steps saved in your library.
> - Testsigma Terminal is installed and running on your desktop.
> - For mobile execution: a physical device or emulator is connected to your machine and recognized by Testsigma Terminal.

---

## **Local Web: Start Execution**

1. Open a test case from your library.

2. Hover over the **Run** button and click **Run with Copilot**.

3. In the **Run with Copilot** dialog, configure the settings:

   - **Test Lab**: Local Devices
   - **Debug Point**: Select a step to pause at, or leave as None.
   - **Environment**: Select the test environment.
   - **Run till failed step**: Toggle on if needed.

   <!-- screenshot: Run with Copilot dialog for Local Web showing Test Lab set to Local Devices -->

4. Click **Launch**.

   If Testsigma Terminal is not running, a prompt appears. Start Terminal and return to launch the session.

The Copilot panel opens in a browser on your machine. The execution flow is the same as Cloud. See [Execution Controls in Copilot](https://testsigma.com/docs/test-management/qi-home/automation/copilot/execution-controls-in-copilot/).

---

## **Local Android: Start Execution**

1. Open a test case and hover over the **Run** button. Click **Run with Copilot**.

2. In the **Run with Copilot** dialog:

   - **Test Lab**: Local Devices
   - **Test Machines**: Select the machine your device is connected to.
   - **Device**: Select the Android device or emulator.
   - **Initial Debug Point**: Select a step to start from, or leave as None.
   - **App Source**: Choose how to specify the app:
     - **External link**: Paste the app URL.
     - **Uploaded apps**: Select a previously uploaded APK.
     - **Add Manually**: Enter app details by hand.
   - **Environment**: Select the test environment.

   <!-- screenshot: Run with Copilot dialog for Android Local showing Test Machines, Device, and App Source fields -->

3. Click **Launch**.

---

## **Local iOS: Start Execution**

The iOS flow uses the same Run with Copilot dialog as Android Local.

1. Open a test case and hover over the **Run** button. Click **Run with Copilot**.

2. In the **Run with Copilot** dialog:

   - **Test Lab**: Local Devices
   - **Test Machines**: Select the connected machine your iOS device is attached to.
   - **Device**: Select your iPhone, iPad, or iOS simulator.
   - **Initial Debug Point**: Select a step to pause at, or leave as None.
   - **App Source**: Select how to specify the app (External link, Uploaded apps, or Add Manually). iOS apps use .ipa format.
   - **Environment**: Select the test environment.

   <!-- screenshot: Run with Copilot dialog for iOS Local showing Device and App Source fields -->

3. Click **Launch**.

---

## **Complete the Session**

The completion flow for Local is the same as Cloud. When execution finishes, save your results and end the session. See [Execute Test Case in Cloud](https://testsigma.com/docs/test-management/qi-home/automation/copilot/execute-test-case-in-cloud/) for the save and end steps.

[[info | **NOTE**:]]
| For Local execution, there is no cloud VM to release. The session simply closes when you end it.

---
