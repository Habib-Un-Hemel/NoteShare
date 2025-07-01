import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log("adminLogin received email:", email);
    // console.log("adminLogin received password:", password);

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.json({
        success: false,
        message: "Wrong Email or password",
      });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.json({
      success: true,
      message: "Login successful , enjoy",
      token,
    });
  } catch (error) {
    console.error("Error in adminLogin:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
