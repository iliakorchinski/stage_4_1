import { useNavigate } from 'react-router-dom';

const refreshAccessToken = async (): Promise<string | null> => {
  try {
    const res = await fetch('/api/refresh-token', {
      method: 'POST',
      credentials: 'include',
    });

    if (res.ok) {
      const data = await res.json();
      const newAccessToken = data.accessToken;
      if (newAccessToken) {
        localStorage.setItem('accessToken', newAccessToken);
        return newAccessToken;
      }
    }

    return null;
  } catch {
    return null;
  }
};

export const secureFetch = async (
  url: RequestInfo,
  params: RequestInit = {},
  navigate: ReturnType<typeof useNavigate>,
): Promise<Response> => {
  let accessToken = localStorage.getItem('accessToken');

  const newToken = await refreshAccessToken();
  if (newToken) {
    accessToken = newToken;
  } else {
    navigate('/login');
  }

  return fetch(url, {
    ...params,
    headers: {
      ...params.headers,
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  });
};
