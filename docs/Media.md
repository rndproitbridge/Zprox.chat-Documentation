---
sidebar_position: 10
slug: /Media
sidebar_label: Media
---

# Media Library

The media library holds images, videos, audio, and documents that chats, AI agents, and templates can use. Media is stored per WhatsApp account.

This section explains the following:

- [To upload media](#to-upload-media)
- [Understand sync status](#understand-sync-status)
- [To use or delete media](#to-use-or-delete-media)

## To upload media

1. Select **Media** in the sidebar.
2. Select **Upload Media or Upload your first media**. The **Upload Media** dialog appears.

   ![Figure 24. Upload media](/img/Assets/Figure%2024%20-%20Upload%20media.png)
   ***Figure 24.** Upload media*

3. Choose the file, or drag it into the dialog.
4. In the name box, type a name you'll recognise, for example `Diwali greeting v2`.
5. In the notes box, type internal notes. This is optional.
6. Select **Upload**. The item appears in the library.

## Understand sync status

Zprox.Chat uploads media to Meta so that WhatsApp can send it. Each item shows its sync state.

| Status | Meaning |
|---|---|
| **Not synced** | Stored in Zprox.Chat, not yet sent to Meta. |
| **Syncing…** | Upload to Meta in progress. |
| **Synced** | Ready to send on WhatsApp. |
| **Failed** | The upload to Meta failed. Try again, or check the account's token. |
| **Expired** | Meta's copy has expired. Zprox.Chat re-uploads it the next time you use it. |

## To use or delete media

- **In a chat:** Select the library icon in the composer and pick the item. See [To send a file, image, or voice message](./Chats.md#to-send-a-file-image-or-voice-message).
- **In an AI agent:** Add the item to a media group. See [To give the agent media](./AI%20Agents.md#to-give-the-agent-media).
- **To copy the media ID:** Select the copy icon on the item. Use the ID in automations and API calls.
- **To delete:** Select the bin icon on the item and confirm.

**Important:** Deleting media that a template or agent still refers to causes those sends to fail.

---