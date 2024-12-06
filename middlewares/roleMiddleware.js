const roleMiddleware = (requiredRole) => (req, res, next) => {
    if (req.user.role !== requiredRole) {
      return res.status(403).json({ error: 'Access Denied' });
    }
    next();
  };
  
  module.exports = roleMiddleware;
  