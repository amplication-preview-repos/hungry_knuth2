import * as graphql from "@nestjs/graphql";
import { LoginInput } from "../userAuthentication/LoginInput";
import { UserAuthenticationService } from "./userauthentication.service";

export class UserAuthenticationResolver {
  constructor(protected readonly service: UserAuthenticationService) {}

  @graphql.Mutation(() => String)
  async Login(
    @graphql.Args()
    args: LoginInput
  ): Promise<string> {
    return this.service.Login(args);
  }
}
