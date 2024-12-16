export const env = {
  GATEWAYS:
    (process.env.NEXT_PUBLIC_GATEWAYS as string) || "http://localhost:3000",
  AUTH_SECRET: (process.env.AUTH_SECRET as string) || "insecure",
};
