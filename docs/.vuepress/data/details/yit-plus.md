## Engineering Architecture: A Service Portal for Homeowners

YIT Plus is the customer portal for YIT's home and apartment association business. It lets residents and property managers track everything tied to their home — warranties, service requests, maintenance documents, and community discussions — from one place.

### 1. What the Platform Does
Instead of separate phone calls, emails, and paper agreements, every household gets a single account that covers:

- **Service Requests:** Residents submit maintenance or repair requests and follow their status instead of chasing the property office.
- **One-Year Warranty Tracker:** New-home buyers can see which repair claims fall inside their warranty window.
- **Service Lounge:** A self-service area for common documents and recurring services.
- **Discussion Board:** Property managers post community updates and residents reply in one threaded feed.
- **Admin Console:** The managing team reviews, assigns, and closes requests with an audit trail.

### 2. Technical Build
The frontend is built in Vue.js with a component-based UI: each module (requests, warranty, documents, board) is an independent feature area sharing a common design system and navigation shell. The admin side eats the same data model, so a request created by a resident surfaces instantly in the management queue with status and history.

The API layer separates client- and admin-facing concerns, keeping resident traffic lightweight while the admin console carries richer views such as filtering, assignment, and report-style summaries.

### 3. Design Decisions Worth Noting
- **Status-driven workflow:** Every request moves through explicit states (open → assigned → in progress → resolved), which keeps both sides honest about who is next to act.
- **Document centralization:** Warranty documents and contracts are stored per-property and linked to the account, replacing binder-and-folder record keeping.
- **Ownership clarity:** The resident sees their own household; the admin sees all households. Role-based views keep the surface area small for each audience.

### 4. Business Value
For YIT, the portal cut the back-and-forth around service coordination: residents self-serve documents, requests arrive structured instead of in scattered emails, and the admin team works from a single queue. For residents, the answer to "where is my request?" stops requiring a phone call.