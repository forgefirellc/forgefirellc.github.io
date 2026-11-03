# Forge Fire public website

Static GitHub Pages site for Forge Fire LLC. Construction inquiries lead
`index.html`; `metal.html` retains the plasma concept tool and partner-fulfilled
metal inquiry path. `site.css` and `site.js` support the new homepage. Existing
logo, photo assets and `CNAME` are retained.

## Inquiry behavior

There is no lead-submission backend. Both forms prepare an on-page summary and
a `mailto:` draft addressed to the existing business email. The visitor must
open their email app and send it. The copyable summary is a fallback for missing
email apps or truncated drafts. Selecting a plasma reference file includes only
its filename; visitors must attach the file manually in their email app.

No Command Center access, credential, API connection, analytics or browser
storage is added. The construction page uses local assets only. The preserved
plasma tool still uses its existing public Tailwind CDN dependency. Without
JavaScript, visitors can use the visible email/phone contacts instead of the
draft tools.

## Review and verification

Work in the cloud; no owner-PC processes are needed. A temporary loopback
static server can preview these files in a cloud browser. Stop it after review.

Before publication, check both pages at narrow phone, tablet and desktop sizes;
navigation, labels and keyboard focus; construction form required fields and
draft contents; plasma shape/dimension controls and draft contents; and the
no-JavaScript contact fallback. Use synthetic details and do not send email.
An automated accessibility scan supplements visual and keyboard checks; it does
not establish complete accessibility or real-device/email-client compatibility.

Existing public contacts are preserved provisionally. The owner must confirm
them and the offered service wording before publication. The shop illustration
is explicitly a concept, not a completed project, construction plan or portfolio
claim. Project details and site/scope review precede estimates.

## Deployment

Verified on 2026-10-30: GitHub Pages for `forgefirellc/forgefirellc.github.io`
publishes the root of `main` using its legacy branch build. `CNAME` is
`forgefirellc.com`. Changes merged/pushed to `main` can publish the live site.

This review does not authorize publishing. After explicit publication approval:
publish the reviewed branch/PR, review its final diff, merge to `main`, and
observe the Pages build to completion for that exact commit. Then check HTTPS,
both navigation paths, assets, mobile layout and draft preparation on the live
site. Do not change DNS, hosting settings, the Command Center or its database as
part of this static-site release. Actual test email delivery requires its own
authorized owner action.
