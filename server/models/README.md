## Notes on bcrypt:

I am not sure if we need to use bcrypt, because we are leaving authentication and user login/password to Auth0.

However, we are supposed to receive an oidc unique id back from Auth0 when a user logs in, and that unique identifier is what we want to pass through to our database in order to retrieve specific user information.

Therefore, it may be most secure to hash the unique id.

## Removed code to use later (maybe):
>This might be good for checking oidc:

`async checkPassword(loginPw) {
    return await bcrypt.compare(loginPw, this.password)
}`

>One of these might be good for hashing oidc:

`hooks: {
    beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
    },
    beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
    },
},`

