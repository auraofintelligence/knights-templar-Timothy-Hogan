# Meta, Pixel, Store And Checkout Setup

This is a practical proposal for connecting the Strange but True site to Meta Business Suite, Meta Pixel, social sharing and a small direct checkout store.

## Recommended Checkout Stack

Start simple:

1. **Stripe Payment Links** for fixed digital bundles and simple checkout buttons.
2. **Stripe Invoices** for services, scoped work, deposits, purchase orders and anything that needs a named customer.
3. **PayID / bank transfer** as the low-fee manual option for people who do not need instant delivery.
4. **Cash at markets** for local face-to-face customers.
5. **One optional value-overflow link** for people who received more value than they paid for and want to buy an extra digital support bundle or top-up.
6. **PayPal** as a secondary payment option for customers who prefer it.
7. **Manual crypto / public-ledger verification later**, only after the customer has deliberately opted into a public support record.

Why Stripe first:

- Mobile checkout is clean.
- No full ecommerce platform is needed at launch.
- Each product can have its own payment link.
- Stripe can redirect back to `thank-you.html` after payment.
- Stripe invoices create a cleaner record for services, businesses, funded organisations and purchase orders.
- Meta Pixel events can later track product button clicks and thank-you page visits.

Default customer experience:

1. Ordinary visitors stay in normal AUD checkout.
2. Digital bundle buyers who need urgent access use automated card or mobile-wallet checkout.
3. Customers who want the low-fee path can choose PayID, bank transfer or cash, with manual fulfilment after payment is confirmed or cleared.
4. Manual fulfilment is checked most days, not continuously.
5. Digital bundle buyers receive a private email with a download link and access details.
6. Service customers receive an invoice or agreed deposit link.
7. Public ledger, profile and wallet steps are optional after trust exists.
8. No wallet is needed for normal downloads or normal local service work.

## Product Links To Create

Create one payment link per fixed digital launch product:

- Start Here Sampler / Sample Worlds: free website access, no Stripe product required.
- Single I C. Infinity album: `$20`.
- Two Album Bundle: `$35`.
- Three Album Bundle: `$45`.
- Full Music Archive Pack: `$50`.
- Written Worlds Bundle: `$50`.
- Written Worlds Plus: `$100`.
- Strange but True Supporter Bundle: `$200`.
- Supporter Plus / Super Bonus: nominated higher invoice or custom customer-chosen amount by arrangement.

Replace the `example.com/replace-with-stripe-payment-link...` placeholders in `downloads.html` after links exist.

## Service Payment Setup

Services should not all become public buy-now buttons. Most work needs a short conversation, scope and consent before payment.

Best v1 setup:

- **Tech & AI:** public enquiry first, then invoice or deposit link.
- **Events & Media:** deposit or invoice after event details are known.
- **Grants & Ideas:** invoice after the deadline, scope and documents are clear.
- **Corporate / funded / mainland work:** invoice or quote, not a public discount link.
- **Manual account terms:** approved 7-day or 14-day accounts only after the customer, scope and payment responsibility are clear.

Useful sandbox products:

- Tech & AI starter session deposit.
- Professional local work deposit.
- Simple A/V setup deposit.
- Media support deposit.
- Grant / idea check deposit.
- Grant drafting / project support deposit.

Keep mates rates private. If a lower price is appropriate, send a custom invoice or direct payment link instead of publishing a universal discount code.

## Value Overflow And Public Ledger Path

The paid bundles are a direct value exchange: the customer gets digital files, and Strange but True gets cash to keep building.

Use this path when someone says the help, conversation or community idea was worth more than they paid:

1. Offer a normal paid bundle first.
2. Offer a value-overflow payment link only as an optional next step.
3. Ask whether they want to stay private or be invited into the public supporter path.
4. If they choose public support, collect explicit consent before adding any name, project, amount or wallet address to a public ledger.

Stripe remains the private fiat payment record. The public ledger is a separate opt-in story layer, not the default checkout receipt.

## Delivery Setup

Early options:

- Stripe success page redirects to `thank-you.html`.
- The thank-you page explains that automated checkout is fastest.
- PayID, bank transfer and cash payments are fulfilled manually after payment is confirmed or cleared.
- Manual payment checks happen most days, not constantly.
- The thank-you page explains that the download link and access details are sent by email while the catalogue is being set up.
- Later, replace that with secure download links or an automated delivery service.

## Market Stall Payment Setup

The market stall should visibly support the same payment choices as the website:

- Cash for face-to-face local purchases.
- PayID or bank transfer for low-fee manual payments.
- QR codes that open the automated Stripe checkout for urgent digital downloads.
- Invoice or deposit path for services that need scope, date, equipment or account terms.

Stall wording should be plain: fee-free/manual options are welcome, but downloads and bookings are fulfilled after payment is confirmed or cleared.

Minimum before launch:

- Product file names and formats.
- Refund policy.
- Delivery timing.
- Support contact.
- Test purchase.

## Meta Business Suite

Set up:

1. Create or connect the Facebook Page.
2. Create Meta Business Portfolio for Strange but True.
3. Add Instagram later if needed.
4. Add WhatsApp Business if it becomes the preferred quick-contact channel.
5. Add the site URL after GitHub Pages is live.

Useful Meta assets:

- Facebook Page.
- Meta Pixel dataset.
- Commerce catalogue.
- WhatsApp contact button.
- Messenger contact option.

## Meta Pixel

Recommended events:

- `PageView` on all pages.
- `ViewContent` on `downloads.html`.
- `InitiateCheckout` when a product checkout popup opens.
- `Purchase` only on a confirmed payment success page, not on the current placeholder thank-you page.
- `Lead` on contact or referral actions.

