from flask import Blueprint, render_template, url_for

home = Blueprint("home", __name__, template_folder="templates", static_folder="static")

@home.route('/', methods=["GET"])
def index():
    page_data = {
        "navbar_title_text": "Welcome to OVOS",
        "page_title_text": "OpenVoiceOS"
        }
    return render_template("home.html", **page_data)
