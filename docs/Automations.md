---
sidebar_position: 7
slug: /Automation
sidebar_label: Automation
---

# Automations

An automation is a flow that runs by itself: something happens, and Zprox.Chat does a series of steps. You build flows on a canvas by dragging in blocks and connecting them.

This section explains the following:

- [To create an automation](#to-create-an-automation)
- [Understand the builder](#understand-the-builder)
- [Block library reference](#block-library-reference)
- [To add and connect blocks](#to-add-and-connect-blocks)
- [To configure a block](#to-configure-a-block)
- [To test an automation step by step](#to-test-an-automation-step-by-step)
- [To save and activate an automation](#to-save-and-activate-an-automation)
- [To review executions](#to-review-executions)
- [To import or export an automation](#to-import-or-export-an-automation)

## To create an automation

1. Select **Automations** in the sidebar. The list of automations appears.
2. Select **New Automation**.

   ![Figure 20. New automation](/img/Assets/Figure%2020%20-%20New%20Automation%20.png)
   ***Figure 20.** New automation*

3. In the **Name** box, type a name, for example `Welcome Bot`.
4. In the **Description** box, describe what the flow does. This is optional.
5. Select **Next **. The builder opens on an empty canvas.

**Other actions in the list:** Select the pencil icon to rename, the copy icon to duplicate, or the bin icon to delete an automation. Use the **Search automations** box to find one.

## Understand the builder

![Figure 21. The automation builder](/img/Assets/Figure%2021%20-%20The%20automation%20builder.png)
***Figure 21.** The automation builder*

| Area | What it does |
|---|---|
| **Block library** (left) | Every block you can add, grouped by purpose. Use the search box to find one by name. |
| **Canvas** (centre) | Where your flow lives. Drag to pan, scroll to zoom. |
| **Toolbar** (top) | The flow name, its status, the **Editor** and **Executions** tabs, and the canvas controls. |

Toolbar controls, from left to right: **Undo**, **Redo**, **Auto-arrange**, **Zoom out**, **Fit to screen**, **Zoom in**, **Import**, **Export**, the activate switch, and **Save**.

**On a phone:** Select the blocks button in the lower-left corner to open the block library as a drawer.

## Block library reference

### Triggers

Every flow starts with exactly one trigger. The trigger decides when the flow runs.

| Block | Fires when |
|---|---|
| **Keyword Trigger** | The contact sends a specific keyword. You set the keyword, the match type, and whether case matters. |
| **Any Message** | Any inbound message arrives. |
| **New Contact** | A contact messages you for the very first time. |
| **wa.me Link** | Someone arrives through a tracked click-to-chat link. You set a tracking code and a pre-filled message. |
| **QR Scan** | Someone arrives by scanning a printed QR code. |
| **Group Applied** | A group is added to, or removed from, a contact. |
| **Incoming Webhook** | An external system sends an HTTP POST to the flow's URL. |
| **Zoho CRM** | A lead, contact, or deal changes in Zoho CRM. |
| **Google Sheets Row** | A row is added or updated in a connected sheet. |
| **New Email (Gmail)** | A new email arrives in the connected Gmail account. You can filter with a Gmail query. |
| **Schedule** | On a clock — by interval, daily, weekly, or monthly — at a time and timezone you set. |

### Messages

| Block | What it does |
|---|---|
| **Send Message** | Sends a Meta-approved WhatsApp template to the contact. |

### Logic

| Block | What it does |
|---|---|
| **Condition** | Splits the flow into a *true* branch and a *false* branch based on rules about the contact or the message. |
| **Switch** | Routes the flow to the first of many branches that matches. |
| **Filter** | Stops the flow unless the rules pass. |
| **Loop** | Runs a body flow once for each item in a list. You set the item variable and a maximum number of iterations. |
| **Smart Delay** | Pauses the flow for minutes, hours, or days. It can wait in the contact's own timezone. |

### Data and code

| Block | What it does |
|---|---|
| **Edit Fields** | Sets values that later steps can use as `{{variables}}`. |
| **Code** | Runs a small sandboxed JavaScript snippet to transform flow data. |
| **No-Op** | Does nothing. Use it as a tidy merge point or a note pin. |

### Actions

| Block | What it does |
|---|---|
| **Add Tag** | Adds a group to the contact. |
| **Remove Tag** | Removes a group from the contact. |
| **Assign to BDA** | Assigns the conversation to a team user. |
| **Update Contact** | Sets contact fields, including custom fields. |
| **Update Lead Score** | Adds or subtracts points, for example `+10`. This feeds the score column, the hot-lead segment, and the average-score metric. |
| **Set Stage** | Moves the lead to a lifecycle stage. |

### API and integrations

| Block | What it does |
|---|---|
| **API call** | Sends an HTTP request to an external system. You set the method, URL, headers, and body, and what happens on an error. |

### Google Sheets

| Block | What it does |
|---|---|
| **Add Row** | Appends a row to a sheet. |
| **Update Row** | Finds a matching row and updates it. It can create the row if it doesn't exist. |
| **Get Rows** | Looks up rows, with separate *found* and *not found* outputs. |
| **Read Range** | Reads a range of cells into a field. |
| **Delete Row** | Deletes a matching row. |
| **Clear Sheet** | Clears the data rows or a range. |

### Gmail

| Block | What it does |
|---|---|
| **Send Email** | Sends an email from the connected Gmail account. |
| **Reply to Email** | Replies in the email thread that started the flow. Use it after a **New Email (Gmail)** trigger. |

### AI

| Block | What it does |
|---|---|
| **Handoff to AI Agent** | Ends the flow and binds the conversation to an AI agent, which answers from then on. You can supply a short brief and choose whether the agent replies immediately. |

### Workflows

| Block | What it does |
|---|---|
| **Human Handoff** | Hands the conversation to a live team member. You set who, the priority, an SLA, an internal note, and whether to notify by WhatsApp, email, or a task. |
| **Trigger Another Flow** | Runs a second automation, either waiting for it or continuing straight away. |

## To add and connect blocks

1. In the block library, find the block you want. Use the search box if the list is long.
2. Drag the block onto the canvas, or select it to drop it at the centre.
3. Point at a block's output handle, then drag to the input handle of the next block. A connector appears.
4. To remove a connector, select it and press **Delete**.
5. Select **Auto-arrange** to tidy the layout.

**Note:** Blocks such as **Condition**, **Switch**, and **Get Rows** have more than one output. Connect each output to the branch it should run.

## To configure a block

1. Select the block on the canvas. Its settings panel opens.
2. Fill in the settings. The panel changes with the block type.
3. To insert a value from an earlier step, select the variable icon in a text box and choose a field.
4. Select **Save** at the bottom of the panel.

**To rename a block:** Select the pencil icon in the panel header.
**To duplicate a block:** Select the copy icon in the panel header.
**To delete a block:** Select the bin icon in the panel header.

**Note:** Warning and error icons on a block tell you something is incomplete — for example, a **Condition** with no rules. Fix these before you activate the flow.

## To test an automation step by step

Zprox.Chat lets you feed a real message into the flow and run one block at a time.

1. Select the trigger block. The test panel appears in its header.
2. Choose how to get test data:
   - **Pull latest** — uses the most recent matching message already in your inbox.
   - **Listen** — waits for a new message to arrive. Send yourself a message from a phone. Select **Stop** to cancel.
3. When data arrives, it's pinned to the trigger and shown in the panel.
4. Select the next block, then select **Execute node**. The block runs with the pinned data and shows its output.
5. Repeat for each block down the flow.

**Important:** **Execute node** runs for real. A **Send Message** block really sends a WhatsApp message, an **API call** really calls your system, and a Sheets write really changes your sheet. Zprox.Chat asks you to confirm with **Run for real** before any sending step.

**To clear test data:** Select **Reset**.

## To save and activate an automation

1. Select **Save** in the toolbar. Unsaved changes are indicated next to the button.
2. Set the status switch to active. The status pill changes from **Draft** to the live state.

**Note:** A flow only runs when it's active *and* saved. Deactivate a flow to stop it without deleting it.

For an **Incoming Webhook** trigger, save and activate the flow first, then POST to the URL shown in the trigger's settings from cURL, Postman, or your own backend.

## To review executions

1. In the toolbar, select the **Executions** tab.
2. Review the list of runs, each with its status — success, waiting, or error — and its start time.
3. Select a run to see the path it took through the flow, and the input and output of each step.

Use this to find out why a flow stopped, or which step returned an error.

## To import or export an automation

**To export:** In the builder toolbar, select **Export**. Zprox.Chat downloads the flow as a JSON file.

**To import into an open flow:** Select **Import** in the toolbar and choose a JSON file. The blocks are placed on the current canvas.

**To import as a new automation:** On the **Automations** list page, select the import button and choose a `.json` export file.
