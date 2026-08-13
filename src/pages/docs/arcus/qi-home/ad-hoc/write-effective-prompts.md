---
title: 'Write Effective Prompts'
page_title: 'Write Effective Prompts'
metadesc: 'The quality of your prompt determines the quality of the Generator Agent output. Learn how to write clear, specific prompts that generate accurate, relevant test cases.'
description: 'Learn how to write effective prompts that generate accurate test cases with the Generator Agent.'
noindex: false
order: 13.22
page_id: 'qi-home-write-effective-prompts'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'Prerequisites'
    url: '#prerequisites'
  - type: link
    name: 'Where to Write Your Prompt'
    url: '#where-to-write-your-prompt'
  - type: link
    name: 'What Makes a Good Prompt'
    url: '#what-makes-a-good-prompt'
  - type: link
    name: 'Prompt Checklist'
    url: '#prompt-checklist'
  - type: link
    name: 'Prompt Templates'
    url: '#prompt-templates'
  - type: link
    name: 'Tips for Better Prompts'
    url: '#tips-for-better-prompts'
---

<br>

**The quality of your prompt determines the quality of the Generator Agent's output.**

---

Prompts are how you tell the Generator Agent what to test. A well-written prompt gives it the goal, the context, and the constraints it needs to generate test cases that are accurate and relevant. Vague prompts produce generic test cases. Specific prompts produce test cases that match your feature.

This article covers how to write prompts that get you the right test cases the first time.

---

> ## **Prerequisites**
>
> Before you begin, ensure that:
> - The Playground is open with context attached. See [Attach Context Sources](https://testsigma.com/docs/arcus/qi-home/ad-hoc/attach-context-sources/) if you have not done this yet.

---

## **Where to Write Your Prompt**

The prompt input area is the large text field in the center of the Playground, below the heading **What would you like to test?**

<!-- screenshot: Playground showing the prompt input area with placeholder text -->

Type your prompt directly into this field. Attached context sources appear as badges above the input. Once your prompt is ready, click **Generate with AI** to start test case generation.

---

## **What Makes a Good Prompt**

Think of your prompt like a well-written test case title or a bug report. It needs to be clear, specific, and actionable. Vague prompts produce generic test cases. Specific prompts produce test cases that match your feature.

Use the **WHO + WHAT + WHY + HOW + EXAMPLES** model to structure your prompt:

| Element | Description | Example |
| :--- | :--- | :--- |
| **WHO** | User role or system under test | "As a registered user…" |
| **WHAT** | Feature or action being tested | "…resetting a password…" |
| **WHY** | Purpose or expected behavior | "…to ensure expired tokens are handled." |
| **HOW** | Constraints, variations, platforms | "Include 2FA and expired token scenarios." |
| **EXAMPLES** | Seed inputs or expected outputs | "E.g., the token expires after 10 minutes." |

You do not need to use all five elements every time. Start with WHAT and add the others based on the complexity of the feature you are testing.

---

## **Prompt Checklist**

Before clicking **Generate with AI**, run through this checklist:

- **Goal**: Have you stated what you want the Generator Agent to generate?
- **Context**: Have you described the feature, flow, or user story?
- **Inputs**: Have you attached the relevant stories, files, and designs?
- **Edge Cases**: Have you called out tricky or high-risk conditions to include?

If all four are covered, you are ready to generate.

---

## **Prompt Templates**

Use these templates as a starting point. Copy, edit, and paste into the Playground.

### **Template 1: Feature Workflow**

**Goal:** Generate test cases for [feature or process].

**What I Have:** [User roles or types] [Interaction methods or entry points] [Supporting features or integrations]

**What I Want:** Cover [all combinations / edge cases / failure scenarios / retries]. Include [validation / exception handling / third-party behavior].

**Expected Outcomes:** [Comprehensive coverage / error handling / reliability / user messaging]

**Example using this template:**

Goal: Generate test cases for an e-commerce checkout process.

What I Have:

- Guest and logged-in users
- Payment methods: Credit Card, UPI, Wallet, Cash on Delivery
- Coupon application and address validation
- Order confirmation via email and SMS

What I Want:

- Cover all user types and payment combinations
- Include payment failures, coupon misuse, and invalid addresses
- Validate order confirmation triggers

Expected Outcomes:

- Thorough coverage of all checkout variations
- Graceful handling of failures and retries
- Reliable confirmation notifications and user feedback

### **Template 2: Transactional Feature**

**Goal:** Generate test cases for [banking or financial features].

**What I Have:** [Transaction modes or account types] [User roles] [Limits, authentication methods, schedules]

**What I Want:** Test all valid transaction paths. Include invalid inputs, failed authentication, and limit breaches. Check for audit trails and user notifications.

**Expected Outcomes:** High-confidence coverage of transaction logic. Secure, validated, and compliant flows. Complete visibility into failures and success tracking.

**Example using this template:**

Goal: Generate test cases for the funds transfer feature in a banking app.

What I Have:

- Transfer modes: NEFT, IMPS, RTGS
- Users: Retail and Corporate
- Daily and per-transaction transfer limits
- 2FA with OTP and beneficiary validation

What I Want:

- Cover all transfer modes with different limits
- Include failures due to OTP mismatch, invalid IFSC, and expired sessions
- Check logs and notifications for every success and failure

Expected Outcomes:

- Accurate validation of fund transfers and limit checks
- Secure handling of authentication failures and retries
- Auditable and user-notified transaction outcomes

### **Template 3: Booking and Scheduling**

**Goal:** Generate test cases for [booking or scheduling feature].

**What I Have:** [User types: guest, registered] [Booking types and variations] [Payment methods, policies, modification rules]

**What I Want:** Test booking and modification flows across all types. Include failures in input validation, payment, and rescheduling logic. Cover scenarios around eligibility and penalties.

**Expected Outcomes:** Full validation of booking and post-booking changes. Smooth error recovery for user actions and system failures. User clarity through pricing, penalties, and confirmation messages.

**Example using this template:**

Goal: Generate test cases for flight booking and rescheduling.

What I Have:

- User types: Guest and Registered
- Flight types: One-way, Round-trip, Multi-city
- Payment via Cards and Travel Points
- Free reschedule within 24 hours, fee after that

What I Want:

- Test each flight type for both user roles
- Include incorrect passport data, payment timeouts, and invalid rebooking
- Check eligibility and behavior for free vs. fee-based changes

Expected Outcomes:

- Clear, working flows for bookings and updates
- Reliable enforcement of rescheduling rules
- Accurate pricing, refund, and confirmation at every step

---

## **Tips for Better Prompts**

- **Use personas.** "As a mobile user on a slow connection…" gives the Generator Agent relevant constraints that affect test design.
- **Reference your context.** If you have attached Jira stories, mention the story IDs in the prompt. For example: "Generate test cases for AUTOM-3 and AUTOM-4, focusing on the OAuth login flow."
- **Call out what matters most.** If security, performance, or accessibility is a priority for this feature, say so explicitly.
- **Iterate.** If the first generation does not cover everything you need, open the Playground and refine the prompt with additional context or more specific constraints.

When your prompt is ready, see [Generate Test Cases](https://testsigma.com/docs/arcus/qi-home/ad-hoc/generate-test-cases/).

---
