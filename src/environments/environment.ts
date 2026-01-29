export const environment = {
  production: false,
  auth0: {
    domain: 'anna-0910-dev.eu.auth0.com',
    clientId: 'WzKMVf9HHGez0x6gG7040SRYxUKpleTF',
    authorizationParams: {
      redirect_uri: window.location.origin,
      scope: 'openid profile email offline_access',
    },
    cacheLocation: 'localstorage',
    useRefreshTokens: true
  },
};
