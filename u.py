from flask import Flask, request, render_template, redirect, url_for,send_from_directory
import requests
from werkzeug.utils import secure_filename
import os
import sqlite3

app = Flask(__name__)
UPLOAD_FOLDER = r'C:\Users\benai\OneDrive\Bureau\ENT'  # Update this to your desired folder
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

DATABASE = 'pastebin.db'


def create_db():
    with sqlite3.connect(DATABASE) as conn:
        c = conn.cursor()
        c.execute('''CREATE TABLE IF NOT EXISTS pastes (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, content TEXT NOT NULL);''')
        conn.commit()


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/drive', methods=['GET'])
def drive():
    files = os.listdir(app.config['UPLOAD_FOLDER'])
    return render_template('drive.html', files=files, mdp = request.args.get('mdp'))

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        if 'file' not in request.files:
            return 'No file part'
        file = request.files['file']
        if file.filename == '':
            return 'No selected file'
        if file:
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('drive'))
    return render_template('upload.html')

@app.route('/delete/<filename>')
def delete_file(filename):
    os.remove(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    return redirect(url_for('drive'))

@app.route('/uploads/<filename>')
def download_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename, as_attachment=True)
###
@app.route('/faq_scratch')
def faq_scratch():
    return render_template('faq.html')
###
@app.route('/copieur', methods=['GET', 'POST'])
def copieur():
    if request.method == 'POST':
        content = request.form['content']
        name = request.form['name']
        paste_id = request.form.get('paste_id')

        if content and name:
            with sqlite3.connect(DATABASE) as conn:
                c = conn.cursor()
                if paste_id:  # Updating an existing paste
                    c.execute("UPDATE pastes SET name=?, content=? WHERE id=?", (name, content, paste_id))
                else:  # Creating a new paste
                    c.execute("INSERT INTO pastes (name, content) VALUES (?, ?)", (name, content,))
                conn.commit()
            return redirect(url_for('view_paste', name=name))
    return render_template('copieur.html')

@app.route('/<string:name>', methods=['GET', 'POST'])
def view_paste(name):
    with sqlite3.connect(DATABASE) as conn:
        c = conn.cursor()
        c.execute("SELECT id, content FROM pastes WHERE name=?", (name,))
        result = c.fetchone()

    if result:
        paste_id, content = result
        if request.method == 'POST':
            return render_template('copieur.html', paste_id=paste_id, name=name, content=content)
        else:
            return render_template('paste.html', name=name, content=content)
    else:
        return "Paste not found", 404

@app.route('/all_pastes')
def all_pastes():
    with sqlite3.connect(DATABASE) as conn:
        c = conn.cursor()
        c.execute("SELECT id, name FROM pastes")
        pastes = c.fetchall()
    return render_template('all_pastes.html', pastes=pastes)


if __name__ == '__main__':
    if not os.path.exists(DATABASE):
        create_db()
    app.run(debug=True)
    