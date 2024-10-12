from flask import Flask, jsonify, Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

base64_data = ''
width_data = ''
height_data = ''

def load_file_data(base64_file_path, width_height_file_path):
    global base64_data, width_data, height_data
    
    with open(base64_file_path, 'r') as f:
        base64_data = f.read().strip()

    with open(width_height_file_path, 'r') as f:
        dimensions = f.read().strip().split('|')
        if len(dimensions) == 2:
            width_data, height_data = dimensions[0], dimensions[1]

template_js = """ """
with open("draw-runtime.js", 'r', encoding='utf8') as f:
    template_js = f.read()

def generate_js_content():
    return template_js.replace('%B64_REPLACE_DATA%', base64_data)\
                      .replace('%WIDTH_DATA%', width_data)\
                      .replace('%HEIGHT_DATA%', height_data)

@app.route('/draw-runtime.js', methods=['GET'])
def serve_js():
    js_content = generate_js_content()
    return Response(js_content, mimetype='application/javascript')

if __name__ == '__main__':
    b64dat = "727v2.jpg.bin.txt"
    hwdata = "727v2.jpg.data.txt"
    load_file_data(b64dat, hwdata)
    
    try:
        app.run(debug=True, host='127.0.0.1', port=5000)
    except KeyboardInterrupt:
        print("Shutting down server...")
