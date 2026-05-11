export const auditChecklist = [
  {
    title: 'Deployment Stability',
    risk: 'High Operational Risk',
    icon: 'pi-sync',
    description: 'Can you launch updates without the fear of breaking the site? This measures how much of your "launch speed" is actually reliable.',
    items: [
      { label: 'Automated Testing', insight: 'Prevents old bugs from reappearing every time you add a new feature.', score: null },
      { label: 'Zero-Downtime Releases', insight: 'Users don’t see an "under maintenance" page when you ship code.', score: null },
      { label: 'One-Click Rollbacks', insight: 'If an update breaks, you can revert to the working version in seconds.', score: null },
    ]
  },
  {
    title: 'Platform Resilience',
    risk: 'Business Continuity Risk',
    icon: 'pi-shield',
    description: 'If your database crashes today, how fast can you recover? This measures your protection against data loss and outages.',
    items: [
      { label: 'Automated Backups', insight: 'Data is backed up daily (or hourly) without manual intervention.', score: null },
      { label: 'Secure Secret Management', insight: 'Passwords and keys are encrypted, not sitting in plain text files.', score: null },
      { label: 'Uptime Monitoring', insight: 'You are the first to know if the site is down, not your customers.', score: null }
    ]
  },
  {
    title: 'Growth & Scaling',
    risk: 'Revenue Scaling Risk',
    icon: 'pi-chart-line',
    description: 'Can your app handle 10x more users tomorrow? This measures if your infrastructure can grow as fast as your marketing.',
    items: [
      { label: 'Cloud Cost Optimization', insight: 'You aren’t overpaying for server resources you aren’t using.', score: null },
      { label: 'High-Concurrency Support', insight: 'The app doesn’t slow down when 100 users hit it at once.', score: null },
      { label: 'API Modularity', insight: 'Your app can easily connect to third-party tools (Stripe, HubSpot, etc.).', score: null }
    ]
  },
  {
    title: 'Engineering Velocity',
    risk: 'Maintenance Cost Risk',
    icon: 'pi-bolt',
    description: 'How fast can your team build? This measures if "Technical Debt" is acting like a tax on every new feature.',
    items: [
      { label: 'Standardized Design System', insight: 'Designers and devs use the same components, cutting UI build time by 50%.', score: null },
      { label: 'Documented Architecture', insight: 'New developers can understand the system in hours, not weeks.', score: null },
      { label: 'Clean Code Standards', insight: 'The codebase is maintainable and doesn’t require a total rewrite next year.', score: null }
    ]
  },
  {
    title: 'Data & AI Strategy',
    risk: 'Opportunity Cost Risk',
    icon: 'pi-database',
    description: 'Is your data organized for the AI era? This measures if you can leverage your own data for custom intelligence or if it’s trapped in silos.',
    items: [
      { label: 'Structured Data Pipeline', insight: 'Your data is clean and accessible for analysis, not just buried in logs.', score: null },
      { label: 'AI Readiness', insight: 'Your architecture can support custom LLM or Gemini integrations safely.', score: null },
      { label: 'User Data Ownership', insight: 'You have full control over your customer data for future training or insights.', score: null }
    ]
  },
  {
    title: 'Security & Compliance',
    risk: 'Legal & Reputation Risk',
    icon: 'pi-lock',
    description: 'Are you prepared for an enterprise security audit? This measures your basic hygiene for data privacy and access control.',
    items: [
      { label: 'Vulnerability Scanning', insight: 'You regularly check for security holes in your third-party libraries.', score: null },
      { label: 'Access Control (IAM)', insight: 'Employees only have access to the data they absolutely need.', score: null },
      { label: 'Privacy Compliance', insight: 'Basic GDPR/CCPA principles are considered to avoid legal blocks.', score: null }
    ]
  }
];
