async function Fetch(method, endpoint, body, headers) {
  const settings = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (body) {
    settings.body = JSON.stringify(body);
  }
  if (headers) {
    settings.headers.token = JSON.stringify(headers);
  }

  const call = await fetch(
    `${process.env.REACT_APP_PORT}${endpoint}`,
    settings
  );
  const result = await call.json();

  if (call.status !== 200) {
    throw new Error(result);
  }
  return result;
}

export default Fetch;
