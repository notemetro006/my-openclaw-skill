#!/usr/bin/env bun
import { spawnSync } from 'child_process';
import { join } from 'path';

const args = process.argv.slice(2);
const fullCommand = args[0];

// Dispatcher logic
if (fullCommand.startsWith('install_') || fullCommand === 'list_oracle_skills' || fullCommand === 'list_supported_agents') {
    // Legacy support for root oracle-skills
    const cliArgs = ['bunx', 'oracle-skills@latest', ...args];
    spawnSync('bun', cliArgs, { stdio: 'inherit', shell: true });
} else if (fullCommand.startsWith('django_architect_')) {
    // Route to django-architect
    const skillArgs = [join(import.meta.dir, 'django-architect', 'index.js'), ...args];
    spawnSync('bun', skillArgs, { stdio: 'inherit', shell: true });
} else if (fullCommand.startsWith('trading_')) {
    // Route to trading-bot-dev
    const skillArgs = [join(import.meta.dir, 'trading-bot-dev', 'index.js'), ...args];
    spawnSync('bun', skillArgs, { stdio: 'inherit', shell: true });
} else if (fullCommand.startsWith('django_auto_')) {
    // Route to django-auto-dev
    const skillArgs = [join(import.meta.dir, 'django-auto-dev', 'index.js'), ...args];
    spawnSync('bun', skillArgs, { stdio: 'inherit', shell: true });
} else if (fullCommand.startsWith('white_django_')) {
    // Route to white-django-engine
    const skillArgs = [join(import.meta.dir, 'white-django-engine', 'index.js'), ...args];
    spawnSync('bun', skillArgs, { stdio: 'inherit', shell: true });
} else if (fullCommand.startsWith('visual_frontend_')) {
    // Route to visual-frontend-master
    const skillArgs = [join(import.meta.dir, 'visual-frontend-master', 'index.js'), ...args];
    spawnSync('bun', skillArgs, { stdio: 'inherit', shell: true });
} else {
    console.log("Usage: [oracle-tool] | [django_architect-tool] | [trading-tool] | [django_auto_tool] | [white_django_tool] | [visual_frontend_tool]");
}
