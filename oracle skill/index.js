#!/usr/bin/env bun
import { spawnSync } from 'child_process';

const args = process.argv.slice(2);
const toolName = args[0];

function runCLI(command, options = []) {
  const cliArgs = ['bunx', 'oracle-skills@latest', command, ...options];
  console.log(`Executing: ${cliArgs.join(' ')}\n`);
  
  const result = spawnSync('bun', cliArgs, {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, BUN_INSTALL: process.env.HOME + '/.bun' }
  });

  if (result.error) {
    console.error(`Error executing command: ${result.error.message}`);
    process.exit(1);
  }
}

switch (toolName) {
  case 'install_oracle_skill': {
    const params = JSON.parse(args[1] || '{}');
    const options = [];
    if (params.global) options.push('--global');
    if (params.yes !== false) options.push('--yes');
    if (params.commands) options.push('--commands');
    if (params.agents && params.agents.length > 0) {
      options.push('--agent', ...params.agents);
    }
    if (params.skills && params.skills.length > 0) {
      options.push('--skill', ...params.skills);
    }
    runCLI('install', options);
    break;
  }

  case 'uninstall_oracle_skill': {
    const params = JSON.parse(args[1] || '{}');
    const options = [];
    if (params.global) options.push('--global');
    if (params.yes !== false) options.push('--yes');
    if (params.agents && params.agents.length > 0) {
      options.push('--agent', ...params.agents);
    }
    if (params.skills && params.skills.length > 0) {
      options.push('--skill', ...params.skills);
    }
    runCLI('uninstall', options);
    break;
  }

  case 'list_oracle_skills': {
    const params = JSON.parse(args[1] || '{}');
    const options = [];
    if (params.global) options.push('--global');
    if (params.agents && params.agents.length > 0) {
      options.push('--agent', ...params.agents);
    }
    runCLI('list', options);
    break;
  }

  case 'list_supported_agents': {
    runCLI('agents');
    break;
  }

  default:
    console.error(`Unknown tool: ${toolName}`);
    process.exit(1);
}
