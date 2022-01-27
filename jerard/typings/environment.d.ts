export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BACKEND_URL: string;
      NODE_ENV: "production" | "development";
    }
  }
}
