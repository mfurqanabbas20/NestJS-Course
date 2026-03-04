import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './roles.enum';
import { ROLES_KEYS } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflactor: Reflector) {}
  // values ko get krna meta data wli
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRole = this.reflactor.getAllAndOverride<Role[]>(
      ROLES_KEYS, [
        context.getHandler(),
        context.getClass(),
      ]
    );
    if(!requiredRole) return true;
    const request = context.switchToHttp().getRequest<{headers: Record<string, string>}>();
    const userrole = request.headers['x-user-role'] as Role;
    return requiredRole.includes(userrole);
    return true;
  }
}
