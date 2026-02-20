#!/usr/bin/env bun
import { spawnSync } from 'child_process';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const args = process.argv.slice(2);
const toolName = args[0];

function runCommand(cmd, args, options = {}) {
    console.log(`> Running: ${cmd} ${args.join(' ')}`);
    return spawnSync(cmd, args, { stdio: 'inherit', shell: true, ...options });
}

switch (toolName) {
    case 'audit_project': {
        const params = JSON.parse(args[1] || '{}');
        const path = params.project_path || '.';
        console.log(`Auditing Django project at: ${path}`);

        // Basic discovery
        const files = [];
        try {
            const items = readdirSync(path, { recursive: true });
            const djangoFiles = items.filter(f => f.endsWith('models.py') || f.endsWith('views.py') || f.endsWith('urls.py'));
            console.log("Found Django files:", djangoFiles);
        } catch (e) {
            console.error("Error reading project path:", e.message);
        }
        break;
    }

    case 'test_ui': {
        const params = JSON.parse(args[1] || '{}');
        const script = `
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: ${params.headless !== false} });
  const page = await browser.newPage();
  console.log('Testing: ${params.base_url}');
  await page.goto('${params.base_url}');
  // User scenario: ${params.test_scenario}
  // In a real implementation, this would be an AI-generated playwright script.
  await browser.close();
})();`;

        const tmpFile = join(process.cwd(), 'tmp_test.js');
        require('fs').writeFileSync(tmpFile, script);
        runCommand('node', [tmpFile]);
        break;
    }

    case 'auto_fix_and_push': {
        const params = JSON.parse(args[1] || '{}');
        console.log("Attempting to fix and push...");

        // 1. Git Status
        runCommand('git', ['status']);

        // 2. Commit
        const msg = params.commit_message || "Auto-fix from Django-Auto-Dev";
        runCommand('git', ['add', '.']);
        runCommand('git', ['commit', '-m', `"${msg}"`]);

        // 3. GitHub Push using gh
        runCommand('gh', ['pr', 'create', '--title', msg, '--body', params.failure_report || "Automated fix"]);
        break;
    }

    default:
        console.error(`Unknown tool: ${toolName}`);
        process.exit(1);
}
