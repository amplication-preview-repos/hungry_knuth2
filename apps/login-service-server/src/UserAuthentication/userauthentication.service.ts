import { Injectable } from "@nestjs/common";
import { LoginInput } from "../userAuthentication/LoginInput";

@Injectable()
export class UserAuthenticationService {
  constructor() {}
  async Login(args: LoginInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
