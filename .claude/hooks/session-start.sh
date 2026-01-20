#!/bin/bash
# SessionStart hook - Load project context automatically
# This script runs at the start of each Claude Code session

set -e

echo "=== Project Context ==="

# Git status
if git rev-parse --is-inside-work-tree &>/dev/null; then
  BRANCH=$(git branch --show-current 2>/dev/null || echo "detached")
  echo "Branch: $BRANCH"

  # Show uncommitted changes (if any)
  CHANGES=$(git status -s 2>/dev/null | wc -l)
  if [ "$CHANGES" -gt 0 ]; then
    echo "Changes: $CHANGES file(s) modified"
    git status -s | head -5
    [ "$CHANGES" -gt 5 ] && echo "  ... and $((CHANGES - 5)) more"
  else
    echo "Changes: Working tree clean"
  fi
fi

# Show pending tasks from specs (if any)
if ls .kiro/specs/*/tasks.md 1>/dev/null 2>&1; then
  PENDING=$(grep -rh '^\- \[ \]' .kiro/specs/*/tasks.md 2>/dev/null | wc -l)
  if [ "$PENDING" -gt 0 ]; then
    echo ""
    echo "=== Pending Tasks ($PENDING) ==="
    grep -rh '^\- \[ \]' .kiro/specs/*/tasks.md 2>/dev/null | head -5
    [ "$PENDING" -gt 5 ] && echo "  ... and $((PENDING - 5)) more"
  fi
fi

# Show active spec (if in a feature directory)
CURRENT_DIR=$(basename "$PWD")
if [ -d ".kiro/specs/$CURRENT_DIR" ]; then
  echo ""
  echo "=== Active Spec: $CURRENT_DIR ==="
fi

# MCP/Serena status check
echo ""
echo "=== Environment ==="

# Check ENABLE_TOOL_SEARCH
if [ "$ENABLE_TOOL_SEARCH" = "true" ]; then
  echo "Tool Search: enabled (token-efficient)"
else
  echo "Tool Search: disabled (set ENABLE_TOOL_SEARCH=true to enable)"
fi

# Check if Serena is configured
if [ -f ".mcp.json" ]; then
  if grep -q '"serena"' .mcp.json && grep -q '"mcpServers"' .mcp.json; then
    # Check if serena is in mcpServers (not in _disabled_servers)
    if python3 -c "import json; d=json.load(open('.mcp.json')); exit(0 if 'serena' in d.get('mcpServers', {}) else 1)" 2>/dev/null; then
      echo "Serena MCP: enabled"
      if [ -z "$WORKSPACE_FOLDER" ]; then
        echo "  [WARN] WORKSPACE_FOLDER not set - Serena may not work correctly"
      fi
    else
      echo "Serena MCP: available (enable in .mcp.json if needed)"
    fi
  fi
fi

echo "======================="
