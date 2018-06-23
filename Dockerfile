FROM python:3.6

# Set the working directory to /app
WORKDIR /docker-test

# Copy the current directory contents into the container at /app
ADD . /docker-test

# Install any needed packages specified in requirements.txt
RUN pip install --upgrade pip
RUN pip install flask uwsgi

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME Docker-Test

# Run app.py when the container launches
CMD ["uwsgi", "--http", "0.0.0.0:80", \
               "--wsgi-file", "app.py", \
               "--callable", "app"]