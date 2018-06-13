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
	return app.send_static_file('trud.ics')

@app.route('/id_rsa.pub')
def idrsa():
	return app.send_static_file('id_rsa.pub')

if __name__ == '__main__':
	app.run()
