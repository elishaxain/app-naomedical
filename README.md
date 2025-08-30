# NaoMedical Translator

NaoMedical Translator is a web-based application designed to provide real-time multilingual translation between patients and healthcare providers. It helps break language barriers in healthcare by converting spoken input into text, generating a live transcript, and offering an accurate translated version in the selected language.

## Features

- Real-time speech-to-text conversion  
- Multilingual translation using Google Translate API  
- Text-to-speech output for translated text  
- User-friendly interface for healthcare providers and patients  
- Responsive design for both desktop and mobile devices  

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Flask (Python)  
- **APIs/Libraries:**  
  - SpeechRecognition  
  - googletrans  
  - gTTS (Google Text-to-Speech)  
  - PyAudio  


## Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/app-naomedical.git
cd app-naomedical
```

### Prerequisites
Make sure you have the following installed on your system:
- Python 3.8+  
- pip (Python package manager)  
- Git  

### Steps

### 1. Navigate to the project folder:
```bash
cd app-naomedical
```

### 2. Create and activate a virtual environment:
```bash
python -m venv .venv
.venv\Scripts\activate   # On Windows
source .venv/bin/activate  # On Mac/Linux
```

### 3. Install dependencies:
```bash
pip install -r requirements.txt
```
### 4. Run the Flask app:
```bash
python app.py
```
### 5. Open your browser and go to:
```bash
http://127.0.0.1:5000/
```

### Usage:
Speak into the microphone to transcribe your speech.
Select the target language from the dropdown menu.
View the translated text instantly.
Listen to the translated speech output for better communication.

### Project Structure:
```bash
app-naomedical/
│── backend/        # Flask backend code  
│── static/         # CSS, JS, and frontend assets  
│── templates/      # HTML templates  
│── requirements.txt # Python dependencies  
│── app.py          # Main Flask application  
│── README.md       # Project documentation  
```
### Contribution
Contributions are welcome! If you’d like to improve the app, please fork the repository and submit a pull request.
