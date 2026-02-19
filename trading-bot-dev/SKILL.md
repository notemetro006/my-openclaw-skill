---
name: trading-bot-dev
description: Specialized developer for trading strategies, backtesting, and broker API integration. Ensures all code includes unit tests.
---

# trading-bot-dev

Focuses on translating complex trading strategies into code and setting up robust backtesting environments.

## Requirements

- `python` (Backtrader, Pandas, Pytest recommended)
- `interpreter` or `gpt-engineer` (optional, for autonomous agent patterns)
- `node` or `bun` (for execution)

## Tools

### strategy_coder

Translate trading strategies (Grid, Martingale, RSI, etc.) into Python or MQL5 code with mandatory unit tests.

**Arguments:**
- `strategy_description`: Detailed trading strategy logic (supports Thai).
- `target_language`: `python` (default) or `mql5`.
- `include_tests`: Boolean, always true by default, ensures `pytest` or equivalent tests are generated.

### backtest_setup

Create a backtesting suite using popular libraries.

**Arguments:**
- `framework`: `backtrader`, `pandas`, or `vectorbt`.
- `strategy_file`: The file containing the strategy to backtest.
- `data_params`: JSON string describing data sources and parameters.

### api_integrator

Manage broker API connections and trade signal webhooks.

**Arguments:**
- `broker`: Name of the broker (e.g., Binance, MetaTrader, Alpaca).
- `webhook_logic`: Description of the signal processing logic.
- `security_layer`: Boolean, add standard security checks (default: true).
