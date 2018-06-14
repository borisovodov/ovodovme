from flask import Flask, render_template, render_template_string
import os
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/trud')
def trud():
	return render_template('trud.html')

@app.route('/trud.ics')
def trudics():
	return app.send_static_file('trud.ics')

@app.route('/id_rsa.pub')
def idrsa():
	with open(os.path.join(os.path.dirname(__file__), 'static/id_rsa.pub'), 'r') as f:
		content = f.read()
	return render_template_string(content)

if __name__ == '__main__':
	app.run()
