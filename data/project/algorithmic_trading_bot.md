# Algorithmic Trading Bot with Backtesting Dashboard

## Overview
A smart trading platform that enables backtesting of strategies and automated trading on live markets. The system analyzes historical market data and executes trades using pre-defined strategies.

## Features
- Strategy configuration (e.g., SMA, RSI, MACD)
- Historical backtesting with key performance metrics (Sharpe ratio, drawdown, etc.)
- Paper/live trading toggle
- Real-time trading dashboard with visual insights

## Tech Stack
- **Python**: Trading logic with `pandas`, `ta`, `ccxt`/`backtrader`
- **Django REST Framework**: API for strategies, trades
- **React + Chart.js**: Frontend dashboard
- **PostgreSQL**: Data storage
- **Celery + Redis**: Job scheduling for trade execution
- **WebSockets**: Real-time trade updates

## Concepts Demonstrated
- Financial algorithm design and execution
- Historical data handling and analytics
- Real-time UI and backend scheduling
