---
title: 'Capture Logs Using Test Capture'
page_title: 'Capture Logs Using Test Capture'
metadesc: 'Test Capture lets you record execution logs during manual testing. Tshis article discusses capturing and reviewing execution evidence using Test Capture during manual test runs.'
noindex: false
order: 9.3
page_id: 'capture-logs'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Capture Logs During Test Execution'
    url: '#capture-logs-during-test-execution'
  - type: link
    name: 'View Captured Logs in Test Runs'
    url: '#view-captured-logs-in-test-runs'
  - type: link
    name: 'Capture Logs from a Directly Website'
    url: '#capture-logs-from-a-directly-website'
---

---

Test Capture lets you record execution logs during manual testing. You can update the execution status and add comments directly from the companion panel. It also captures video, console, and network logs for each test case. All logs are automatically linked to the test run and are available for review. This article discusses capturing and reviewing execution evidence using Test Capture during manual test runs.

---

## **Capture Logs During Test Execution**

1. From the left navigation bar, go to **Test Runs**.

2. Open a test run.

3. On the **Test Run details** page, click **Execute & Capture**.

Note: You can also select multiple test cases and click **Execute & Capture**.

4. The **Test Capture** panel opens with the test run details along with test cases.

5. Open a test case and start manual execution.

6. When you see a bug or error:
   - Update the test execution status (**Passed**, **In-Progress**, **Failed**, **Retest**, **Skipped** or **Blocked**).
   - Add a comment describing the observation.
   - Click **Save Logs**.

The log is captured and attached to the current test execution.

---

## **View Captured Logs in Test Runs**

1. From the left navigation bar, go to **Test Runs**.

2. Open the test run executed using **Test Capture**.

3. Open the test case.

4. Scroll to the **Activity** section.

   The **Activity** section displays:
   - **Execution timestamps**
   - **Status changes**
   - **Tester comments**
   - **Attached log**
   - **AI Summary**

5. Click **Instant Replay**. This will open a new displaying the detailed evidence, including:
   - **Visual replay of the execution**
   - **Execution information**
   - **Console logs**
   - **Network logs**
   - **AI Summary**

---

## **Capture Logs from a Directly Website**

1. Open the website you want to test.

2. Perform testing actions on the website.

3. When you see an issue/bug, click Extensions and select Test Capture. 

4. Select Instant Reply. This will open a new tab. 

5. Click Select Test Case.

6. In the Link to Test Management System dialog:
   - Select a project, test run, and test case.
   - Click Link.

7. Update the execution status (Passed, In Progress, Failed, Retest, Skipped, Blocked).

8. Add a comment describing the observation.

9. Click Save Log.


---