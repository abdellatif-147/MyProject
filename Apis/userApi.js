var usermodel = require("../models/usermodel");
function createApis(app) {
  app.post("/signup", async (req, resp) => {
    try {
      const { username, password, phone, email } = req.body;
      let user = new usermodel({
        username,
        password,
        phone,
        email
      });
      await user.save();
      resp.json({ message: "success" });
    } catch (err) {
      resp.json({ message: "error" });
    }
  });

  app.post("/signin", async (req, resp) => {
    const { username, password } = req.body;
    let user = await usermodel.findOne({ username, password });
    if (user) {
      req.session.user = user;

      resp.json({ message: "success", user });
    } else {
      resp.json({ message: "user is not found " });
    }
  });

  app.post("/getuserbyid", async (req, resp) => {
    const { id } = req.body;
    let user = await usermodel.findOne({ _id: id });
    resp.json({ message: "success", user });
  });

  app.get("/logout", (req, resp) => {
    req.session.destroy();
    resp.json({ message: "success" });
  });
}

module.exports = createApis;
