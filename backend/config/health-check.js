/**
 * Health Check Endpoint Configuration
 * Provides a simple health check endpoint for monitoring and load balancing
 *
 * Usage: GET /api/_health
 * Response: { status: 'ok', timestamp: '...', uptime: ... }
 */

module.exports = ({ env }) => ({
  enabled: true,
  endpoint: '/api/_health',

  // Response when healthy
  successResponse: (uptime) => ({
    status: 'ok',
    message: 'Service is healthy',
    timestamp: new Date().toISOString(),
    uptime: uptime,
    environment: env('NODE_ENV', 'development'),
    version: process.env.npm_package_version || '1.0.0',
  }),

  // Response when unhealthy
  errorResponse: (error) => ({
    status: 'error',
    message: 'Service is unhealthy',
    error: error.message,
    timestamp: new Date().toISOString(),
  }),
});
