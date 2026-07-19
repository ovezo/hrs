"""Derivation of web-ready catalogue renders for the /products page.

Sources live in assets-src/agibot-products/ (downloaded official AGIBOT
store/site renders — keep them) plus the user's local Downloads folder for
the D1 white-background English-logo set. Transparent PNGs are cropped to
their solid-alpha bounding box (same convention as derive-images.py);
opaque scene shots get a hand-picked crop box instead.

Run from the repo root:  python3 scripts/derive-product-images.py
"""

from PIL import Image

Image.MAX_IMAGE_PIXELS = None

SRC = 'assets-src/agibot-products'
D1_LOCAL = '/Users/ovez/Downloads/AGIBOT-Product Info/Main_White_Background/智元灵犀D1英文版'
OUT = 'public/images/products'
BBOX_THRESH = 128
MARGIN = 0.08
MAX_H = 1100


def save(im, name, max_h=MAX_H):
    if im.height > max_h:
        im = im.resize((round(im.width * max_h / im.height), max_h), Image.LANCZOS)
    im.save(f'{OUT}/{name}.webp', 'WEBP', quality=85, method=6)
    print(name, im.size)


def alpha_crop(path):
    im = Image.open(path).convert('RGBA')
    mask = im.getchannel('A').point(lambda v: 255 if v > BBOX_THRESH else 0)
    left, top, right, bottom = mask.getbbox()
    m = round((bottom - top) * MARGIN)
    return im.crop((
        max(0, left - m),
        max(0, top - m),
        min(im.width, right + m),
        min(im.height, bottom + m),
    ))


def white_crop(path):
    """Crop a white-background render to its subject (non-white bbox)."""
    im = Image.open(path).convert('RGB')
    gray = im.convert('L').point(lambda v: 0 if v > 245 else 255)
    left, top, right, bottom = gray.getbbox()
    m = round((bottom - top) * MARGIN)
    return im.crop((
        max(0, left - m),
        max(0, top - m),
        min(im.width, right + m),
        min(im.height, bottom + m),
    ))


# Transparent store/site renders → alpha-trimmed, keep transparency.
for src, name in [
    ('x2-ultra.png', 'x2-ultra'),
    ('a2-lite.png', 'a2-lite'),
    ('a2-ultra.png', 'a2-ultra'),
    ('c5.png', 'c5'),
    ('d1-edu.png', 'd1-pro'),
    ('d1-edu-1.png', 'd1-edu'),
    ('d1-ultra.png', 'd1-ultra'),
    ('omnihand-2025.png', 'omnihand-2025'),
    ('omnihand-tactile.png', 'omnihand-tactile'),
    ('omnihand-pro.png', 'omnihand-pro'),
    ('a3.png', 'a3'),
]:
    save(alpha_crop(f'{SRC}/{src}'), name)

# Opaque scene shots → hand-picked crops (subject sits off-centre).
scene = [
    # D1 Ultra-W: wheeled dog right-of-centre on light sculptural set.
    ('d1ultra-two-2.jpg', 'd1-ultra-w', (760, 60, 1920, 980)),
    # D1 Max: dark side profile, right half of frame.
    ('d1-max-1.webp', 'd1-max', (820, 0, 1920, 1000)),
    # D1 MaxPro: climbing with cargo, right-of-centre.
    ('d1-maxpro-banner.webp', 'd1-maxpro', (860, 60, 1920, 998)),
]
for src, name, box in scene:
    im = Image.open(f'{SRC}/{src}').convert('RGB')
    save(im.crop(box), name)
