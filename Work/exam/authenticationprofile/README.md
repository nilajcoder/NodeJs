## Tasks to Perform:

1. Write the authRoutes.js file using Express Router.

2. Create a middleware authMiddleware.js that verifies the JWT token from the request headers.

3. Implement controllers (authController.js) for:

4. registerUser → Registers and saves a new user.

5. login → Authenticates user and returns JWT.

6. userProfile → Returns user profile if token is valid.

7. Integrate the router into the main server (server.js).

8. Test the endpoints using Postman or Thunder Client:

9. Register a new user.

10. Login with valid credentials and get a token.

11. Use the token to access /api/dashboard.

12. Verify that accessing /api/dashboard without a token gives 401 Unauthorized.