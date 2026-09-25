## Engineering Architecture: Upstox Demat Account Opening Funnel

Online account opening is where a brokerage gains or loses every new customer. The Demat account flow we built for Upstox had to be fast enough to not lose attention, rigorous enough to satisfy KYC regulation, and automated enough to route every applicant into the right systems without manual data entry.

### 1. The Funnel in One Screen's Worth of Decisions
The application guides a lead through the steps the regulator requires — identity, address proof, bank verification, and in-person verification (IPV) — while keeping friction low:

- **Document upload:** PAN, Aadhaar, cancelled cheque, and address proof are captured inline and validated on the client before upload.
- **Instant verification:** identity documents are cross-checked against available verifiers; IPV and e-sign are handled inside the flow where supported.
- **CRM handoff:** each application is pushed to the CRM as a lead with full document metadata.
- **Scrutiny:** the operations team reviews applications in a queue with the evidence attached, rejecting or passing with one action.
- **Exchange registration:** passed leads are registered with NSE, BSE, and MCX, and the originating flow is reported back per lead.

### 2. Architecture
The frontend is Angular, talking to a LoopBack (Node.js) API backed by MySQL and MongoDB — the same service layer used across Upstox's internal products. File uploads, verification status, and exchange submissions are modeled as first-class states, so a lead's progress is represented as a state machine rather than scattered fields:

- Each application has an explicit state (draft → submitted → scrutiny → registered → rejected), and every state transition is auditable.
- The lead-to-CRM integration fires when the application reaches "submitted," keeping sales data in sync with operations data.
- Reporting answers the question leadership asks most: how many leads are flowing, and at what step are they dropping.

### 3. Outcome
By moving account opening from a paper-and-callback process to a digital state machine, the funnel removed the manual re-keying between document intake and exchange registration, cut the lead's submission time, and gave the team a per-lead audit trail from first upload to live account.