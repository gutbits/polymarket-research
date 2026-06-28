# Polymarket Technical Report

A consolidated, human-readable technical reference on Polymarket's:

- **Wallet architecture** — signer EOA vs. proxy smart-contract wallet
- **Private keys** — Magic Link export, the proxy-vs-EOA balance gotcha
- **CLOB API & auth** — L1 (EIP-712) / L2 (HMAC) two-tier model, "OAuth" reality
- **Deposits & withdrawals** — limits, fees, timing, and the April 2026 pUSD migration
- **Geographic restrictions** & fraud/AML controls
- **Real-world failure modes** — common withdrawal/private-key issues and fixes
- **The December 2025 supply-chain breach** and account-hardening guidance

## View

Published via GitHub Pages — see the repository's Pages URL.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

- `index.html` — the full report (single page with sidebar navigation)
- `assets/style.css` — dark theme + layout
- `assets/script.js` — TOC scrollspy, mobile menu, back-to-top

## Disclaimer

Compiled from public documentation, help-center articles, security press, and
community reports. Educational/operational reference only — not financial, legal,
or security advice, and not affiliated with or endorsed by Polymarket. Verify
anything sensitive against the official docs before acting.
