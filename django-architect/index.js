#!/usr/bin/env bun
import { spawnSync } from 'child_process';

const args = process.argv.slice(2);
const toolName = args[0];

function runAider(message) {
    console.log(`Running Aider with message: ${message}`);
    const result = spawnSync('aider', ['--message', message, '--no-auto-commits'], {
        stdio: 'inherit',
        shell: true
    });
    if (result.error && result.error.code === 'ENOENT') {
        console.warn("Aider not found in PATH. Please install it with 'pip install aider-chat'.");
        console.log("Falling back to structured output for the agent to process.");
    }
}

switch (toolName) {
    case 'gen_model_view': {
        const params = JSON.parse(args[1] || '{}');
        const prompt = `Generate Django models and views in app '${params.app_name || 'myapp'}'. 
Requirements: ${params.instruction}
${params.with_serializers ? 'Include DRF serializers.' : ''}
Please ensure the code follows Django best practices and include necessary imports.`;
        runAider(prompt);
        break;
    }

    case 'template_specialist': {
        const params = JSON.parse(args[1] || '{}');
        const prompt = `Edit/Create Django template at '${params.template_path}'.
Requirement: ${params.requirement}
Framework: ${params.framework || 'tailwind'}
${params.check_syntax ? 'Ensure Django template tag syntax is correct.' : ''}
Use modern responsive design principles.`;
        runAider(prompt);
        break;
    }

    case 'logic_mapper': {
        const params = JSON.parse(args[1] || '{}');
        const prompt = `Translate the following business logic into a Django ORM query:
Logic: ${params.description}
Context: ${params.models_context || 'Assume standard Django models.'}
Return the query snippet with a brief explanation of the performance implications.`;
        console.log(`Logic Mapping Request:\n${prompt}`);
        // For logic mapping, we might just want the LLM to output it to terminal
        runAider(prompt);
        break;
    }

    default:
        console.error(`Unknown tool: ${toolName}`);
        process.exit(1);
}
