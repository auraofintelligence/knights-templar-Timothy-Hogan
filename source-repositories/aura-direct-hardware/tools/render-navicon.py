from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
SCALE = 8
SIZE = 128 * SCALE


def scaled(value: float) -> int:
    return round(value * SCALE)


def ellipse_box(cx: float, cy: float, rx: float, ry: float) -> tuple[int, int, int, int]:
    return tuple(scaled(value) for value in (cx - rx, cy - ry, cx + rx, cy + ry))


def draw_orbit(rx: float, ry: float, angle: float, colour: str, width: float, glow: bool = False) -> Image.Image:
    orbit = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(orbit)
    draw.ellipse(ellipse_box(64, 64, rx, ry), outline=colour, width=scaled(width))
    orbit = orbit.rotate(angle, resample=Image.Resampling.BICUBIC, center=(scaled(64), scaled(64)))
    if glow:
        haze = orbit.filter(ImageFilter.GaussianBlur(scaled(2.2)))
        haze.putalpha(haze.getchannel("A").point(lambda alpha: alpha // 2))
        return Image.alpha_composite(haze, orbit)
    return orbit


image = Image.new("RGBA", (SIZE, SIZE), "#020f0e")
background = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
draw = ImageDraw.Draw(background)
for radius in range(scaled(92), 0, -1):
    ratio = radius / scaled(92)
    colour = (
        round(2 + 11 * ratio),
        round(15 + 43 * ratio),
        round(14 + 38 * ratio),
        255,
    )
    draw.ellipse(
        (scaled(46) - radius, scaled(42) - radius, scaled(46) + radius, scaled(42) + radius),
        fill=colour,
    )
mask = Image.new("L", (SIZE, SIZE), 0)
ImageDraw.Draw(mask).rounded_rectangle((0, 0, SIZE - 1, SIZE - 1), radius=scaled(29), fill=255)
image = Image.composite(background, image, mask)

draw = ImageDraw.Draw(image)
draw.ellipse(ellipse_box(64, 64, 38, 38), outline="#f4cf77", width=scaled(2.4))
image = Image.alpha_composite(image, draw_orbit(53, 16, 18, "#72ead4", 2.6, glow=True))
image = Image.alpha_composite(image, draw_orbit(49, 13, -58, "#b39aff", 1.8))

draw = ImageDraw.Draw(image)
draw.ellipse(ellipse_box(108, 47, 4.2, 4.2), fill="#f4cf77")
draw.ellipse(ellipse_box(25, 77, 2.7, 2.7), fill="#72ead4")
draw.ellipse(ellipse_box(64, 64, 26, 26), fill="#031817", outline="#f4cf77", width=scaled(2))

font_path = Path("C:/Windows/Fonts/georgiab.ttf")
if not font_path.exists():
    font_path = Path("C:/Windows/Fonts/georgia.ttf")
font = ImageFont.truetype(str(font_path), scaled(54))
draw = ImageDraw.Draw(image)
box = draw.textbbox((0, 0), "A", font=font)
text_width = box[2] - box[0]
text_height = box[3] - box[1]
draw.text(
    ((SIZE - text_width) / 2, scaled(64) - text_height / 2 - box[1] + scaled(1)),
    "A",
    font=font,
    fill="#fff1bd",
)

for output_size in (512, 192, 180, 32):
    output = image.resize((output_size, output_size), Image.Resampling.LANCZOS)
    output.save(ASSETS / f"aura-navicon-{output_size}.png", optimize=True)

print("Rendered navicon PNGs at 512, 192, 180 and 32 pixels.")
