---
title: professionalizing your github account
date: 2021-06-30
extract: "As I have become more serious in my pursuit of a coding job, that username has been much on my mind. While it's not an embarrassment, it is a distraction."
---

Egomadking is an online handle that has served me well since the days we had to pay for hourly dial-up. Without going into too many details, it is a nod to a couple of characters from Gaelic mythology. Years ago, I signed up with GitHub using that username without thinking much about how long I would be sticking with the platform.

All along the way, it's been a conversation piece which is all well and fine. As I have become more serious in my pursuit of a coding job, that username has been much on my mind. While it's not an embarrassment, it is a distraction. I have found myself in a position of explaining the username rather than getting straight to focusing on GitHub account.

To get rid of that distraction I've decided to change my username. Since it is bound up tightly with git, command line tools and other interactions I have decided to document it.

## Side Effects

- on changing a username, that old username is now up for grabs
- GitHub pages repo only acts like a normal repo
- Readme repo is the same and will only act as a normal repo, no longer updating profile
- Static links to tickets, gists, pull requests, etc do not work.
- GitHub will lose redirects when a new account with old username makes repo of same name.
- Will lose commit history, contribution stats if there is no email associated with GitHub account and git actions.
- Remote on local repos need to be updated when GitHub can no longer redirect.

### Positive effects

- all references to username update on platform: issues, pr's, affiliations, forks, etc.

### Does not affect

- SSH keys still work
- Local git config (as long as GH email affiliated)

## Process

1. created another account with target name so it's not lost while doing research
2. killed that account
3. change current account's username
4. created new account to regain relinquished username
5. rename repo used for GitHub pages and Readme to re-enable their functionality.
6. update origin on local repos

## Commands

To check a local repo's origin:

```bash
git remote -v

# which will output something like:

#: origin git@github.com:royemosby/RecipeBook.git (fetch)
#: origin git@github.com:royemosby/RecipeBook.git (push)
```
To change a local repo's origin, update the username portion

```bash
git remote set-url origin git@github.com:royemosby/contact-list.git
## variation if using https:
git remote set-url origin https://github.com/royemosby/contact-list.git
```

## References

https://www.freecodecamp.org/news/a-quick-guide-to-changing-your-github-username/
https://stackoverflow.com/questions/9191918/change-github-account-username
https://www.nikhita.dev/changing-my-github-username
https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username

You're not going to get me to remove that sock puppet holding a mackerel any time soon though ///