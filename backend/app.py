from flask import Flask, request, jsonify
from flask_cors import CORS
from googletrans import Translator
from gtts import gTTS
import io
import base64

app = Flask(__name__)
CORS(app)

translator = Translator()

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.get_json()
    input_text = data['text']
    target_lang = data['targetLang']

    # Translate text
    translated = translator.translate(input_text, dest=target_lang).text

    # Convert translated text to speech (no saving, just streaming)
    tts = gTTS(translated, lang=target_lang)
    audio_stream = io.BytesIO()
    tts.write_to_fp(audio_stream)
    audio_stream.seek(0)

    # Encode audio in base64 for frontend playback
    audio_base64 = base64.b64encode(audio_stream.read()).decode('utf-8')

    return jsonify({
        "translatedText": translated,
        "audioData": audio_base64
    })

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, send_from_directory
app = Flask(__name__, static_folder='../frontend')

@app.route('/')
def index():
    return send_from_directory('../frontend', 'index.html')
