# Project Development Phase
## Functional & Performance Testing

| Date | 30 September 2026 |
| --- | --- |
| Team ID | SWTID-2026-5353 |
| Project Name | Implement Client Script & UI Policy (Incident) |
| Maximum Marks | - |

## Implementation Summary

| S.No. | Parameter | Values | Screenshot |
| --- | --- | --- | --- |
| 1 | UI Policy | *High Impact Control* on Incident; condition Impact is 1 - High; Reverse if false = true | ![UI Policy](../images/02-ui-policy-high-impact-control.jpg) |
| 2 | UI Policy Action - Assignment group | Mandatory = True, Read only = False, Visible = Leave alone | ![Assignment group action](../images/03-ui-policy-action-assignment-group.jpg) |
| 3 | UI Policy Action - Urgency | Read only = True, Mandatory and Visible = Leave alone | ![Urgency action](../images/04-ui-policy-action-urgency.jpg) |
| 4 | Client Script - onChange | Sets Urgency = 1 when Impact = 1; shows info message | ![onChange](../images/06-onchange-client-script.jpg) |
| 5 | Client Script - onSubmit | Blocks save if Impact = 1 and Assigned To is empty | ![onSubmit](../images/07-onsubmit-client-script.jpg) |
| 6 | Client Script - onCellEdit | Alerts and cancels State edits from list | ![onCellEdit](../images/08-oncelledit-client-script.jpg) |

## Functional Testing Results

| Test | Result | Screenshot |
| --- | --- | --- |
| Save blocked without Assigned To (High impact) | Pass - error shown on Assigned To | ![](../images/10-test-mandatory-error.jpg) |
| Save succeeds with Assigned To filled | Pass - record saved, Urgency locked at High | ![](../images/11-test-successful-save.jpg) |
| Reverse condition (High to Medium) | Pass - Assigned To optional, Urgency editable | ![](../images/12-test-reverse-condition.jpg) |
| List edit of State blocked | Pass - alert displayed, value unchanged | ![](../images/14-list-edit-alert.jpg) |
| State changed from the form | Pass - saved successfully | ![](../images/15-form-state-update.jpg) |

## Performance
| Parameter | Observation |
| --- | --- |
| Execution type | Client-side only; no server calls or additional queries |
| Form load impact | Not noticeable; onChange script exits immediately on load (`isLoading`) |
| Script isolation | *Isolate script* enabled on all three client scripts |
