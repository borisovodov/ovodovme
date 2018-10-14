from flask import Flask, render_template, Response
import os
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/id_rsa.pub')
def idrsa():
	return render_template('id_rsa.html')

if __name__ == '__main__':
	app.run()
