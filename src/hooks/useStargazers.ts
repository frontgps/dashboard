import { useEffect, useState } from 'react';

interface IRepo {
  stargazers_count: number;
}

const ORG_NAME = 'InteractiveFrontend';
const REPO_NAME = 'Dashboard';
const CLASSIC_TOKEN = import.meta.env.VITE_STARGAZERS_CLASSIC_TOKEN;

export function useStargazers() {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchStars() {
      try {
        setLoading(true);

        const res = await fetch(`https://api.github.com/repos/${ORG_NAME}/${REPO_NAME}`, {
          headers: {
            Authorization: `Bearer ${CLASSIC_TOKEN}`,
            Accept: 'application/vnd.github+json',
          },
        });

        if (!res.ok) {
          throw new Error(`Github API error: ${res.status}`);
        }

        const data: IRepo = await res.json();

        if (!cancelled) {
          setStars(data.stargazers_count);
          setLoading(false);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occured!');
        }
        setLoading(false);
      }
    }

    fetchStars();

    return () => {
      cancelled = true;
    };
  }, []);

  return { stars, loading, error };
}
