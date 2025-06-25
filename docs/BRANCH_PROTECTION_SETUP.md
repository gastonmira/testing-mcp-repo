# Branch Protection Setup Guide

This guide explains how to configure branch protection rules for the repository to ensure code quality and prevent risky merges.

## Quick Setup

1. Go to **Settings** ? **Branches** in your GitHub repository
2. Click **Add rule** for branch `main`
3. Follow the configuration below

## Required Configuration

### Basic Protection Settings

- ? **Require a pull request before merging**
- ? **Require approvals: 1**
- ? **Dismiss stale PR approvals when new commits are pushed**
- ? **Require review from code owners**

### Status Checks (IMPORTANT)

- ? **Require status checks to pass before merging**
- ? **Require branches to be up to date before merging**

**Required status checks to add:**
- `lint-and-format`
- `test`
- `build-check`
- `security-audit`

### Additional Restrictions

- ? **Include administrators** (apply rules to repo admins too)
- ? **Restrict pushes that create files**
- ? **Allow force pushes: Never**
- ? **Allow deletions: Never**

### Optional but Recommended

- ? **Require conversation resolution before merging**
- ? **Require linear history** (prevents messy merge commits)

## What This Prevents

- **Direct pushes to main** - All changes must go through PRs
- **Broken code merges** - CI checks must pass
- **Unreviewed changes** - At least 1 approval required
- **Outdated branches** - Must be up to date with main
- **Security vulnerabilities** - npm audit must pass

## CI Jobs Explained

### `lint-and-format`
- Runs ESLint to catch code quality issues
- Checks Prettier formatting
- Validates TypeScript types

### `test`
- Runs all unit tests
- Generates coverage report
- Uploads coverage artifacts

### `build-check`
- Validates TypeScript compilation
- Checks project structure integrity
- Ensures all config files exist

### `security-audit`
- Scans for known vulnerabilities in dependencies
- Fails on moderate or higher severity issues

## Troubleshooting

### CI Failing?
1. Check the specific job that failed
2. Run the same command locally: `npm run lint`, `npm test`, etc.
3. Fix issues and push again

### Can't Merge?
1. Ensure all status checks are green ?
2. Get required approvals
3. Resolve any merge conflicts
4. Update branch if behind main

### Emergency Bypass?
- Admins can temporarily disable rules in emergency situations
- Always re-enable protection immediately after

## Benefits

- **Higher code quality** - Automated checks catch issues early
- **Team collaboration** - Required reviews improve knowledge sharing
- **Reduced bugs** - Tests must pass before merge
- **Security** - Vulnerability scans prevent risky dependencies
- **Consistency** - Formatting and linting ensure uniform code style

This setup creates a robust foundation for safe, collaborative development!