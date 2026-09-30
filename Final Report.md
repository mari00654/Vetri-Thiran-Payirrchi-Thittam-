# Project Report

**Team ID:** SWTID-2026-5353  |  **Date:** 30 September 2026  |  **Project:** Implement Client Script & UI Policy (Incident)

## 1. Introduction
### 1.1 Project Overview
Incident records need complete and accurate data for triage, routing and resolution. This micro project demonstrates how ServiceNow **UI Policies** and **Client Scripts** enforce data integrity at the form level by making fields mandatory, auto-populating values, controlling field behaviour and preventing submission when conditions are not met.

### 1.2 Purpose
Ensure Incidents are created with valid information, improving data quality, reporting accuracy and SLA compliance.

## 2. Ideation Phase
- **2.1 Problem Statement:** [Define Problem Statements](<../1. Ideation Phase/Define Problem Statements.md>)
- **2.2 Empathy Map Canvas:** [Empathy Map](<../1. Ideation Phase/Empathy Map Canvas.md>)
- **2.3 Brainstorming:** [Brainstorming](<../1. Ideation Phase/Brainstorming and Idea Prioritization.md>)

## 3. Requirement Analysis
- **3.1 Customer Journey Map:** [Journey Map](<../2. Requirement Analysis/Customer Journey Map.md>)
- **3.2 Solution Requirement:** [Requirements](<../2. Requirement Analysis/Solution Requirements.md>)
- **3.3 Data Flow Diagram:** [DFD & User Stories](<../2. Requirement Analysis/Data Flow Diagram and User Stories.md>)
- **3.4 Technology Stack:** [Tech Stack](<../2. Requirement Analysis/Technology Stack.md>)

## 4. Project Design
- **4.1 Problem Solution Fit:** [Fit](<../3. Project Design Phase/Problem Solution Fit.md>)
- **4.2 Proposed Solution:** [Solution](<../3. Project Design Phase/Proposed Solution.md>)
- **4.3 Solution Architecture:** [Architecture](<../3. Project Design Phase/Solution Architecture.md>)

## 5. Project Planning & Scheduling
- **5.1 Project Planning:** [Planning](<../4. Project Planning Phase/Project Planning.md>) - 2 sprints, 16 story points, velocity 8.

## 6. Functional and Performance Testing
- **6.1 Performance Testing:** [Testing](<../5. Project Development Phase/Functional and Performance Testing.md>) and [UAT Report](<../5. Project Development Phase/UAT Report.md>) - 8 of 8 test cases passed.

## 7. Results
### 7.1 Output Screenshots
**Save blocked when Assigned To is empty (Impact = High)**
![](../images/10-test-mandatory-error.jpg)

**Successful save with Assigned To filled; Urgency locked**
![](../images/11-test-successful-save.jpg)

**Reverse condition: Impact changed to Medium**
![](../images/12-test-reverse-condition.jpg)

**List edit of State blocked with an alert**
![](../images/14-list-edit-alert.jpg)

**State updated successfully from the form**
![](../images/15-form-state-update.jpg)

## 8. Advantages & Disadvantages
| Advantages | Disadvantages |
| --- | --- |
| Prevents incomplete Incident data at entry time | Client-side only; API/import paths bypass it unless server-side rules are added |
| Lightweight, no server processing or licences | onCellEdit blocks State edits for all users |
| Reversible and easy to maintain | Rules are hard-coded to Impact = 1 |
| Clear messages guide users | Requires admin access to configure |

## 9. Conclusion
The project shows how UI Policies and Client Scripts (onChange, onSubmit, onCellEdit) work together to enforce dynamic field behaviour, automate updates and prevent incorrect submissions on Incident forms. It is lightweight, efficient and easy to implement, and improves form usability and data integrity.

## 10. Future Scope
Add server-side Business Rules, role-based exceptions, support for more impact/urgency combinations, and extend to other ITSM tables with an update set.

## 11. Appendix
- **Source Code:** [`scripts/`](../scripts)
- **Dataset Link:** Not applicable
- **GitHub & Project Demo Link:** _Add repository URL and demo video link_
