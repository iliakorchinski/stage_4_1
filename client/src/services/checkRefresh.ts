export const checkRefresh = async (
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>,
) => {
  try {
    const res = await fetch('/api/refresh-token', {
      method: 'POST',
      credentials: 'include',
    });

    if (res.ok) {
      const { accessToken } = await res.json();
      localStorage.setItem('accessToken', accessToken);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  } catch {
    setIsAuthenticated(false);
  }
};
