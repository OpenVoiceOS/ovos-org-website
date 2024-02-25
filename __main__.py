from ovos_org_website.setup_app import start_website

def main(host=None, port=None, debug=None):
    from argparse import ArgumentParser

    parser = ArgumentParser(description="Local Backend UI", allow_abbrev=False)
    parser.add_argument("--host", nargs="?", help="IP address to broadcast", default="0.0.0.0")
    parser.add_argument("--port", nargs="?", help="Port to broadcast on.", default=9888)
    parser.add_argument("--debug", help="When present, debug is True", action="store_true")
    args = parser.parse_args()
    host = args.host
    port = args.port
    debug = args.debug

    start_website(host, port, debug)

if __name__ == "__main__":

    main()
