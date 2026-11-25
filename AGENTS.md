# Rules for AI assistants working on robinmail.com

Claude and ChatGPT (Codex) both work on this website. This GitHub repo (robin-mail/robinmail-site) is the ONLY true copy of the site. On Walker's Mac it lives at ~/Robin Mail/robinmail-site. Follow these rules every time, whether Walker asked you in a chat or tagged you on GitHub.

## 1. Who does what (lanes)

ChatGPT owns how the site looks. Claude owns how the site works.

| | ChatGPT / Codex: the look | Claude: how it works |
|---|---|---|
| index.html | The `<style>` block, page markup and layout, visual copy | The `<script>` block at the bottom, form behavior, `<head>` meta and SEO tags |
| Other files | Everything in `assets/` | `dispatches.js` and `finders.js` format, any new `.js` file, `netlify.toml`, `netlify/`, `.github/` |

1. Content (posts in dispatches.js, finder text in finders.js) is done by whoever Walker asks. Do not change the data format without handing off to Claude.
2. ChatGPT: do not rename or remove ids, classes or `data-` attributes that the script uses. Claude: do not change classes, styles, layout or images.
3. If your task needs a change in the other lane, do not make it yourself. Do your part and hand off (section 5). Only exception: a one-line change your work depends on, called out in the pull request.

## 2. Before you change anything

1. Start from the latest main on GitHub. Never start from an old folder, an old zip, or memory.
2. Read the recent history: `git log --oneline -15` on main, and the open pull requests (`gh pr list`). If an open pull request touches the same thing, tell Walker before you start.
3. If your copy is different from GitHub, GitHub wins. Do not paste your old version over it.

## 3. While you work

1. Change only what Walker asked for in this task. Keep edits small.
2. Never remove, replace or revert an image, section, page or wording that you did not create in this task, unless Walker asks you to by name.
3. Do not rewrite a whole file when a small edit will do. Rewriting whole files is how the other assistant's work gets erased.
4. Locked choices (do not change without Walker asking):
   1. The Dispatches section uses the radio image, not the printing press.

## 4. When you finish: branch and pull request

1. Work on your own branch, never on main: `claude/<short-name>` or `chatgpt/<short-name>`.
2. Commit messages and the pull request title start with who you are, for example `[Claude] Send contact form to Netlify Forms` or `[ChatGPT] New Floodwatch hero layout`. Merged titles on main are the site's changelog.
3. Push the branch and open the pull request right away. Do not sit on unpushed work.
4. Put this handoff note in the pull request description:

   ```
   What changed:
   Lane: look (ChatGPT) or how it works (Claude)
   Handoff: none, or exactly what the other assistant needs to do
   Don't touch:
   Check it: what Walker should look at in the Netlify preview
   ```

5. If Walker asked you in a chat, reply with the pull request link.
6. Only Walker merges into main, or an assistant when Walker says "merge it" for that pull request. Never push straight to main unless Walker says so for that change. Never force-push.
7. If your branch falls behind main, update it from main and keep BOTH sets of changes.

## 5. Handing off to each other on GitHub

1. In a pull request comment, `@claude <request>` sends work to Claude, `@codex <request>` sends work to Codex, and `@codex review` asks Codex for a review.
2. When your part is done and the Handoff line is not "none", post one comment on the pull request tagging the other assistant with that exact request.
3. Tag the other assistant once per handoff. Never tag back just to say thanks or confirm: that starts a loop.
4. When you are tagged on a pull request, add your commits to that same branch when you can, instead of opening a new pull request. Then reply on the pull request with what you did.

## 6. Publishing to Netlify

1. Do NOT drag and drop a folder or zip into Netlify, and do NOT run `netlify deploy` from your own folder. Uploading your own copy is what erased the radio image.
2. Netlify publishes from main. Each pull request gets its own Netlify preview link, which is where Walker checks the work before merging.

## 7. House style for site copy

1. Speak as "Robin Mail" or "we". No "I" or first person, except in the blog/Dispatches posts.
2. No em dashes. Use colons, commas or a new sentence instead.

## Code Review Rules

Codex and Claude both use these when reviewing a pull request.

1. Flag any image, section, page or wording that is removed or replaced without being named in the pull request description.
2. Flag changes outside the author's lane (section 1) that the description does not call out.
3. Flag the Dispatches image changing from the radio.
4. Flag em dashes, or first-person "I" outside Dispatches posts, in site copy.
5. Flag ids, classes or `data-` attributes that are renamed or removed while the script still uses them.
6. Flag any direct push to main, `netlify deploy`, or uploaded copy of the site.
