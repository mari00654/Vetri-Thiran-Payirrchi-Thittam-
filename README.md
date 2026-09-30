# Implement Client Script & UI Policy (Incident)

> A ServiceNow micro project that uses **UI Policies** and **Client Scripts** to enforce data integrity on **Incident** records.

| | |
| --- | --- |
| **Team ID** | SWTID-2026-5353 |
| **Date** | 30 September 2026 |
| **Platform** | ServiceNow (Personal Developer Instance) |
| **Table** | Incident `[incident]` |

## Overview
Incident records need consistent and accurate data for triage, routing and resolution. This project enforces conditional field behaviour and save-time validation **directly on the form**, so that High-impact incidents cannot be submitted with missing information.

| Component | Type | Behaviour |
| --- | --- | --- |
| High Impact Control | UI Policy (Impact is 1 - High) | Makes **Assignment group** mandatory; reverses when condition is false |
| Urgency action | UI Policy Action | Makes **Urgency** read-only while Impact is High |
| Auto set urgency for high impact | Client Script (onChange, `impact`) | Sets Urgency to 1 - High and shows an info message |
| Prevent save if Assigned To missing | Client Script (onSubmit) | Blocks save when Impact = High and Assigned To is empty |
| Prevent state change via list edit | Client Script (onCellEdit, `state`) | Blocks editing State directly from the list |

## Repository Structure
```
.
├── README.md
├── 1. Ideation Phase/
├── 2. Requirement Analysis/
├── 3. Project Design Phase/
├── 4. Project Planning Phase/
├── 5. Project Development Phase/
├── 6. Project Documentation/
├── 7. Project Demonstration/
├── scripts/                 # client script source code
└── images/                  # screenshots used across the documents
```

## Phase-wise Documentation
| Phase | Documents |
| --- | --- |
| 1. Ideation | [Empathy Map](<1. Ideation Phase/Empathy Map Canvas.md>) · [Problem Statements](<1. Ideation Phase/Define Problem Statements.md>) · [Brainstorming & Prioritization](<1. Ideation Phase/Brainstorming and Idea Prioritization.md>) |
| 2. Requirement Analysis | [Customer Journey Map](<2. Requirement Analysis/Customer Journey Map.md>) · [Solution Requirements](<2. Requirement Analysis/Solution Requirements.md>) · [Data Flow Diagram & User Stories](<2. Requirement Analysis/Data Flow Diagram and User Stories.md>) · [Technology Stack](<2. Requirement Analysis/Technology Stack.md>) |
| 3. Project Design | [Problem-Solution Fit](<3. Project Design Phase/Problem Solution Fit.md>) · [Proposed Solution](<3. Project Design Phase/Proposed Solution.md>) · [Solution Architecture](<3. Project Design Phase/Solution Architecture.md>) |
| 4. Project Planning | [Project Planning](<4. Project Planning Phase/Project Planning.md>) |
| 5. Project Development | [Functional & Performance Testing](<5. Project Development Phase/Functional and Performance Testing.md>) · [UAT Report](<5. Project Development Phase/UAT Report.md>) |
| 6. Project Documentation | [Project Documentation](<6. Project Documentation/Project Documentation.md>) · [Final Report](<6. Project Documentation/Final Report.md>) |
| 7. Project Demonstration | [Demonstration](<7. Project Demonstration/README.md>) |

## Quick Setup
1. Log in to your ServiceNow instance with admin access.
2. Create the UI Policy and UI Policy Actions (see [Project Documentation](<6. Project Documentation/Project Documentation.md>)).
3. Create the three Client Scripts using the code in [`scripts/`](scripts).
4. Test using the cases in the [UAT Report](<5. Project Development Phase/UAT Report.md>).

## Team
| Team ID | Members |
| --- | --- |
| SWTID-2026-5353 | _Add team member names and roles_ |
