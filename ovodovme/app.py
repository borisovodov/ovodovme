from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/trud')
def trud():
	return render_template('trud.html')

@app.route('/trud.ics')
def trudics():
	return 'trud.ics'

@app.route('/id_rsa.pub')
def idrsa():
	return 'id_rsa.pub'

