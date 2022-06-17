FROM python:3.9-alpine

WORKDIR /app

COPY scivi.onto-master/ scivi.onto-master/

WORKDIR /app/flask_back

COPY flask_back/requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY flask_back/ .

VOLUME [ "/app/flask_back/med_files", "/app/flask_back/db" ]

EXPOSE 5000

CMD [ "gunicorn", "-b", "0.0.0.0:5000", "app:app" ]
