---
sidebar_position: 17
slug: /Troubleshooting
sidebar_label: Troubleshooting
---

# Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Inbound WhatsApp messages don't arrive | The webhook isn't verified in Meta, or the verify token doesn't match | Check the callback URL and verify token in **Settings** > **WhatsApp Accounts** against the Meta App Dashboard. See [6.2](./WhatsApp.md#to-connect-manually-with-cloud-api-credentials). |
| The account health badge reads **Token expired** | The permanent access token is no longer valid | Edit the account and paste a new token. See [6.4](./WhatsApp.md#to-update-a-token-or-delete-an-account). |
| The health badge reads **Rate limited** | Meta is throttling your sends | Wait and reduce volume. Split large broadcasts. |
| The message box is unavailable in a chat | The 24-hour window has closed | Send an approved template instead. See [8.6](./Chats.md#to-send-a-template). |
| A template is stuck in **PENDING REVIEW** | Meta is still reviewing it | Wait. Review usually takes minutes but can take up to 24 hours. |
| A template was **REJECTED** | It breaks a Meta content rule, or the sample values aren't realistic | Open it, read the reason, fix the content and samples, then resubmit. See [10.8](./Templates.md#to-edit-or-resubmit-a-template). |
| A template with a media header won't save | The **Meta App ID** is missing on the account | Add it in **Settings** > **WhatsApp Accounts**. See [6.2](./WhatsApp.md#to-connect-manually-with-cloud-api-credentials). |
| A broadcast won't send | A template variable isn't mapped, or you've hit your monthly quota | Map every variable. Check your plan usage. See [11.2](./Broadcast.md#to-map-template-variables) and [21.4](./Billings%20%26%20Usage.md#understand-plan-limits). |
| Many broadcast recipients show **Failed** | Invalid numbers, or recipients who blocked your business | Open the report, filter by **Failed**, and read the error for each recipient. See [11.6](./Broadcast.md#to-review-a-broadcast-report). |
| An import skipped rows | The phone numbers are missing a country code or are malformed | Fix the numbers to the form `919876543210`, then import again. See [9.6](./lead%20Studio.md#to-import-leads). |
| An automation never runs | It isn't saved, isn't active, or its trigger doesn't match | Save, set the status switch to active, and check the trigger settings. See [12.7](./Automations.md#to-save-and-activate-an-automation). |
| An automation stops at a step | That step returned an error | Open the **Executions** tab and read the failing step. See [12.8](./Automations.md#to-review-executions). |
| An AI agent doesn't reply | No model is selected, the agent isn't active, or another agent already holds that trigger on the account | Check the model, the activate switch, and whether another agent is live on the same account. See [Chapter 13](./AI%20Agents.md). |
| The AI agent replies but never uses the sheet | The Google account is missing Sheets permissions, or the tool isn't mapped | Reconnect the Google account and approve the Sheets scopes. See [20.1](./Integrations.md#to-connect-a-google-account). |
| Gmail blocks are unavailable | The connected Google account has no Gmail permissions | Reconnect the account and approve the Gmail scopes. |
| Instagram DMs stop arriving | The Instagram authorisation expired | Open the **Instagram** panel and select **Re-Authenticate account**. See [17.1](./Instagram.md#account-overview). |
| Shopify events stop arriving | Webhooks are no longer registered | Select **Reconcile webhooks** on the Shopify page. See [18.6](./Shopify.md#to-verify-and-reconcile-the-connection). |
| WooCommerce won't connect | The store isn't on HTTPS, permalinks are set to **Plain**, or the keys aren't Read/Write | Fix the store settings, generate new Read/Write keys, and connect again. See [19.1](./WooCommerce.md#to-connect-a-woocommerce-store). |
| A sidebar item opens an upgrade panel | The feature isn't in your plan | See **Plans & Billing**. See [21.4](./Billings%20%26%20Usage.md#understand-plan-limits). |
| You're locked out after failed sign-ins | Brute-force protection is active | Wait for the lockout to end, or reset your password. See [3.4](./Getting%20Started.md#to-reset-a-forgotten-password). |