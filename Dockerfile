FROM python:3.6

WORKDIR /ovodovme

ADD . /ovodovme

RUN pip install --upgrade pip
RUN pip install flask uwsgi

EXPOSE 80

ENV NAME ovodovme

CMD ["uwsgi", "--http", "0.0.0.0:80", \
               "--wsgi-file", "ovodovme.py", \
               "--callable", "app"]
