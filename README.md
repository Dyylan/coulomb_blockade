# Coulomb Blockade
Try out the current version of the Coulomb Blockade applet [here](https://coulomb.dylanlewis.me). 

## Introduction
For an introduction into the coulomb blockade and the applet have a look at the [live applet](https://coulomb.dylanlewis.me) and read the introduction there.

## Running locally for testing and development
Docker can be used to run this project locally or on a server, which may be easiest as it doesn't require any additional downloads. Install docker by following the [Docker installation guide](https://docs.docker.com/install/) for either Windows, Linux or MacOS. However, Docker is not required, and the project can be run locally if any of the linear programming solvers have been downloaded (GLPK, COIN-OR, or the PULP-CBC sovler).

### The environment variables
Once the repo has been cloned and Docker has been installed, make a `.env` file with four environment variables:
```
FLASK_APP=main.py
FLASK_DEBUG=0
SECRET_KEY=supersecretunguessablekey
```
`FLASK_DEBUG` can be set to 1 if you are not using Docker. This makes testing and developing easier. To run in the Docker, the `SOLVER` environment variable must be set to `glpk`. However, if running locally, `default` or `coin` can also be used if you have the correct packages installed on your computer.

### With Docker
You can now simply build the image, which I have named "airbus" here, from within the project directory: 
```
docker build -t airbus .
```
Then run the image 
```
docker run --name airbus -p 8000:5000 --rm --env-file=.env airbus
```
This builds a container which is accessible on port 8000. 

Even more simply, you can just run the `deploy.sh` script, with arguments for name, port and whether it is a redeployment: 
```
sh ./deploy.sh airbus 8000 redeploy logs
```
Which will also do `git pull` and `docker image prune`. The `redeploy` argument means the docker container with name `airbus` will be stopped. Simply remove `redeploy` to prevent this. `logs` at the end of the line means that the logs are entered on deployment, to exit the logs (without stopping the container), simply press CTRL+c. See the docker [documentation](https://docs.docker.com/get-started/part2/) and specifically the docker [logs documentation](https://docs.docker.com/v17.09/engine/reference/commandline/logs/) for more information about docker and container logs.

Visit `127.0.0.1:8000`/`localhost:8000` in a web browser to use the application. Currently, IE and Edge do **not** work. 

### Without Docker
To run from the terminal with the web micro-framework [Flask](http://flask.pocoo.org/), it is easiest to use pipenv to install all the requirements. Pipenv creates a virtual environment for Python and manages the packages and versions required. It essentially combines venv and pip into one package and is really easy to use. See [this guide](https://pipenv.readthedocs.io/en/latest/install/) for installing pipenv. 

In the project directory, run 
```
pipenv install
```
followed by
```
pipenv run flask run
```
The environment variables should be picked up automatically and the Flask application should be running on port 5000. So visit `127.0.0.1:5000`/`localhost:5000` in a web browser to use the application. Currently, IE and Edge do **not** work. If `FLASK_DEBUG` is set to 1, any changes to the `.py` files should automatically trigger a reload of the Flask built-in development server without having to restart the Flask application manually. 