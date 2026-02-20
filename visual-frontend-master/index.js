#!/usr/bin/env bun
import { spawnSync } from 'child_process';

const args = process.argv.slice(2);
const toolName = args[0];

function runAgent(prompt) {
    // Security check: Local assets only
    const cleanPrompt = `${prompt}\n\nSTRICT REQUIREMENT: Use LOCAL ASSETS ONLY. Do not inject external <script> tags or CDN links (except for Tailwind if explicitly allowed via base template, but preferably assume Tailwind is locally compiled). Avoid any malicious external JS injections.`;

    console.log(`Executing Visual-Frontend-Master task: ${toolName}`);

    // Dispatching to AI agent (Outputting for host agent)
    console.log("-------------------");
    console.log(cleanPrompt);
    console.log("-------------------");
}

switch (toolName) {
    case 'generate_ux_flow': {
        const params = JSON.parse(args[1] || '{}');
        const prompt = `Act as a Senior UI/UX Designer. Create a detailed UX Flow/User Journey for: ${params.feature_description}. 
Provide a list of necessary UI components and state transitions.`;
        runAgent(prompt);
        break;
    }

    case 'generate_django_frontend': {
        const params = JSON.parse(args[1] || '{}');
        const prompt = `Generate a Django template for: ${params.ui_requirement}.
Requirements:
- Extend from: '${params.extends_base || 'base.html'}'
- Wrap content in: '{% block ${params.block_name || 'content'} %}'
- Use Tailwind CSS utility classes for styling.
- Follow UX best practices from UI-UX-PRO-MAX (accessibility, hierarchy, spacing).
- Ensure code is production-ready.`;
        runAgent(prompt);
        break;
    }

    default:
        console.error(`Unknown tool: ${toolName}`);
        process.exit(1);
}
