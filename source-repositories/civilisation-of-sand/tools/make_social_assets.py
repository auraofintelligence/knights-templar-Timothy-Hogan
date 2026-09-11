from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
IMG_DIR = ROOT / "assets" / "img"
HERO = IMG_DIR / "civilisation-of-sand-hero.png"
PREVIEW = IMG_DIR / "link-preview.png"
APPLE_ICON = IMG_DIR / "apple-touch-icon.png"


def font(size, bold=False, serif=False):
    candidates = []
    if serif:
        candidates.extend([
            Path("C:/Windows/Fonts/georgiab.ttf"),
            Path("C:/Windows/Fonts/georgia.ttf"),
        ])
    if bold:
        candidates.extend([
            Path("C:/Windows/Fonts/seguisb.ttf"),
            Path("C:/Windows/Fonts/arialbd.ttf"),
        ])
    candidates.extend([
        Path("C:/Windows/Fonts/segoeui.ttf"),
        Path("C:/Windows/Fonts/arial.ttf"),
    ])
    for candidate in candidates:
        if candidate.exists():
            return ImageFont.truetype(str(candidate), size)
    return ImageFont.load_default()


def cover(image, size):
    target_w, target_h = size
    scale = max(target_w / image.width, target_h / image.height)
    resized = image.resize((round(image.width * scale), round(image.height * scale)), Image.Resampling.LANCZOS)
    left = (resized.width - target_w) // 2
    top = (resized.height - target_h) // 2
    return resized.crop((left, top, left + target_w, top + target_h))


def rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size[0], size[1]), radius=radius, fill=255)
    return mask


def make_preview():
    base = cover(Image.open(HERO).convert("RGB"), (1200, 630)).convert("RGBA")
    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    for x in range(680):
        alpha = int(218 * (1 - x / 680))
        draw.line((x, 0, x, 630), fill=(4, 55, 58, alpha))
    draw.rectangle((0, 0, 1200, 630), fill=(8, 71, 74, 68))
    draw.rounded_rectangle((58, 58, 650, 560), radius=22, fill=(255, 253, 248, 228), outline=(235, 196, 106, 190), width=2)
    draw.rectangle((58, 58, 650, 560), fill=(255, 253, 248, 24))
    draw.line((92, 432, 616, 432), fill=(184, 74, 47, 230), width=5)
    draw.arc((424, 310, 610, 496), start=198, end=342, fill=(6, 75, 79, 180), width=9)
    draw.arc((462, 342, 578, 458), start=200, end=340, fill=(223, 164, 41, 210), width=7)

    image = Image.alpha_composite(base, overlay)
    draw = ImageDraw.Draw(image)
    title_font = font(68, bold=True, serif=True)
    body_font = font(31, bold=True)
    small_font = font(24)

    draw.text((92, 104), "Civilisation", font=title_font, fill=(6, 75, 79))
    draw.text((92, 180), "of Sand", font=title_font, fill=(6, 75, 79))
    draw.text((94, 306), "Playable public story", font=body_font, fill=(31, 31, 31))
    draw.text((94, 350), "ledger-aware quests", font=body_font, fill=(31, 31, 31))
    draw.text((94, 394), "local capability", font=body_font, fill=(31, 31, 31))
    draw.text((94, 475), "auraofintelligence.github.io/civilisation-of-sand", font=small_font, fill=(96, 112, 108))

    image.convert("RGB").save(PREVIEW, quality=92, optimize=True)


def make_apple_icon():
    icon = Image.new("RGBA", (180, 180), (0, 0, 0, 0))
    mask = rounded_mask((180, 180), 38)
    bg = Image.new("RGBA", (180, 180), (6, 75, 79, 255))
    bg.putalpha(mask)
    icon.alpha_composite(bg)
    draw = ImageDraw.Draw(icon)

    for y, colour in [(116, (223, 164, 41, 255)), (130, (184, 74, 47, 245)), (145, (246, 242, 234, 220))]:
        points = [(20, y), (58, y - 15), (98, y - 3), (136, y - 19), (166, y - 9), (166, 180), (20, 180)]
        draw.polygon(points, fill=colour)
    draw.arc((42, 42, 138, 138), start=204, end=336, fill=(255, 253, 248, 250), width=11)
    draw.arc((62, 63, 118, 119), start=204, end=336, fill=(255, 253, 248, 235), width=8)
    draw.line((90, 32, 90, 142), fill=(255, 253, 248, 210), width=6)
    draw.ellipse((77, 77, 103, 103), fill=(255, 253, 248, 255))
    icon.save(APPLE_ICON)


def main():
    IMG_DIR.mkdir(parents=True, exist_ok=True)
    make_preview()
    make_apple_icon()
    print(f"Wrote {PREVIEW.relative_to(ROOT)}")
    print(f"Wrote {APPLE_ICON.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
