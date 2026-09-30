# Requirement Analysis
## Solution Requirements (Functional & Non-functional)

| Date | 30 September 2026 |
| --- | --- |
| Team ID | SWTID-2026-5353 |
| Project Name | Implement Client Script & UI Policy (Incident) |
| Maximum Marks | 4 Marks |

## Functional Requirements

| FR No. | Functional Requirement (Epic) | Sub Requirement (Story / Sub-Task) |
| --- | --- | --- |
| FR-1 | UI Policy - High Impact Control | Trigger when Impact is 1 - High · Make Assignment group mandatory · Enable *Reverse if false* |
| FR-2 | UI Policy Action - Urgency | Make Urgency read-only when Impact is High · Leave Visible unchanged |
| FR-3 | onChange Client Script | Set Urgency to 1 - High when Impact changes to 1 · Display an info message |
| FR-4 | onSubmit Client Script | Block save when Impact = High and Assigned To is empty · Show an error message on Assigned To |
| FR-5 | onCellEdit Client Script | Prevent State changes from list view · Show an alert and cancel the edit |

## Non-functional Requirements

| NFR No. | Non-Functional Requirement | Description |
| --- | --- | --- |
| NFR-1 | **Usability** | Clear, inline error and info messages; no training needed for form users |
| NFR-2 | **Security** | Runs on the platform with existing ACLs; scripts run in isolated scope; no data sent externally |
| NFR-3 | **Reliability** | Rules fire consistently on load, change and submit; UI Policy reverses cleanly |
| NFR-4 | **Performance** | Lightweight client-side logic with no server calls; no noticeable form delay |
| NFR-5 | **Availability** | Delivered on the ServiceNow platform and available whenever the instance is up |
| NFR-6 | **Scalability** | Logic is table-level and easily extended to more fields, conditions or tables |
