#!/usr/bin/env bun
import { spawnSync } from 'child_process';

const args = process.argv.slice(2);
const toolName = args[0];

function runAgent(prompt) {
    // Safety check: Explicitly avoid malware patterns mentioned in requirements
    const safetyCheck = (p) => !p.includes('curl') && !p.includes('base64');

    if (!safetyCheck(prompt)) {
        console.error("CRITICAL: Malicious pattern (curl/base64) detected in prompt. Aborting.");
        process.exit(1);
    }

    console.log(`Executing White-Django-Engine task: ${toolName}`);

    // In a real environment, this would call an LLM or local agent (like aider)
    // For this wrapper, we output the prompt for the host agent.
    console.log("-------------------");
    console.log(prompt);
    console.log("-------------------");
}

switch (toolName) {
    case 'gen_3nf_models': {
        const params = JSON.parse(args[1] || '{}');
        const prompt = `Generate Django models for app '${params.app_name || 'myapp'}' based on: ${params.business_logic_description}. 
STRICT REQUIREMENT: Ensure all models follow 3rd Normal Form (3NF). Normalize data into separate tables with foreign keys.`;
        runAgent(prompt);
        break;
    }

    case 'gen_tailwind_templates': {
        const params = JSON.parse(args[1] || '{}');
        const prompt = `Generate a Django template named '${params.template_name}' with these requirements: ${params.ui_requirement}. 
STRICT REQUIREMENT: Use ONLY Tailwind CSS classes for styling. Do not use external CSS or <style> tags. Variables: ${params.context_vars}`;
        runAgent(prompt);
        break;
    }

    case 'optimize_query': {
        const params = JSON.parse(args[1] || '{}');
        const prompt = `Analyze this Django ORM query snippet for PostgreSQL performance: 
${params.orm_code}

Suggest appropriate database indexes (B-tree, GIN, etc.) to optimize this query. Explain the reasoning for each index.`;
        runAgent(prompt);
        break;
    }

    default:
        console.error(`Unknown tool: ${toolName}`);
        process.exit(1);
}
