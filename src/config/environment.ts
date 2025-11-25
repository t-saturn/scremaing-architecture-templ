const getEnv = (key: string, fallback?: string): string => {
  const value = process.env[key];

  if (value === undefined || value === '') {
    if (fallback !== undefined) return fallback;
    throw new Error(`Missing env variable: ${key}`);
  }

  return value;
};

export const ENV = {
  NODE_ENV: getEnv('NODE_ENV', 'development'),
};
