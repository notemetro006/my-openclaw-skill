---
name: django-architect
description: Expert Django architect for generating models, views, templates, and complex ORM queries. Supports Thai language instructions.
---

# django-architect

This skill provides specialized tools for Django development, focusing on architectural patterns, UI integration, and complex logic mapping.

## Requirements

- `python` (Django installed in environment)
- `aider` (optional, used for code generation)
- `node` or `bun` (for execution)

## Tools

### gen_model_view

Generate Django Models and Views based on requirements (supports Thai).

**Arguments:**
- `instruction`: Detailed requirements for the model and view (can be in Thai).
- `app_name`: The Django app name where files should be generated.
- `with_serializers`: Boolean, also generate DRF serializers (default: false).

### template_specialist

Write and optimize Django Templates with modern CSS frameworks.

**Arguments:**
- `template_path`: Path to the template file.
- `requirement`: Design or functional requirement for the template.
- `framework`: Choice of CSS framework (`tailwind`, `bootstrap`, or `none`).
- `check_syntax`: Boolean, validate template tag syntax (default: true).

### logic_mapper

Translate business logic requirements into optimized Django ORM queries.

**Arguments:**
- `description`: The business logic or data requirement to be translated.
- `models_context`: Brief description or snippet of related models to help the AI understand the schema.
