# ovos-org-website

`ovos-org-website` is the [Flask](https://flask.palletsprojects.com/) application that serves the OpenVoiceOS website. It provides `home`, `about`, and `downloads` pages through Flask blueprints.

## Install

```bash
pip install ovos-org-website
```

## Usage

Start the server with the `ovos-org-website` command:

```bash
ovos-org-website --host 0.0.0.0 --port 9888
```

Options:

- `--host`: IP address to bind to. Default: `0.0.0.0`.
- `--port`: port to listen on. Default: `9888`.
- `--debug`: run Flask in debug mode.

The root path (`/`) redirects to the home page.

## Related projects

- [OpenVoiceOS/OpenVoiceOS](https://github.com/OpenVoiceOS/OpenVoiceOS): the OpenVoiceOS organization overview.

## License

Apache License 2.0. See [LICENSE](LICENSE).
