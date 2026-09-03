---
title: 'Arcus CLI'
page_title: 'Arcus CLI'
metadesc: 'How the Arcus CLI validates and runs Testsigma test cases on your machine, what you install, and where local execution fits in QI Home.'
description: 'How the Arcus CLI validates and runs Testsigma test cases on your machine, what you install, and where local execution fits in QI Home.'
noindex: false
order: 13.48
page_id: 'qi-home-arcus-cli-overview'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'What you install'
    url: '#what-you-install'
  - type: link
    name: 'Where the CLI fits'
    url: '#where-the-cli-fits'
  - type: link
    name: 'In this section'
    url: '#in-this-section'
---

The **Arcus CLI** validates Testsigma test cases and runs them on your own machine, in the repository you are working in.

You run the CLI directly twice: once to install it, once to authenticate it. After that you work through Claude Code, which writes the test cases and calls the CLI to validate and run them.

---

## **What you install**

Local test execution uses three components, each installed separately.

* **Arcus CLI**: Validates test case syntax and runs test cases on your browser or connected device.
* **Arcus plugin for Claude Code**: Where you run Arcus commands. It writes test cases, triggers runs, and pushes context to QI Home.
* **Testsigma Terminal**: Connects your device to Testsigma so test cases can run on it. Required for Android mobile test cases.

The CLI runs web test cases and Android mobile test cases. See [Set up the Arcus CLI](https://testsigma.com/docs/test-management/qi-home/arcus-cli/set-up-the-arcus-cli/) for the steps.

---

## **Where the CLI fits**

Test cases you write locally and test cases Atto generates from pushed developer context are created in the same project and feed the same Quality Intelligence Metrics. The CLI covers writing and running test cases on your machine. Review, coverage, test plans, and metrics happen in QI Home.

---

## **In this section**

* [Set up the Arcus CLI](https://testsigma.com/docs/test-management/qi-home/arcus-cli/set-up-the-arcus-cli/): Install and authenticate the CLI, and connect a device with Testsigma Terminal.
* [Write and run tests locally](https://testsigma.com/docs/test-management/qi-home/arcus-cli/write-and-run-tests-locally/): Write test cases with Claude Code, validate them, run them, and convert existing Playwright or Selenium scripts.

> ## **Additional Info**
> 
> Plugin installation, mapping context to a sprint, and pushing context to QI Home are covered in [Connect Claude Code](https://testsigma.com/docs/test-management/qi-home/context-mapping/connect-claude-code/).

---
