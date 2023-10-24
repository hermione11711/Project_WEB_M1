import { createAuth0 } from '@auth0/auth0-vue';

export function getAuthConfig() {
  return createAuth0({
    domain:"webm1project.eu.auth0.com",
    clientId:"LLSJTnGGzEyjTC7RvQ06sGmFaXlziiTO",
    authorizationParams:{
        redirect_uri: window.location.origin,
    },
  });
  
}