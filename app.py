from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/gorevli.html')
def gorevli():
    return render_template('pages/gorevli.html')

@app.route('/submit', methods=['POST'])
def submit():
    # Formdan gelen verileri al
    yer_bilgisi = request.form.get('yerBilgisi')
    durum_bilgisi = request.form.get('durumBilgisi')
    foto = request.files.get('foto')
    saat_bilgisi = request.form.get('saat')

    # Burada verileri işlemek ve gerekli aksiyonları almak istediğiniz kodları ekleyebilirsiniz.
    # Örneğin, bu verileri bir veritabanına kaydetmek gibi.

    return "Form başarıyla gönderildi!"

if __name__ == '__main__':
    app.run(debug=True)
