# TikStake Lockbox Prototype

A lightweight prototype interface for **TikStake** — a time-based crypto holding (lockbox) concept. Users choose an asset, lock duration (6 months up to 20 years), submit proof & next-of-kin info, and receive a receipt. No yield, no lending, no rehypothecation — pure custodial-style time-lock experience (conceptual prototype UI only).

> Disclaimer: This is a front-end prototype. No real smart contract or custody logic is implemented. Do not use with real funds.

## Features (Current)
- Responsive glass / gradient navbar with hamburger menu
- Dropdown “User Area” menu
- Hero section with branding
- Overview section explaining the model
- Supported assets grid (Bitcoin, Ethereum, Solana, BNB)
- Lock flow:
  - Asset selection triggers modal
  - User provides duration, tx hash, proof image (filename only), email, next-of-kin details
  - Generates an on-screen receipt with a pseudo ID
- White paper modal (placeholder content)
- Scroll-in animations for card elements (IntersectionObserver)
- Basic mobile experience

## Tech Stack
- HTML5
- CSS3 (custom gradients, no frameworks)
- Vanilla JavaScript (no build step)
- Google Fonts (Inter)

## File Structure
```
index.html
styles.css
script.js
README.md
```

## Planned / Possible Next Steps
| Area | Enhancement Ideas |
|------|--------------------|
| Accessibility | Focus trapping in modals, ARIA roles, escape handling refinements |
| Data | Persist “locks” in localStorage for demo state |
| Security | Client-side validation patterns for tx hash formats |
| UX | Duration display fix (map months -> human label) |
| Export | Receipt PDF / print option |
| Theming | Dark mode toggle |
| Architecture | Split JS into modules (navigation, modals, forms) |

## How to Run
Just open `index.html` in any modern browser.
To serve locally with a simple static server:
```
python3 -m http.server 5173
# or
npx serve .
```

## Development Notes
- Proof image is not uploaded; only filename is displayed.
- This prototype assumes an eventual backend or smart contract layer will:
  - Generate unique deposit addresses
  - Validate tx hash on-chain
  - Emit verifiable lock receipt
  - Enforce unlock logic and next-of-kin delegation

## Contributing
Create an issue or open a pull request with clear description of the improvement.

## License
MIT License (see LICENSE file)

## Disclaimer
This is a prototype UI. It does not lock real assets and should not be treated as a production custody solution.