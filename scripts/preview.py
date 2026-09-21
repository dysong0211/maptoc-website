"""Dependency-free fallback for the Mac preview launcher."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import sys
import webbrowser


class PreviewHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        '.js': 'text/javascript', '.css': 'text/css', '.txt': 'text/plain',
        '.woff2': 'font/woff2', '.svg': 'image/svg+xml'
    }

    def list_directory(self, path):
        self.send_error(404, 'Page not found')
        return None


root = Path(__file__).resolve().parent.parent
with ThreadingHTTPServer(('127.0.0.1', 0), partial(PreviewHandler, directory=str(root))) as server:
    url = 'http://127.0.0.1:%s/demo.html#app-demo' % server.server_port
    print('\nMapToc preview: ' + url, flush=True)
    print('Keep this window open. Press Control+C to stop.\n', flush=True)
    if '--open' in sys.argv:
        webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
