from flask import Flask, render_template, send_file, Response
import os
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/id_rsa.pub')
def idrsa():
	return render_template('id_rsa.html')

@app.route('/astroege/')
def astroege():
	return send_file('static/astroege.pdf')

if __name__ == '__main__':
	app.run()