Do not add a real Pixel ID until the domain and Meta account are ready.

Placeholder implementation later:

```html
<!-- Replace META_PIXEL_ID_PLACEHOLDER before launch -->
```

## Meta Store / Commerce Catalogue

Use Meta Store as a discovery layer, not the only checkout.

Suggested setup:

- Add products to Meta Commerce Manager.
- Use product links pointing back to the direct website checkout or Stripe Payment Links.
- Keep product names identical across website, Meta and posts.

Launch products:

- Start Here Sampler.
- Single I C. Infinity album.
- Two Album Bundle.
- Full Music Archive Pack.
- Written Worlds Bundle.
- Written Worlds Plus.
- Strange but True Supporter Bundle.
- Supporter Plus / Super Bonus.

## Social Sharing

The site currently includes:

- Web Share API button for phones.
- Facebook share link.
- X share link.
- WhatsApp share link.
- Messenger send link with `FACEBOOK_APP_ID_PLACEHOLDER`.
- Instagram caption/share-copy button.
- TikTok caption/share-copy button.

Before launch:

- Replace `https://example.com/replace-with-github-pages-url/` with the live GitHub Pages URL.
- Replace `FACEBOOK_APP_ID_PLACEHOLDER` if Messenger dialog sharing is kept.
- Consider using regular Messenger/WhatsApp contact buttons instead of app-based Messenger sharing if that is simpler.
- Replace footer placeholder social profile URLs:
  - `https://www.facebook.com/PLACEHOLDER_STRANGE_BUT_TRUE`
  - `https://x.com/PLACEHOLDER_STRANGE_BUT_TRUE`
  - `https://www.instagram.com/PLACEHOLDER_STRANGE_BUT_TRUE`
  - `https://www.tiktok.com/@PLACEHOLDER_STRANGE_BUT_TRUE`

Note: Instagram and TikTok do not provide simple reliable web share URLs for ordinary website links in the same way Facebook, X and WhatsApp do. The current buttons use the phone-native share sheet or copyable caption text, which is usually the cleaner path.

## Link Behaviour

- Internal site links stay in the same tab.
- External profile, streaming, sample and social links open in a new tab with `rel="noopener noreferrer"`.
- Subpages include a small Back/Home strip. The Back button uses browser history when available and falls back to `index.html`.

## Google Apps Script Forms API

Use one Google Apps Script Web App endpoint for the public forms. Current endpoint:

`https://script.google.com/macros/s/AKfycbyhKWOuIHgi5LVLniO-_ZnMp0ITOufBBPR94PMImQXTt7GRu7Wt_hiHnk_gJJdDg-m_/exec`

Current setup:

- `contact.html` and `feedback.html` post to the Google Apps Script web app endpoint above.
- `contact-apps-script.gs` is a starter script for a Google Sheet-bound Apps Script web app. It writes form rows to the tabs below and emails notifications to `sbt4183@gmail.com`.
- Do not use `mailto:` form handling for the public forms. It depends on the visitor's email app and is too brittle for public submissions.

Form types:

- `enquiry`: general contact form on `contact.html`.
- `meeting_request`: meeting request form on `contact.html`.
- `feedback`: friendly feedback form on `feedback.html`.

Suggested Google Sheet tabs:

- `Enquiries`
- `Meeting Requests`
- `Feedback`

Apps Script responsibilities:

- Validate required fields.
- Reject or flag submissions where the hidden `website` honeypot field is filled.
- Reject oversized message bodies.
- Write each submission to the matching Sheet tab.
- Email relevant notifications to `sbt4183@gmail.com`.
- Include enough meeting-request details in the notification email for Luke to manually confirm and create a Google Calendar event.

Calendar handling v1:

- Do not create confirmed Google Calendar events automatically.
- Treat meeting form submissions as requests only.
- If Calendar automation is added later, create tentative/requested events only after private review or via a private admin action.

Drive/workspace:

- Use `auraofintelligence@gmail.com` Drive / AI Pro workspace for product files, working documents and internal materials where appropriate.

## Later AI Guide

The AI guide is parked for later. Keep public contact paths focused on the normal enquiry, meeting request and feedback forms for now.

Best v1:

- Start with a small text guide that answers from approved website copy.
- Use it for service triage, download/catalogue explanation, meeting prep and form handoff.
- Keep it opt-in and clearly labelled as AI.
- Do not make it a private support channel.

Approved knowledge sources:

- Public site pages.
- Service menu and market notes.
- Download catalogue and sample descriptions.
- Privacy, terms and checkout notes.
- Short tone examples written by Luke.

Connector and API options:

- Google Apps Script for form submission handling.
- Google Sheets for enquiries, meeting requests, feedback and later AI handoff notes.
- Google Calendar for manual meeting confirmation first; tentative automation later if needed.
- Google Drive for approved knowledge files, product files and operating notes.
- OpenAI API or another agent platform for plain-language triage.
- ElevenLabs or browser speech for optional voice after the text guide works.
- HeyGen only if an avatar/video layer genuinely improves clarity and trust.

Rules before launch:

- Label it clearly as AI.
- Keep it opt-in, not auto-playing.
- Do not ask for passwords, private keys, recovery phrases, health/financial documents, private device contents, payment card details or one-time codes.
- Always offer the normal contact form, meeting request form or feedback form as a fallback.
- Add privacy wording before embedding any third-party agent.
- Treat uncertain or personal requests as handoffs to Luke, not as answers to improvise.
