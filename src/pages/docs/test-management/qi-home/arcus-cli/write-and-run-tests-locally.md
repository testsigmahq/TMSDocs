---
title: 'Write and run tests locally'
page_title: 'Write and run tests locally'
metadesc: 'Write Testsigma test cases with Claude Code, validate them with the Arcus CLI, and run them locally on a browser or connected device.'
description: 'Write Testsigma test cases with Claude Code, validate them with the Arcus CLI, and run them locally on a browser or connected device.'
noindex: false
order: 13.50
page_id: 'qi-home-write-and-run-tests-locally'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Write test cases for your repository'
    url: '#write-test-cases-for-your-repository'
  - type: link
    name: 'Run test cases locally'
    url: '#run-test-cases-locally'
  - type: link
    name: 'Convert existing Playwright or Selenium scripts'
    url: '#convert-existing-playwright-or-selenium-scripts'
---

**Ask Claude Code to write Testsigma test cases for the repository you are working in, validate them with the Arcus CLI, and run them on a browser or connected device.**

Complete [Set up the Arcus CLI](https://testsigma.com/docs/test-management/qi-home/arcus-cli/set-up-the-arcus-cli/) and [Connect Claude Code](https://testsigma.com/docs/test-management/qi-home/context-mapping/connect-claude-code/) first. For Android mobile test cases, connect your device in Testsigma Terminal before you start.

---

## **Write test cases for your repository**

1. Open Claude Code from your project directory.

2. Run **/arcus:test**, or ask Claude Code for Testsigma test cases in plain language. Claude Code writes code-based test cases and includes the element locators it detects in your source.

3. Review the test cases Claude Code writes.

4. Read the validation output. The CLI validates each test case offline and reports errors without running the test case.

---

## **Run test cases locally**

1. Confirm your browser or device is available.

2. Accept the run when Claude Code offers to run the validated test cases.

3. Read the pass and fail results in the output.

[[info | **NOTE**:]]
| Test cases stay on your machine until you push them. Running a test case locally does not create it in Arcus.

---

## **Convert existing Playwright or Selenium scripts**

If you already have a Playwright or Selenium suite, ask Claude Code to convert those scripts into Testsigma test cases instead of writing them again. The CLI validates the output and reports what did not translate.

1. Open Claude Code from the directory that holds your existing scripts.

2. Ask Claude Code to convert the scripts to Testsigma test cases.

3. Read the validation output for translation errors.

### **Check each converted test case for:**

* **Custom helpers and page objects**: These may need restructuring.
* **Waits, retries, and assertions**: Playwright and Selenium forms differ from Testsigma's.
* **Hard-coded test data and environment values**: Move these into test data profiles and environments.
* **Steps that act outside the application under test**: Review these individually.


---