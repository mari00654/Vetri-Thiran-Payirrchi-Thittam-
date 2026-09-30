# Project Documentation

**Team ID:** SWTID-2026-5353  |  **Date:** 30 September 2026

## 1. Introduction
- **Project Title:** Implement Client Script & UI Policy (Incident)
- **Team Members:** _Add team member names and roles_

## 2. Project Overview
- **Purpose:** Enforce consistent, accurate Incident data by using ServiceNow client-side controls for conditional behaviour, auto-population and save-time validation.
- **Features:** High Impact Control UI Policy · Urgency read-only action · onChange auto-set Urgency · onSubmit save validation · onCellEdit list-edit blocking.

## 3. Architecture
- **Frontend:** ServiceNow Platform UI (Incident form and list).
- **Backend:** ServiceNow platform; no server-side code added.
- **Database:** Incident `[incident]` table.
- Logic layer: UI Policy / UI Policy Actions and Client Scripts (see [Solution Architecture](<../3. Project Design Phase/Solution Architecture.md>)).

## 4. Setup Instructions
- **Prerequisites:** ServiceNow instance (e.g. Personal Developer Instance) and an admin / configuration user.
- **Installation:** follow the configuration steps below.

### Step 1 - Create the UI Policy
1. Navigate to **System UI > UI Policies** and click **New**.
2. Set **Table** = Incident, **Short description / Name** = `High Impact Control`, **Active** = true.
3. Condition: **Impact** **is** **1 - High**.
4. Enable **Reverse if false** (and On load / Global as default).
5. Submit, then add UI Policy Actions (next steps).

![UI Policy](../images/02-ui-policy-high-impact-control.jpg)

### Step 2 - UI Policy Action: Assignment group
Field name = Assignment group, **Mandatory = True**, Read only = False, Visible = Leave alone.

![Assignment group action](../images/03-ui-policy-action-assignment-group.jpg)

### Step 3 - UI Policy Action: Urgency
Field name = Urgency, **Read only = True**, Mandatory and Visible = Leave alone.

![Urgency action](../images/04-ui-policy-action-urgency.jpg)

### Step 4 - onChange Client Script
**System UI > Client Scripts > New**: Name `Auto set urgency for high impact`, Table Incident, Type onChange, Field name Impact, Active. Code: [`scripts/onChange_auto_set_urgency.js`](../scripts/onChange_auto_set_urgency.js)

![onChange script](../images/06-onchange-client-script.jpg)

### Step 5 - onSubmit Client Script
Name `Prevent save if Assigned To missing`, Table Incident, Type onSubmit, Active. Code: [`scripts/onSubmit_prevent_save_assigned_to.js`](../scripts/onSubmit_prevent_save_assigned_to.js)

![onSubmit script](../images/07-onsubmit-client-script.jpg)

### Step 6 - onCellEdit Client Script
Name `Prevent state change via list edit`, Table Incident, Type onCellEdit, Field name State, Active. Code: [`scripts/onCellEdit_prevent_state_change.js`](../scripts/onCellEdit_prevent_state_change.js)

![onCellEdit script](../images/08-oncelledit-client-script.jpg)

## 5. Folder Structure
- `scripts/` - client script source.
- `images/` - screenshots.
- Numbered phase folders - project documentation.

## 6. Running the Application
Open **Incident > Create New** on the instance. The rules apply automatically.

## 7. API Documentation
Uses the client-side **GlideForm (`g_form`)** API: `getValue`, `setValue`, `addInfoMessage`, `showErrorBox`.

## 8. Authentication
Handled by ServiceNow (user login, roles and ACLs). No custom authentication was added.

## 9. User Interface
![Create new incident](../images/09-incident-create-new.jpg)

## 10. Testing
Manual functional and UAT testing; see [UAT Report](<../5. Project Development Phase/UAT Report.md>).

## 11. Screenshots or Demo
See [Final Report - Results](<Final Report.md>) and the [Demonstration](<../7. Project Demonstration/README.md>).

## 12. Known Issues
- onCellEdit blocks **all** State edits in the list for every user; add role checks if authorised users need it.
- The onSubmit script checks `impact == '1'` only; other impact values are not validated.

## 13. Future Enhancements
- Role-based exceptions for list editing.
- Server-side Business Rule as a safety net for imports and integrations.
- Extend rules to Problem and Change tables; package as an update set.
