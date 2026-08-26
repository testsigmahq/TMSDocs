---
title: 'Set up the Arcus CLI'
page_title: 'Set up the Arcus CLI'
metadesc: 'Install and authenticate the Arcus CLI, set up the Claude Code plugin, and connect a device with Testsigma Terminal for local test execution.'
description: 'Install and authenticate the Arcus CLI, set up the Claude Code plugin, and connect a device with Testsigma Terminal for local test execution.'
noindex: false
order: 13.49
page_id: 'qi-home-set-up-arcus-cli'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Before you begin'
    url: '#before-you-begin'
  - type: link
    name: 'Install and authenticate the CLI'
    url: '#install-and-authenticate-the-cli'
  - type: link
    name: 'Install and authenticate the Claude Code plugin'
    url: '#install-and-authenticate-the-claude-code-plugin'
  - type: link
    name: 'Connect a device with Testsigma Terminal'
    url: '#connect-a-device-with-testsigma-terminal'
---

**Install the Arcus CLI, authenticate it, and connect a device, so Claude Code can validate and run Testsigma test cases on your machine. You do this once per machine.**

---

> ## **Before you begin**
> 
> This procedure requires:
> * Node.js and npm installed on your machine.
> * Claude Code installed. The latest version is recommended.
> * An Arcus account and a Testsigma account. The free tier is enough to write, validate, and push test cases.
> * An Android device, if you plan to run mobile test cases.

---

## **Install and authenticate the CLI**

1. Install the CLI globally.

   ```bash
   npm install -g @testsigma/arcus-cli
   ```

2. Authenticate the CLI against your Testsigma account.

   ```bash
   testsigma login
   ```

---

## **Install and authenticate the Claude Code plugin**

Install the plugin, run **/arcus:login**, then set your active project with **/arcus:project**. See [Connect Claude Code](https://testsigma.com/docs/test-management/qi-home/context-mapping/connect-claude-code/) for the steps. The active project determines which project your test cases are pushed into, so set it before you push.

[[info | **NOTE**:]]
| There are two separate logins and you need both. **testsigma login** authenticates the CLI so it can run test cases and report results. **/arcus:login** authenticates the plugin so Arcus can capture your context and use it for test generation. No data reaches Arcus until you run **/arcus:push**.

---

## **Connect a device with Testsigma Terminal**

Complete this section if you plan to run Android mobile test cases.

1. Download and install Testsigma Terminal.

2. Open Testsigma Terminal.

3. In the configuration settings, select **Modern**.

4. Log in to Testsigma Terminal.

5. Connect your Android device. The device appears in Testsigma Terminal.

[[info | **NOTE**:]]
| Connect the device before you ask Claude Code to run a test case. A run cannot start without a connected device.

---
