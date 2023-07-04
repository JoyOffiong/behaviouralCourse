import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string,
      password: string,
      firstName: string,
      lastName: string,
      email: string,
      name: string,
      phoneNo: string,
      photoUrl: string,
      status: string,
      address: string,
      roleName: string,
      accessToken: string,
    }
  }
}