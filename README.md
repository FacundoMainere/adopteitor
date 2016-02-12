# adopteitor

### Instalacion

#### Server:

Create Virtual Environment:

    mkvirtualenv venv

Select Virtual Environment to work on:

    workon venv

Install dependencies:

    pip install -r requirements.txt

Run Migrate:

    python manage.py migrate

Create superuser to access backend:

    python manage.py createsuperuser

Run server:

    python manage.py runserver


#### Client:

Install NPM:

    nmp install

Start NPM

    npm start
##Installing MysqlDB

I use:
sudo apt-get install libmysqlclient-dev

Then i run:
apt-get install python-dev

Finnaly:
pip install MySQL-python

Works!


### Usage

Run client:
    cd client && npm start

Run server:
    cd server && workon venv && python manage.py runserver

Run gulp:
    cd client && gulp && gulp watch
