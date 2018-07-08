FROM python:3.6

WORKDIR /ovodovme

ADD . /ovodovme

RUN pip install --upgrade pip
RUN pip install flask uwsgi

EXPOSE 80

CMD ["uwsgi", "--socket", "0.0.0.0:3031", \
               "--wsgi-file", "ovodovme.py", \
               "--callable", "app"]