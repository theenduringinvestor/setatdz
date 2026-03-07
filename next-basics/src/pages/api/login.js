export default function handler(req, res) {
  const { username, password } = req.body;

  if (username === "aaron" && password === "1234") {
    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Wrong username or password",
    });
  }
}
