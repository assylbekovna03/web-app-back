const Login = async (req, res) => {
  res.status(200).json({
    login: "form controller",
  });
};

const Register = async (req, res) => {
  res.status(200).json({
    register: "from controller",
  });
};

module.exports = {
  Login,
  Register,
};
