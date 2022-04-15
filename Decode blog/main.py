from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
import datetime
import json
with open('config.json', 'r') as c:
    params = json.load(c)['params']
local_server = params['local_server']
app = Flask(__name__)
app.config.update()
if(local_server):
    app.config['SQLALCHEMY_DATABASE_URI'] = params['local_uri']
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = params['prod_uri']

db = SQLAlchemy(app)

class Contacts(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone_num = db.Column(db.Integer, nullable=False)
    mes = db.Column(db.String(150), nullable=False)
    date = db.Column(db.String(10), nullable=True)
class Posts(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    slug = db.Column(db.String(100), nullable=False)
    content = db.Column(db.String(150), nullable=False)
    date = db.Column(db.String(10), nullable=True)

@app.route("/")
def home():
    return render_template('index.html',params=params)
@app.route("/about")
def about():
    return render_template('about.html',params=params)
@app.route("/post/<string:post_slug>", methods=['GET'])
def post_req(post_slug):
    post = Posts.query.filter_by(slug=post_slug).first()
    print(post)
    return render_template('post.html',params=params,post=post)
@app.route("/contact", methods=["GET",'POST'])
def contact():
    print("Contact")
    if(request.method== 'POST'):
        '''Adding entry to the database'''
        print("HI")
        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        message = request.form.get('message')
        print(name,email,phone, message)
        x=str(datetime.datetime.now())
        entry = Contacts(name=name, email=email, phone_num = phone, mes=message, date=x[0:10] )
        db.session.add(entry)
        db.session.commit()
        # print(request.form.get('name'))
    return render_template('contact.html',params=params)
app.run(debug=True)