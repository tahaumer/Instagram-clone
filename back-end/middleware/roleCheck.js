const roleCheck = (allowedRoles) => {
    return (req, res, next) => {
      if (!req.user || !req.user.role) {
        return res.status(400).json({ msg: 'User role information is missing' });
      }
  
      const userRole = req.user.role;
  
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ msg: 'Access forbidden: insufficient privileges' });
      }
  
      next();
    };
  };
  
  module.exports = roleCheck;
  