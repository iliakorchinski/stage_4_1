import { useNavigate } from 'react-router-dom';

export const signUp = async (
  setErrors: (value: React.SetStateAction<Record<string, string>>) => void,
  userData: Record<string, string>,
  navigate: ReturnType<typeof useNavigate>,
) => {
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
      credentials: 'include',
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 422 || response.status === 400) {
        setErrors(data.errors);
      }
      return;
    }

    localStorage.setItem('accessToken', data.accessToken);
    navigate('/');
  } catch (err) {
    throw new Error(`Failed to sign up: ${err}`);
  }
};
