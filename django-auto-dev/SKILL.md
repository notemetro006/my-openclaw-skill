---
name: django-auto-dev
description: Autonomous Django developer that audits project structure, runs UI tests with Playwright, and automatically pushes fixes to GitHub.
---

# django-auto-dev

Combines the power of Playwright for UI testing and GitHub CLI for automated repository management within a Django context.

## Requirements

- `python` (Django installed)
- `playwright` (via `npx playwright`)
- `gh` (GitHub CLI, authenticated)
- `node` or `bun`

## Tools

### audit_project

Analyze the local Django project to understand models, views, and URL patterns.

**Arguments:**
- `project_path`: Absolute path to the Django project root.

### test_ui

Run Playwright-based UI tests against a live Django dev server or specific templates.

**Arguments:**
- `base_url`: The URL where the Django server is running (e.g., http://127.0.0.1:8000).
- `test_scenario`: Description of what to test (e.g., "Login with invalid credentials").
- `headless`: Boolean, run browser in headless mode (default: true).

### auto_fix_and_push

Analyze test failures, fix the code, and push the changes to GitHub.

**Arguments:**
- `failure_report`: Description or logs of the test failure.
- `target_branch`: Branch to push to (default: main).
- `commit_message`: Custom commit message.
