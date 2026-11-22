import json
import os

from flask import Flask, jsonify

app = Flask(__name__)

DICTIONARY_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dictionary.json")


def load_dictionary():
    with open(DICTIONARY_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    return {key.lower(): value for key, value in data.items()}


dictionary = load_dictionary()

app.json.ensure_ascii = False


@app.route("/translate/<word>", methods=["GET"])
def translate(word):
    key = word.strip().lower()
    translation = dictionary.get(key)

    if translation is None:
        return jsonify({"error": "Word not found"}), 404

    return jsonify({"English": key, "Finnish": translation})


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)