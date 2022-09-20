Wwebpack driven module federated Micro Frontend App
For simple micro frontend using simple React, switch to master branch.

Reference: [Video tutorial](https://www.youtube.com/watch?v=OeZbiaS09Q0&t=1581s) by [Ashwanth A R](https://www.linkedin.com/in/ashwanth-a-r/)

This has 2 apps running:

1. Container app (http://mfe-react-host.sujitsingh.in/)
2. Header app (http://mfe-react-guest.sujitsingh.in/)

When we make change to Header app, for example, if we change background color, it gets refletced on Header app when Header app is re-deployed and since it is exposed from Header and imported inside Container app as a Federated module using webpack, it gets automatically reflected on Container app without re-deploying it.

### It uses Github actions to trigger build & deployment
