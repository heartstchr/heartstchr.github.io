## Engineering Architecture: Attractions & Tours Booking

Trokka Attraction is the booking layer for attractions and tours — the kind of product that sits between a traveller's search and a confirmed ticket for a theme park, museum, or guided experience.

### 1. What the Product Does
Users browse attraction and tour inventory (by city, category, or popularity), compare experiences, pick dates and party size, and complete a booking. Behind the scenes, that means three things must stay in sync:

- **Inventory:** what's bookable, at which dates and times, with live availability.
- **Pricing:** per-attraction rules (per person, per family, bundles) that must be computed deterministically at quote time.
- **Booking state:** a reservation moves through hold → confirmed → fulfilled (or cancelled), and every transition must be consistent for both customer and operator.

### 2. Architecture
A Vue.js frontend drives the customer funnel; the API layer owns availability, pricing, and booking state:

- **Availability querying:** the API returns low-level date/time/gate availability, and the UI renders it as a date picker the customer can reason about without hitting the server on every click.
- **Step-locked booking flow:** quote (price + availability held) → customer details → confirmation. Each step posts a typed payload, so the backend can reject stale quotes instead of double-booking.
- **Operator view:** an admin surface lists bookings, handles confirm/cancel, and surfaces capacity conflicts before they reach the customer.

### 3. Design Decisions
- **Availability before pricing:** the UI never shows a price without confirmed availability data, avoiding the classic "priced, then sold out" friction.
- **Idempotent confirmations:** confirmations are safe to replay, which matters when mobile networks drop mid-payment.
- **Composable details forms:** traveller info is collected per party member but rendered as one coherent form, matching how operators actually need the data later.

### 4. Outcome
The platform gave a tour operator a modern, mobile-friendly booking funnel that reduced manual booking-handling and gave them real-time capacity control across their inventory.