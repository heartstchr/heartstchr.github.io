## Engineering Architecture: Migrating Internet Banking to Vue.js

IBRebuild modernized ABN AMRO's internet banking application, replacing an aging AngularJS codebase with Vue.js. The project was a controlled, incremental migration: the legacy system stayed live until the new frontend was proven in production.

### 1. Why a Rewrite Was the Right Call
AngularJS was hitting its end-of-life window, and the internet banking UI had compound performance and maintainability problems — heavy directives, scattered state, and templates that were painful to extend. Vue.js was chosen for its small runtime, gentle learning curve for new team members, and pragmatic Composition API that fits banking code-review workflows.

### 2. Migration Without a Big Bang
A hard cutover was not an option for a system customers use daily. Instead, the frontend was rebuilt module by module:

- **Shared view layer first:** routing, session, and layout shell.
- **Feature-by-feature swap:** each banking flow (account overview, transfers, statements) moved to the new app individually, validated against the production back end.
- **Coexistence:** during transition, both frontends served the same API, letting the team de-risk each migration slice before switching default routes.

The structure kept business logic in the API layer, so the frontend rewrite was about presentation and state, not re-verifying banking rules.

### 3. State, Security, and Consistency
- **Centralized state:** shared stores for session, accounts, and transactions keep views consistent and make data flow easy to review.
- **Security by design:** token-based session handling, request interception, and hardened error responses mirror the bank's existing API contracts, so no new attack surface was introduced by the UI layer.
- **Zero-downtime release:** deployments were served behind the same domain with feature gating; rollback meant flipping routes, not redeploying.

### 4. Outcome
The rebuild removed the framework lifecycle risk, cut bundle size and first-paint times on the primary screens, and gave ABN AMRO's frontend teams a modern baseline — the same engineering foundation later required by the Emerald Design System rollout.