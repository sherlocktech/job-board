# job-board
This is a simple job board that pulls from GitHub Jobs API and filters down to entry level jobs. The MVP started from a [CodeDrip video](https://youtu.be/BPJSmlTMsQ4). The project is broken into three parts: the Client, Worker, and API.
### Client
This React app is seeded from the [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) starter environment. Check the [README](/client/README.md) in the client directory for more info.
### Worker
This node application fetches the jobs from the GitHub Jobs API. It uses [cron](https://www.npmjs.com/package/cron) to fetch the jobs on a schedule (once a min). This keeps our local API up to date.
### API
This express application serves jobs in our redis store to our Client. The redis store is kept fresh by the cron tasks in Worker.
## Development
This project requires:
1. [node](https://nodejs.org/en/) and npm (usually installed with node)
2. [yarn](https://yarnpkg.com/lang/en/)
3. [redis](https://redis.io/)
    - for windows download [here](https://github.com/rgl/redis/downloads) and install exe. This will setup redis service and a client to log into redis service. You'll need to start the service manually first (or restart your machine). Look for redis client in Start after service is running.
    - for mac use [homebrew](https://brew.sh/) to download and install redis

After installing the required tools open the directory in command line and execute `npm install`. Use `yarn install` in the client directory.

Each application within this project needs to be started separately. Follow the directions below for each portion of the project.
### Client
Check the [Client README](/client/README.md) for instructions on starting that.
### Worker
Make sure your redis server is running. Then run `node worker/index.js` in your cli.
### API
Run `node api/index.js` to start the express app.
