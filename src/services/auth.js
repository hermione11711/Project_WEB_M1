import { createAuth0 } from '@auth0/auth0-vue';

export function getAuthConfig() {
  return createAuth0({
    domain:"projectweb.eu.auth0.com",
    clientId:"NNeI9QXMwZ9EZjaxaA0oqJdQqRfJqI7J",
    authorizationParams:{
        redirect_uri: window.location.origin,
    },
  });
}