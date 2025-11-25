# Security Policy

## Supported Versions

- We support the latest code on `main` and the most recent stable release.
- Security fixes are generally backported to the latest stable release only.
- Older releases may be marked end-of-life without receiving security patches.

## Reporting a Vulnerability

- Please use GitHub’s private reporting feature: go to the repository’s **Security** tab and click **Report a vulnerability**.
- If private reporting is not available, open a minimal issue titled “Security: request private contact” without details; we will follow up privately.
- Do not disclose the vulnerability publicly until we complete coordination.

Preferred language: English.

## Disclosure Policy

- Initial acknowledgment within 3 business days.
- Triage and a status update within 7 days.
- Fix timeline depends on severity and impact:
  - Critical/High: target fix within 30 days.
  - Medium/Low: target fix within 60–90 days.
- We may issue interim mitigations if a full fix requires more time.
- After a fix is released, we will publish release notes and, when applicable, a security advisory.

## Scope

- Vulnerabilities in this repository’s code and configuration.
- Out of scope: social engineering, physical attacks, third‑party services not maintained here.

## Responsible Testing

- Avoid data exfiltration or privacy violations.
- Do not run tests against production systems beyond what’s necessary to demonstrate the issue.
- Do not exploit the vulnerability further than required to prove impact.

## Credit

- We credit reporters in advisories/release notes if requested. If you prefer to remain anonymous, let us know.
