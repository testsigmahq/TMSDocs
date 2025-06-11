---
title: 'Importing Test Data from Browserstack'
page_title: 'Getting Started with Test Management by Testsigma'
metadesc: 'This article discusses overview of test management tool in Testsigma | Keep your test cases, test plans, test runs, and reports organized in one place'
noindex: false
order: 4.4
page_id: 'import-test-data-from-browserstack'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Steps to Access Test Management by Testsigma'
    url: '#steps-to-access-testsigma-test-management'
---

---

You can export test cases from Testrail and import them into Test Management by Testsigma. This article discusses the steps to export test cases from Testrail and import them into Test Management by Testsigma.

Note: Currently, only test cases created using the Plain Text template can be imported into Test Management by Testsigma.

---

> ## **Prerequisites**
>
> Before you begin, ensure that you have a **.csv** file containing the exported test cases from Browserstack.

---

## **Export Test Cases from Browserstack**

1. On the **BrowserStack Test Management** dashboard, go to **Projects > Test Cases**, and select the folder that contains the test cases you want to export.

2. Select the test cases, click the **Export** dropdown, and then select **Export as CSV**.

3. The file will be downloaded in **.csv** format.

---

## **Import Test Cases**

1. On the **Dashboard**, click **Import Cases**. This will open the **Import** section on **Project Settings**.

   Alternatively, navigate to **Test Cases** and click **Import** on the top right corner.

2. Click **Import via CSV**.

3. Click **Upload File** and select file to import.

[[info | **NOTE**:]]
| Follow the steps in the [Import Test Cases](https://testsigma.com/docs/test-management/imports-and-exports/csv-file/) document to prepare the file and map values or properties to align with the test case structure in Test Management by Testsigma.

---
