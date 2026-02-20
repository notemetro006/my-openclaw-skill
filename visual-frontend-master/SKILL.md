---
name: visual-frontend-master
description: High-end UI/UX engine for Django. Provides UX flows and Django-compliant Tailwind templates using local assets only.
---

# visual-frontend-master

Specialized in design-to-code workflows specifically for Django developers who prioritize UI/UX quality and asset security.

## Requirements

- `python` (Django)
- `node` or `bun`
- Authenticated with an LLM backend (Claude/GPT)

## Tools

### generate_ux_flow

Translates a feature description into a structured UX journey and component map.

**Arguments:**
- `feature_description`: Description of the feature or page to design.

### generate_django_frontend

Generates a production-ready Django template with Tailwind CSS.

**Arguments:**
- `ui_requirement`: Detailed UI/UX requirement for the component or page.
- `extends_base`: The base template to extend (default: "base.html").
- `block_name`: The name of the content block (default: "content").
- `include_ux_context`: Boolean, whether to include the UX flow as a comment in the code (default: true).

**Security Policy:**
- **Local Assets Only**: Strictly forbids external CDN injections.
- **Tailwind Focused**: Uses utility classes to minimize custom CSS.
