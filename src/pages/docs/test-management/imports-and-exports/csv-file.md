---
title: "Import Test Data from CSV Files"
page_title: "Import Test Data from CSV Files"
metadesc: "Testsigma Test Management allows you to quickly import test cases in CSV files into an existing project. This feature streamlines test case migration and bulk additions"
noindex: false
order: 4.1
page_id: "import-test-data-from-csv-files"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Import Test Cases"
  url: "#import-test-cases"
- type: link
  name: "Prepare for Import"
  url: "#prepare-for-import"
- type: link
  name: "Mapping Properties and Values"
  url: "#mapping-properties-and-values"
---

---

Testsigma Test Management allows you to quickly import test cases in CSV files into an existing project. This feature simplifies the migration process from other tools by enabling bulk test case imports. This article discusses how to import test cases using a CSV file.

---

> ## **Prerequisites**
> 
> Before you begin, ensure that a Project and Folders are created in Testsigma. For more information, see Projects and Organizing Test Cases. 

---

## **Import Test Cases**

1. On the **Dashboard**, click **Import Test Cases**. This will open the **Import** section on **Project Settings**.  

   Alternatively, navigate to **Test Cases** and click **Import** on the top right corner.

2. Click **Import via CSV**.

3. Click **Upload File** and select file to import. 

---

## **Prepare for Import**

After uploading a CSV file, follow these steps to prepare for import:

1. Click **Select a Folder** and select a destination folder for the test cases on **Add Folder Location** overlay.

2. Click the **Separator** dropdown and select the correct delimiter based on your CSV file format.

3. Click the **First Row** dropdown and define the starting row for import. 

4. Click the **File Encoding** dropdown and select the appropriate encoding format to ensure correct data. 

5. Click **Next** to map the CSV columns to test case attributes.

---

## **Mapping Properties and Values**

After preparing the import, follow these steps to map CSV file columns to test case attributes:

1. Click **Select Columns** next to mandatory fields such as **Title**, **Steps**, and **Priority** and assign CSV columns.

2. Follow the **Step 1** for additional fields like **Description**, **Preconditions**, **Expected Result**, **Folder**, **Owner**, and **Labels**.

[[info | **NOTE**:]]
| If the CSV contains values that do not match built-in properties, map them to the appropriate attributes of Testsigma Test Management.

3. Ensure the mapped data appears correctly in the **Test Case Preview** panel.

4. Click **Start Import** to complete the process.


---