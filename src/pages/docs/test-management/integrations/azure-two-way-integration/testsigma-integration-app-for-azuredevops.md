---
title: 'Testsigma Integration App for Azure DevOps'
page_title: 'Testsigma Integration App for Azure DevOps'
metadesc: 'Testsigma Integration for Azure DevOps enables native test management, linking test cases, runs, and results with work items for seamless traceability.'
noindex: false
order: 10.21
page_id: 'testsigma-app-for-azure_devops'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Connect TMS to Azure DevOps'
    url: '#connect-tms-to-azure-devops'
  - type: link
    name: 'Install the Azure DevOps Extension'
    url: '#install-the-azure-devops-extension'
  - type: link
    name: 'Authorize in Azure DevOps'
    url: '#authorize-in-azure-devops'
  - type: link
    name: 'Link Azure Project in TMS'
    url: '#link-azure-project-in-tms'

---

<br>

**You can create, run, and manage your tests inside Azure DevOps. Just like you do in Test Management by Testsigma.**

---

The Testsigma Integration for Azure DevOps seamlessly extends Azure DevOps capabilities to include native test management. This enables teams to create, manage, and track test cases and test runs directly within the Azure DevOps environment, without switching to Test Management by Testsigma. You can associate test results with work items, streamline pipelines, and maintain end-to-end traceability within Azure Boards and Repos. The integration accelerates testing cycles and enhances collaboration between QA and development teams from a unified workspace.

---

> ## **Prerequisites**
> 
> Before you begin, ensure that you have an active Azure DevOps account with the necessary permissions.

---

## **Connect TMS to Azure DevOps**

1. Log in to your Test Management by Testsigma account.

2. From the left navigation bar, navigate to **Settings > Integrations**.
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_azure_1.png)

3. In the Integrations screen, click **Setup Integration** against **Azure DevOps**. 
![Azure DevOps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_azure_2.png)

4. Follow the OAuth-based authorization steps to connect Azure DevOps with Test Management by Testsigma.

---

## **Install the Azure DevOps Extension**

1. Open the [Azure DevOps Marketplace](https://marketplace.visualstudio.com/items?itemName=testsigma.testsigma-azure-devops).

2. Search for **Test Management by Testsigma**.

3. Install the extension in your Azure DevOps organization.
![Install TMS by Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_azure_3.png)

---

## **Authorize in Azure DevOps**

1. In **Azure DevOps**, navigate to the **Testsigma** project.
![Testsigma Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_azure_4.png)

2. Go to **Project Settings > Extensions**.
![Extensions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_azure_5.png)

3. Click **Testsigma for Azure DevOps**.
![Testsigma for Azure Devops](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_azure_6.png)

4. Click **Authorize Azure DevOps Extension** and complete the authorization with Test Management by Testsigma.
![Authorize Azure DevOps Extension](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_azure_7.png)

---

## **Link Azure Project in TMS**

1. Return to TMS.

2. Navigate to **Project Settings**.
![Project Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_azure_8.png)

3. In the **Project Settings** screen, click **Edit**.
![Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_azure_9.png)

4. In the **Project Overview** overlay, under **Project Management Tool**, click **Link Azure Project**, and click **testsigma**.
![Link Azure Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_azure_10.png)

5. Click **Update Details**. 
![Update Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/azure_devops/tms_azure_11.png)

---