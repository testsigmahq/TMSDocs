---
title: 'Manage Data Sets in Test Management by Testsigma'
page_title: 'Manage Data Sets in Test Management by Testsigma'
metadesc: ''
noindex: false
order: 4.1
page_id: 'test-data-sets-in-testsigma-test-management'
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
    name: 'Create a Data Set'
    url: '#create-a-data-set'
  - type: link
    name: 'Create Data Set from Test Case'
    url: '#Create-data-set-from-test-case'
  - type: link
    name: 'Add Data Set to Test Case'
    url: '#Add-data-set-to-test-case'
  - type: link
    name: 'Add Multiple Data Sets to Test Case'
    url: '#add-multiple-data-sets-to-test-case'
  - type: link
    name: 'Remove Rows & Columns in a Data Set'
    url: '#remove-rows--columns-in-a-data-set'
---

<br>

**Reuse test data across test cases for broader coverage and consistency.**

---

Test Data Sets let you store reusable data for use across multiple test cases. They reduce manual entry, minimize errors, and help generate diverse test scenarios for better coverage. This article discusses managing Data Sets in Test Management by Testsigma. 

---

> ## **Prerequisites**
> 
> Before you begin, ensure that you have an active account in Test Management by Testsigma.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.40% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/af06lapdqeaa?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Create a Data Set**

1. From the left navigation bar, go to **Data Sets**. 

2. Click **Create** in the top right corner. This will open **Create a Dataset** dialog.

3. Enter a **Name**, an optional **Description** and click **Create Dataset**. 

4. On the **Data Set details** page, 
   - Add distinct variable names in column headers.
   - Enter values for each variable.
   - Click **Add Column** for more variables or **Add Row** for more values.

5. The data set is now reusable across test cases.

---

## **Create Data Set from Test Case**

1. From the left navigation bar, go to **Test Cases**. 

2. Create or open an existing test case.

3. In the **Test Case details** page, go to the Dataset section and click **Create Dataset**.

4. Enter a **Name**, an optional **Description** and click **Create Dataset**. This will open **Create a Data Set** dialog.

5. On the **Create a Data Set** dialog, 
   - Add distinct variable names in column headers.
   - Enter values for each variable.
   - Click **Add Column** for more variables or **Add Row** for more values.

6. Click **Link Dataset** to add it to the test case.

---

## **Add Data Set to Test Case**

1. From the left navigation bar, go to **Test Cases**. 

2. Create or open an existing test case where you want to add the dataset.

3. In the **Test Case details** page, go to the **Data Set** section and click **Add Data Set**. This will open the **Add Data Set** dialog.

4. In the **Add Data Set** dialog, 
   - Select a dataset from the list and click **Next**. 
   - Select one or more rows (or select all) whose values you want to add into the test case.
   - Click **Add Data Set**.

5. The Data Set is added to the test case. 

---

## **Add Multiple Data Sets to Test Case**
Follow the “**Add Data Set to Test Case**” steps to add the first data set. Repeat to add more. Test Management by Testsigma generates unique test scenarios via Cartesian product (all row combinations across data sets).

For Example, let’s say you have two data sets, Dataset A & Dataset B.

**Dataset A**

| **Name**  | **Age** | **Country** |
|------|-----|---------|
| Alice | 30  | India   |
| Bob   | 25  | Japan   |

**Dataset B**

| **Plan**       | **Price** | **Currency** |
|-----------|-------|----------|
| Pro       | 10    | USD      |
| Free      | 0     | INR      |
| Enterprise| 50    | JPY      |

**Generated Test Scenarios:**

| **Name**  | **Age** | **Country** | **Plan**       | **Price** | **Currency** |
|------|-----|---------|------------|-------|----------|
| Alice | 30  | India   | Pro        | 10    | USD      |
| Alice | 30  | India   | Free       | 0     | INR      |
| Alice | 30  | India   | Enterprise | 50    | JPY      |
| Bob   | 25  | Japan   | Pro        | 10    | USD      |
| Bob   | 25  | Japan   | Free       | 0     | INR      |
| Bob   | 25  | Japan   | Enterprise | 50    | JPY      |


---

## **Remove Rows & Columns in a Data Set**

1. From the left navigation bar, go to Data Sets. 

2. Open the target data set.

### **Remove Row**

1. Hover over the row.

2. Click the meatballs menu (⋯) at row start.

3. Click Remove Row.

### **Remove Column**

1. Hover over the column header.

2. Click the meatballs menu (⋯) at column start.

3. Click Remove Column. 

---