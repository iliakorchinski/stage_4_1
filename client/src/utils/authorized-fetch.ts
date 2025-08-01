export const authorizedFetch = async (
  input: RequestInfo,
  init: RequestInit = {},
): Promise<Response> => {
  let accessToken = localStorage.getItem('accessToken');

  let response = await fetch(input, {
    ...init,
    headers: {
      ...init.headers,
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  });

  if (response.status === 401) {
    const refreshResponse = await fetch('/api/refresh-token', {
      method: 'POST',
      credentials: 'include',
    });

    if (refreshResponse.ok) {
      const { accessToken: newToken } = await refreshResponse.json();
      if (newToken) {
        localStorage.setItem('accessToken', newToken);

        response = await fetch(input, {
          ...init,
          headers: {
            ...init.headers,
            Authorization: `Bearer ${newToken}`,
          },
          credentials: 'include',
        });
      }
    }
  }

  return response;
};
