const UserService = require("../services/Authser");
const authenticate =async (req, res, next) => {
  console.log(req.headers);
  let token = req.headers.authorization;
  if (token) {
    token = token.split(" ")[1];
    [u, p, r] = token.split(":");
    user = await UserService.login(u, p);
    console.log(user);
    if (user.role =="admin") 
        next();
    else 
        res.send("invalid credentials");
  } else res.send("no token");
};

module.exports = authenticate;

