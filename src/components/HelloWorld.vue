<template>
<div>
  <p>Drive API Quickstart</p>

  <!--Add buttons to initiate auth sequence and sign out-->
  <button id="authorize_button" style="display: none;">Authorize</button>
  <button id="signout_button" style="display: none;">Sign Out</button>

  <pre id="content" style="white-space: pre-wrap;"></pre>
  <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>

</div>
</template>

<script>
// {
//   "web": {
//     "client_id": "1079641028826-12jlfla8hajgb36417o1j3gooai5fcfk.apps.googleusercontent.com",
//     "project_id": "gdmp-261306",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_secret": "9e4a-YYIAZAU-7dt8Jn_7MJO"
//   }
// }
//
// function onSignIn(googleUser) {
//   // Useful data for your client-side scripts:
//   var profile = googleUser.getBasicProfile();
//   console.log("ID: " + profile.getId()); // Don't send this directly to your server!
//   console.log('Full Name: ' + profile.getName());
//   console.log('Given Name: ' + profile.getGivenName());
//   console.log('Family Name: ' + profile.getFamilyName());
//   console.log("Image URL: " + profile.getImageUrl());
//   console.log("Email: " + profile.getEmail());
//
//   // The ID token you need to pass to your backend:
//   var id_token = googleUser.getAuthResponse().id_token;
//   console.log("ID Token: " + id_token);
// }

export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
