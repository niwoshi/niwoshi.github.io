#!/bin/bash
# Version check script for DevContainer
# Runs on container start to check tool versions
#
# Usage:
#   ./version-check.sh           # Quick check (no network)
#   ./version-check.sh --full    # Full check (includes latest version lookup)
#   ./version-check.sh --update  # Update Claude Code to latest

set -e

# Ensure npm-global is in PATH
export PATH="$HOME/.npm-global/bin:$PATH"

FULL_CHECK=false
DO_UPDATE=false
if [ "$1" = "--full" ]; then
  FULL_CHECK=true
elif [ "$1" = "--update" ]; then
  DO_UPDATE=true
fi

# Handle update request
if [ "$DO_UPDATE" = true ]; then
  echo "=== Updating Claude Code ==="
  npm update -g @anthropic-ai/claude-code
  echo "Updated to: $(claude --version 2>/dev/null || echo 'unknown')"
  exit 0
fi

echo "=== Tool Versions ==="

# Claude Code
if command -v claude &> /dev/null; then
  CLAUDE_VERSION=$(claude --version 2>/dev/null | head -1 || echo "unknown")
  echo "Claude Code: $CLAUDE_VERSION"
else
  echo "Claude Code: not installed"
  echo "  Install: npm install -g @anthropic-ai/claude-code"
fi

# Node.js
if command -v node &> /dev/null; then
  echo "Node.js: $(node --version)"
fi

# Python
if command -v python3 &> /dev/null; then
  echo "Python: $(python3 --version 2>&1 | awk '{print $2}')"
fi

# GitHub CLI
if command -v gh &> /dev/null; then
  echo "GitHub CLI: $(gh --version 2>/dev/null | head -1 | awk '{print $3}')"
fi

# Git
if command -v git &> /dev/null; then
  echo "Git: $(git --version | awk '{print $3}')"
fi

# Docker (if available)
if command -v docker &> /dev/null; then
  echo "Docker: $(docker --version 2>/dev/null | awk '{print $3}' | tr -d ',')"
fi

# Full check: lookup latest versions (requires network)
if [ "$FULL_CHECK" = true ]; then
  echo ""
  echo "=== Update Check ==="

  # Check Claude Code latest
  if command -v npm &> /dev/null; then
    LATEST_CLAUDE=$(npm show @anthropic-ai/claude-code version 2>/dev/null || echo "")
    if [ -n "$LATEST_CLAUDE" ]; then
      CURRENT_CLAUDE=$(claude --version 2>/dev/null | grep -oE '[0-9]+\.[0-9]+\.[0-9]+' | head -1 || echo "")
      if [ -n "$CURRENT_CLAUDE" ] && [ "$CURRENT_CLAUDE" != "$LATEST_CLAUDE" ]; then
        echo "Claude Code: $CURRENT_CLAUDE -> $LATEST_CLAUDE (update available)"
        echo "  Run: .devcontainer/scripts/version-check.sh --update"
        echo "   or: npm update -g @anthropic-ai/claude-code"
      else
        echo "Claude Code: up to date ($CURRENT_CLAUDE)"
      fi
    fi
  fi
fi

echo "===================="
