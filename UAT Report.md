# Project Development Phase
## User Acceptance Testing (UAT) Execution & Report Submission

| Date | 30 September 2026 |
| --- | --- |
| Team ID | SWTID-2026-5353 |
| Project Name | Implement Client Script & UI Policy (Incident) |
| Maximum Marks | 4 Marks |

## 1. Purpose of Document
This document explains the test coverage and open issues of the **Implement Client Script & UI Policy (Incident)** project at the time of release to User Acceptance Testing (UAT).

## Project Overview
| Item | Detail |
| --- | --- |
| Project Name | Implement Client Script & UI Policy (Incident) |
| Project Version | 1.0 |
| Testing Period | 29 September 2026 to 30 September 2026 |
| Environment | ServiceNow Personal Developer Instance (Incident module) |

## Testing Scope
FR-1 to FR-5 and user stories USN-1 to USN-6.

## 2. Test Cases

| Test Case ID | Test Scenario | Test Steps | Expected Result | Actual Result | Pass/Fail |
| --- | --- | --- | --- | --- | --- |
| TC-001 | Mandatory enforcement | Incident > Create New; set Impact = High; leave Assigned To empty; click Submit | Incident not saved; error on Assigned To | Error "Assigned To is mandatory for High impact incidents." shown | Pass |
| TC-002 | Assignment group mandatory | Set Impact = High | Assignment group marked mandatory | Field shown as mandatory | Pass |
| TC-003 | Urgency auto-set | Change Impact to High | Urgency set to 1 - High with info message | Urgency = 1 - High | Pass |
| TC-004 | Urgency read-only | Impact = High | Urgency not editable | Field read-only | Pass |
| TC-005 | Successful save | Fill Assigned To; click Submit | Record saved without errors | Record saved | Pass |
| TC-006 | Reverse condition | Open High-impact incident; change Impact to Medium | Assigned To optional; Urgency editable | Behaviour reverted as expected | Pass |
| TC-007 | List edit blocking | Incident > All; double-click State in list | Alert shown; State unchanged | Alert "State cannot be changed from the list. Please open the Incident." shown | Pass |
| TC-008 | Form-based State update | Open incident; change State; click Update | State saved successfully | State changed to In Progress | Pass |

## 3. Test Case Analysis
| Section | Total Cases | Not Tested | Fail | Pass |
| --- | --- | --- | --- | --- |
| UI Policy | 2 | 0 | 0 | 2 |
| Client Script - onChange | 1 | 0 | 0 | 1 |
| Client Script - onSubmit | 2 | 0 | 0 | 2 |
| Client Script - onCellEdit | 2 | 0 | 0 | 2 |
| Reverse condition | 1 | 0 | 0 | 1 |
| **Total** | **8** | **0** | **0** | **8** |

## 4. Defect Analysis / Bug Tracking
| Bug ID | Bug Description | Steps to Reproduce | Severity | Status | Additional Feedback |
| --- | --- | --- | --- | --- | --- |
| BG-001 | Alert text in the test run differs slightly from the documented wording ("changed from the list" vs "updated using list editing") | Edit State in list | Low | Closed | Script text can be aligned to the documentation |

## Sign-off
| Tester Name | Date | Signature |
| --- | --- | --- |
| _Add name_ | 30 September 2026 | |
