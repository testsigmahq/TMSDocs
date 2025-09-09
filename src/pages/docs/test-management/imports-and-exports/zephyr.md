---
title: 'Import Test Data from Zephyr'
page_title: 'Import Test Data from Zephyr'
metadesc: 'Test Management by Testsigma allows you to quickly import test cases Zephyr into an existing project. This feature streamlines test case migration and bulk additions'
noindex: false
order: 4.2
page_id: 'import-test-data-from-zephyr'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Export Test Cases from Zephyr'
    url: '#export-test-cases-from-zephyr'
  - type: link
    name: 'Import Test Cases'
    url: '#import-test-cases'
---

<br>

**Learn how to export test cases from Zephyr and import them into Test Management by Testsigma.**

---

You can export test cases from Zephyr and import them into Test Management by Testsigma. This article discusses the steps to export test cases from Zephyr and import them into Test Management by Testsigma.

[[info | **NOTE**:]]
| Currently, only test cases created using the Plain Text template can be imported into Test Management by Testsigma.

---

> ## **Prerequisites**
>
> Before you begin, ensure that you have a .csv file containing the exported test cases from Zephyr. If your test cases are in .xlsx format, convert the file to .csv before proceeding.

---

## **Export Test Cases from Zephyr**

1. On the **Jira** dashboard, go to **Projects**, and then click the **Zephyr** tab.

2. Select the folder that contains the test cases you want to export.

3. Select the test cases, click **More**, and select **Export to Excel**.

4. The file will be downloaded in **.xlsx** format.

[[info | **NOTE**:]]
| Testsigma supports test case import in .csv format. Convert the .xlsx file to .csv before proceeding.

---

## **Import Test Cases**

1. On the **Dashboard**, click **Import Cases**. This will open the **Import** section on Project Settings.

   Alternatively, navigate to Test Cases and click Import on the top right corner.

2. Click **Import via CSV**.

3. Click **Upload File** and select file to import.

[[info | **NOTE**:]]
| Follow the steps in the [Import Test Cases](https://testsigma.com/docs/test-management/imports-and-exports/csv-file/) document to prepare the file and map values or properties to align with the test case structure in Test Management by Testsigma.

---
