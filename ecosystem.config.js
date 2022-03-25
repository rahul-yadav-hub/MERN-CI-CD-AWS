module.exports = {
        apps : [
            {
              name: "conduit",
              script: "./app.js",
              watch: true,
              env: {
                  "MONGODB_DEV_URI": "your_mongodb_uri_here",
                  "PORT": your_app_port_here
              }
            }
       ]
}
