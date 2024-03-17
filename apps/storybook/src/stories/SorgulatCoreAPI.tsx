import React from 'react';

export const AuthAPI = () => {
  return (
    <div style={{ padding: "24px"}}>
    <h1>Authentication API Documentation</h1>

    <h3>Register:</h3>
    <span style={{ backgroundColor: "#f2e9e9", padding: "4px"}}>/v1/auth/register</span>
    <p><strong>POST</strong></p>
    <p><strong>Summary:</strong> Register as user</p>
    <p><strong>Example Payload:</strong></p>
    <pre style={{ backgroundColor: "#f2e9e9"}}>{`
      {
        "name": "Eren",
        "lastName": "Emmez",
        "email": "emmezeren@gmail.com",
        "phone": {
          "countryCode": "+90",
          "number": 5453860523
        },
        "password": "erenMalik123",
        "organisation": {
          "name": "Sorgulat",
          "address": "xx mahallesi no:34 istanbul"
        },
        "privacyPolicy": true,
        "commercialMsg": false
      }
    `}</pre>

    <h3>Login:</h3>
    <span style={{ backgroundColor: "#f2e9e9", padding: "4px"}}>/v1/auth/login</span>
    <p><strong>POST</strong></p>
    <p><strong>Summary:</strong> Login</p>
    <p><strong>Example Payload:</strong></p>
    <pre style={{ backgroundColor: "#f2e9e9"}}>{`
      {
        "email": "emmezeren@gmail.com",
        "password": "password1"
      }
    `}</pre>

    <h3>Logout:</h3>
    <span style={{ backgroundColor: "#f2e9e9", padding: "4px"}}>/v1/auth/logout</span>
    <p><strong>POST</strong></p>
    <p><strong>Summary:</strong> Logout</p>
    <p><strong>Example Payload:</strong></p>
    <pre style={{ backgroundColor: "#f2e9e9"}}>{`
      {
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWJhYzUzNDk1NGI1NDEzOTgwNmMxMTIiLCJpYXQiOjE1ODkyOTg0ODQsImV4cCI6MTU4OTMwMDI4NH0.m1U63blB0MLej_WfB7yC2FTMnCziif9X8yzwDEfJXAg"
      }
    `}</pre>

    <h3>Refresh Token:</h3>
    <span style={{ backgroundColor: "#f2e9e9", padding: "4px"}}>/v1/auth/refresh-tokens</span>
    <p><strong>POST</strong></p>
    <p><strong>Summary:</strong> Refresh auth tokens</p>
    <p><strong>Example Payload:</strong></p>
    <pre style={{ backgroundColor: "#f2e9e9"}}>{`
      {
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWJhYzUzNDk1NGI1NDEzOTgwNmMxMTIiLCJpYXQiOjE1ODkyOTg0ODQsImV4cCI6MTU4OTMwMDI4NH0.m1U63blB0MLej_WfB7yC2FTMnCziif9X8yzwDEfJXAg"
      }
    `}</pre>

    <h3>Forgot Password:</h3>
    <span style={{ backgroundColor: "#f2e9e9", padding: "4px"}}>/v1/auth/forgot-password</span>
    <p><strong>POST</strong></p>
    <p><strong>Summary:</strong> Forgot password</p>
    <p><strong>Example Payload:</strong></p>
    <pre style={{ backgroundColor: "#f2e9e9"}}>{`
      {
        "email": "fake@example.com"
      }
    `}</pre>

    <h3>Reset Password:</h3>
    <span style={{ backgroundColor: "#f2e9e9", padding: "4px"}}>/v1/auth/reset-password</span>
    <p><strong>POST</strong></p>
    <p><strong>Summary:</strong> Reset password</p>
    <p><strong>Query Parameter:</strong> token</p>
    <p><strong>Example Payload:</strong></p>
    <pre style={{ backgroundColor: "#f2e9e9"}}>{`
      {
        "password": "password1"
      }
    `}</pre>
  </div>
  );
};
