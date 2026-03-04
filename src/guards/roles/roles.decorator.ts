import { SetMetadata } from "@nestjs/common";
// multiple values ko decorator mei inject krwana 

export const ROLES_KEYS = 'roles';

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEYS, roles)