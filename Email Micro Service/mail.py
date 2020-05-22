from flask import *
from flask_mail import *

app = Flask(__name__)

app.config.update(
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=465,
    MAIL_USE_SSL=True,
    MAIL_USERNAME='proyectointegradocw@gmail.com',
    MAIL_PASSWORD='gzovzdhvrksqdcpo'
)
mail= Mail(app)

@app.route("/",methods=['POST'])
def index():
   email = request.json['email']
   emailId = request.json['emailId']
   link = 'http://192.168.1.159:4200/Verify/'+emailId
   msg = Message('Verificación del correo electrónico en CookingWorld', sender = 'activate@cookingworld.com', recipients = [email])
   msg.body = f"Pulse en el siguiente link para verificar su correo electrónico. En el caso de no haberte registrado ignore este mensaje. {link}"
   mail.send(msg)
   return "Sent",200

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

if __name__ == '__main__':
   app.run(debug = True)