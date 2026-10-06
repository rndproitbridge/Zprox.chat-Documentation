---
sidebar_position: 12
slug: /WhatsApp
sidebar_label: WhatsApp
---

# Connect your WhatsApp Business Account

You must connect at least one WhatsApp Business account before you can send templates, run broadcasts, or use automations on WhatsApp.

This section explains the following:

- [To connect with Login with Facebook](#to-connect-with-login-with-facebook)
- [To connect manually with Cloud API credentials](#to-connect-manually-with-cloud-api-credentials)
- [To check account health](#to-check-account-health)
- [To update a token or delete an account](#to-update-a-token-or-delete-an-account)

**To open the page:** Go to **Settings** > **WhatsApp Accounts**.

![Figure 9. WhatsApp Accounts](/img/Assets/Figure%209%20-%20WhatsApp%20Accounts.png)
***Figure 9.** WhatsApp Accounts*

## To connect with Login with Facebook

This is the recommended method. Zprox.Chat is a Meta Tech Provider, so it fetches your phone number and WhatsApp Business Account ID for you. You don't need an App ID, an app secret, or a verify token.

1. Go to **Settings** > **WhatsApp Accounts**.
2. Select **Login with Facebook**. A Meta window opens.
3. Sign in with the Facebook account that manages your business.
4. Follow Meta's steps to choose or create your Meta Business account and your WhatsApp Business Account.
5. Choose the phone number to use, and complete Meta's verification if the number isn't verified yet.
6. Return to Zprox.Chat. A green confirmation appears and the number is listed in the table.

**Note:** If you don't see the **Login with Facebook** button, WhatsApp onboarding isn't switched on for your workspace. Contact support.

## To connect manually with Cloud API credentials

Use this method if you already run your own Meta app and want to supply your own credentials.

1. Go to **Settings** > **WhatsApp Accounts**.
2. Select **Connect manually**. The **Add WhatsApp Business account** dialog appears.

   ![Figure 10. Add WhatsApp Business account](/img/Assets/Figure%2010%20-%20Add%20WhatsApp%20Business%20account.png)
   ***Figure 10.** Add WhatsApp Business account*

3. Under **API Credentials**, fill in the boxes. You find these values in Meta Business Suite and the Meta App Dashboard.

   | Box | Where to find it |
   |---|---|
   | **Phone Number ID** | Meta App Dashboard > WhatsApp > API Setup. |
   | **WhatsApp Business Account ID** | Meta App Dashboard > WhatsApp > API Setup. |
   | **Permanent Access Token** | A System User token from Meta Business Suite. Zprox.Chat encrypts it at rest with AES-256-GCM. |
   | **Webhook Verify Token** | A custom string you invent. You must enter exactly the same string in Meta. |
   | **Meta App ID** | Meta App Dashboard > App Settings > Basic > App ID. Required only for templates with image, video, or document headers. |

4. Under **Webhook Configuration**, select the copy icon next to **Webhook Callback URL**.
5. In the Meta App Dashboard, go to **WhatsApp** > **Configuration**, paste the callback URL, paste the same verify token, and subscribe to the message fields.
6. Back in Zprox.Chat, select **Create account**. The number appears in the table.

**Important:** Messages only reach Zprox.Chat after the webhook is verified in Meta. If inbound messages don't arrive, check that the callback URL and verify token match exactly.

## To check account health

The **Health** column tells you whether Zprox.Chat can still talk to Meta with the stored token.

| Badge | Meaning | What to do |
|---|---|---|
| **Healthy** | The connection works. | Nothing. |
| **Token expired** | The access token is no longer valid. | Edit the account and paste a new permanent token. |
| **Rate limited** | Meta is throttling your sends. | Wait, then reduce send volume. |
| **Error** | Meta returned an error. | Point at the badge to read the message. |
| **Not checked** | Zprox.Chat hasn't tested the account yet. | Send a message, or wait for the next check. |

The **Status** column shows whether the number is **Active** or **Inactive** in Zprox.Chat.

## To update a token or delete an account

1. Go to **Settings** > **WhatsApp Accounts**.
2. On the account row, select the eye icon to edit it.
3. Change the values you need. Leave **Permanent Access Token** blank to keep the existing token.
4. Select **Save changes**.

**To delete an account:** Select the bin icon on the row and confirm.

**Important:** Deleting an account stops all sending and receiving on that number. Conversations already in your inbox are kept.
