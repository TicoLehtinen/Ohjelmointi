from flask import Flask

app = Flask(__name__)

@app.route("/<maara>")
def hello(maara):
    try:
        n = int(maara)
        if n < 0:
            return "Anna positiivinen luku!"
        return "<br>".join(["Hello world!"] * n)
    except ValueError:
        return "Virhe: anna luku, esim. /5"

if __name__ == "__main__":
    app.run(debug=True)