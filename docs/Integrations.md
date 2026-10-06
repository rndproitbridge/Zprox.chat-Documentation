---
sidebar_position: 16
slug: /Integrations
sidebar_label: Integrations
---

# Integrations

Integrations connect the outside services your AI agents and automations use. Go to **Settings** > **Integrations** and select a card to manage it.

![Figure 29. Integrations](/img/Assets/Figure%2029%20-%20Integrations.png)
***Figure 29.** Integrations*

| Card | What it does |
|---|---|
| **Shopify** | Commerce notifications, recovery, and COD. See [Shopify](./Shopify.md). |
| **WooCommerce** | Orders, COD verification, and coupons over WhatsApp. See [WooCommerce](./WooCommerce.md). |
| **Google** | Google Sheets and Gmail for agents and automations. |
| **AI Models** | The provider credentials your AI agents run on. |
| **CRM** | Zoho CRM, and an inbound CRM webhook. |

This section explains the following:

- [To connect a Google account](#to-connect-a-google-account)
- [To save a Google Sheet for automations](#to-save-a-google-sheet-for-automations)
- [To connect an AI model provider](#to-connect-an-ai-model-provider)
- [To connect Zoho CRM](#to-connect-zoho-crm)
- [To set up a CRM webhook](#to-set-up-a-crm-webhook)
- [To set up MCP tools](#to-set-up-mcp-tools)

## To connect a Google account

1. Go to **Settings** > **Integrations** > **Google**.
2. Select **Connect your first Google account**, or **Connect another Google account**.
3. Sign in with the Google account and approve the permissions.
4. You return to Zprox.Chat and a green confirmation names the connected account.

**Important:** Grant the Sheets and Drive permissions when Google asks. If you skip them, Zprox.Chat can't list your spreadsheets and shows a warning on the sheet picker.

**To use Gmail nodes:** The same account must grant Gmail permissions. If Gmail blocks are unavailable, reconnect the account and approve the Gmail scopes.

**To disconnect:** Select the disconnect action on the account and confirm.

## To save a Google Sheet for automations

Save a spreadsheet and tab once, then pick it by name in the automation builder and in agent tools.

1. Go to **Settings** > **Integrations** > **Google**.
2. Select the connected account.
3. Select the spreadsheet from the list, then select the tab.
4. Type a friendly name, for example `Leads Tracker`.
5. Select **Save**.

**To remove a saved sheet:** Select the remove icon on its row and confirm.

## To connect an AI model provider

1. Go to **Settings** > **Integrations** > **AI Models**.
2. Select a provider, for example **Anthropic Claude** or **OpenAI**.
3. Select **Connect**.
4. Fill in:
   - A **label**, for example `Production key`
   - The **API key**
   - A **base URL**, only if you use an OpenAI-compatible provider that needs one
5. Select **Save**.

**Note:** The key is stored encrypted with AES-256-GCM and never leaves your server in plaintext. One key serves every AI agent in the workspace.

On the provider page you can also see token usage and estimated cost once your agents, summaries, and automation AI steps start running.

**To remove a key:** Select the remove action and confirm.

## To connect Zoho CRM

Zoho lets you push contacts to Zoho Leads and pull Zoho Leads into a WhatsApp account's contact list.

**First, create an application in Zoho:**

1. In the Zoho API Console, create a **Server-based Application**.
2. Copy its **Client ID** and **Client Secret**.

**Then connect it in Zprox.Chat:**

1. Go to **Settings** > **Integrations** > **CRM** > **Zoho**.
2. Paste the **Client ID** and **Client Secret**.
3. Select the **Data centre (region)** that matches your Zoho account.
4. Select the copy icon next to **Redirect URI**, and add that exact URI to your Zoho application.
5. Select **Save**, then select **Connect**. Zoho opens and asks you to approve access.
6. Approve. You return to Zprox.Chat and the connection shows as connected.

**To export contacts to Zoho:**

1. On the Zoho page, choose the export target.
2. Select **Export**. Contacts are pushed to Zoho Leads and deduplicated by phone number.

**To import leads from Zoho:**

1. Choose the WhatsApp account the leads should belong to.
2. Set the maximum number of records to pull.
3. Select **Import**.

## To set up a CRM webhook

Use this when another system should push leads into Zprox.Chat.

1. Go to **Settings** > **Integrations** > **CRM** > **Webhook**.
2. Copy the webhook URL. It carries a token unique to your workspace.
3. Copy the signing secret and configure your sending system to sign each request with it.
4. In the sending system, POST lead data to the URL.
5. Back in Zprox.Chat, check the recent-deliveries list to confirm the requests arrive and are accepted.

## To set up MCP tools

MCP lets an MCP client, such as Claude Desktop, manage your agents and forms.

1. Go to **Settings** > **MCP Tools**.
2. Under **MCP access**, turn access on.
3. Under **Capabilities**, choose what an MCP client may do:

   | Capability | What it allows |
   |---|---|
   | **Discovery / read** | List WhatsApp numbers, models, spreadsheets, tabs, media, templates, and existing agents. |
   | **Analytics / data (read-only)** | Read dashboard figures, leads, agent runs, automation runs and failures, broadcasts, and contacts. |
   | **Create agents** | Create new AI agents. |
   | **Update agents** | Edit existing agents. |
   | **Configure tools** | Add or edit agent tools — Google Sheets and HTTP request. |
   | **Delete** | Delete agents and remove tools. |
   | **Send messages** | Send WhatsApp messages and approved templates to contacts. |

   **Important:** **Send messages** performs real sends that Meta bills. Turn it on only if you're sure.

4. Under **API keys**, type a key label, for example `My MacBook — Claude Desktop`, and select **Create**.
5. Copy the key immediately. The full key is shown only once.
6. Paste the key into your MCP client as a bearer token.

**To revoke a key:** Select the remove action on the key row.

---
