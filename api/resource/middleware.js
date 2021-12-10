async function validateResource(req, res, next) {
    if (!req.body.resource_name || !req.body.resource_name.trim()) {
      next({ status: 400, message: "resource name is required" });
    } else {
      next();
    }
  }
  
  module.exports = { validateResource };
