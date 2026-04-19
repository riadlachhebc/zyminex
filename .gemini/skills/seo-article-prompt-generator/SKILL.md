---
name: seo-article-prompt-generator
description: >
  Generate a precise, fully structured SEO blog article prompt for an AI agent
  that has access to the full project codebase/site. Use this skill whenever
  the user wants to write a blog post, article, or content piece for their
  website that should rank on Google. Triggers include: "write an article about",
  "create a blog post", "generate a prompt for an article", "SEO article on X",
  "blog post about X", or any request for content creation with SEO requirements.
  This skill asks the user for a topic, searches for current information and
  keyword trends, then outputs a detailed, copy-paste-ready prompt for an
  AI agent to produce a fully structured, SEO-optimized article with H1/H2 tags,
  WebP images, alt text, internal links, schema, tables, and Google-preferred logic.
---

# SEO Article Prompt Generator

This skill turns a topic into a **fully structured, AI-agent-ready prompt** for
writing a high-quality, SEO-optimized blog article. The output prompt is designed
to be handed directly to an AI agent with full project context.

---

## Step 1 — Ask for the Topic

If the user hasn't already provided a topic, ask:

> "What topic should the article cover? Also, do you have a target keyword or
> search phrase in mind — or should I find the best one?"

Also ask (only if not already clear from context):
- **Target audience** (beginner / intermediate / expert? end-user / developer?)
- **Internal pages to link to** (or say "find relevant ones in the project")
- **Desired word count** (default: 1,500–2,500 words)
- **Tone** (informative / technical / conversational — default: informative)

---

## Step 2 — Research (Always Do This)

Before building the prompt, use `web_search` to gather:

1. **Search intent**: Search the primary keyword to see what types of pages
   rank (guides, listicles, comparisons, how-tos). The article type must match.
2. **Current top facts/updates**: Find at least 2–3 recent data points,
   statistics, or developments the article can reference for freshness and EEAT.
3. **People Also Ask / related queries**: Search `people also ask [topic]` to
   extract 3–5 sub-questions to answer in the article (H2 candidates + FAQ schema).
4. **LSI / semantic keywords**: Identify 5–8 related terms/phrases to include
   naturally in the body.
5. **Competitor angle gaps**: Note what the top results cover and what they miss
   — the article should have a unique angle or deeper coverage somewhere.

---

## Step 3 — Build the Prompt

Output a complete, copy-paste prompt using the template below. Fill in every
`[BRACKET]` section with real content from your research.

---

### OUTPUT PROMPT TEMPLATE

```
==========================================================
SEO ARTICLE GENERATION PROMPT
==========================================================

## YOUR ROLE
You are an expert SEO content writer with full access to this project's
codebase, pages, and internal link structure. Your task is to write a
complete, publish-ready blog article that ranks on Google and follows
2026 SEO best practices.

---

## ARTICLE BRIEF

**Topic:** [TOPIC]
**Primary Keyword (H1 / Title):** [PRIMARY_KEYWORD]
**Search Intent Type:** [Informational / How-To / Comparison / Listicle]
**Target Audience:** [AUDIENCE]
**Target Word Count:** [WORD_COUNT]
**Tone:** [TONE]

---

## STRUCTURE REQUIREMENTS

### Meta / Page Head
- **Title Tag (≤60 chars):** [TITLE — primary keyword near the front]
- **Meta Description (≤155 chars):** [DESCRIPTION — includes keyword, clear
  value proposition, ends with a subtle call to action]
- **URL Slug:** [slug-with-primary-keyword]

### Article Schema
Include `Article` or `BlogPosting` JSON-LD schema in the article header with:
`headline`, `datePublished`, `dateModified`, `author`, `description`, `image`.

---

### Article Skeleton (H1 + H2 structure)

**H1:** [TITLE / PRIMARY KEYWORD]

**Opening paragraph (≤80 words):** Answer the core question or state the
main benefit immediately (answer-first structure). Include the primary keyword
naturally in the first sentence.

**H2: [SECTION_1_TITLE]** — [What this section covers]
**H2: [SECTION_2_TITLE]** — [What this section covers]
**H2: [SECTION_3_TITLE]** — [What this section covers]
**H2: [SECTION_4_TITLE]** — [What this section covers — include a table or
  comparison here if applicable]
**H2: Frequently Asked Questions** — Answer these specific PAA questions:
  - [PAA_QUESTION_1]
  - [PAA_QUESTION_2]
  - [PAA_QUESTION_3]

Add FAQ schema (`FAQPage` JSON-LD) for the FAQ section.

**Closing paragraph / CTA:** Summarize the key takeaway and guide the reader
to the next logical step (internal link to a relevant page or feature).

---

## CONTENT RULES

### Keywords & Semantics
- Primary keyword: use in H1, first paragraph, at least one H2, and
  naturally 2–3× in the body. Do NOT stuff.
- LSI / semantic keywords to weave in naturally:
  [LSI_KW_1], [LSI_KW_2], [LSI_KW_3], [LSI_KW_4], [LSI_KW_5]
- Long-tail variants to include at least once:
  [LONGTAIL_1], [LONGTAIL_2]

### Freshness & EEAT Signals
- Reference at least 2 recent statistics or findings:
  - [STAT_OR_FACT_1 — with source name]
  - [STAT_OR_FACT_2 — with source name]
- Write from a position of expertise: explain *why*, not just *what*.
- Avoid vague claims — every assertion should be grounded in logic,
  a real example, or a cited source.

### Tables
Include at least one Markdown or HTML table that compares, summarizes,
or organizes data. Suggested placement: [SECTION_WHERE_TABLE_FITS].
Example structure:
| Feature / Item | Description | Benefit |
|---|---|---|

### Internal Links
Scan the project for pages relevant to this topic and link to them
contextually (not in a list — woven into sentences). Mandatory internal
links to check for:
[INTERNAL_LINK_PAGE_1 — anchor text suggestion]
[INTERNAL_LINK_PAGE_2 — anchor text suggestion]
[INTERNAL_LINK_PAGE_3 — anchor text suggestion]
If these pages don't exist, note them as "recommended future article" in
an HTML comment at the bottom of the file.

---

## IMAGE REQUIREMENTS

For each H2 section, include one image block using the following format:

```html
<!-- IMAGE: [descriptive-filename-with-keyword].webp
     Alt: [Alt text: describe what the image shows, include keyword if natural]
     Size: max 800×500px, <80KB WebP
     Caption: [Optional short caption]
     Placement: Below the H2 heading, before body text -->
