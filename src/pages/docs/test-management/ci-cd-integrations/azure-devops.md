---
title: 'Azure DevOps Integration with Test Management'
page_title: 'Azure DevOps Integration with Test Management by Testsigma'
metadesc: 'Integrate Azure DevOps with TMS by Testsigma to automate test executions & generate test reports through CI/CD pipelines | Azure DevOps Integration with TMS by Testsigma'
noindex: false
order: 14.2
page_id: 'azure-devOps-integration-with-test-management-by-testsigma'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Configuring azure-pipelines.yml File'
    url: '#configuring-azure-pipelinesyml-file'
  - type: link
    name: 'Trigger a Build in Azure DevOps'
    url: '#trigger-a-build-in-azure-devops'
---

<br>

**Integrate Azure DevOps with Test Management by Testsigma and automate your test runs and generate test reports.**

---

Integrate Azure DevOps with Test Management by Testsigma to automate test executions and generate test reports through CI/CD pipelines. This article discusses integrating Azure DevOps with Test Management by Testsigma.

---

> ## **Prerequisites**
> 
> Before you begin, ensure:
> - A Project is created in Test Management by Testsigma and test runs are available.
> - An Azure DevOps pipeline is configured.

---

## **Configuring azure-pipelines.yml File**

1. In **Azure DevOps**, open your pipeline.

2. Click **Edit** in the top-right corner.

3. Replace the contents of the `azure-pipelines.yml` file with the following YAML:
    ```yaml
    trigger:
    - master

    pool:
    vmImage: ubuntu-latest

    variables:
    TESTSIGMA_API_TOKEN: $(TESTSIGMA_API_TOKEN)

    steps:
    # 🔧 Step 1: Build Using Maven and Generate Test Report
    - task: Maven@3
    inputs:
        mavenPomFile: 'pom.xml'
        mavenOptions: '-Xmx3072m'
        javaHomeOption: 'JDKVersion'
        jdkVersionOption: '1.8'
        jdkArchitectureOption: 'x64'
        publishJUnitResults: true
        testResultsFiles: '**/surefire-reports/TEST-*.xml'
        goals: 'package'
    continueOnError: true
    displayName: '🔨 Build and Test with Maven'

    # 📤 Step 2: Upload JUnit Result to Testsigma Using CURL
    - bash: |
        echo "Uploading JUnit results to Testsigma..."
        curl --location 'https://test-management.testsigma.com/api/v1/projects/<Project_ID>/junit-import/test-run/<Run_ID>' \
        --header "Authorization: Bearer $TESTSIGMA_API_TOKEN" \
        --form "junit_xml=@target/report.xml"
    env:
        TESTSIGMA_API_TOKEN: $(TESTSIGMA_API_TOKEN)
    displayName: '📤 Upload Test Results to Testsigma'
    ```


[[info | **NOTE**:]]
| Before triggering this build, make the following updates:
|    - Replace `<Project_ID>` in the curl command with your Project ID, which you can retrieve using the Test Management by Testsigma APIs.
|    - Replace `<Run_ID>` in the curl command with the Run ID, which is available in the URL when viewing a test run in the format: `https://test-management.testsigma.com/ui/test_runs/<Run_ID>/`
|    - Replace `<JUnit_Report_File>` with the actual path to your JUnit XML report file. You can find this in your surefire-reports directory.

---

## **Trigger a Build in Azure DevOps**

1. In your **Azure DevOps** pipeline, click **Run pipeline**.

2. After the build completes, the test run in Test Management by Testsigma is automatically updated with the test execution results.

---
