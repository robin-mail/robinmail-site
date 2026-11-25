# Rules for AI assistants working on robinmail.com

Claude and ChatGPT both edit this website. This GitHub repo (robin-mail/robinmail-site) is the ONLY true copy of the site. On Walker's Mac it lives at ~/Robin Mail/robinmail-site. Follow these rules every time, before and after any change.

## 1. Before you change anything

1. Get the latest version from GitHub first (`git pull` on main). Never start from an old folder, an old zip, or memory.
2. Read the recent history: `git log -15 --stat` and the top of CHANGELOG.md. See what the other assistant changed.
3. If your copy is different from GitHub, GitHub wins. Do not paste your old version over it.

## 2. While you work

1. Change only what Walker asked for in this task. Keep edits small.
2. Never remove, replace or revert an image, section, page or wording that you did not create in this task, unless Walker asks you to by name.
3. Do not rewrite a whole file when a small edit will do. Rewriting whole files is how the other assistant's work gets erased.
4. Locked choices (do not change without Walker asking):
   1. The Dispatches section uses the radio image, not the printing press.

## 3. When you finish

1. Commit with a message that starts with who you are, for example: `[Claude] Add Floodwatch card to home page` or `[ChatGPT] Fix mobile menu spacing`.
2. Add one line to the top of CHANGELOG.md: date, who, what changed.
3. Push to main right away. Do not sit on unpushed changes.
4. If the push is rejected because main moved, pull, keep BOTH sets of changes, then push. Never force-push.

## 4. Publishing to Netlify

1. Do NOT drag and drop a folder or zip into Netlify, and do NOT run `netlify deploy` from your own folder. Uploading your own copy is what erased the radio image.
2. Netlify publishes from this repo's main branch. Pushing to main is how the site goes live.

## 5. House style for site copy

1. Speak as "Robin Mail" or "we". No "I" or first person, except in the blog/Dispatches posts.
2. No em dashes. Use colons, commas or a new sentence instead.
