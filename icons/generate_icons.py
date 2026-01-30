#!/usr/bin/env python3
"""Generate PWA icons for Presenter"""

from PIL import Image, ImageDraw

SIZES = [72, 96, 128, 144, 152, 192, 384, 512]

def draw_presentation_icon(draw, size):
    """Draw the Presenter icon on the given ImageDraw object"""

    # Calculate dimensions (scaled from 512x512 base)
    scale = size / 512

    # Background - black rounded rectangle
    corner_radius = int(96 * scale)
    draw.rounded_rectangle(
        [(0, 0), (size, size)],
        radius=corner_radius,
        fill='#000000'
    )

    # Icon positioning (centered in a 256x256 area, scaled)
    base_x = int(128 * scale)
    base_y = int(128 * scale)
    slide_width = int(192 * scale)
    slide_height = int(144 * scale)
    line_width = int(8 * scale)

    # Slide rectangle outline
    rect_radius = int(12 * scale)
    draw.rounded_rectangle(
        [(base_x, base_y + int(48 * scale)),
         (base_x + slide_width, base_y + int(48 * scale) + slide_height)],
        radius=rect_radius,
        outline='#ffffff',
        width=max(1, int(16 * scale))
    )

    # Play triangle
    play_x = base_x + int(152 * scale)
    play_y = base_y + int(96 * scale)
    play_size = int(40 * scale)

    draw.polygon([
        (play_x, play_y),
        (play_x, play_y + play_size * 1.5),
        (play_x + play_size, play_y + play_size * 0.75)
    ], fill='#ffffff')

    # Content lines
    line_start_x = base_x + int(64 * scale)

    # Line 1
    draw.line(
        [(line_start_x, base_y + int(88 * scale)),
         (line_start_x + int(72 * scale), base_y + int(88 * scale))],
        fill='#ffffff',
        width=line_width
    )

    # Line 2
    draw.line(
        [(line_start_x, base_y + int(112 * scale)),
         (line_start_x + int(56 * scale), base_y + int(112 * scale))],
        fill='#ffffff',
        width=line_width
    )

    # Line 3
    draw.line(
        [(line_start_x, base_y + int(136 * scale)),
         (line_start_x + int(40 * scale), base_y + int(136 * scale))],
        fill='#ffffff',
        width=line_width
    )


def generate_icon(size):
    """Generate an icon of the given size"""
    # Create image with transparent background (will be filled)
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    draw_presentation_icon(draw, size)

    # Convert to RGB for PNG (removes alpha channel for better compatibility)
    img = img.convert('RGB')

    return img


def main():
    """Generate all icon sizes"""
    import os

    icons_dir = os.path.dirname(os.path.abspath(__file__))

    for size in SIZES:
        img = generate_icon(size)
        filename = f'icon-{size}x{size}.png'
        filepath = os.path.join(icons_dir, filename)
        img.save(filepath)
        print(f'Generated: {filename}')

    print(f'\nAll icons generated in: {icons_dir}')


if __name__ == '__main__':
    main()
