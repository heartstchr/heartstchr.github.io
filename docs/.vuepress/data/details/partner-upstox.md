## Engineering Architecture: Upstox Sub-Broker Partner Dashboard

The Partner Dashboard gives Upstox's sub-brokers a single place to run their referral business: track referred prospects, watch earnings, and manage the programs that pay them.

### 1. Business Model the Product Serves
Sub-brokers and partners onboard clients into the Upstox brokerage. Their income is tied to how many customers they bring in and how actively those customers trade. The dashboard exists to make that relationship legible:

- **Refer and Earn / Ambassador / Royalty programs** each carry their own earning rules.
- Every referred lead is tracked from sign-up through activation.
- Earnings accrue from customer trades, so the dashboard must reconcile program rules with live trading data.

### 2. Architecture
The stack is Angular on the client, backed by a LoopBack (Node.js) API with MySQL and MongoDB. LoopBack's model-driven scaffolding fit the fast-moving rule set — each program is a data model, and earning calculations run server-side so the browser can never misreport a balance.

- **Lead lifecycle tracking:** a prospect moves through stages (referred → registered → activated), with search by name or UCC (a unique client code) so partners can find any customer instantly.
- **Earning reports:** server-computed aggregations of customer trade activity mapped back to the active program, rendered as dashboard cards and exportable views.
- **Role separation:** partner-facing views expose only the partner's own funnel, while the operating team administers programs, rules, and payouts.

### 3. Design Decisions
- **Search by UCC and name:** UCC is the canonical identifier in Indian brokerage systems; indexing it made lookup instant even with large partner books.
- **Server authoritative math:** commissions derive from trade data server-side, which keeps the UI a faithful mirror instead of a source of truth.
- **Program-driven UI:** switching a program's rule configuration updates the dashboard contract rather than requiring code changes per program.

### 4. Outcome
The dashboard replaced spreadsheet-based tracking for partners with a live view of their funnel and earnings. For Upstox, it produced structured lead data, clearer payout reconciliation, and a cleaner path to grow partner acquisition.