declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST: string;
      PORT: number;
      PASS: string;
      USER: string;
    }
  }
}

export {};
