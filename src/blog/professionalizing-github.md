---
title: professionalizing your github account
date: 2021-06-30
extract: "As I have become more serious in my pursuit of a coding job, that username has been much on my mind. While it's not an embarrassment, it is a distraction."
social_preview: "/images/og/GH-graph.jpg" 
---

![Pretend github contribution graph](/images/og/GH-graph.jpg)

Egomadking is an online handle that has served me well since the days we had to pay for hourly dial-up. Without going into too many details, it is a nod to a couple of characters from Gaelic mythology. Years ago, I signed up with GitHub using that username without thinking much about how long I would be sticking with the platform.

Along the way, it's been a conversation piece- which is all well and fine as a hobbyist. As I have become more serious in my pursuit of a coding career, that username has been much on my mind. While it's not an embarrassment, it is a distraction. I have found myself in a position of explaining the username rather than getting straight to focusing my GitHub content.

To get rid of that distraction, I've decided to change my username. Since it is bound up tightly with my git workflow and development history I have decided to document how a name change works.

## Side Effects

- On changing a username, the old username is now up for grabs.
- GitHub pages repo only acts like a normal repo.
- Readme repo is the same and will only act as a normal repo, no longer updating profile.
- Static links to gists will not redirect.
- Origin on local repo will redirect until a new account with old username makes repo of same name.
- Links to GitHub repo will redirect until a new account with old username makes repo of same name.
- Will lose commit history and contribution stats if there is no email associated with GitHub account and git actions.

### Positive effects

- All references to username update on platform: issues, pr's, affiliations, forks, etc.

### Does not affect

- SSH keys or apps associate with GitHub
- Local git config

## Process

1. Created another account with target name so it's not lost while doing research.
2. Deleted that account to free up name when ready to make the swap on original account.
3. Change current account's username.
4. Created new account to regain relinquished username. *NOTE: username squatting is against GitHub's user account policy.* This is only a temporary measure while any old links still have not been changed.
5. Rename repos used for GitHub pages and Readme to re-enable their functionality.
6. Update origin on local repos.

## Closing

While it affects a great deal of content in a GitHub account, changing the username was a lot less painful than I thought it would be. I hope that this serves as a reference for anyone else out there that wants to tweak polish up their account for a job hunt. I've provided a the git commands to change local repos and some further reading below

You're not going to get me to remove that sock puppet holding a mackerel any time soon though...

## Git Commands

To check a local repo's origin:

```bash
git remote -v

# which will output something like:

#: origin git@github.com:egomadking/RecipeBook.git (fetch)
#: origin git@github.com:egomadking/RecipeBook.git (push)
```
To change a local repo's origin, update the username portion

```bash
##                                       *CHANGE THIS*
git remote set-url origin git@github.com:royemosby/RecipeBook.git
## variation if using https:
##                                           *CHANGE THIS*
git remote set-url origin https://github.com/royemosby/RecipeBook.git
```

## References

- [Free Code Camp: A quick guide to changing your GitHub username](https://www.freecodecamp.org/news/a-quick-guide-to-changing-your-github-username/)
- [GitHub Docs: Managing user account settings](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings)
- [Stack Overflow: Change GitHub Account username](https://stackoverflow.com/questions/9191918/change-github-account-username)
- [Nikhita.dev: Changing my github username](https://www.nikhita.dev/changing-my-github-username)


