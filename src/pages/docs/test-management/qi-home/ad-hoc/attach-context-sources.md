---
title: 'Attach Context Sources'
page_title: 'Attach Context Sources'
metadesc: 'Attach context sources such as Jira, Confluence, Figma, files, and video recordings so Atto generates test cases that accurately reflect your feature.'
description: 'Learn how to attach context sources in the Playground before generating test cases with Atto.'
noindex: false
order: 13.21
page_id: 'qi-home-attach-context-sources'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Open the Playground'
    url: '#open-the-playground'
  - type: link
    name: 'Attach Jira Requirements'
    url: '#attach-jira-requirements'
  - type: link
    name: 'Attach Confluence Pages'
    url: '#attach-confluence-pages'
  - type: link
    name: 'Attach Figma Designs'
    url: '#attach-figma-designs'
  - type: link
    name: 'Attach Files and Documents'
    url: '#attach-files-and-documents'
  - type: link
    name: 'Attach a Video Recording'
    url: '#attach-a-video-recording'
  - type: link
    name: 'Manage Attached Context'
    url: '#manage-attached-context'
---

<br>

**Give Atto the right context and it generates test cases that accurately reflect your feature.**

---

Context sources are the inputs Atto reads before generating test cases. The more relevant your context, the more accurate and complete the output. You can attach context from your project management tools, design files, images, videos, and documents, all in the same session.

You attach context sources inside the Playground, before writing a prompt and triggering generation. You can attach from multiple sources in a single session and add or remove sources any time before clicking **Generate with AI**.

---

> ## **Prerequisites**
>
> Before you begin, ensure that:
> - You have an active project in Arcus by Testsigma.
> - The integrations for the tools you want to attach context from are connected to your project.
> - The files or documents you want to attach are available on your device.

---

## **Open the Playground**

1. From the left navigation, go to **QI Home**.

2. The **Adhoc** tab opens by default.

   <!-- screenshot: QI Home Ad-Hoc empty state showing the "Generate with Atto" button -->

3. Click **Generate with Atto**. The Playground opens.

   <!-- screenshot: Playground empty state, "What would you like to test?" with Add Context bar at bottom -->

The Playground shows a prompt input area with an **Add Context** bar at the bottom. The bar shows quick-access buttons for connected sources — **Jira**, **Azure DevOps**, **Linear**, **ClickUp**, **Confluence** — and a **+** button that reveals all available sources including Figma, Files and Documents, and Video Recording.

---

## **Attach Jira Requirements**

1. In the **Add Context** bar, click **Jira**. The **Add Context** dialog opens with the Jira panel active.

   <!-- screenshot: Add Context dialog showing the Jira panel with Project and Issue Type fields -->

2. The **Project** field shows your connected Jira project. If you have multiple projects connected, select the one you want.

3. The **Issue Type** defaults to **Story**. Change it if you want to pull in **Epics** or other **Issue Types**.

4. In the stories list, select the checkboxes next to the stories you want Atto to use as context.

[[info | **NOTE**:]]
| Use the **Search** icon at the top of the stories list to find specific stories by title or ID.

5. Click **Save**.

---

## **Attach Azure DevOps, Linear, or ClickUp Work Items**

The flow for Azure DevOps, Linear, and ClickUp follows the same pattern as Jira.

1. In the **Add Context** bar, click the source you want — **Azure DevOps**, **Linear**, or **ClickUp**.

2. Select your **Project** and the relevant **Work Item Type**.

3. Select the items from the list.

4. Click **Save**.

---

## **Attach Confluence Pages**

1. In the **Add Context** bar, click **Confluence**.

2. Select the **Space** you want to pull pages from.

3. Select the **Pages** you want Atto to read.

4. Click **Save**.

[[info | **NOTE**:]]
| Confluence pages work best for PRDs, feature specifications, and release notes.

---

## **Attach Figma Designs**

1. In the **Add Context** bar, click **+** and select **Figma**.

   <!-- screenshot: Add Context dialog showing the Figma panel -->

2. Select the **Team** from the dropdown.

3. Select the **Project**.

4. Select the **Figma design file**.

5. Select the **Page** you want to pull frames from.

6. Click **+ Select Frames**. A frame picker opens showing all available frames on that page.

[[info | **NOTE**:]]
| You can select a maximum of 20 frames per session. If the page has no sections defined, only the first 20 frames are shown for selection.

   <!-- screenshot: Figma frame selection showing available frames with Select Frames button -->

7. Select the frames you want and click **Save**.

---

## **Attach Files and Documents**

Files and Documents lets you upload PRDs, design specs, screenshots, or any supporting document.

1. In the **Add Context** bar, click **+** and select **Files and Documents**.

2. Drag and drop your files into the upload area, or click **Browse** to select files from your device.

   Additional info:

   - Supported file types: **.jpeg**, **.png**, **.docx**, **.pdf**, **.xls**, **.ppt**
   - Maximum total size: **500 MB**

3. Uploaded files appear in a list with their name and size. Click **x** next to any file to remove it.

4. Click **Save**. A **Files and Documents** badge appears in the prompt input showing the number of files attached.

[[info | **NOTE**:]]
| To add more files after your initial upload, click **+ Add Files** in the top right of the Files and Documents panel.

---

## **Attach a Video Recording**

Video Recording follows the same upload flow as Files and Documents.

1. In the **Add Context** bar, click **+** and select **Video Recording**.

2. Drag and drop your video file into the upload area, or click **Browse**.

3. Click **Save**.

---

## **Manage Attached Context**

After saving a source, it appears as a badge at the top of the prompt input showing the source name and item count, for example, **Jira 5, Confluence 3** or **Files and Documents 5**.

- **To add more context**, click any source in the **Add Context** bar or click **+** for sources not shown.
- **To edit existing context**, click the badge for that source. The dialog reopens with your previous selections loaded. Make your changes and click **Save**.
- **To remove all context from a source**, reopen the dialog for that source, deselect all items, and click **Save**. The badge disappears from the prompt input.

[[info | **NOTE**:]]
| Context is not saved between sessions. Each new Ad-Hoc session starts with no context attached.

With context attached, the next step is to write your prompt. See [Write Effective Prompts](https://testsigma.com/docs/test-management/qi-home/ad-hoc/write-effective-prompts/).

---
