FROM python:3.8

WORKDIR /ovodovme

ADD . /ovodovme

RUN apt-get update && \
	apt-get install -y
RUN pip install flask==1.1.1 uwsgi==2.0.18

EXPOSE 3031 9191

CMD ["uwsgi", "--ini", "ovodovme_uwsgi.ini"]
