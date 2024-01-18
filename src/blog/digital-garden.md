---
title: Moving to a Digital Garden
date: 2024-01-18
extract: "I figure that sharing my thoughts or creative endeavors as they evolve is a good balance between screaming into the void every time I need a new job and me just simply living my life, too busy to publish..."
description: "I am creating a digital garden for myself"
tags: ['blogging', 'platform']
---

## Background

Many areas in my life overlap. My coding, cooking, gardening, carpentry, and art all bleed into each other in numerous ways. My [Obsidian](https://obsidian.md/) vaults (Obsidian term for self-contained group of files markdown and supporting attachments - I'll just refer to them as journals or notebooks) are starting to demonstrate this as my daily activities broaden with new activities that I wish to capture/research. As an elder goblin with a variety of interests, I also feel the need to connect to community and most of that is done in earnest. Some of my interests are niche and the world is wide. I could attract some like minds eventually, with a wide enough net. I figure that sharing my thoughts or creative endeavors as they evolve is a good balance between screaming into the void every time I need a new job and me just simply living my life, too busy to publish finished articles.

I have several sites that I maintain that focus on specific domains. I have a tech blog where I've shared 1/10th of 1% of my thoughts because I feel that everything there needs to be polished to be presentable for employment opportunities. You'll note that only publish between jobs. That's a waste of space and smells needy. I also have a recipe site that, while infrequently updated, I reference with some regularity. I like that much more but there is still friction in getting it updated. Not terribly much - but enough. I have to open VS Code and edit markdown files. I then have to push my changes to a repo on Github that is in turn pulled in by Netlify. They compile it and if there are no problems, the deploy an updated static website. I get ahead of myself though…

## Vision

I want a public [digital garden](https://joelhooks.com/digital-garden/) that I can tend. This garden would share my current thoughts and doings. Each entry would be a living entity that I could cultivate or neglect as my interests guide me. I would love to write in my digital journal and then have designated files automatically publish to the aether. I think that this approach better represents who I am as a person, artist, developer, gardener, etc. and support a learning in public approach to self-improvement. I will still continue to journal about all aspects of my life, so I'll give myself ability to not publish specific content without having to keep it cordoned off. Public or private, my content would all be managed from the digital journals.

## Current Friction Points

- I maintain too much separation between content islands and I would like to remove barriers and allow for blending.
- Content has to be polished before publishing. Discourages fast sharing.
- It's irritating to journal or create recipes in VS Code. I would much rather do so in Obsidian.
- I tend to fat-finger or forget frontmatter specifics I've decided upon in YAML - especially for new files.
- I forget about content drafts when they are buried in a repo.
- Duplicating files from my notebook over to the repo muddies my source of truth. It's silly to have to update the same thing in two places.
- I have to do a full local build to verify if a specific file update will publish properly.
- Embedded images have to be manually copied over and `img` `hrefs` updated.

## Technical Components of My Digital Garden

- use Obsidian vaults my source of truth
  - all updates spring from Obsidian files
  - validate the file's formatting with a [linter extension](https://platers.github.io/obsidian-linter/)
  - have yaml and file templates on hand for new files using [Templater](https://silentvoid13.github.io/Templater/introduction.html)
  - a tracker, with the use of [Maps of Content(MOC)](https://obsidian.rocks/maps-of-content-effortless-organization-for-notes/) to indicate publishing status inside my digital journal
- use [Typer](https://typer.tiangolo.com/) to build a cli service to synchronize journal files with the digital garden's repo
  - semi-manual publishing workflow to keep getting started simple
  - traverse specific directories and compare the journal contents against the garden repo contents
  - workflow consisting of three phases
    - before reconciliation
      - pull latest remote on repo (notify of any Depend-a-Bot updates)
      - filter out private content by looking for a specific YAML mapping indicating a publishing status: eg: publish, draft, private
      - look for new, updated (relative to timestamp on file in repo), and deleted files
      - raise error if repo content is newer than journal content
    - during reconciliation
      - it will map internal, Obsidian-style links to relative links during copy-over
      - it will strip the frontmatter of journal-specific frontmatter meta before placing/updating content in the repo
      - slugify the title for a filename so I don't have to rename my files
        - this will need a duplicate catching mechanism
      - examine files for linked images or [og images](https://ogp.me/#metadata) listed in frontmatter
        - find the image in the digital journal
        - give the image a human-readable name
        - transfer it to an assets directory in the repo
        - update the image href + add title
    - after reconciliation
      - kick off git commit then push
      - mark journal files with a date-time last processed
    - provide a "dry run" option to see what changes would be made
    - provide a "force" option for unanticipated problems during reconciliation, remote rebuild
    - log changes
- use GitHub repo to hold and version control an Astro project
  - pre-commit hook to again lint markdown files for accuracy
  - version control allows me to edit and retain past iterations - no fear of losing content
  - repo commit + push will kick off Netlify build process
- use Astro site to host digital garden
  - scaffold the garden's layout and presentation (let's have some analogy fun!)
    - each domain becomes a plot
    - each post is a plant
    - tags and links enable cross-pollination
  - build interactive content directly in Astro but alongside published markdown files

## Build Tasks

### Digital Journal

- refine frontmatter needs
- generate frontmatter, file templates
- designate directories for publishing (this will the part that evolves the most)

### CLI Tool

- access directories
- inventory existing files
- filter for publishing status
- slugify title + rename file
  - identify and resolve name conflicts predictably (could add a slug to frontmatter)
- convert Obsidian links into relative links
  - based on directory mapping to site structure (could add directory to frontmatter)
- identify embedded images, og images
  - find in journal assets directory
  - give human-readable name
  - copy to garden assets
  - update link to image in markdown file
- trigger a `git pull` on garden repo
  - alert if conflict/fail
- perform reconciliation
  - replace updated files
    - compare matching files' timestamps in frontmatter and replace only files where journal is newer
    - overwrite repo file if journal file newer
    - alert if repo file more recent than journal file
  - copy over new files
  - delete repo file when there is no longer a corresponding journal file
- trigger `git commit`, `git push` to GitHub
  - log out any failures
- on `push` success, update journal file frontmatter
  - published timestamp (match last edited timestamp, not date-time processed)
  - add slug
- log all changes for posterity/troubleshooting

### Version Control

- define custom linting rules for frontmatter + markdown files
- pre-commit hook to lint

### Website

- taxonomy and [IA](https://www.altexsoft.com/blog/information-architecture/)
- structure and layouts
  - landing
  - view for each garden plot (domain)
  - plant (entry) page
  - search
  - colophon
- identify reusable components (header, footer, nav, etc)
- [UX](https://www.altexsoft.com/blog/information-architecture/#information-architecture-vs-ux-vs-ui) and styling
- tag indexes
- use of cookies to show users [frecent](https://en.wikipedia.org/wiki/Frecency) pages
