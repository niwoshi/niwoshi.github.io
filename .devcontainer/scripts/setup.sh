#!/bin/bash
# DevContainer setup script for Claude Code
set -e

echo "=== DevContainer Setup ==="

# Install common tools (tmux for Ralph, jq for JSON processing)
echo "Installing common tools..."
sudo apt-get update -qq
sudo apt-get install -y -qq tmux jq > /dev/null
echo "tmux: $(tmux -V)"
echo "jq: $(jq --version)"
echo ""

# Fix .claude directory permissions (volume mount may create as root)
if [ -d "$HOME/.claude" ]; then
    sudo chown -R $USER:$USER "$HOME/.claude" 2>/dev/null || true
    echo "Fixed .claude directory permissions"
fi

# Configure npm for user-local global packages (enables update without sudo)
echo ""
echo "=== Configuring npm ==="
mkdir -p "$HOME/.npm-global"
npm config set prefix "$HOME/.npm-global"

# Add to PATH if not already present
if ! grep -q 'npm-global/bin' "$HOME/.bashrc" 2>/dev/null; then
    echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> "$HOME/.bashrc"
fi
export PATH="$HOME/.npm-global/bin:$PATH"
echo "npm global prefix: $HOME/.npm-global"

# Install Claude Code (user-local, updatable without sudo)
echo ""
echo "=== Installing Claude Code ==="
if ! command -v claude &> /dev/null || [ ! -f "$HOME/.npm-global/bin/claude" ]; then
    echo "Installing @anthropic-ai/claude-code..."
    npm install -g @anthropic-ai/claude-code
    echo "Claude Code: $(claude --version 2>/dev/null || echo 'installed')"
else
    echo "Claude Code: $(claude --version 2>/dev/null || echo 'already installed')"
fi

# Install recommended plugins
if command -v claude &> /dev/null; then
    echo ""
    echo "=== Installing Plugins ==="

    # code-simplifier: AI生成コードの簡潔化
    if claude plugin install code-simplifier --scope project 2>/dev/null; then
        echo "code-simplifier: installed"
    else
        echo "code-simplifier: skipped (install manually with 'claude plugin install code-simplifier')"
    fi
fi

# Verify GitHub CLI + authentication
echo ""
echo "=== GitHub CLI ==="
if command -v gh &> /dev/null; then
    echo "GitHub CLI: $(gh --version | head -1)"
    if [ -n "$GH_TOKEN" ]; then
        echo "GH_TOKEN: configured"
    else
        echo "GH_TOKEN: not set"
        echo "  To authenticate: set GH_TOKEN env var or run 'gh auth login'"
    fi
fi

echo ""
echo "=== Setup Complete ==="
echo ""
echo "Next steps:"
echo "  1. Run 'claude' to start Claude Code"
echo "  2. Trust this folder when prompted"
echo "  3. Plugins will be auto-installed from .claude/settings.json"
