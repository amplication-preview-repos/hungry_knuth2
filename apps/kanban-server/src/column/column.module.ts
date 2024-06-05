import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ColumnModuleBase } from "./base/column.module.base";
import { ColumnService } from "./column.service";
import { ColumnController } from "./column.controller";
import { ColumnResolver } from "./column.resolver";

@Module({
  imports: [ColumnModuleBase, forwardRef(() => AuthModule)],
  controllers: [ColumnController],
  providers: [ColumnService, ColumnResolver],
  exports: [ColumnService],
})
export class ColumnModule {}
