#!/bin/bash
# PreToolUse hook - Quality gate before code modifications
# This script runs before Edit/Write operations

# Check if specs exist for the project
if ! ls .kiro/specs/*/requirements.md 1>/dev/null 2>&1; then
  echo "[hook:warn] No specs found. Consider creating specs first with /kiro:spec-init <feature>"
fi

# Count pending tasks
if ls .kiro/specs/*/tasks.md 1>/dev/null 2>&1; then
  PENDING=$(grep -rh '^\- \[ \]' .kiro/specs/*/tasks.md 2>/dev/null | wc -l)
  COMPLETED=$(grep -rh '^\- \[x\]' .kiro/specs/*/tasks.md 2>/dev/null | wc -l)
  if [ "$PENDING" -gt 0 ]; then
    echo "[hook:info] Tasks: $COMPLETED done, $PENDING pending"
  fi
fi

# Always allow - this is informational only
exit 0
