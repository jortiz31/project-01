function index(req, res) {
  res.json({
    message: "Welcome to Sneaky!",
    documentation_url: "https://github.com/jortiz31/project-01",
    base_url: "http://sneakyapp.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
