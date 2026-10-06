---
sidebar_position: 5
slug: /lead-studio
sidebar_label: Lead Studio
---

<a id="lead-studio"></a>

# Lead Studio

**Lead Studio** is your contact database. Every person who messages you appears here, along with anyone you import.

This section explains the following:

- [Understand the Lead Studio table](#understand-the-lead-studio-table)
- [To search, filter, and sort leads](#to-search-filter-and-sort-leads)
- [To choose which columns appear](#to-choose-which-columns-appear)
- [To open and edit a lead](#to-open-and-edit-a-lead)
- [To manage groups](#to-manage-groups)
- [To import leads](#to-import-leads)
- [To export leads](#to-export-leads)
- [To run bulk actions](#to-run-bulk-actions)
- [To broadcast to selected leads](#to-broadcast-to-selected-leads)

## Understand the Lead Studio table

![Figure 15. Lead Studio](/img/Assets/Figure%2015%20-%20Lead%20Studio.png)
***Figure 15.** Lead Studio*

At the top left, select the account box to choose which WhatsApp number or Instagram account you're looking at, or select the option that covers every channel.

The table can show these columns:

| Column | What it shows |
|---|---|
| **Name** | The contact's name. |
| **Phone** | The masked phone number, or an Instagram badge. |
| **Email** | The contact's email address. |
| **Lead Score** | A number and a temperature pill — hot, warm, or cold. Automations set this with the **Update Lead Score** action. |
| **Owner** | The assigned team member, or **Unassigned**. |
| **Stage** | The lifecycle stage. |
| **Tags** | Every group applied to the contact. |
| **Source** | Where the lead came from, according to Meta — for example a click-to-WhatsApp ad or a Facebook or Instagram post. Set automatically on the first message. |
| **AI Summary** | A short summary written by your AI agent when a conversation goes quiet. |
| *Custom fields* | One column per custom field you created in **Settings** > **Fields**. |

## To search, filter, and sort leads

1. In the **Search contacts** box, type a name, number, or email address.
2. Select the filter control to narrow by group, stage, owner, or lead temperature.
3. Select the sort box and choose one of:
   - **Sort: Recent activity**
   - **Sort: Newest**
   - **Sort: Lead score**
   - **Sort: Name A–Z**
   - **Sort: Owner**

## To choose which columns appear

1. Select **Columns**.
2. Turn columns on or off, and drag them to change their order.
3. Close the panel. Your layout is remembered.

## To open and edit a lead

1. Select the lead's row. The contact drawer opens.
2. Edit any field — name, email address, stage, owner, groups, or custom fields.
3. Select **Save**.

**To open the conversation:** In the drawer, select the option to open the chat.

## To manage groups

1. Select **Manage Groups**. The group manager opens.
2. Create, rename, recolour, or delete categories and groups without leaving Lead Studio.
3. Close the manager. The table refreshes.

This is the same data you set up in **Settings** > **Category**. See [To create categories and groups](./Getting%20Started.md#to-create-categories-and-groups).

## To import leads

You can import from a `.csv` file, an `.xlsx` file, or a Google Sheets link. The import runs as a three-step wizard.

1. Select **Import**. The **Import Contacts** dialog appears.

   ![Figure 16. Import contacts](/img/Assets/Figure%2016%20-%20Import%20Contacts.png)
   ***Figure 16.** Import contacts*

2. Choose how to supply the data:
   - **File** — select or drag a `.csv` or `.xlsx` file.
   - **Sheet** — paste a Google Sheets link.

   Zprox.Chat reads the headers and shows a preview.

3. On the mapping step, match each column in your file to a Zprox.Chat field. Zprox.Chat suggests a mapping for you. Set any column you don't want to import to the blank option.
4. Optionally choose a group to apply to every imported contact, or create a new group from here.
5. Select **Import**. A result summary appears with the number of contacts imported, updated, and skipped, and the reason for each skip.
6. Select **Close**.

**Important:** Phone numbers must include the country code, without a plus sign or spaces — for example `919876543210`. Rows with an unreadable number are skipped.

**Note:** Importing matches on phone number. An existing contact is updated rather than duplicated.

## To export leads

1. Select **Export**. The export wizard appears.
2. Choose the scope — all filtered leads, or only the leads you selected.
3. Choose the columns to include. You can export name, phone, email, lead score, temperature, owner, stage, source, created date, AI summary, every category, and every custom field.
4. Select **Export**. Zprox.Chat downloads a CSV file named `lead-studio-<date>.csv`.

**Note:** The file is written with a UTF-8 byte-order mark so that Excel shows non-English characters correctly.

## To run bulk actions

1. Select the checkbox on each lead you want to act on, or select the header checkbox to select the whole page.
2. If you want every matching lead, not just the visible page, select **Select all *n* matching**. A toolbar appears showing how many are selected.
3. Choose an action:

   | Action | What it does |
   |---|---|
   | **Assign** | Assigns the leads to a team member, or unassigns them. **Admin only.** |
   | **Add tag** | Applies a group to every selected lead, honouring the one-group-per-category rule. |
   | **Set stage** | Moves the leads to a lifecycle stage. |
   | **Auto-remind** | Turns the 24-hour window reminder on or off for the leads. |
   | **Delete** | Deletes the leads. |

4. Confirm when Zprox.Chat asks. Large selections are processed in batches, and the result reports how many succeeded and how many failed.

**Important:** Deleting leads is permanent.

## To broadcast to selected leads

1. Select the leads you want to message.
2. Select **Broadcast**. The broadcast dialog opens with your selection already loaded and only approved templates listed.
3. Select a template, map its variables, and send. The steps are the same as in [Broadcasts](./Broadcast.md).

**Note:** **Broadcast** stays unavailable until you select at least one lead.

