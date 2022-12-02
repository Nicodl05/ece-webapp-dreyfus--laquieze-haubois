const userProfile = {
  username: "Nicolas",
  email: "nico.dreylaq@gmail.com",
  //email: "david@adaltas.com",
  isLoggedIn: true,
};

export default function handler(req, res) {
  userProfile.isLoggedIn = true;
  /// res.status(200).json(userProfile); cette ligne est équivalente à celle ci-dessous
  res.status(200).json({ ...userProfile, isLoggedIn: true });
}
