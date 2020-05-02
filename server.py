#!/usr/bin/env python

import os
from flask import Flask, render_template, send_from_directory

app = Flask(__name__, template_folder="public")


@app.route("/")
def index():
    return render_template('index.html')


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'public'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route('/eventstocks')
def event_stocks():
    return send_from_directory(os.path.join(app.root_path, 'public'),
                                'eventstocks.json', mimetype='application/json')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 3000), debug=True)
