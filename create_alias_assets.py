from pathlib import Path
import base64
root = Path(__file__).resolve().parent
font_src = root / 'fonts' / 'Trends.ttf'
font_lower = root / 'fonts' / 'trends.ttf'
image_src = root / 'img' / 'sfondo.png'
image_upper = root / 'img' / 'Sfondo.png'
thumbnail = root / 'img' / 'video-thumbnail.jpg'
if font_src.exists() and not font_lower.exists():
    font_lower.write_bytes(font_src.read_bytes())
    print('Created fonts/trends.ttf')
if image_src.exists() and not image_upper.exists():
    image_upper.write_bytes(image_src.read_bytes())
    print('Created img/Sfondo.png')
if not thumbnail.exists():
    data = base64.b64decode(
        b'/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAICAgICAgICAgICAgICAgMCAgICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAALCAABAAEBAREA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC4AP/Z'
    )
    thumbnail.write_bytes(data)
    print('Created img/video-thumbnail.jpg')
