import codecs
import json
import zlib
import base64
from PIL import Image
import urllib
    
def nothing():
    print("Alright.")
    
def urlencode(string):
    """Alternate way to url encoding"""
    encoded_chars = []
    for char in string:
        if char.isalnum():
            encoded_chars.append(char)
        elif char == '=':
            encoded_chars.append('=')
        elif char == '&':
            encoded_chars.append('&')
        else:
            encoded_chars.append("%{0:0>2X}".format(ord(char)))
    return "".join(encoded_chars)
    
def image_to_json(image_path):
    img = Image.open(image_path)
    pixels = img.load()
    width, height = img.size

    draw_instructions = []
    prev_color = None
    is_drawing = False
    print(f"W: {width} | H: {height}")
    print(f"Strawpage last payload: &dims[w]={width}&dims[h]={height}&dims[r]=1")
    print("URL Encoded version:    " + urlencode(f"&dims[w]={width}&dims[h]={height}&dims[r]=1"))
    with open(f"{path}.data.txt", 'wb') as f:
        f.write(str.encode(f"{width}|{height}"))
    print(f"HW data saved to {path}.data.txt")
    for y in range(height):
        for x in range(width):
            color = pixels[x, y]

            if isinstance(color, tuple) and len(color) in [3, 4]:
                color = "#{:02x}{:02x}{:02x}".format(color[0], color[1], color[2])
            elif color == 0:
                color = "#FFFFFF"
            elif color == 1:
                color = "#000000"

            if color != prev_color or not is_drawing:
                if is_drawing:
                    is_drawing = False
                draw_instructions.append({
                    "type": "start",
                    "x": x,
                    "y": y,
                    "color": color,
                    "size": 2
                })
                is_drawing = True
                prev_color = color
            
            if is_drawing:
                draw_instructions.append({
                    "type": "draw",
                    "x": x,
                    "y": y
                })

    return draw_instructions

def compress_json(data):
    json_data = json.dumps(data, separators=(',', ':')).encode('utf-8')
    compressed_data = zlib.compress(json_data)
    return compressed_data

def save_to_bin_file(data, file_name):
    with open(file_name, 'wb') as f:
        f.write(data)

def image_to_canvas_bin(image_path):
    draw_json = image_to_json(image_path)

    compressed_data = compress_json(draw_json)

    with open(f"{image_path}.bin", 'wb') as f:
        f.write(compressed_data)
    print(f"Compressed canvas saved to {image_path}.bin")

path = str(input("Enter image file name: "))
image_to_canvas_bin(path)
dobase64 = int(input("Save to base64? (1 for Y/2 for N): "))
if dobase64 == 1:
    data = open(f"{path}.bin", "rb")
    binary = data.read()
    b64dat = base64.b64encode(binary)
    with open(f"{path}.bin.txt", 'wb') as f:
        f.write(b64dat)
    print(f"Base64 data saved to {path}.bin.txt")
    print("PLEASE, ONLY OPEN IT IN EMEDITOR\nOR ANY TEXT EDITOR THAT CAN HANDLE BIG DATA.")
    urlenc = int(input("URL encode? (1 for Y/2 for N): "))
    
    if urlenc == 1:
        with open(f"{path}.bin.txt", 'r') as f_in, open(f"{path}.bin_urlencoded.txt", 'w') as f:
            for line in f_in:
                urlenc = urlencode(line.strip())
                f.write(urlenc)
            
        print("PLEASE, ONLY OPEN IT IN EMEDITOR\nOR ANY TEXT EDITOR THAT CAN HANDLE BIG DATA.")
        exit()
    else:
        exit()
        
else:
    exit()
    
