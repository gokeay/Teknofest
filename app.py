from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    saat = request.form.get('saat')
    konum = request.form.get('konum')
    adet = request.form.get('adet')
    # Burada verileri istediğiniz şekilde işleyebilirsiniz

    return render_template('index.html', saat=saat, konum=konum, adet=adet)

@app.route('/kriz', methods=['POST'])
def kriz():
    kriz_bilgisi = request.form.get('kriz_bilgisi')
    # Burada kriz bilgisini işleyebilirsiniz

    return render_template('index.html', kriz_bilgisi=kriz_bilgisi)

if __name__ == '__main__':
    app.run(debug=True)
