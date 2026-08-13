---
title: 'Quality Intelligence Metrics'
page_title: 'Quality Intelligence Metrics'
metadesc: 'QI Home shows five metrics in the session header — Coverage, Pass Rate, Confidence, Release Readiness, and Release Gate — that together indicate how confident you can be in the build.'
description: 'Understand the five Quality Intelligence Metrics: Coverage, Pass Rate, Confidence, Release Readiness, and Release Gate.'
noindex: false
order: 13.29
page_id: 'qi-home-quality-intelligence-metrics'
warning: false
contextual_links:
  - type: section
    name: 'Contents'
  - type: link
    name: 'The Five Metrics'
    url: '#the-five-metrics'
  - type: link
    name: 'Coverage'
    url: '#coverage'
  - type: link
    name: 'Pass Rate'
    url: '#pass-rate'
  - type: link
    name: 'Confidence'
    url: '#confidence'
  - type: link
    name: 'Release Readiness'
    url: '#release-readiness'
  - type: link
    name: 'Release Gate'
    url: '#release-gate'
  - type: link
    name: 'Metric States Reference'
    url: '#metric-states-reference'
---

<br>

**Five metrics in the session header give you a real-time picture of how confident you can be in the current build.**

---

QI Home displays five metrics in the session header that together give you a real-time picture of how confident you can be in the current build. This page explains what each metric measures, when it becomes active, and how to interpret what you see.

---

## **The Five Metrics**

The metrics are displayed left to right in the session header in evaluation order. Each metric builds on the previous one: Coverage answers whether enough has been tested, Pass Rate answers whether what was tested is working, Confidence answers whether those results can be trusted, Release Readiness combines all three into a single score, and Release Gate converts that score into a decision.

<!-- screenshot: Session header showing all five QI metrics with their current values and band labels -->

---

## **Coverage**

Coverage measures how much of the generated test output you have accepted and approved for testing.

**Formula:** Accepted ÷ (Accepted + Pending) × 100

Pending includes AI-discovered gaps and test cases still in Pending status. Rejected test cases are excluded entirely and do not affect the calculation.

**When it appears:** Coverage is visible as soon as test cases are generated. It starts at 0% and updates in real time as you accept test cases.

**Bands:**

| Band | Threshold | Meaning |
| :--- | :--- | :--- |
| **Good** | ≥ 80% | Sufficient testing surface approved. |
| **Gap Risk** | 60% – 79% | Material untested surface. |
| **Critical Gap** | &lt; 60% | Majority of testing surface unaddressed. |