```

Required images:
1. **Hero image** (below H1, 1200×630px WebP): [Describe what it should show]
2. **[Section 2 image]**: [Describe]
3. **[Section 4 image — can be a chart or diagram]**: [Describe]

All images must:
- Be in **WebP format**
- Have descriptive, keyword-rich filenames (hyphens, no spaces)
- Have meaningful `alt` attributes (not "image of…" — describe content)
- Be compressed to stay under **80KB** when possible
- Never be decorative-only — every image must add context

---

## TECHNICAL OUTPUT FORMAT

Write the full article in clean, semantic **HTML** (not Markdown), using:
- `<h1>`, `<h2>`, `<h3>` tags (no skipping levels)
- `<p>` for paragraphs (max 3–4 sentences each)
- `<ul>` / `<ol>` for lists (no wall-of-text sections)
- `<table>` with `<thead>` / `<tbody>` for any data tables
- `<figure>` + `<figcaption>` wrapping each image placeholder
- `<a href="...">` for internal and external links
  (external links: add `rel="noopener"`, no `target="_blank"` unless needed)
- JSON-LD `<script type="application/ld+json">` blocks at the top for:
  - `BlogPosting` schema
  - `FAQPage` schema (in FAQ section)

Avoid inline styles. Use class names compatible with the project's existing
CSS conventions (check the project's stylesheet before writing class names).

---

## QUALITY CHECKLIST (verify before outputting)
- [ ] Title tag ≤ 60 chars, primary keyword near start
- [ ] Meta description ≤ 155 chars, includes keyword + CTA
- [ ] H1 matches or closely mirrors title tag
- [ ] Primary keyword in first 100 words
- [ ] At least 3 H2 sections with distinct, useful content
- [ ] FAQ section with 3+ questions answering real PAA queries
- [ ] At least 1 table
- [ ] At least 2 internal links with contextual anchor text
- [ ] Hero WebP image + at least 2 section images with alt text
- [ ] JSON-LD BlogPosting schema present
- [ ] JSON-LD FAQPage schema present
- [ ] No keyword stuffing (primary keyword ≤ 3–4× per 1,000 words)
- [ ] Answer-first opening paragraph
- [ ] Closing paragraph with internal link CTA

==========================================================
END OF PROMPT
==========================================================
```

---

## Step 4 — Deliver to User

After outputting the filled prompt:

1. **Summarize** what you searched and the top keyword/intent you chose
   (2–3 sentences max).
2. **Flag** any gaps — e.g., "I couldn't find current stats for X; the agent
   should search for those before writing."
3. **Remind** the user: "Hand this prompt to your AI agent that has full
   project access so it can resolve the internal link placeholders automatically."

---

## Notes for Skill Execution

- Always search before writing the prompt — never fabricate statistics or keyword data.
- The prompt is for a downstream **agent with project context**, so use
  `[INTERNAL_LINK_PAGE_X]` placeholders when you don't know the exact URL.
  The agent will resolve them.
- Keep the output prompt self-contained: it should work even if the agent has
  no memory of this conversation.
- If the user provides a partial topic (e.g., "write about gravity simulation"),
  clarify the angle before researching: comparison? tutorial? feature explainer?
- Default image sizes: Hero 1200×630, section images 800×500, max 80KB WebP.
- Schema defaults: `author.name` = site owner (ask if unknown); `datePublished`
  = today's date; `dateModified` = same unless updating existing article.
