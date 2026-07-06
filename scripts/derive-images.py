"""One-off derivation of web-ready robot renders from the official AGIBOT PNGs.

Autocrops each transparent PNG to its alpha bounding box (keeping a margin so
the faint baked-in floor shadow survives), resizes, and exports lossy webp.
The g2-left/g2-right pair is padded to a shared aspect ratio anchored at the
bottom so the two poses stay base-aligned when crossfaded on the /robots page.

Run from the repo root:  python3 scripts/derive-images.py
"""

from PIL import Image

Image.MAX_IMAGE_PIXELS = None

IMG_DIR = 'public/images'
# The official renders have a soft shadow wash covering most of the canvas at
# low alpha, so the bbox must come from solid pixels only or it never shrinks.
BBOX_THRESH = 128
MARGIN = 0.08


def load_cropped(filename, alpha_floor=0):
    im = Image.open(f'{IMG_DIR}/{filename}').convert('RGBA')
    mask = im.getchannel('A').point(lambda v: 255 if v > BBOX_THRESH else 0)
    left, top, right, bottom = mask.getbbox()
    m = round((bottom - top) * MARGIN)
    box = (
        max(0, left - m),
        max(0, top - m),
        min(im.width, right + m),
        min(im.height, bottom + m),
    )
    im = im.crop(box)
    if alpha_floor:
        # The 向右侧 render carries a near-invisible (~4% opacity) shadow wash
        # that balloons the webp; drop sub-floor alpha on the crossfade pair so
        # both files stay small and visually consistent with each other.
        im.putalpha(im.getchannel('A').point(lambda v: 0 if v < alpha_floor else v))
    return im


def pad_to_aspect(im, aspect):
    w, h = im.size
    target_w = round(h * aspect)
    if target_w >= w:
        canvas = Image.new('RGBA', (target_w, h), (0, 0, 0, 0))
        canvas.paste(im, ((target_w - w) // 2, 0))
        return canvas
    target_h = round(w / aspect)
    canvas = Image.new('RGBA', (w, target_h), (0, 0, 0, 0))
    canvas.paste(im, (0, target_h - h))
    return canvas


def save(im, name, out_h):
    out_w = round(im.width * out_h / im.height)
    out = im.resize((out_w, out_h), Image.LANCZOS)
    out.save(f'{IMG_DIR}/{name}', 'WEBP', quality=82, method=6)
    print(f'{name}: {out.size[0]}x{out.size[1]}')


hero = load_cropped('G2-T2.7.png')
save(hero, 'g2-hero.webp', 1600)

g2_left = load_cropped('G2-向左侧.png', alpha_floor=16)
g2_right = load_cropped('G2-向右侧.png', alpha_floor=16)
shared_aspect = max(
    g2_left.width / g2_left.height,
    g2_right.width / g2_right.height,
)
save(pad_to_aspect(g2_left, shared_aspect), 'g2-left.webp', 1600)
save(pad_to_aspect(g2_right, shared_aspect), 'g2-right.webp', 1600)

x2 = load_cropped('250812 X2-官图-走路正侧.png')
save(x2, 'x2-hero.webp', 1400)
