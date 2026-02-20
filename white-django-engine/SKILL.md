---
name: white-django-engine
description: High-performance Django engine focusing on 3NF database design, Tailwind-only templates, and PostgreSQL query optimization.
---

# white-django-engine

A specialized toolset for professional Django development with a focus on database normalization and frontend efficiency.

## Requirements

- `python` (Django)
- `node` or `bun`
- `postgresql` (recommended for query optimization)

## Tools

### gen_3nf_models

Generate Django models based on 3rd Normal Form (3NF) principles.

**Arguments:**
- `business_logic_description`: Detailed description of the data and relationships.
- `app_name`: The name of the Django app to generate models for.

### gen_tailwind_templates

Generate Django templates using only Tailwind CSS classes.

**Arguments:**
- `template_name`: Name for the new template file.
- `ui_requirement`: Visual and functional requirements for the template.
- `context_vars`: List of variables available in the template context.

### optimize_query

Analyze Django ORM calls and suggest PostgreSQL indexes for performance.

**Arguments:**
- `orm_code`: The Python/Django ORM code snippet to analyze.
- `db_schema`: (Optional) Current database schema for context.
