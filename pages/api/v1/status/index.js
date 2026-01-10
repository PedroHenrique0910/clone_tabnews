function status(request, response) {
  response.status(200).json({ message: "Messi é o goat do futebol" });
}

export default status;
