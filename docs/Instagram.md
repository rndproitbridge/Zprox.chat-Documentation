---
sidebar_position: 13
slug: /Instagram
sidebar_label: Instagram
---

<a id="connect-your-instagram-account"></a>

# Connect your Instagram Account

Connect an Instagram **Business** account to receive and reply to Instagram direct messages inside Chats, to automate comments, and to let an AI agent answer DMs. Each account connects directly through Instagram — you don't need a Facebook Page.

This section explains the following:

- [To connect an Instagram Business account](#to-connect-an-instagram-business-account)
- [To disconnect an Instagram account](#to-disconnect-an-instagram-account)

## To connect an Instagram Business account

1. Go to **Settings** > **Instagram Accounts**.
2. Select **Connect Instagram**. An Instagram authorisation window opens.

   ![Figure 11. Instagram sign-in window](/static/img/Assets/Figure%2011%20-%20Instagram%20Accounts.png)
   ***Figure 11.** Instagram sign-in window*

3. Sign in with the Instagram Business account you want to connect.
4. Review the permissions and select **Allow**.
5. Return to Zprox.Chat. The account appears in the list with its profile picture and handle.

**Note:** If you don't see the **Connect Instagram** button, either Instagram isn't included in your plan or Instagram connections aren't switched on for your workspace. Contact support.

After connecting, a new **Instagram** item appears under **Channels** in the sidebar, and Instagram conversations appear in **Chats** alongside WhatsApp.

## To disconnect an Instagram account

1. Go to **Settings** > **Instagram Accounts**.
2. On the account row, select **Disconnect**.
3. Read the warning and confirm.

**Important:** Disconnecting stops DM syncing and stops every automation and AI agent bound to that account. Existing conversations stay in your inbox.

---

<a id="the-whatsapp-panel"></a>

## The WhatsApp panel

The **WhatsApp** panel under **Channels** shows how your WhatsApp channel is performing. Connecting a number stays in **Settings** > **WhatsApp Accounts**.

1. Select **WhatsApp** in the sidebar.
2. Select **7 days**, **30 days**, or **90 days** to change the period.

   ![Figure 25. The WhatsApp panel](/img/Assets/Figure%2025%20-%20The%20WhatsApp%20panel.png)
   ***Figure 25.** The WhatsApp panel*

3. Review the cards:

   | Card | What it shows |
   |---|---|
   | **Messages sent** | Messages your workspace sent in the period. |
   | **Contacts** | Total WhatsApp contacts. Select it to open Lead Studio. |
   | **Open conversations** | Conversations awaiting a reply. Select it to open Chats. |
   | **Response rate** | How often your team replied. |
   | **New leads** | Contacts who messaged you for the first time in the period. |

---

<a id="the-instagram-panel"></a>

## The Instagram panel

The **Instagram** panel appears under **Channels** once you connect an Instagram Business account.

This section explains the following:

- [Account overview](#account-overview)
- [To open Performance](#to-open-performance)
- [To set conversation starters](#to-set-conversation-starters)
- [To build the main menu](#to-build-the-main-menu)
- [To set up comment-to-DM automations](#to-set-up-comment-to-dm-automations)
- [To manage comments](#to-manage-comments)

### Account overview

Select **Instagram** in the sidebar. The overview shows your profile picture, handle, and connection state, with five figures:

![Figure 26. The Instagram panel](/img/Assets/Figure%2026%20-%20The%20Instagram%20panel.png)
***Figure 26.** The Instagram panel*

| Figure | Source |
|---|---|
| **Followers** | Live from Instagram. |
| **Following** | Live from Instagram. |
| **Posts** | Live from Instagram. |
| **Conversations** | Your workspace inbox. Select it to open Chats. |
| **Unread DMs** | Your workspace inbox. Select it to open Chats. |

The buttons below are:

- **Manage Automation** — opens the automation tools described in the rest of this section.
- **Re-Authenticate account** — refreshes Instagram permissions. Use this if DMs stop arriving.
- **View Direct Messages** — opens the Instagram inbox in Chats.
- **Remove Account** — disconnects the account. See [To disconnect an Instagram account](#to-disconnect-an-instagram-account).

### To open Performance

1. On the overview, select **Open Performance**.
2. Review reach, views, and engagement by day, per-post insights, and the conversations each post produced in your inbox.
3. Select **Back to account** to return.

### To set conversation starters

Conversation starters are suggested questions Instagram shows when someone opens your DM for the first time.

1. Select **Manage Automation**, then select **Conversation Starters**.
2. Select **Add starter** and type the question, for example `What are your delivery times?`
3. Add more starters, and set a version per language if you need to.
4. Select **Save**.

**To remove all starters:** Select the remove option and confirm.

### To build the main menu

The main menu is a persistent set of 1–3 buttons always available in the DM composer.

1. Select **Manage Automation**, then select **Main Menu**.
2. Under **Default**, select **Add menu item**.
3. Type the button label.
4. Choose the item type:

   | Type | What it does |
   |---|---|
   | **Trigger action** | Sends a payload keyword back to you, which can fire an automation. |
   | **Open Link** | Opens a URL. |

5. Fill in the payload keyword or the URL.
6. To add a menu for another language, add a language group and repeat.
7. Check the preview on the right, then select **Save**.

**Important:** You must have at least one item under **Default** — Instagram uses it as the fallback for every language.

**To remove the menu:** Select the remove option and confirm. The menu is cleared on Instagram.

### To set up comment-to-DM automations

1. Select **Manage Automation**, then select **Comment to DM / Automations**.
2. Select **New automation**.
3. Choose which posts or reels the rule applies to.
4. Set the keyword or condition the comment must match.
5. Set what happens: a public reply on the comment, a DM to the person who commented, or both. Type the message for each.
6. Save and turn the rule on.

**Note:** Automations answer before an AI agent does. Anything an automation doesn't match can fall through to the agent. See [To let the agent answer Instagram comments](./AI%20Agents.md#to-let-the-agent-answer-instagram-comments).

### To manage comments

1. Select **Manage Automation**, then select **Comments**.
2. Review comments as they arrive.
3. On any comment, choose to reply, hide it, or delete it.
4. To stop new comments on a post, turn commenting off for that post.
