---
sidebar_position: 8
slug: /ai-agents
sidebar_label: AI Agents
---

# AI Agents

An AI agent answers customers for you using a language model. It can reply on WhatsApp or Instagram, look things up in a Google Sheet, call your own API, send media, and hand the conversation to a person when it gets stuck.

This section explains the following:

- [To create an AI agent](#to-create-an-ai-agent)
- [To choose a channel and account](#to-choose-a-channel-and-account)
- [To choose an AI model](#to-choose-an-ai-model)
- [To set the trigger](#to-set-the-trigger)
- [To write the behavior prompt](#to-write-the-behavior-prompt)
- [To give the agent media](#to-give-the-agent-media)
- [To add tools](#to-add-tools)
- [To set up human handoff](#to-set-up-human-handoff)
- [To turn on auto-summary on close](#to-turn-on-auto-summary-on-close)
- [To let the agent answer Instagram comments](#to-let-the-agent-answer-instagram-comments)
- [To activate an agent](#to-activate-an-agent)
- [To review agent runs](#to-review-agent-runs)

**Before you start:** Connect an AI model provider in **Settings** > **Integrations** > **AI Models**. See [To connect an AI model provider](./Integrations.md#to-connect-an-ai-model-provider).

## To create an AI agent

1. Select **AI Agents** in the sidebar.
2. Select **New agent**. The agent editor opens.

   ![Figure 22. AI agent editor](/img/Assets/Figure%2022%20-%20AI%20agent%20editor%20.png)
   ***Figure 22.** AI agent editor*

3. Under **Identity**, fill in:
   - **Name** — shown only in your agents list. The customer never sees it.
   - **Description** — an optional note about what the agent does.

## To choose a channel and account

1. Under **Identity**, select a **Channel**:
   - **WhatsApp**
   - **Instagram**
2. Select the account the agent answers on:
   - For WhatsApp, select the **WhatsApp account**. Media the agent sends is read from that number's media library.
   - For Instagram, select the **Instagram account**. Replies are text and media, inside Instagram's 24-hour window.

**Note:** Only one agent can be active per account for each trigger type.

## To choose an AI model

1. Under **Model**, select an **AI Model**. This is the connected provider credential.
2. Select the **Model** to call. You can pick a listed model, or type a custom model ID to use a newer model the provider offers.
3. Set **Temperature**. Lower values give more predictable answers; higher values give more varied ones.
4. Under the advanced options, set:
   - **Context window (messages)** — how many recent messages are sent to the model each turn. More memory costs more per reply.
   - **Max tool iterations** — the hard cap on tool calls while handling one message. This stops runaway loops.

**Note:** API keys live in **Integrations** > **AI Models**, never on the agent.

## To set the trigger

Under **Trigger**, choose when the agent runs:

| Trigger | What it does |
|---|---|
| **Any message** | Replies to every inbound message on its account. Only one *any-message* agent can be live per account. |
| **New conversations only** | Engages a contact on their first-ever message, then keeps replying in that conversation. Only one *new* agent can be live per account. |
| **Keyword** | Engages when a message matches a keyword. You can have several keyword agents live at once. |

## To write the behavior prompt

Under **Behavior**, type the system prompt. This is the instruction the model receives on every turn.

Write it as plain instructions. For example:

```
You are a helpful WhatsApp assistant for Acme Inc.
Answer questions about our pricing and delivery times.
Keep replies under three sentences.
If the customer asks for a human, say you are connecting them.
```

**Tip:** State what the agent must *not* do as well as what it should do. Tell it to hand off rather than guess when it doesn't know.

## To give the agent media

Media groups let the agent send files during a conversation, such as a price list or a brochure.

1. Under **Media**, select **Add group**.
2. Type a description that says *when* to send this group, for example `Send when the customer asks for pricing`.
3. Add one or more files from the media library.
4. Repeat for each group.

The agent chooses the group that fits and sends every file in it.

## To add tools

Tools let the agent read and write data mid-conversation. Save the agent once before you attach tools.

1. Under **Tools**, select **Add tool**.
2. Choose a tool type:

   | Tool | What it does | Setup |
   |---|---|---|
   | **Google Sheets** | Reads or writes rows in a connected sheet. | Choose the saved sheet, then pick **Look up rows**, **Add or update a row**, or **Always add a new row**. Map the columns. |
   | **HTTP request** | Calls an external API or device. | Set the method, URL, headers, and body. |
   | **Lead form** | Sends one of your forms and collects the answers. | Choose the form. |

3. Fill in the settings and select **Save**.

**Note:** Prefer **Add or update a row** over **Always add a new row** — the second one creates duplicates.

## To set up human handoff

1. Under **Human handoff**, turn on handoff.
2. Under **Hand off to (round-robin)**, select the team members who should receive conversations. Zprox.Chat assigns them one by one across the people you pick.
3. In **Handoff keywords (optional)**, type comma-separated words that should force a handoff, for example `human, agent, talk to someone`.

A team member can also take over manually from the chat header. See [To take over from an AI agent](./Chats.md#to-take-over-from-an-ai-agent).

## To turn on auto-summary on close

1. Under **Auto-summary on close**, turn the option on.
2. Set the **Idle window (minutes)** — how long with no new messages before the conversation counts as closed.

When the window passes, the agent writes a summary of the conversation. The summary appears in the **AI Summary** column in Lead Studio, and is written to your connected sheet or CRM if you configured one.

## To let the agent answer Instagram comments

For an Instagram agent, you can also have it reply to comments on your posts and reels.

1. Under **Instagram comments**, turn the option on.
2. Under **Which posts?**, choose all posts and reels, only reels, only posts, or specific posts you select.
3. Under **How should it reply?**, choose:
   - **Public reply** — posts a reply on the comment for everyone to see.
   - **DM** — opens a private message to the person who commented.
   - **Both** — does each.

**Note:** Comment-to-DM automations answer first. The agent only handles comments the automations don't match.

## To activate an agent

1. Select **Save**.
2. Set the activate switch to on.

**Note:** The switch stays unavailable until you've selected a connected AI model.

## To review agent runs

1. Open the agent.
2. Select the runs view. Each run shows the message that triggered it, the tools the agent called, the reply it sent, and any error.

**To export an agent:** In the editor header, select the download icon. Zprox.Chat saves the agent as a JSON file.
**To import an agent:** On the agents list, select **Import** and choose the JSON file. The agent is created as a draft for you to review.

---
