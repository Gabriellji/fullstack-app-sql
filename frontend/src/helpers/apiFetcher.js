const postRoute = async (path, userObj) => {
  const res = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  });

  const data = await res.json();
  return data;
};

export { postRoute };
