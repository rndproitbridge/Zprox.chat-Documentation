---
sidebar_position: 14
slug: /Shopify
sidebar_label: Shopify
---

<a id="shopify"></a>

# Shopify

Connect a Shopify store to send order notifications, recover abandoned carts, and confirm cash-on-delivery orders over WhatsApp.

This section explains the following:

- [To connect a Shopify store](#to-connect-a-shopify-store)
- [Dashboard and Orders](#dashboard-and-orders)
- [To set up order notifications](#to-set-up-order-notifications)
- [To set up abandoned-cart recovery](#to-set-up-abandoned-cart-recovery)
- [To set up the COD flow](#to-set-up-the-cod-flow)
- [To verify and reconcile the connection](#to-verify-and-reconcile-the-connection)
- [To disconnect a Shopify store](#to-disconnect-a-shopify-store)

## To connect a Shopify store

1. Go to **Settings** > **Integrations**.
2. Select the **Shopify** card.
3. In the store box, type your permanent `.myshopify.com` domain, for example `your-store.myshopify.com`.

   **Note:** Find this in your Shopify admin under store settings. Don't use a custom domain.

4. Select **Connect store**. Shopify opens and asks you to approve the app.
5. Approve the permissions. You return to Zprox.Chat and the store shows as **Connected**.

   {/* TODO: add "Figure 27 - Connect a Shopify store.png" to static/img/Assets, then restore:
   ![Figure 27. Connect a Shopify store](/img/Assets/Figure%2027%20-%20Connect%20a%20Shopify%20store.png)
   ***Figure 27.** Connect a Shopify store* */}

A **Shopify** item appears under **Apps** in the sidebar.

## Dashboard and Orders

Select **Shopify** in the sidebar. The connection card at the top names the store, its status, and how many webhooks are active. Below it are five tabs.

| Tab | What it shows |
|---|---|
| **Dashboard** | Store and messaging figures for the period. |
| **Orders** | A worklist of orders, with filters and message history per order. |
| **Abandoned cart** | Carts that were never completed, and the recovery ladder. |
| **COD flow** | Cash-on-delivery confirmation requests and their outcomes. |
| **Messages** | Notification settings, the sending number, admin alerts, and delivery logs. |

**Tip:** Each tab has its own address, so you can share a link that opens the exact tab.

## To set up order notifications

1. Select **Shopify** > **Messages**.
2. Under **WhatsApp sender**, choose the number that sends this store's notifications.
3. Under **Order notifications**, open the event you want to configure:

   | Event | Fires when |
   |---|---|
   | **Order received** | Shopify records a new order. |
   | **Order fulfilled** | An order is fulfilled without tracking details. |
   | **Order shipped** | A fulfilment carries a tracking number. |
   | **Shipment updated** | The carrier reports a tracking change. |
   | **Order cancelled** | An order is cancelled in Shopify. |
   | **Refund processed** | Shopify creates a refund. |
   | **New order · admin alert** | Sent to every admin recipient you list. |

4. Select an **Approved template**.
5. Under **Template variables**, map every placeholder to an order value.

   **Important:** An unmapped variable stops the notification from sending.

6. Turn on **Enable this notification**.
7. Under **Admin alerts**, add the numbers that should receive the internal new-order alert.

**To check what was sent:** Scroll to the delivery log. Each message shows a status of queued, sent, delivered, read, failed, or skipped.

## To set up abandoned-cart recovery

1. Select **Shopify** > **Abandoned cart**.
2. Under **Automated recovery**, turn the feature on.
3. Under **When does a cart count as abandoned?**, set:
   - **Which checkouts count**
   - **Quiet for** — how long after the shopper's last activity a cart counts as abandoned
4. Under **Who gets a reminder?**, set:
   - **Minimum cart value** — `0` includes every cart
   - **Marketing consent** — turn on **Only opted-in shoppers** to respect consent
5. Under **When do we stay quiet?**, set the quiet hours and the store timezone. Leave both hours blank to send at any time.
6. Set the **Attribution window (hours)** — a purchase within this time after a reminder counts as recovered.
7. Under **Reminders**, add up to five steps. For each step:
   - Set how long after the previous step it sends.
   - Select an approved **Template** and map its variables.
   - Optionally add a **Discount code**. Create the code in Shopify first, paste it here, then map a variable to the discount code or to the checkout link with the discount applied.
   - Use the arrows to reorder steps, and the switch to enable or disable one.
8. Select **Save**.

**Important:** A cart with no reachable phone number or no checkout link is never messaged, whatever these settings say. Each reminder goes out at most once per cart.

## To set up the COD flow

The COD flow asks the customer over WhatsApp whether to ship a cash-on-delivery order, then acts on the Shopify order based on their answer.

1. Select **Shopify** > **COD flow**.
2. Turn the flow on.
3. Select which order statuses trigger it.
4. Select the **Confirmation template**. It must carry **Confirm** and **Cancel** quick-reply buttons.
5. Map the template's variables.
6. Set **Send after (hours)** — the delay before the first message. `0` sends immediately.
7. Set **No-reply deadline (hours)** — reminders stop and the no-reply action fires after this.
8. Choose what happens for each outcome:
   - **If the customer says YES**
   - **If the customer says NO**
   - **If there is no reply by the deadline**
9. For cancellations, choose whether to:
   - **Put the items back into inventory**
   - **Send Shopify's cancellation email**
10. Under the button mapping, tell Zprox.Chat which button means **YES (Confirm)** and which means **NO (Cancel)**.
11. Set what to send after the customer confirms.
12. Select **Save**.

**To review outcomes:** On the same tab, use the **Verifications** list. Filter by order, name, phone number, or minimum amount. Select a verification to open its timeline, its messages, and the customer's other COD orders.

## To verify and reconcile the connection

- **Re-verify** — runs the connection checks and reports what came back, including how many webhooks are active and any missing permissions.
- **Reconcile webhooks** — re-registers every webhook Zprox.Chat needs. Use this if events stop arriving.

If either action reports missing permissions, reconnect the store to grant them.

## To disconnect a Shopify store

1. On the **Shopify** page, select the disconnect action.
2. Read the warning and select **Disconnect store**.

**Note:** Event processing stops. Your existing orders, carts, COD verifications, and message history are kept.
