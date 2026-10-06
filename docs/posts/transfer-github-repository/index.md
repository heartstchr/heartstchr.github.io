---
title: How to Move or Transfer a GitHub Repository to an Organization
description: "Move or transfer a GitHub repository to an organization in minutes — public or private. Keep full commit history, get an automatic old-URL redirect, and centralize access. Step-by-step guide with video."
date: 2024-05-26
# Not `lastUpdated` — theme-hope reserves that frontmatter key as a boolean
# display toggle. The canonical revision date lives in
# .vuepress/data/posts.js, which feeds both the BlogPosting dateModified and
# the sitemap lastmod.
updated: 2026-10-06
category: [Tech]
tags: [GitHub, Repository Management, Collaboration, Freelancing]
---

<MetaContent :date="$frontmatter.date" :category="$frontmatter.tags"/>
<p class="text-sm text-500 mb-4"><i class="pi pi-clock mr-1"></i>Last reviewed and corrected against GitHub's current transfer documentation on October 6, 2026.</p>
As a developer, freelancer, or team lead, managing your GitHub repositories efficiently is crucial for collaboration and organization. **Moving a repository into a GitHub organization** — GitHub calls this "transferring ownership" — centralizes projects under a team or brand, streamlines access, and keeps your full commit history intact. In this guide, I'll walk you through how to move a repo to an organization using the GitHub interface, clone the transferred repository, and open it in Visual Studio Code (VS Code). Prefer watching? There's a full video walkthrough at the end of this guide.

## "Move" vs "Transfer": Same Feature, Two Words

If you searched for **"how to move a GitHub repository to an organization"**, you're looking for the same feature GitHub documents as **transferring ownership**. There is no separate "move" button — "move a repo to an organization" and "transfer a repository to an organization" both describe the same `Settings → Danger Zone → Transfer ownership` flow. The steps below work for either phrasing.

> Tip for the opposite direction: if you want to **copy** the repository into an organization without moving the original — for example, to start a fork inside a team — skip ahead to the FAQ on copying a repository below.

## Transfer vs Fork: which one do you actually want?

GitHub has no "copy repository" button, so "move it into the org" is always a choice between **transferring ownership** and **forking**. They look similar in the UI and behave very differently afterwards.

| | **Transfer ownership** | **Fork into the org** |
| --- | --- | --- |
| Who owns the canonical repository | The organization | You (the original owner) keeps it |
| The original URL | Redirects to the new org URL | Stays exactly as it was |
| Number of repositories | Still one | Two, which then drift apart |
| Commit history | Fully preserved, not rewritten | Copied forward at fork time only |
| Issues, PRs, releases | Move with the repository | Stay on the original; they do **not** sync |
| Open pull requests | Move, with their full discussion history | Do not carry over |
| Stars, watchers, forks | Move to the new repository | Stay on the original |
| Independent changes | Impossible — one repo | Possible; the fork can diverge freely |
| Best for | Projects the organization should own | Trying something out, or keeping a personal copy |

**Rule of thumb:** if the organization is meant to own the project long-term, transfer. If you want a sandbox or a personal copy that can diverge, fork.

## Why Transfer a Repository to an Organization?

Transferring or moving a repository to a GitHub organization offers several benefits, especially for teams or freelancers managing multiple projects. Organizations provide a centralized hub for repositories, making it easier to manage permissions, collaborate with team members, and showcase projects under a unified brand.

### Benefits of Transferring to an Organization:
- **Centralized Management**: Group related repositories under one organization for better organization.
- **Team Collaboration**: Grant access to team members with defined roles and permissions.
- **Preserved History**: Retain all commit history, issues, and pull requests during the transfer.
- **Professional Branding**: Host repositories under your organization’s github.io domain.
- **Streamlined Access**: Simplify repository management for multiple contributors.

## Step-by-Step Guide to Transferring a Repository

Follow these steps to transfer a GitHub repository to an organization, clone it to your local machine, and set it up for development.

### Prerequisites
- **GitHub Account**: Ensure you have admin access to both the repository and the target organization.
- **Git Installed**: Install Git on your system for cloning repositories.
- **VS Code**: Use Visual Studio Code for editing and managing your project files.
- **Organization Access**: Verify you have permission to create repositories in the target organization.

