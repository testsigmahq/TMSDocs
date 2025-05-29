---
title: "Reports in Dashboard View"
page_title: "Reports in Dashboard View in Testsigma Test Management"
metadesc: "The Dashboard view in Testsigma Test Management gives real-time test metrics. Learn how to track progress, monitor test health, & identify defects from Dashboard"
noindex: false
order: 12.3
page_id: "view-dashboard-reports-in-testsigma-test-management"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Filters"
  url: "#filters"
- type: link
  name: "Steps to View Reports"
  url: "#steps-to-view-reports"
- type: link
  name: "Sections in Reports"
  url: "#sections-in-reports"
---

<br>

**Track progress, monitor test health, and identify defects, all from a single screen!**

---

The Dashboard in Testsigma Test Management displays real-time test metrics. It allows you to track progress, monitor test health, and identify defects, all from a single screen, without navigating to detailed reports.

These charts dynamically update based on selected filters, such as date range and assignee. This enables you to view data filtered by specific date ranges and individual users.  This article discusses the reports section in the Dashboard. 

---

## **Filters**

### **Date Range**

The charts in the Dashboard displays data from a defined date range. Select a range from the **From** dropdown to view data for a specific period which is as follows:
   
   - Last 7 days
   
   - Last 30 days
   
   - Last 90 days
   
   - Custom range

[[info | **NOTE**:]]
| The default view shows data from the past 90 days.

### **Assigned To** 

Filter data by assignee to focus on test activities for a specific user. You can use this filter to:
   
   - Monitor individual performance
   
   - Compare execution metrics by assignee
   
   - Understand workload distribution

[[info | **NOTE**:]]
| Combine filters to narrow down the data and gain more targeted insights. For example, Last 30 days + a specific assignee.

---

## **Active Runs**

This section displays a **Donut Chart** that summarizes the status of all active test runs. The chart includes the count of test cases in each of the following states:
   
   - **Passed**
   
   - **Skipped**
   
   - **Blocked**
   
   - **In Progress**
   
   - **Failed**
   
   - **Untested**
   
   - **Retest**


This chart helps you assess ongoing test activities and identify critical issues early in the execution cycle.

[[info | **NOTE**:]]
| Click View All Active Runs to see the list of all active runs.

---

## **Closed Test Runs**

This section displays a Line Chart that shows the number of test runs closed over time. Each data point is a count of test runs closed in that time interval.

You can use this chart to track the testing pace and evaluate the progress of completed cycles.

[[info | **NOTE**:]]
| Click **View All Closed Runs** to see the list of all closed test runs.

---

## **Results from Closed Test Runs**

This section displays a **Horizontal Stacked Bar Chart** summarizing the results of test cases from closed runs. Each bar represents the aggregated result set for a given period, categorized by status such as:
   
   - **Passed**
   
   - **Failed**
   
   - **Blocked**
   
   - **Skipped**
   
   - **Retest**
   
   - **In Progress**

You can use this chart to monitor the quality and success rate of test executions over time.

---

**Defects Logged**

This section displays a **Bar Chart** showing the number of defects logged over time. The chart distinguishes defect inflow across days or weeks, allowing you to evaluate trends in defect reporting.

You can use this chart to evaluate defect density and identify periods of high defect activity in test cycles.

---