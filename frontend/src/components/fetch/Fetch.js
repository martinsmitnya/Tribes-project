async function Fetch(method, endpoint, body) {
  const settings = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (method !== 'GET') {
    settings.body = JSON.stringify(body);
  }
  const call = await fetch(
    `${process.env.REACT_APP_PORT}${endpoint}`,
    settings
  );
  const result = await call.json();
  console.log(call);
  if (call.status !== 200) {
    throw new Error(result.message);
  }
  return result;
}

export default Fetch;
