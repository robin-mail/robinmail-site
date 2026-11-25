/*
  Robin Mail dispatches (the studio journal).

  To add a post: copy one entry, paste it at the TOP of the list, and edit it.
  Newest first. The Desk feed, the bottom tray and the article page all read from here.

  id       short web address for the post, lowercase-with-dashes (becomes #id)
  kicker   small label above the title, e.g. "Studio note" or "Project update"
  date     leave "" until a date is confirmed; it then shows on the card and article
  related  optional link to the canonical project page
*/
window.DISPATCHES = [
  {
    id: "office-for-finding-things",
    kicker: "Studio note",
    date: "",
    title: "An office for finding things",
    deck: "Why Robin Mail builds finder tools, with Firewatch as the first example.",
    image: "assets/dispatches-field-radio.jpg", width: 880, height: 1100,
    alt: "An ink engraving of a vintage field radio with a push-to-talk microphone, coiled cable, and red indicator light.",
    caption: "Ink study for Robin Mail",
    related: { href: "#firewatch", label: "Firewatch" },
    standfirst: "The software I build at Robin Mail is for a stubborn job: checking the same places, again and again, for something that may not be there yet.",
    body: `
<p>It could be a new report, a changed deadline, or a notice that only matters if it applies to you. You usually know what a useful result looks like. The hard part is keeping up with every place it might turn up.</p>
<h2>Start with the thing you keep checking</h2>
<p>When I build a finder, I start with three questions. What are you trying to catch? Where might it show up? What will you do when it does? The answers decide what the tool watches, and whether a result should arrive as a quick alert or wait in a digest.</p>
<p>AI helps read and sort the material. A useful result still needs its original source and enough context for a person to make the call.</p>
<h2>Where Firewatch fits</h2>
<p>Firewatch applies this to public reports of potentially severe structure fires in West Virginia. A brief shows what the source reported, why it stood out, and what still needs checking. A flag is a lead to review, not a confirmed incident or an emergency alert.</p>
<p>Firewatch is the first of these tools. Floodwatch is next, built the same way for reports of serious flood damage in West Virginia.</p>`
  }
];