### Step 1: Navigate to Repository Settings
1. Open your GitHub repository (e.g., `vue-starter-kit`) in a browser.
2. Go to the **Settings** tab of the repository.
3. Scroll down to the **Danger Zone** section, where you’ll find the **Transfer ownership** option.

### Step 2: Select the Target Organization
1. In the **Transfer ownership** section, choose the organization to transfer the repository to (e.g., `stack-seekers`).
2. GitHub will check if the repository name is available in the organization. A green tick will confirm availability (e.g., `vue-starter-kit` is available).

### Step 3: Confirm the Transfer
1. Type the repository name (e.g., `vue-starter-kit`) to confirm the transfer.
2. Authenticate the transfer using one of the following:
   - **Authentication Code**: Use a two-factor authentication (2FA) code if enabled.
   - **Password**: Enter your GitHub password if 2FA is not enabled.
3. Click **I understand, transfer this repository** to initiate the transfer.
4. Wait a few minutes for the process to complete. You’ll see a confirmation popup once the transfer is successful.

<div class="my-6 p-4 surface-50 border-round-2xl border-1 border-100 flex flex-column md:flex-row align-items-center justify-content-between gap-4">
  <div>
    <h3 class="text-xl font-bold m-0 flex align-items-center gap-2">
      <i class="pi pi-envelope text-primary"></i>
      Want more Engineering Guides?
    </h3>
    <p class="text-600 m-0 mt-2 text-sm">Join the Stack Seekers newsletter for weekly insights on DevOps, architecture, and developer productivity.</p>
  </div>
  <div>
    <a href="/stackcast-podcast-mini/" class="no-underline">
      <Button label="Subscribe Now" icon="pi pi-send" severity="primary" raised rounded class="font-bold white-space-nowrap" />
    </a>
  </div>
</div>

### Step 4: Verify the Transfer
1. Navigate to your organization’s GitHub page (e.g., `stack-seekers`).
2. Confirm that the repository (e.g., `vue-starter-kit`) appears under the organization’s repositories.
3. Check that the commit history, branches, and other metadata are preserved.

### Step 5: Clone the Repository Locally
1. Copy the clone URL from the repository’s page on GitHub (e.g., `https://github.com/stack-seekers/vue-starter-kit.git`).
2. Open your terminal and navigate to your desired directory (e.g., `cd ~/Projects`).
3. Run the following command to clone the repository:
   ```bash
   git clone https://github.com/stack-seekers/vue-starter-kit.git
   ```
4. Change into the cloned directory:
   ```bash
   cd vue-starter-kit
   ```

### Step 6: Open the Project in VS Code
1. Open the cloned repository in VS Code by running:
   ```bash
   code .
   ```
2. Verify that all files, including the `.git` folder, are present in the project directory.
3. You're now ready to edit, commit, and push changes to the organization's repository.

## Troubleshooting: why the transfer is blocked or fails

Most failed transfers are not UI problems — they are permission and naming conflicts. These are the errors that actually come up.

### "You can only transfer a repository from an organization to yourself at this time"
This is the most common one, and it is almost always a **permission** problem rather than a UI problem. Work down this list:

1. **You are not a member of the target organization.** To transfer a repository *into* an organization you must have permission to create repositories there. If the organization never appeared in the dropdown, you are not a member — ask an owner for an invitation.
2. **The organization has disabled repository creation.** Owners can turn off "Repository creation" for members. If you are a member and still cannot transfer, an owner has likely restricted it; ask them to perform the transfer or re-enable creation.
3. **An organization policy is blocking transfers.** Enterprise and organization owners can set a policy that prevents users from transferring repositories into or out of the organization.
4. **You are trying to move an internal repository.** Internal repositories can only be transferred to an organization **inside the same enterprise** as the current owner. To move it anywhere else, change its visibility to private or public first.

### The organization does not appear in the dropdown
Same root cause as the first item above — no create-repository permission in that organization. Membership alone is not enough if repository creation is restricted.

### "Name already exists on this account"
The target organization already has a repository with that name, or a fork in the same network. Rename the repository, delete the conflicting one, or transfer to a different organization.

