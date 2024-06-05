import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserAuthenticationService } from "./userauthentication.service";
import { LoginInput } from "../userAuthentication/LoginInput";

@swagger.ApiTags("userAuthentications")
@common.Controller("userAuthentications")
export class UserAuthenticationController {
  constructor(protected readonly service: UserAuthenticationService) {}

  @common.Post("/login")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Login(
    @common.Body()
    body: LoginInput
  ): Promise<string> {
        return this.service.Login(body);
      }
}
