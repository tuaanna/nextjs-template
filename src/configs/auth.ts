import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const authConfigs = {
  providers: [Google, GitHub],
  pages: {
    signIn: "/sign-in",
  },
};
