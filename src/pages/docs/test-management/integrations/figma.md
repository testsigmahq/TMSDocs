---
title: "Figma Integration with Testsigma Test Management 🔗"
page_title: "Figma Integration with Testsigma"
metadesc: "Generate test cases directly from Figma designs in Testsigma | Ensure design-to-test alignment and accelerate test creation by converting UI elements into test steps."
noindex: false
order: 8.2
page_id: "figma-integration-with-testsigma-test-management"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Prerequisites Details for Figma Integration"
  url: "#Prerequisites Details for Figma Integration"
- type: link
  name: "Integrate Figma"
  url: "#integrate-figma"
---

---

Testsigma lets you generate test cases directly from your Figma designs. This helps ensure design-to-test alignment and accelerates test case creation by converting UI elements into actionable test steps.

---

> ## **Prerequisites**
> 
> Before you begin, ensure you have a project created in Testsigma Test Management and have integrated your Figma account. 

---

## **Prerequisites Details for Figma Integration** 

### **Getting Team ID in Figma**

1. Open **Figma** application in a web browser.

2. In the left navigation bar, select the team from the dropdown menu.

3. In the address bar, locate the URL in the following format:

   > https://www.figma.com/files/team/{TEAM_ID}/your-team-name
   > 
   > The **{TEAM_ID}** in the URL is your Figma Team ID.

[[info | **NOTE**:]]
| If you don’t have access to the team page, contact your Admin to get the **Team ID**.

### **Generating a Personal Access Token in Figma**

1. Open **Figma** in a web browser.

2. In the top-right corner, click your profile icon, and then select **Settings**.

3. Navigate to **Security > Personal access tokens** section.

4. Click **Generate new token**.

5. In the **Generate new token** dialog, enter a **Token name**.

6. From the **Expiration** dropdown, select an expiration period

7. Click **Generate token**.

8. Click **Copy** this token to copy the key.

[[info | **NOTE**:]]
| Store the token securely. You won’t be able to view it again.

---

## **Integrate Figma** 

1. On the **Dashboard**, click **Integrations**. This opens the **Integrations** section under **Settings**.

2. Click **Setup Integration** next to the **Figma** icon.

3. On the **Integrate Figma** prompt, 
      
      - Enter the **Team ID** and **API Key**. 
      
      - Click **Connect** to complete the integration.

---