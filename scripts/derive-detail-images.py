"""Derive square 'detail' thumbnails for the /robots dossier (Anatomy/UnitDossier
picture-in-picture squares) from official AGIBOT marketing slides (G2) and the
user's own close-up photography (X2).

Run from the repo root: python3 scripts/derive-detail-images.py
"""

from PIL import Image

OUT_DIR = 'public/images/robots-v3'
SIZE = 800


def save_square(src, box, name, flip=False):
    im = Image.open(src).convert('RGB')
    crop = im.crop(box)
    if flip:
        crop = crop.transpose(Image.FLIP_LEFT_RIGHT)
    side = min(crop.size)
    crop = crop.resize((SIZE, SIZE), Image.LANCZOS)
    crop.save(f'{OUT_DIR}/{name}.webp', 'WEBP', quality=85, method=6)
    print(f'{name}: {crop.size} <- {src} {box}')


# --- G2: official AGIBOT slides, cropped to the product (drop the caption text) ---
save_square('public/images/agibot/g2-scene-3.jpg', (512, 0, 1536, 1024), 'g2-detail-manipulation')
save_square('public/images/agibot/g2-scene-7.jpg', (860, 60, 1536, 736), 'g2-detail-perception')
save_square('public/images/agibot/g2-scene-9.jpg', (150, 380, 794, 1024), 'g2-detail-compute')
save_square('public/images/agibot/g2-scene-6.jpg', (800, 200, 1536, 936), 'g2-detail-mobility')

# --- X2: user's own macro photography ---
save_square('public/images/v2/x2_detail_top.jpeg', (0, 0, 4000, 4000), 'x2-detail-structure')
save_square('public/images/v2/x2_detail_hand.jpeg', (0, 1000, 4000, 5000), 'x2-detail-locomotion')
save_square('public/images/v2/x2_detail_face.jpeg', (1000, 0, 5000, 4000), 'x2-detail-interaction')
save_square('public/images/v2/x2_detail_chest.jpeg', (1000, 0, 5000, 4000), 'x2-detail-power')
