# -*- coding: utf-8 -*-
"""
Socks site (entrol-rongxing / socks.entrol.com) technical SEO fix:
  1. Rewrite the 11 over-long <title>s to <=60 visible chars, buyer-keyword fronted.
  2. Trim the 19 over-long <meta description>s to <=155 visible chars via
     sentence-boundary cut (keep leading keywords), so Google stops truncating.

Both <title>/og:title and <meta description>/og:description are kept in sync.
Default: dry-run. Use --apply to write.
"""
import os, re, argparse, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Real pages only (exclude build/test artifact dirs)
EXC = {'node_modules', '.git', 'output', 'outputs', 'tmp', 'outreach', 'scripts',
       'playwright-report', 'test-results'}

TITLE_FIX = {
    'blog/6-stage-quality-control.html':        'Socks Quality Control: 6-Stage Process | Entrol Rongxing',
    'blog/fall-2026-socks-order-trends.html':   'Fall 2026 Sock Trends & Sourcing Timeline | Entrol',
    'blog/how-to-choose-socks-oem-odm-partner.html': 'Choose a Socks OEM/ODM Partner | Entrol Rongxing',
    'blog/socks-industry-trends-2026.html':      'Socks Industry Trends 2026 | Recycled & Compression',
    'blog/socks-manufacturing-machines-guide.html': 'Sock Knitting Machines: Cylinder & Gauge | Entrol',
    'blog/socks-moq-physics-guide.html':         'Sock MOQ Is Physics, Not Policy | Entrol Rongxing',
    'blog/socks-moq-pricing-guide.html':         'Socks MOQ & Pricing: Unit Cost Drivers | Entrol',
    'blog/socks-quality-standards-compliance.html': 'Socks Quality Standards & Compliance | Entrol',
    'blog/socks-sampling-prototyping-process.html': 'Sock Prototyping: Sketch to Sample | Entrol',
    'blog/world-cup-socks-production.html':      'World Cup Socks: Design to Production | Entrol',
    'private-label-socks-manufacturer.html':     'Private Label Socks Manufacturer | Entrol Rongxing',
}

DESC_CAP = 155

def esc(s):
    return (str(s).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
            .replace('"', '&quot;'))

def unescape(s):
    return s.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"')

def vlen(s):
    return len(unescape(s))

def trim_desc(visible):
    """Cut to <=155 visible chars, preferring a sentence boundary (ends with '.')."""
    if vlen(visible) <= DESC_CAP:
        return visible
    # try last sentence boundary
    best = -1
    for i, ch in enumerate(visible):
        if ch == '.' and vlen(visible[:i + 1]) <= DESC_CAP:
            best = i
    if best >= 0:
        return visible[:best + 1]
    # else cut at last space <=150 and add ellipsis
    cut = visible[:DESC_CAP - 3].rsplit(' ', 1)[0]
    return cut + '\u2026'

def repl_title(r, value):
    """Replace <title> content (escaped)."""
    return re.sub(r'<title>[^<]*</title>', f'<title>{esc(value)}</title>', r, count=1)

def repl_name_desc(r, value):
    """Replace <meta name=description> content; add it if missing."""
    pat = re.compile(r'(<meta name="description" content=")[^"]*(">)')
    if pat.search(r):
        return pat.sub(lambda m, e=esc(value): m.group(1) + e + m.group(2), r, count=1)
    tag = f'<meta name="description" content="{esc(value)}">\n'
    if '</head>' in r:
        return r.replace('</head>', tag + '</head>', 1)
    return r + tag

def repl_og(r, prop, value):
    """Replace <meta property=prop> content; add it (before description or </head>) if missing."""
    pat = re.compile(r'(<meta property="' + re.escape(prop) + r'" content=")[^"]*(">)')
    if pat.search(r):
        return pat.sub(lambda m, e=esc(value): m.group(1) + e + m.group(2), r, count=1)
    tag = f'<meta property="{prop}" content="{esc(value)}">\n'
    if '<meta name="description"' in r:
        return r.replace('<meta name="description"', tag + '<meta name="description"', 1)
    if '</head>' in r:
        return r.replace('</head>', tag + '</head>', 1)
    return r + tag

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--apply', action='store_true')
    args = ap.parse_args()

    files = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        parts = dirpath.replace('\\', '/').split('/')
        if any(seg in EXC for seg in parts):
            continue
        for fn in filenames:
            if not fn.endswith('.html') or fn == '404.html':
                continue
            files.append(os.path.relpath(os.path.join(dirpath, fn), ROOT).replace('\\', '/'))
    files.sort()

    problems = []
    changed = 0
    for rel in files:
        path = os.path.join(ROOT, rel)
        # Read/write as bytes to preserve exact line endings (repo is LF;
        # Python text-mode would flip \n -> \r\n on Windows and bloat the diff).
        with open(path, 'rb') as f:
            raw = f.read()
        r = raw.decode('utf-8')
        orig = r
        # --- resolve target title/desc ---
        tm = re.search(r'<title>([^<]*)</title>', r)
        cur_title = unescape(tm.group(1)) if tm else ''
        new_title = TITLE_FIX.get(rel, cur_title)
        if vlen(new_title) > 60:
            problems.append(f'{rel}: TITLE {vlen(new_title)} > 60: {new_title}')
        dm = re.search(r'<meta name="description" content="([^"]*)"', r)
        cur_desc = unescape(dm.group(1)) if dm else ''
        if vlen(cur_desc) > DESC_CAP:
            new_desc = trim_desc(cur_desc)
            if vlen(new_desc) > DESC_CAP:
                problems.append(f'{rel}: trimmed desc still {vlen(new_desc)}')
        else:
            new_desc = cur_desc
        # --- apply (keep <title>/description/og:title/og:description in sync) ---
        r = repl_title(r, new_title)
        r = repl_name_desc(r, new_desc)
        r = repl_og(r, 'og:title', new_title)
        r = repl_og(r, 'og:description', new_desc)
        if r != orig:
            changed += 1
            if args.apply:
                with open(path, 'wb') as f:
                    f.write(r.encode('utf-8'))
            print(f"{'WRITE' if args.apply else 'DRY'} {rel}")
    print(f"--- {changed} files {'written' if args.apply else 'would change'} ---")
    if problems:
        print("PROBLEMS:")
        for p in problems:
            print(' !', p)
    else:
        print("PROBLEMS: none")

if __name__ == '__main__':
    main()
