# Admin Dashboard

# API Endpoints


## Auth

Get Credentials
/auth/login

Status: 200
Response
body: {
    token: "ksfjsfhjshajfhiausdhfs",
    refreshToken: "ksjdfhkjadhfjheihri3urh",
}

Refresh token
/auth/refreshToken

`Token` is sent on every request to the server to verify the user
`Refresh token` is being sent to the server if `token` is invalid

## Admin

Index
adminUsers

View
adminUsers/:id

Create???
adminUsers
body: {}

Update???
adminUsers/:id
body: {}

Delete
adminsUsers/:id

Update Password??
adminUsers/:id/updatePassword
postBody

## Users
