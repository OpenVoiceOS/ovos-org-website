from flask import Blueprint, render_template, url_for

about = Blueprint("about", __name__, template_folder="templates", static_folder="static")

@about.route('/', methods=["GET"])
def index():
    page_data = {
        "navbar_title_text": "About OpenVoiceOS",
        "page_title_text": "OVOS - The Open Voice Operating System"
        }
    return render_template("about.html", **page_data)
