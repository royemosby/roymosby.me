---
title: "Finding and stopping stray processes"
date: 2021-08-28
extract: "When running servers or services from the terminal, it is often nice to know how to shut them down manually in case things go wrong or you lose a terminal window."
description: "Finding processes using the LSOF command"
social_preview: "/images/og/coin-stacks.jpg"
tags: ["command line", "troubleshooting"]
---

<figure>
  <img src="/images/og/file-drawer.jpg" alt="article hero image. Open file cabinet populated with folders full of papers">
  <figcaption>Image by <a href="https://unsplash.com/photos/Q9y3LRuuxmg">
Maksym Kaharlytskyi</a></figcaption>
</figure>

When running servers or services from the terminal, it is often nice to know how to shut them down manually in case things go wrong or you lose a terminal window. To dime myself out, it's usually closing down a terminal window without stopping Browser Sync or Python's SimpleHTTPServer. We're all learning, right?

The easiest way to find and shut down that errant process is to examine what files are currently open. Enter the command `lsof` . The command is an abbreviation of "list open files" and reports currently open files and what processes are using them.

Using by itself is not enormously helpful since the list is always quite lengthy. Since most of the time the tools I am using are server-based, I can take advantage of the `-i` flag, which selects by IP, host, or port.

Below are a list of commonly used ports on my projects. Your list may differ but it would be handy to know ahead of time what ports your services work on.

- [Browsersync](https://browsersync.io/) and [Eleventy](https://www.11ty.dev/) use 8080
- [Python simple server](https://docs.python.org/3/library/http.server.html#http.server.SimpleHTTPRequestHandler) defaults to 8000
- [Jekyll](https://jekyllrb.com/) defaults to 4000
- [Webpack](https://webpack.js.org/) and [Ruby on Rails server](https://guides.rubyonrails.org/getting_started.html#starting-up-the-web-server) defaults to 3000

When using the `-i` flag, there are 4 options that can be fed in, but we only need to focus on the last one, the service and port. The following is how the `lsof` command should be constructed.

```bash
lsof -i tcp:PORTNUMBER
```

Here it is in action, looking for a process on port 8080:

![LSOF Command](/images/lsof.jpg)

After finding the errant process, take note of its PID. Use the `kill` command with the process number to stop it. There are [various signals](https://ss64.com/osx/kill.html) that tell how `kill` how agressive it should be when stopping a process. It defaults to -15 when none are provided, which allows the process to gracefully shut down.  For unruly processes, use `-9` which will kill the process.

```bash

kill 1234            #where 1234 is the PID 
kill -9 1234
```

The `kill` command does not print anything back onto the screen. Use the `lsof` command again to confirm that the process no longer shows. If it is still running, it may be appropriate to use  `kill -9`.

![image of LSOF command and then kill command](/images/lsoff-kill.png)