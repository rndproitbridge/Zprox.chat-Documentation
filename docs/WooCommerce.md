---
sidebar_position: 15
slug: /WooCommerce
sidebar_label: WooCommerce
---

<a id="woocommerce"></a>

# WooCommerce

WooCommerce connects with API keys — there's no app to install and no OAuth. You can connect more than one store.

This section explains the following:

- [To connect a WooCommerce store](#to-connect-a-woocommerce-store)
- [Overview and Orders](#overview-and-orders)
- [To set up order notifications](#to-set-up-order-notifications)
- [To set up the recovery ladder](#to-set-up-the-recovery-ladder)
- [To set up the COD flow](#to-set-up-the-cod-flow)
- [To create and send coupons](#to-create-and-send-coupons)
- [To add or remove a store](#to-add-or-remove-a-store)

## To connect a WooCommerce store

**First, create API keys in WooCommerce:**

1. In your store, go to **WooCommerce** > **Settings** > **Advanced** > **REST API**.
2. Select **Add key**, type a description, and pick a user.
3. Set **Permissions** to **Read/Write**, then select **Generate API key**.
4. Copy the consumer key (`ck_…`) and the consumer secret (`cs_…`). They're shown only once.

**Important:** Your store must be reachable over HTTPS, and its permalinks must not be set to **Plain**.

**Then connect the store in Zprox.Chat:**

1. Go to **Settings** > **Integrations** and select the **WooCommerce** card.
2. Select **Connect a WooCommerce store**.
3. Fill in:
   - **Store URL** — for example `https://yourstore.com`
   - **Store label** — a friendly name for the store switcher. This is optional.
   - **Consumer key** — the `ck_…` value
   - **Consumer secret** — the `cs_…` value
4. If your store sits behind HTTP basic authentication, expand the advanced options and fill in the tunnel username and password.
5. Select **Connect store**. Zprox.Chat tests the keys and lists the store.

A **WooCommerce** item appears under **Apps** in the sidebar.

## Overview and Orders

Select **WooCommerce** in the sidebar. If you connected more than one store, use the store switcher at the top.

![Figure 28. WooCommerce store overview](/img/Assets/Figure%2028%20-%20WooCommerce%20store.png)
***Figure 28.** WooCommerce store overview*

| Tab | What it shows |
|---|---|
| **Overview** | Orders, customers, products, notifications sent, delivery rate, failed or skipped messages, webhook health, and recent activity. |
| **Orders** | Your store's orders, with detail and message history. |
| **Notifications** | Templates per order event, the sending number, admin alerts, tracking keys, and delivery logs. |
| **Recovery** | The abandoned-checkout ladder and its results. |
| **COD flow** | Cash-on-delivery confirmation and write-back to the order. |
| **Coupons** | Create a coupon and send it over WhatsApp. |

## To set up order notifications

1. Select **WooCommerce** > **Notifications**.
2. Under **WhatsApp sender**, choose the number that sends store notifications.
3. Under **Order notifications**, pick an approved template for each order moment and map its variables.
4. Under **Admin alerts**, add the numbers that receive the internal new-order alert.
5. Under **Tracking & review link**, map the order-meta keys that hold tracking information so that the shipped message can include them:
   - **Tracking number key**, for example `_tracking_number`
   - **Tracking URL key**, for example `_tracking_url`
   - **Carrier key**, for example `_tracking_provider`
   - **Review / feedback link** — used by the `{{reviewLink}}` variable in the review-request template
6. Under **Status update notifications**, add a rule for any order status — shipped, out for delivery, delivered, or a custom status from your shipping plugin. Tracking variables are available here too.
7. Select **Save**.

**To check what was sent:** Open **Delivery logs** on the same tab.

## To set up the recovery ladder

1. Select **WooCommerce** > **Recovery**.
2. Under **Abandoned-checkout recovery**, turn the feature on. Orders that reached checkout but were never paid enter a timed ladder.
3. Set:
   - **Minimum cart value** — only recover orders at or above this total
   - **Recover orders from the last (hours)**
   - **Quiet hours (skip sends)** — a from hour and a to hour
4. Under **Recovery ladder**, select **Add step** for each reminder, up to five. For each step:
   - Set **Send after (hours)**
   - Select an approved **Template**
   - Optionally select a **Coupon** from your store. Its code fills the `{{recoveryCoupon}}` variable.
5. Select **Save**.

The KPI cards at the top show carts targeted, messages sent, and recovered orders.

## To set up the COD flow

1. Select **WooCommerce** > **COD flow**.
2. Turn the flow on.
3. Select the confirmation template and map its variables.
4. Set the delay before the first message and the no-reply deadline.
5. Choose the action to take on the WooCommerce order for confirm, decline, and no reply.
6. Select **Save**.

**Note:** Zprox.Chat writes the outcome back to the real order in WooCommerce.

## To create and send coupons

1. Select **WooCommerce** > **Coupons**.
2. Select **Create & send a coupon**.
3. Set the discount type, the amount, and any restrictions.
4. Choose the recipient and the template that carries the code.
5. Select **Send**. Zprox.Chat creates the coupon in WooCommerce and sends it over WhatsApp.

## To add or remove a store

- **To add another store:** Go to **Settings** > **Integrations** > **WooCommerce** and select **Add store**.
- **To remove a store:** Open the store's connection settings and select the disconnect action.

**Note:** The **Connection settings** link on the WooCommerce page takes you straight to **Settings** > **Integrations**.
