#heres the route handling 
from flask import Flask, render_template, url_for, request, redirect

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("main-page.html")

@app.route("/yuh/")
def yuh_controller():
    return render_template("yuh.html")

if __name__ == "__main__":
    app.run(debug=True)