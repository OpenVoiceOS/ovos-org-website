from flask import Flask, redirect, url_for

from ovos_org_website.blueprints import home
from ovos_org_website.blueprints import downloads
from ovos_org_website.blueprints import about

def setup():
    app = Flask(__name__)
    app.secret_key = "TEST_KEY"

    # Blueprints
    app.register_blueprint(home, url_prefix="/home")
    app.register_blueprint(downloads, url_prefix="/downloads")
    app.register_blueprint(about, url_prefix="/about")

    @app.route('/', methods=["GET"])
    def index():
        return redirect(url_for("home.index"))

    return app

def start_website(host, port, debug=False):
    app = setup()
    app.run(host=host, port=port, debug=debug)
    return app

