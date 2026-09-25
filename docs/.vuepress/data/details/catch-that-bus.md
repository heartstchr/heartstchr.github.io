## Engineering Architecture: Catch That Bus Ticketing Platform

Catch That Bus connects Malaysia and Singapore travelers with intercity coaches — search schedules, compare operators, pick your seat, and pay online. It's a full commerce product: searchable inventory, live seat maps, and confirmed ticketing.

### 1. The Problem in Cross-Border Bus Travel
Intercity and cross-border coach travel is fragmented across operators, each with their own routes, stops, and rules. Travelers used to call operators individually or queue at terminals. The platform's job is to unify that into one searchable, bookable experience without breaking each operator's existing operations.

### 2. Architecture
A Vue.js client drives the search-and-book flow over a service layer that talks to operators:

- **Normalized schedule search:** each operator's routes are mapped into a common schedule model (origin, destination, date, duration, operator, price), so one search box covers every operator.
- **Live seat selection:** seat maps come from operator APIs in real time; the UI renders and blocks seats during the booking session so two travelers can't reserve the same seat.
- **Booking lifecycle:** quotes → seat hold → payment → e-ticket, with the confirmation of each stage persisted so both customer and operator always know the state.

### 3. Design Decisions
- **Operator abstraction:** behind the API, each operator is adapted separately, so adding a new operator is an integration task, not a UI change.
- **Hold-then-pay:** seats are locked at quote time and released on timeout or cancellation, protecting the operator's inventory while the traveler checks out.
- **Race-condition safety:** the backend, not the UI, is the source of truth for seat state — two tabs or two devices can't produce conflicting bookings.
- **Admin operations:** the operator-facing side manages schedules, pricing, and refunds, keeping the customer journey and the business tooling in one system.

### 4. Outcome
The platform turned a phone-and-queue booking process into a transparent online funnel: travelers compare and book in minutes, and operators reach a wider audience with automated seat and payment handling.