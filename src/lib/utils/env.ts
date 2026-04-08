export function validateEnv(requiredVars: string[]) {
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}. ` +
      'Please set them in your .env.local file and Vercel project settings.'
    );
  }
}
