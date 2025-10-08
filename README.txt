
SNAPISCOOL ACCESSORIES — Flat upload package (no folders)
------------------------------------------------------

What you received:
- index.html
- styles.css
- script.js
- wallet1.jpg, wallet2.jpg, wallet3.jpg, logo.png
- README.txt (this file)

This package is intentionally FLAT (no nested folders) so you can upload directly via GitHub web UI:
1. Go to your repo (https://github.com/YOURUSERNAME/snapiscool-wallets)
2. Click Add file -> Upload files
3. Drag & drop ALL files from this ZIP root into the upload area (do NOT upload the ZIP file itself)
4. Commit changes (the upload will overwrite existing files)
5. Go to Vercel -> New Project -> Import from GitHub -> select repo -> Deploy (defaults are fine)

If you need to replace images or logo later:
- Open the repo on GitHub -> Click Add file -> Upload files -> Upload a single file with the same name (e.g., logo.png) -> Commit
- Vercel will auto-deploy the change.

Payments (next steps after deployment):
1. PayHere (Sri Lanka): create account at payhere.lk, get Merchant ID & Secret, I will guide integration.
2. PayPal: create Business account and get client ID to link for international payments.
3. COD: no provider needed; we show COD option on checkout and mark "COD available only in Sri Lanka".

If your GitHub web UI ever shows nested folders after upload, repeat the upload but make sure you SELECT the files inside the extracted folder (not the parent folder).

If you want, I can also provide a second ZIP with a tiny Node server for PayHere webhook handling. Let me know.
