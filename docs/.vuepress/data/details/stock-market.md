## Engineering Architecture: Real-Time Stock Market Visualization

Stock Market is a real-time data visualization platform: it consumes socket-driven financial data and renders live, interactive D3.js charts with sub-second latency. The kind of UI where "live" isn't a feature — it's the minimum bar.

### 1. The Engineering Challenge
Financial tick data is relentless: prices arrive continuously, order books shift, and every subscriber expects to see the same numbers at the same moment. The hard parts are throughput (lots of small messages), timing (updates must paint fast, not batch awkwardly), and correctness (dips and peaks must never be visually smoothed away).

### 2. Architecture
- **Socket ingestion layer:** a persistent WebSocket stream delivers price and volume ticks to the client; dropped or out-of-order messages are handled explicitly rather than silently corrupting the chart.
- **D3 render pipeline:** D3 handles the data join — scale, axes, and paths update incrementally so only the changed marks re-render. This is the difference between a stuttering dashboard and one that ticks like the market.
- **Client-side aggregation:** raw ticks are bucketed into timeframes (1m, 5m, 1h) client-side, so switching timeframes doesn't need fresh server requests.

### 3. Design Decisions
- **Painting beats batching:** updates are throttled to the frame rate with the latest state applied, so the chart always shows current data under bursts without queueing behind a backlog.
- **Separate concern, separate module:** socket handling, state, and rendering live in distinct modules — the render module never talks to the socket directly. That isolation is what makes the visualization testable in isolation.
- **Correctness over smoothness:** data windows are truncated on gaps rather than interpolated, so analysts see truth, not smoothed fiction.

### 4. Outcome
The platform demonstrates production patterns you need in any live-data product: resilient ingestion, incremental rendering, and honest visualization under load.