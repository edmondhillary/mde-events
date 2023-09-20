import { useState } from 'react';
import API_URL from '../apiUrl.js';

export function useApi() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function request({ route, mode, method='GET', body, headers={} }, registerMessage) {
    setData();
    setError();
    setLoading(true);
    const isLogin = route === 'login';
    const isRegister = route === 'register';

    try {
      const response = await fetch(API_URL + route, {
        mode,
        method,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': true,
          Authorization: localStorage.token,
          ...headers
        },
        body: body && JSON.stringify(body),
      });

      if (response.ok) {
        if (isRegister) {
          registerMessage && setData({ message: registerMessage });
        } else {
          const responseAsJson = await response.json();
          isLogin && (localStorage.token = responseAsJson.token);
          setData(responseAsJson);
        }
      } else {
        setError(new Error(`${response.status}: ${response.statusText}`));
      }
    } catch(e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  function clear() {
    setData();
    setError();
    setLoading(false);
  }

  return { request, clear, data, error, loading };
}
