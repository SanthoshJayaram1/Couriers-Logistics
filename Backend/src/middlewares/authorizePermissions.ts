import RolePermissionService from "../modules/rbac/services/rolePermissionService.js";
import ErrorHandler from "../utils/errorHandler.js";

export const authorizePermissions = (...requiredPermissions) => {
  return async (req, res, next) => {
    try {
      const userRole = req.user.role;

      const rolePermissions = await RolePermissionService.getPermissionsByRole(
        userRole
      );

      const userPermissions = rolePermissions.map(
        (rp) => rp.permission.permissionCode
      );

      const hasPermissions = requiredPermissions.every((permission) =>
        userPermissions.includes(permission)
      );

      if (!hasPermissions) {
        return next(
          new ErrorHandler(
            `Permission(s) (${requiredPermissions.join(
              ", "
            )}) is/are not allowed for role (${userRole}) to access this resource`,
            403
          )
        );
      }

      next();
    } catch (error) {
      return next(
        new ErrorHandler(`Error checking permissions: ${error.message}`, 500)
      );
    }
  };
};