See [Coverage and Gaps](https://testsigma.com/docs/arcus/qi-home/coverage-and-gaps/) for the module-level breakdown.

---

## **Pass Rate**

Pass Rate measures how many of the test cases you executed actually passed.

**Formula:** Passed Units ÷ Executed Units × 100

A unit is one test case on one machine (for automated tests) or one test case (for manual tests). Each unit is counted once sprint-wide using its latest execution result. BLOCKED, FAIL, and SKIPPED results count as not passed. NOT RUN and IN PROGRESS results are excluded from the calculation.

**When it appears:** Pass Rate shows "Awaiting execution" until at least one test unit has been executed.

**Bands:**

| Band | Threshold | Meaning |
| :--- | :--- | :--- |
| **Healthy** | ≥ 90% | Production-ready quality. |
| **At Risk** | 75% – 89% | Material failures present. |
| **Blocked** | &lt; 75% | Build is fundamentally compromised. |

---

## **Confidence**

Confidence measures how much of your committed test scope was actually validated and how trustworthy those results are.

**Formula:** Trustworthy Weight ÷ Total Weight × 100

Total Weight is the sum of priority weights for all test units in the topmost generated test plan. Trustworthy Weight counts only units that are in the topmost generated plan, were executed in the topmost executed plan, and are not flagged as flaky. Priority weights: Critical = 3, High = 2, Medium/Low = 1.

**When it appears:** Confidence shows "Awaiting execution" until test runs have been executed.

**How it works in practice:** If the Runner Agent generated a Deep Regression plan but you only ran Smoke, Confidence reflects the gap. The 40 units you did not run are in the denominator but contribute zero to the numerator. The score reports honestly: "you committed to Regression-level validation but validated only Smoke." If you explicitly reject the higher plans and keep only Smoke, the scope adjusts and Confidence can reach 100%.

**Bands:**

| Band | Threshold | Meaning |
| :--- | :--- | :--- |
| **High** | ≥ 80% | Test signals are trustworthy. Validation scope mostly fulfilled. |
| **Medium** | 50% – 79% | Some reliability or completeness issues. Investigate before release. |
| **Low** | &lt; 50% | Significant trust or commitment-fulfillment issues. Pass Rate cannot be relied on. |

[[info | **NOTE**:]]
| Confidence depends on the nested test plan hierarchy. See [Test Plans](https://testsigma.com/docs/arcus/qi-home/test-plans/) for how the topmost generated and topmost executed plan affect this calculation.

---

## **Release Readiness**

Release Readiness is a 0 to 100 composite score that synthesizes the three evidence metrics into a single shippability indicator.

**Formula:** (Pass Rate × 0.40) + (Coverage × 0.25) + (Confidence × 0.35)

Release Readiness is N/A when any input metric is N/A. Once all three inputs are available, the score updates automatically.

**Why these weights:** Pass Rate carries the highest weight (0.40) because failures are the most direct signal that the build is broken. Confidence carries the second highest weight (0.35) because it acts as a trust modifier on Pass Rate and carries the validation-commitment signal. Coverage carries the lowest weight (0.25) because coverage gaps are known unknowns — less acute than active failures.

**When it appears:** Release Readiness shows "Awaiting execution" until Pass Rate and Confidence both have values.

**Bands:**

| Band | Threshold | Meaning |
| :--- | :--- | :--- |
| **Ready** | ≥ 80% | All quality dimensions are healthy on average. |
| **High Risk** | 60% – 79% | Material concerns. Release requires explicit risk acknowledgment. |
| **Not Ready** | &lt; 60% | Fundamental issues. Do not ship. |

---

## **Release Gate**

Release Gate is the final verdict. It runs a configurable rules engine on top of the metrics and produces one of three outcomes.

| State | Meaning |
| :--- | :--- |
| **GO** | All thresholds met. Safe to release without sign-off. |
| **CONDITIONAL GO** | Soft thresholds breached but no hard violations. Release is allowed with explicit sign-off from a QA Lead. |
| **NO-GO** | Hard thresholds breached. Release is blocked and cannot be overridden at the sprint level. |

The worst state across all five checks wins. If four checks pass GO and one check falls in NO-GO, the verdict is NO-GO.

**The five checks and default thresholds:**

| Check | GO | CONDITIONAL | NO-GO |
| :--- | :--- | :--- | :--- |
| **Pass Rate** | ≥ 95% | ≥ 90% and &lt; 95% | &lt; 90% |
| **Coverage** | ≥ 85% | ≥ 70% and &lt; 85% | &lt; 70% |
| **Confidence** | High (≥ 80%) | Medium (50% – 79%) | Low (&lt; 50%) |
| **Critical test failures** | 0 | 1 | &gt; 1 |
| **Critical flaky tests** | 0 | 1 | &gt; 1 |

**When it appears:** Release Gate shows "Pending Evaluation" until execution data is available for the threshold checks.

[[info | **NOTE**:]]
| All five checks and their thresholds are configurable per project. The defaults above match common enterprise QA standards. A project administrator can tighten or loosen any threshold to match your team's release requirements.

---

## **Metric States Reference**

| Metric | No test cases accepted | Test cases accepted, no runs | Runs executed |
| :--- | :--- | :--- | :--- |
| **Coverage** | 0% (all Pending) | Updates in real time | Updates in real time |
| **Pass Rate** | Awaiting execution | Awaiting execution | Shows % with band |
| **Confidence** | Awaiting execution | Awaiting execution | Shows % with band |
| **Release Readiness** | Awaiting execution | Awaiting execution | Shows 0–100 score with band |
| **Release Gate** | Pending Evaluation | Pending Evaluation | Shows GO / CONDITIONAL GO / NO-GO |

[[info | **PREREQUISITE**:]]
| You have at least one sprint or Ad-Hoc session with generated test cases. Coverage updates as you accept test cases. Pass Rate, Confidence, Release Readiness, and Release Gate require at least one completed test run.

---
