---
title: 'Requirement Traceability Report'
page_title: 'Requirement Traceability Report in Test Management by Testsigma'
metadesc: 'View requirement coverage across test cases, test runs, and defects with the Requirement Traceability Report in Test Management by Testsigma.'
noindex: false
order: 14.4
page_id: 'requirement-traceability-report-in-testsigma-test-management'
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
    name: 'Create a Requirement Traceability Report'
    url: '#create-a-requirement-traceability-report'
  - type: link
    name: 'Report Structure'
    url: '#report-structure'
---

<br>

**Track requirement coverage and validation across test cases, runs, and defects.**

---

A Requirement Traceability Report provides clear visibility into how requirements are validated across test cases, test runs, and defects within a project. It establishes traceability between requirements and their test coverage and execution. Supported requirement sources include Jira, Linear, and ClickUp.

---

> ## **Prerequisites**
> 
> Before you begin, ensure that test cases are generated from requirements, linked to test runs, and include execution results. 

---

## **Create a Requirement Traceability Report**

1. From the left navigation bar, go to **Reports**. 

2. Click **Create Report** on the top right corner. This will open the **Select Data for Visualisation** dialog. 

3. In the **Select Data for Visualisation** dialog, choose **Select Requirements** and click **Select Requirements**. 

4. On the **Add Test Requirements** page, 
   - Select the requirements to include in the report
   - Click Attach Test Requirements

5. Enter a **Title** and optional **Description**.

6. Click **Create a Report**.

7. The **Requirement Traceability Report** is created successfully.

---

## **Report Structure**

### **Report Overview**

The report provides high-level visibility into:
- Requirement distribution by priority (Critical, Major, Medium, Minor)
- Test case count and automation coverage (Manual vs Automated)
- Traceability matrix mapping Requirements → Test Cases → Test Runs

### **Key Widgets**

**Requirements by Priority** <br>
Displays the total number of requirements categorized by business priority:
- **Critical**: Must-have functionality that blocks release if failed.
- **Major**: Core functionality that impacts primary workflows.
- **Medium**: Important but non-blocking enhancements.
- **Minor**: Optional or low-impact usability improvements.

**Test Case Count** <br>
Shows the total number of test cases linked to requirements, split by execution type:
- **Manual**: Test cases executed by users.
- **Automated**: Test cases executed via automation workflows.

**Traceability Matrix** <br>
The matrix provides bidirectional mapping between requirements and their test execution evidence.

| **Column**      | **Description** |
|-----------------|-----------------|
| **Requirement** | Requirement title or story summary. |
| **Test Cases**  | List of test case IDs linked to the requirement. |
| **Test Runs**   | Test run records showing execution timestamps and status tags (Tested or Untested). |

---