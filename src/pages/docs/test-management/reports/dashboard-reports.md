---
title: 'Reports in Dashboard View'
page_title: 'Reports in Dashboard View in Test Management by Testsigma'
metadesc: 'The Dashboard view in Test Management by Testsigma gives real-time test metrics. Learn how to track progress, monitor test health, & identify defects from Dashboard'
noindex: false
order: 12.3
page_id: 'view-dashboard-reports-in-testsigma-test-management'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Interactive Demo'
    url: '#interactive-demo'
  - type: link
    name: 'Filters'
    url: '#filters'
  - type: link
    name: 'Active Runs'
    url: '#active-runs'
  - type: link
    name: 'Closed Test Runs'
    url: '#closed-test-runs'
  - type: link
    name: 'Results from Closed Test Runs'
    url: '#results-from-closed-test-runs'
  - type: link
    name: 'Defects Logged'
    url: '#defects-logged'
  - type: link
    name: 'Export Reports'
    url: '#export-reports'
---

<br>

**Get a complete view of your test status, defects, and coverage in one place.**

---

The Dashboard in Test Management by Testsigma displays real-time test metrics. It allows you to track progress, monitor test health, and identify defects, all from a single screen, without navigating to detailed reports.

These charts dynamically update based on selected filters, such as date range and assignee. This enables you to view data filtered by specific date ranges and individual users. This article discusses the reports section in the Dashboard.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(57.41% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/2ir99fyzygsz?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

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

This section displays a **Stacked Bar Chart** summarizing the results of test cases from closed runs. Each bar represents the aggregated result set for a given period, categorized by status such as:

- **Passed**

- **Failed**

- **Blocked**

- **Skipped**

- **Retest**

- **In Progress**

You can use this chart to monitor the quality and success rate of test executions over time.

---

## **Defects Logged**

This section displays a **Bar Chart** showing the number of defects logged over time. The chart distinguishes defect inflow across days or weeks, allowing you to evaluate trends in defect reporting.

You can use this chart to evaluate defect density and identify periods of high defect activity in test cycles.

---

## **Export Reports**

1. On the **Dashboard**, apply the necessary filters, and click **Export**.

   For more information about applying filters, see [Filters](https://testsigma.com/docs/test-management/reports/dashboard-reports/#filters).

2. In the **Export Report as PDF** dialog box, enter a name, and click **Download PDF**.

3. The system downloads the report as a PDF file.

---