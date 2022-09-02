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
