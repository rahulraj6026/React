We use Firebase for Authentication. https://firebase.google.com/docs/auth/web/password-auth?authuser=0 The link provides the documentation for how to add Authentication to out application.
Generate a API_KEY from your google account and use the methods provided in the documentation to signup, signin and signout the user.

We also use Conditional Rendering along with routers to render only required components like if user is logged in then only show logout else show signup and signin page