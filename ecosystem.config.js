module.exports = {
        apps : [
            {
              name: "conduit",
              script: "./app.js",
              watch: true,
              env: {
                  "PORT": your_app_port_here,
                  "MONGODB_DEV_URI": your_mongodb_uri_here
              }
            }
       ]
}
