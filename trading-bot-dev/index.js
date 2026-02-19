#!/usr/bin/env bun
import { spawnSync } from 'child_process';

const args = process.argv.slice(2);
const toolName = args[0];

function runAgent(prompt) {
    // Adding mandatory testing requirement to every prompt
    const enhancedPrompt = `${prompt}\n\nCRITICAL: You MUST include comprehensive unit tests (using pytest for Python) for the generated code. Ensure edge cases are covered.`;

    console.log(`Executing Agent Task: ${toolName}`);

    // Attempting to use Open Interpreter as requested
    const result = spawnSync('interpreter', ['--text', enhancedPrompt, '-y'], {
        stdio: 'inherit',
        shell: true
    });

    if (result.error && result.error.code === 'ENOENT') {
        console.warn("Open Interpreter ('interpreter') not found. Please install it or use an alternative agent CLI.");
        console.log("Outputting prompt for the host agent to handle manually:");
        console.log("-------------------");
        console.log(enhancedPrompt);
        console.log("-------------------");
    }
}

switch (toolName) {
    case 'strategy_coder': {
        const params = JSON.parse(args[1] || '{}');
        const prompt = `Write a trading strategy in ${params.target_language || 'Python'} based on: ${params.strategy_description}`;
        runAgent(prompt);
        break;
    }

    case 'backtest_setup': {
        const params = JSON.parse(args[1] || '{}');
        const prompt = `Setup a backtesting environment using ${params.framework || 'Backtrader'} for strategy ${params.strategy_file}. Config: ${params.data_params}`;
        runAgent(prompt);
        break;
    }

    case 'api_integrator': {
        const params = JSON.parse(args[1] || '{}');
        const prompt = `Implement an API integrator for ${params.broker}. Logic: ${params.webhook_logic}. Include security layer: ${params.security_layer !== false}`;
        runAgent(prompt);
        break;
    }

    default:
        console.error(`Unknown tool: ${toolName}`);
        process.exit(1);
}
