# Ideation Phase
## Brainstorm & Idea Prioritization Template

| Date | 30 September 2026 |
| --- | --- |
| Team ID | SWTID-2026-5353 |
| Project Name | Implement Client Script & UI Policy (Incident) |
| Maximum Marks | 4 Marks |

## Step 1: Team Gathering, Collaboration and Select the Problem Statement
The team (SWTID-2026-5353) met to review how Incident data quality problems affect triage, routing and SLA compliance, and selected **PS-1, PS-2 and PS-3** (see [Problem Statements](<Define Problem Statements.md>)).

## Step 2: Brainstorm, Idea Listing and Grouping
| Group | Ideas |
| --- | --- |
| Mandatory data | Make Assignment group mandatory for High impact · Make Assigned To required before saving |
| Auto-population | Auto-set Urgency when Impact is High · Show an info message explaining the change |
| Field control | Make Urgency read-only for High impact · Reverse all changes when Impact is no longer High |
| Save-time validation | Block save with an inline error message when required data is missing |
| List protection | Block State edits from the list view |
| Out of scope | Business rules, flows or notifications (server-side), custom catalog forms |

## Step 3: Idea Prioritization
| Idea | Impact | Effort | Priority |
| --- | --- | --- | --- |
| UI Policy: Assignment group mandatory when Impact = High | High | Low | **P1** |
| onSubmit: block save without Assigned To | High | Low | **P1** |
| onChange: auto-set Urgency | High | Low | **P1** |
| UI Policy Action: Urgency read-only | Medium | Low | **P2** |
| onCellEdit: block State list edit | Medium | Low | **P2** |
| Server-side business rules / flows | Medium | High | P3 (future scope) |

**Reference:** https://www.mural.co/templates/brainstorm-and-idea-prioritization
