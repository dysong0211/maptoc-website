#!/bin/bash
cd -- "$(dirname -- "$0")" || exit 1
if command -v node >/dev/null 2>&1 && node -e 'process.exit(Number(process.versions.node.split(".")[0]) >= 18 ? 0 : 1)'; then
  exec node scripts/preview.mjs --port 0 --open
elif command -v python3 >/dev/null 2>&1; then
  exec python3 scripts/preview.py --open
else
  echo "The local preview needs Node.js 18 or later, or Python 3."
  echo "You can also upload the complete website to your domain and open Demo there."
  read -r -p "Press Return to close. "
fi