### You cannot see the Danger Zone section
Only owners and admins of a repository can transfer it. If you are a collaborator with write or read access, ask an owner or admin to run the transfer.

### The transfer asks for authentication you do not have
GitHub requires you to re-authenticate the transfer with a 2FA code or your account password. If you have just enabled 2FA, make sure your authenticator app is producing current codes.

### The repository is a single fork from a private upstream network
A single repository forked from a private upstream network **cannot be transferred**. Mirror it into the organization instead.

### It has been several minutes and nothing seems to have happened
Most transfers complete within a few minutes. Large repositories, or ones with heavy CI, webhooks, or many contributors, can take longer. If it looks genuinely stuck, check the repository in *both* accounts — occasionally the move completes on GitHub's side while the original page still renders unchanged.

## Frequently Asked Questions

### How do I transfer or move a GitHub repository to an organization?
Open the repository, go to **Settings**, scroll to the **Danger Zone**, and choose **Transfer ownership**. Select the destination organization, confirm the repository name, authenticate with your password or 2FA code, then click **I understand, transfer this repository**. Transferring and moving are the same GitHub feature — "move a repo to an organization" is simply the common way people phrase it.

### Can I move a private GitHub repository to an organization?
Yes. Both **public and private** repositories can be transferred to an organization. The only exception is **internal** repositories, which can only be moved to an organization inside the same enterprise as the current owner. Everything else — transit, code, issues, and settings — moves exactly as-is.

### Can I copy a repository to an organization instead of moving it?
GitHub has no one-click "copy to organization" button. You either **transfer ownership**, which moves the repository and redirects the old URL, or **fork** the repository into the organization, which leaves the original untouched and creates a separate copy. Use a fork when you want to keep the source repo, and a transfer when the organization should own the canonical repository.

### What happens to the original repository URL after a transfer?
GitHub automatically sets up a **redirect from the old URL** to the new organization URL. Existing bookmarks, clones, and any code that references the old URL keep working, so you don't need to update every link the moment the transfer completes.

### What is preserved when I transfer a repository?
The transfer keeps your **full commit history, branches, tags, issues, pull requests, stars, watchers, wiki, and releases**. Transferring is not a rewrite — it simply changes ownership and location under the organization's namespace.

### What happens to access and automation when I transfer a repository?
**Access and automation survive the transfer.** The previous owner is added as a collaborator on the new repository and **other collaborators remain intact**. Per GitHub's documentation, if the repository contains webhooks, services, secrets, or deploy keys, **they remain associated after the transfer completes**, and git history — including commit contributions — is preserved. Stars, watchers, forks, issues, pull requests, wiki, and releases all move too.

Three things are worth reviewing *afterwards*:
- **The organization's defaults now apply.** Once a repository lands in an organization, that organization's default repository permission settings and default membership privileges take over.
- **The plan can remove features.** Transferring a **private** repository to a GitHub **Free** user or organization account drops access to things like protected branches and GitHub Pages.
- **Read-only collaborators only break in one direction.** Going from an **organization to a personal account**, the repository's read-only collaborators are not transferred — personal accounts cannot hold that permission level. Going from a personal account into an organization, collaborators carry over.

### How long does a GitHub repository transfer take?
Most transfers complete within **a few minutes**. Large repositories, or those with heavy CI and webhooks, can take a little longer, but the process is non-destructive and requires no downtime for your code.

### Can I transfer or move a repository back from an organization to my personal account?
Yes. If you have admin access to the repository, you can transfer it back to your personal account (or to another user) at any time using the same **Settings → Transfer ownership** flow.

<p class="text-700 mb-4">Prefer a visual walkthrough? Watch the <a href="/stackseekers-tv/videos/transfer-github-repo-to-github-organization-stack-seekers/" class="text-primary font-bold">video guide to transferring a GitHub repository to an organization</a>.</p>

<YouTubePlayers videoId="9LPnNNLFSko"/>

<div class="blog-content-and-aside">
  <div class="blog-content-main"></div>
  <div class="blog-content-aside">
    <YouTubeAside />
  </div>
</div>

<RelatedPosts />

<BlogNavigation />
<ConsultingBridge />
