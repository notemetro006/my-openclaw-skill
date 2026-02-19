---
name: oracle-skills
description: Install Oracle skills to Claude Code, OpenCode, Cursor, and 14+ AI coding agents.
---

# oracle-skills

Oracle skills follow the Oracle Philosophy — AI as external brain, not commander. These skills help AI assistants understand context, maintain session awareness, and build knowledge over time.

## Requirements

- `bun` (required for execution)
- `git`
- `ghq` (optional but recommended for /learn and /trace skills)

## Tools

### install_oracle_skill

Install Oracle skills to agents.

**Arguments:**
- `agents`: Array of target agents (e.g., `claude-code`, `opencode`, `cursor`, `antigravity`).
- `skills`: Array of specific skills to install by name.
- `global`: Boolean, install to user directory instead of project (default: false).
- `yes`: Boolean, skip confirmation prompts (default: true).
- `commands`: Boolean, also install command stubs to `~/.claude/commands/` (default: false).

### uninstall_oracle_skill

Remove installed Oracle skills.

**Arguments:**
- `agents`: Array of target agents.
- `skills`: Array of specific skills to remove only.
- `global`: Boolean, uninstall from user directory (default: false).
- `yes`: Boolean, skip confirmation prompts (default: true).

### list_oracle_skills

Show installed Oracle skills.

**Arguments:**
- `agents`: Array of specific agents to show skills for.
- `global`: Boolean, show global (user-level) skills (default: false).

### list_supported_agents

List all supported agents and their installation status on this system.

**Arguments:**
- (None)
