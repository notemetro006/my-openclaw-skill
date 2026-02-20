---
name: tiktok-trend-hunter
description: Specialized tools for finding winning TikTok products, writing high-conversion scripts, and analyzing trending Thai hashtags.
---

# tiktok-trend-hunter

Empowers sellers and creators to discover trends and generate content scripts for TikTok Shop and Kalodata with a focus on growth metrics.

## Requirements

- `node` or `bun`
- `playwright` (or accessed via `browseract` logic)
- Authenticated browser session for Kalodata/TikTok Shop scraping

## Tools

### find_winning_product

Scans TikTok Shop/Kalodata for products with a Growth Rate > 20% this week.

**Arguments:**
- `target_market`: Market country (default: "Thailand").
- `growth_threshold`: Decimal growth rate threshold (default: 0.2 for 20%).

### script_writer

Writes a 15-second video script optimized for conversions.

**Arguments:**
- `product_name`: Name of the product.
- `selling_points`: Key features or benefits.
- `target_audience`: (Optional) Specific audience segment.

### seo_tags

Analyzes and suggests trending Thai hashtags for a product category.

**Arguments:**
- `category`: Product category (e.g., "Cosmetics", "Kitchenware").
- `limit`: Number of hashtags to return (default: 10).

**Security Policy:**
- **Cookie Safety**: Automation logic is restricted from sending browser cookies to unauthorized external servers. All data processing is local.
