# SvelteKit Auth.js Example

This is an example of how to use Auth.js in SvelteKit for OAuth and Magic Link authentication.

## Install dependencies

```bash
npm install
```

## Add .env

```
# environment
NODE_ENV="development"

# database
MONGODB_CONNECTION_STRING='your-mongodb-connection-string'

# Auth.js secret
AUTH_SECRET="your-atleast-32-characters-long-secret"

# Email
SMTP_USER=apikey
SMTP_PASSWORD="your-sendgrid-api-key"
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
EMAIL_FROM="your-verified-single-sender"

# Google client OAuth credentials
GOOGLE_CLIENT_ID="your-client-id"
GOOGLE_CLIENT_SECRET="your-client-secret"
```

## Run

```bash
npm run dev
```
