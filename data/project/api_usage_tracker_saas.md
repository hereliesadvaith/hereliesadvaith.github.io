# Developer-Focused SaaS App: API Usage Tracker

## Overview
A SaaS product that allows developers to generate API keys, track usage, and receive real-time analytics and alerts.

## Features
- API key management per user
- Rate limiting and error logging
- Usage analytics dashboard
- Stripe-based subscription billing

## Tech Stack
- **Django REST Framework**: API logic and metering
- **React**: Frontend analytics and dashboard
- **Celery + Redis**: Background jobs for alerts
- **Stripe**: Billing and subscription
- **PostgreSQL + TimescaleDB**: Time-series data storage

## Concepts Demonstrated
- SaaS application architecture
- API metering and usage tracking
- Real-time data dashboards
