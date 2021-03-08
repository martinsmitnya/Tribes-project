async function Fetch(method, endpoint, body, params) {
  const settings = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (method != 'GET') {
    settings.body = JSON.stringify(body);
  }
  const call = await fetch(
    `${process.env.REACT_APP_PORT}${endpoint}`,
    settings
  );
  const result = await call.json();
  return result;
}

export default Fetch;
