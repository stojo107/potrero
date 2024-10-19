from flask import Flask
import psycopg2

app = Flask(__name__)

DB_URL_SECRET = "postgresql://postgres:postgres@127.0.0.1:54322/postgres"

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/whodat")
def whodat():
    with psycopg2.connect(DB_URL_SECRET) as connection:
        with connection.cursor() as cursor:
            cursor.execute("select * from bdays")
            bdays_dump = str(cursor.fetchall())
            return "<p>" + bdays_dump +"</p>"


