---
sidebar_position: 6
slug: /Broadcast
sidebar_label: Broadcast
---

<a id="broadcasts"></a>

# Broadcasts

A broadcast sends one message to many contacts on one WhatsApp number.

This section explains the following:

- [To create a broadcast](#to-create-a-broadcast)
- [To map template variables](#to-map-template-variables)
- [To send a test message](#to-send-a-test-message)
- [To choose recipients](#to-choose-recipients)
- [To save a draft or send](#to-save-a-draft-or-send)
- [To review a broadcast report](#to-review-a-broadcast-report)
- [To delete a broadcast](#to-delete-a-broadcast)

## To create a broadcast

1. Select **Broadcast** in the sidebar. The **Broadcast Messages** page appears with your campaign history and totals for recipients, sent, delivered, replied, failed, and estimated Meta cost.

   ![Figure 18. Broadcast messages](/img/Assets/Figure%2018%20-%20Broadcast%20messages.png)
   ***Figure 18.** Broadcast messages*

2. Select **New Broadcast**. The dialog opens with a form on the left and a live preview on the right.

   ![Figure 19. New broadcast](/img/Assets/Figure%2019%20-%20New%20broadcast.png)
   ***Figure 19.** New broadcast*

3. In the **Broadcast Name** box, type a name you'll recognise later, for example `April Fee Reminder`.
4. Select the WhatsApp number to send from.
5. Select a **Message type**:

   | Type | When to use it |
   |---|---|
   | **Template Message** | Any campaign to contacts outside the 24-hour window. This is the normal choice. |
   | **Text Message** | Only reaches contacts who messaged you within the last 24 hours. |

6. For a template, select one from the list of approved templates. For text, type the message.

## To map template variables

If the template contains variables, a mapping row appears for each one.

1. For each variable, select where the value comes from:
   - **Contact Name**
   - **Phone Number**
   - Any category, which supplies the contact's group in that category
   - Any custom field
   - **Custom text…** — then type a fixed value used for every recipient
2. Check the preview. It resolves the variables using the first selected recipient, so you can see a real example.

**Important:** Every variable must be mapped. An unmapped variable stops the broadcast from sending.

## To send a test message

1. In the **Enter test number** box, type a number with its country code, for example `919342245724`.
2. Select the test-send button. Zprox.Chat sends one message to that number.
3. Check the message on the device before you send to everyone.

## To choose recipients

1. Scroll to the contacts table in the lower half of the dialog.
2. Narrow the list:
   - In the **Search contacts** box, type a name or number.
   - Select **All groups** to filter by group.
   - Select **All stages** to filter by lifecycle stage.
3. Select the checkbox on each contact, or select the header checkbox to select everyone in the filtered list.
4. Check the ***n* selected** count. To start again, select **Clear**.

## To save a draft or send

- Select **Save as Draft** to keep the broadcast without sending it. You can open it again later from the list.
- Select **Send** to start sending. The broadcast moves to **SENDING** and then to **SENT**, **PARTIAL**, or **FAILED**.

**Important:** Sending can't be undone, and each message is billed by Meta. Send a test message first.

**Note:** Broadcasts count against your plan's monthly campaign-message quota. If you're over the limit, Zprox.Chat shows an upgrade prompt instead of sending. See [Understand plan limits](./Billings%20%26%20Usage.md#understand-plan-limits).

## To review a broadcast report

1. In the broadcast list, select the campaign. The report opens.
2. Review the totals at the top: recipients, sent, delivered, replied, failed, and estimated cost.
3. Use the tabs to filter the recipient list by **All**, **Delivered**, **Failed**, or **Pending**.
4. Select a failed recipient to read the error Meta returned.

Per-recipient states are **Pending**, **Sent**, **Delivered**, **Read**, and **Failed**.

**Note:** *Sent* means Meta accepted the message. *Delivered* means it reached the device. The two counts differ while delivery receipts are still arriving.

## To delete a broadcast

1. In the broadcast list, select the bin icon on the campaign row.
2. Read the confirmation and select **Delete**.

**Important:** Deleting a broadcast removes its report and its per-recipient history.

---
