// Client Script: Prevent state change via list edit
// Table: incident | Type: onCellEdit | Field: state
function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    alert('State cannot be updated using list editing. Please open the Incident.');
    callback(false);
}
