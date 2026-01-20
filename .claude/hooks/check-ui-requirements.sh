#!/bin/bash
# PostToolUse hook - Check for UI Design Requirements after design.md is written
# This script checks if design.md contains UI Design Requirements section

# Get the file that was just written from environment
FILE_PATH="${CLAUDE_TOOL_INPUT_FILE_PATH:-}"

# Only check if the file is design.md
if [[ "$FILE_PATH" != *"/design.md" ]]; then
  exit 0
fi

# Check if the file exists and contains UI Design Requirements
if [ -f "$FILE_PATH" ]; then
  if grep -q "## UI Design Requirements" "$FILE_PATH" 2>/dev/null; then
    echo ""
    echo "=== UI Design Phase ==="
    echo "UI Design Requirements detected in design.md"
    echo ""
    echo "Run /ui-design-prompt to generate design prompts for:"
    echo "  - Google Stitch (free, HTML/CSS output)"
    echo "  - Figma Make (design system integration)"
    echo ""
    echo "After creating UI designs, proceed with /kiro:spec-tasks"
    echo "========================"
  fi
fi

exit 0
