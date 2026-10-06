---
sidebar_position: 9
slug: /Templates
sidebar_label: Templates
---
<a id="message-templates"></a>

# Message Templates

WhatsApp requires an approved template for any message you send outside the 24-hour window. Build templates here, then submit them to Meta for review.

This section explains the following:

- [To create a template](#to-create-a-template)
- [To add a header](#to-add-a-header)
- [To write the body and add variables](#to-write-the-body-and-add-variables)
- [To add a footer](#to-add-a-footer)
- [To add buttons](#to-add-buttons)
- [To submit a template for approval](#to-submit-a-template-for-approval)
- [Understand template statuses](#understand-template-statuses)
- [To edit or resubmit a template](#to-edit-or-resubmit-a-template)

## To create a template

1. Select **Templates** in the sidebar. The **Message Templates** page appears.

   ![Figure 17. Message templates](/img/Assets/Figure%2017%20-%20Message%20templates.png)
   ***Figure 17.** Message templates*

2. Select **New template**. The builder opens with a live WhatsApp preview on the right.
3. Complete **Section 1 — Basic Information**:
   - **WhatsApp Account** — the business account this template is submitted to. You can't change it after submission.
   - **Template Name** — lowercase letters and underscores only, up to 512 characters, for example `order_confirmation`. Zprox.Chat converts spaces to underscores as you type.
   - **Language** — the language of the content, for example **English**, **Hindi**, or **Tamil**.
4. Complete **Section 2 — Category**. Choose one:

   | Category | Use it for |
   |---|---|
   | **Marketing** | Promotions, offers, announcements. |
   | **Utility** | Order updates, delivery alerts, account notices. |
   | **Authentication** | One-time passwords and verification codes. |

   **Note:** **Authentication** templates have strict rules — no media headers, OTP buttons only, and the footer may contain only a code-expiry time.

## To add a header

The header is optional and appears above the message body.

1. In **Section 3 — Header**, choose a type:

   | Type | What it does |
   |---|---|
   | **None** | No header. |
   | **Text** | A single line of text. It may contain one variable. |
   | **Image** | An image at the top of the message. |
   | **Video** | A video at the top of the message. |
   | **Document** | A file such as a PDF. |

2. For **Text**, type the header line.
3. For **Image**, **Video**, or **Document**, upload the sample file. Zprox.Chat uploads it to Meta and stores the media handle.

**Important:** Media headers need the **Meta App ID** on the connected WhatsApp account. If it's missing, add it in **Settings** > **WhatsApp Accounts**. See [To connect manually with Cloud API credentials](./WhatsApp.md#to-connect-manually-with-cloud-api-credentials).

## To write the body and add variables

1. In **Section 4 — Body (Message Content)**, type your message. The limit is 1024 characters and a counter shows how much you've used.
2. Use the formatting buttons, or type the markers directly:
   - `*bold*`
   - `_italic_`
   - `~strikethrough~`
3. To personalise the message, insert variables as `{{1}}`, `{{2}}`, and so on, in order. For example:

   ```
   Hello {{1}}, your order {{2}} has been confirmed!

   Your delivery is expected by {{3}}. 🎉
   ```

4. Under **Sample Values for Variables**, type a realistic example for each variable. Meta requires this and rejects templates with missing or unrealistic samples.

**Note:** For an **Authentication** template, the body follows Meta's fixed pattern, such as `{{1}} is your verification code.`

## To add a footer

The footer is optional, appears in small grey text, and can't contain variables.

1. In **Section 5 — Footer**, type the footer text. The limit is 60 characters.

   Example: `Reply STOP to unsubscribe`

2. For an **Authentication** template, set the code-expiry time instead, between 1 and 90 minutes.

## To add buttons

1. In **Section 6 — Buttons**, select the button type you want:

   | Button | What it does | Limit |
   |---|---|---|
   | **Quick Reply** | The customer taps to send a fixed reply. | — |
   | **Visit Website** | Opens a URL. The URL can end in a variable. | Up to 2 |
   | **Call Phone** | Dials a number. | 1 |
   | **Copy Coupon Code** | One-tap copy of a promo code. | 1 |
   | **OTP / Copy Code** | Auto-fills a one-time password. **Authentication** templates only. | 1 |

2. Type the button label. Labels are limited to 25 characters.
3. For **Visit Website**, type the URL, for example `https://example.com/orders/ORD-12345`.
4. For **OTP / Copy Code**, choose **Copy Code** or **One Tap (Android)**. For **One Tap**, also supply the **Package Name** and **Signature Hash**.
5. To remove a button, select the remove icon on its row.

## To submit a template for approval

1. Review the preview on the right. It shows exactly what the customer sees.
2. Select **Save** to keep a draft, or **Submit** to send it to Meta.
3. Zprox.Chat validates the template first. Fix anything shown in red, then submit again.

**Note:** Meta usually reviews a template within minutes, but it can take up to 24 hours. Zprox.Chat updates the status automatically.

## Understand template statuses

| Status | Meaning |
|---|---|
| **DRAFT** | Saved in Zprox.Chat, not sent to Meta. |
| **PENDING REVIEW** | Submitted and waiting for Meta. |
| **APPROVED** | Ready to use in chats, broadcasts, automations, and store notifications. |
| **REJECTED** | Meta declined it. Open the template to read the reason, edit it, and resubmit. |
| **PAUSED** | Meta paused the template because of poor quality or user feedback. |
| **DISABLED** | Meta disabled the template. It can't be used. |

A quality badge — **Green**, **Yellow**, or **Red** — shows how customers are reacting to the template.

**To filter the list:** Select **All**, **Draft**, **Pending**, **Approved**, **Rejected**, **Paused**, or **Disabled**. Select the star icon to show only starred templates, or use the **Search by name or body** box.

## To edit or resubmit a template

1. Select the template in the list.
2. Make your changes.

   **Note:** You can't change the name or the WhatsApp account of an approved template.

3. Select **Submit** to send the new version to Meta. The template returns to **PENDING REVIEW**.
