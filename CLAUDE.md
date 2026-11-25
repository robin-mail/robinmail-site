# Claude: read AGENTS.md first

All rules for working on this site are in AGENTS.md. They apply to Claude exactly as they apply to ChatGPT.

Short version:

1. Pull the latest main before any edit, and read `git log -15 --stat` and CHANGELOG.md.
2. Change only what Walker asked. Never undo the other assistant's work.
3. Commit as `[Claude] ...`, add a CHANGELOG.md line, push to main right away.
4. Never drag-and-drop or zip-upload to Netlify. Netlify publishes from main.
