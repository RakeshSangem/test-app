import { gql } from "@apollo/client";
// import { accountError, address, userBase, userDetails } from "./constants";

// export const LOGIN_WITHOUT_DETAILS = gql`
//   mutation loginWithoutDetails($email: String!, $password: String!) {
//     tokenCreate(email: $email, password: $password) {
//       csrfToken
//       token
//       errors {
//         ${accountError}
//       }
//       user {
//         ${userBase}
//       }
//     }
//   }
// `;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      csrfToken
      token
      errors {
        # ${accountError}
        code
    field
    message
    otpVerified
    mobile
    email
      }
      user {
        ${userDetails}
      }
    }
  }
`;

// export const REGISTER = gql`
//   mutation register($input: AccountRegisterInput!) {
//     accountRegister(input: $input) {
//       errors {
//         ${accountError}
//       }
//       requiresConfirmation
//     }
//   }
// `;

// export const REFRESH_TOKEN = gql`
//   mutation refreshToken($csrfToken: String!) {
//     tokenRefresh(csrfToken: $csrfToken) {
//       token
//       errors {
//         ${accountError}
//       }
//     }
//   }
// `;

// // separate mutation so the request payload is minimal when user is not needed
// // used for initial authentication
// export const REFRESH_TOKEN_WITH_USER = gql`
//   mutation refreshTokenWithUser($csrfToken: String!) {
//     tokenRefresh(csrfToken: $csrfToken) {
//       token
//       user {
//         ${userDetails}
//       }
//       errors {
//         ${accountError}
//       }
//     }
//   }
// `;

// export const VERIFY_TOKEN = gql`
//   mutation verifyToken($token: String!) {
//     tokenVerify(token: $token) {
//       isValid
//       payload
//       user {
//         ${userDetails}
//       }
//       errors {
//         ${accountError}
//       }
//     }
//   }
// `;

// export const EXTERNAL_AUTHENTICATION_URL = gql`
//   mutation externalAuthenticationUrl(
//     $pluginId: String = "mirumee.authentication.openidconnect"
//     $input: JSONString!
//   ) {
//     externalAuthenticationUrl(pluginId: $pluginId, input: $input) {
//       authenticationData
//       errors {
//         ${accountError}
//       }
//     }
//   }
// `;

// export const OBTAIN_EXTERNAL_ACCESS_TOKEN = gql`
//   mutation externalObtainAccessTokens(
//     $pluginId: String = "mirumee.authentication.openidconnect"
//     $input: JSONString!
//   ) {
//     externalObtainAccessTokens(pluginId: $pluginId, input: $input) {
//       token
//       csrfToken
//       user {
//         ${userDetails}
//       }
//       errors {
//         ${accountError}
//       }
//     }
//   }
// `;

// export const EXTERNAL_REFRESH = gql`
//   mutation externalRefresh(
//     $pluginId: String = "mirumee.authentication.openidconnect"
//     $input: JSONString!
//   ) {
//     externalRefresh(pluginId: $pluginId, input: $input) {
//       token
//       csrfToken
//       errors {
//         ${accountError}
//       }
//     }
//   }
// `;

// export const EXTERNAL_REFRESH_WITH_USER = gql`
//   mutation externalRefreshWithUser(
//     $pluginId: String = "mirumee.authentication.openidconnect"
//     $input: JSONString!
//   ) {
//     externalRefresh(pluginId: $pluginId, input: $input) {
//       token
//       csrfToken
//       user {
//         ${userDetails}
//       }
//       errors {
//         ${accountError}
//       }
//     }
//   }
// `;

// export const EXTERNAL_VERIFY_TOKEN = gql`
//   mutation externalVerify(
//     $pluginId: String = "mirumee.authentication.openidconnect"
//     $input: JSONString!
//   ) {
//     externalVerify(pluginId: $pluginId, input: $input) {
//       isValid
//       verifyData
//       user {
//         ${userDetails}
//         userPermissions {
//           code
//           name
//         }
//       }
//       errors {
//         ${accountError}
//       }
//     }
//   }
// `;

// export const EXTERNAL_LOGOUT = gql`
//   mutation externalLogout(
//     $pluginId: String = "mirumee.authentication.openidconnect"
//     $input: JSONString!
//   ) {
//     externalLogout(pluginId: $pluginId, input: $input) {
//       logoutData
//       errors {
//         ${accountError}
//       }
//     }
//   }
// `;

// export const CHANGE_USER_PASSWORD = gql`
//   mutation passwordChange($newPassword: String!, $oldPassword: String!) {
//     passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {
//       errors {
//         ${accountError}
//       }
//     }
//   }
// `;

// export const REQUEST_PASSWORD_RESET = gql`
//   mutation requestPasswordReset(
//     $email: String!
//     $redirectUrl: String!
//     $channel: String!
//   ) {
//     requestPasswordReset(
//       email: $email
//       redirectUrl: $redirectUrl
//       channel: $channel
//     ) {
//       errors {
//         ${accountError}
//       }
//     }
//   }
// `;

// export const SET_PASSWORD = gql`
//   mutation setPassword($token: String!, $email: String!, $password: String!) {
//     setPassword(token: $token, email: $email, password: $password) {
//       errors {
//         ${accountError}
//       }
//       token
//       csrfToken
//       user {
//         ${userDetails}
//       }
//     }
//   }
// `;

// export const REQUEST_EMAIL_CHANGE = gql`
//   mutation requestEmailChange(
//     $channel: String!
//     $newEmail: String!
//     $password: String!
//     $redirectUrl: String!
//   ) {
//     requestEmailChange(
//       channel: $channel
//       newEmail: $newEmail
//       password: $password
//       redirectUrl: $redirectUrl
//     ) {
//       errors {
//         ${accountError}
//       }
//       user {
//         ${userDetails}
//       }
//     }
//   }
// `;

// export const CONFIRM_EMAIL_CHANGE = gql`
//   mutation confirmEmailChange($channel: String!, $token: String!) {
//     confirmEmailChange(channel: $channel, token: $token) {
//       errors {
//         ${accountError}
//       }
//       user {
//         ${userDetails}
//       }
//     }
//   }
// `;

// export const REQUEST_DELETE_ACCOUNT = gql`
//   mutation accountRequestDeletion($channel: String!, $redirectUrl: String!) {
//     accountRequestDeletion(channel: $channel, redirectUrl: $redirectUrl) {
//       errors {
//         ${accountError}
//       }
//     }
//   }
// `;

// export const DELETE_ACCOUNT = gql`
//   mutation accountDelete($token: String!) {
//     accountDelete(token: $token) {
//       errors {
//         ${accountError}
//       }
//       user {
//         ${userDetails}
//       }
//     }
//   }
// `;

// export const UPDATE_ACCOUNT = gql`
//   mutation accountUpdate($input: AccountInput!) {
//     accountUpdate(input: $input) {
//       errors {
//         ${accountError}
//       }
//       user {
//         ${userDetails}
//       }
//     }
//   }
// `;

// export const SET_ACCOUNT_DEFAULT_ADDRESS = gql`
//   mutation setAccountDefaultAddress($id: ID!, $type: AddressTypeEnum!) {
//     accountSetDefaultAddress(id: $id, type: $type) {
//       errors {
//         ${accountError}
//       }
//       user {
//         ${userDetails}
//       }
//     }
//   }
// `;

// export const DELETE_ACCOUNT_ADDRESS = gql`
//   mutation deleteAccountAddress($addressId: ID!) {
//     accountAddressDelete(id: $addressId) {
//       errors {
//         ${accountError}
//       }
//       user {
//         ${userDetails}
//       }
//     }
//   }
// `;

// export const CREATE_ACCOUNT_ADDRESS = gql`
//   mutation createAccountAddress($input: AddressInput!) {
//     accountAddressCreate(input: $input) {
//       address {
//         ${address}
//       }
//       errors {
//         ${accountError}
//       }
//       user {
//         ${userDetails}
//       }
//     }
//   }
// `;

// export const UPDATE_ACCOUNT_ADDRESS = gql`
//   mutation updateAccountAddress($input: AddressInput!, $id: ID!) {
//     accountAddressUpdate(input: $input, id: $id) {
//       address {
//         ${address}
//       }
//       errors {
//         ${accountError}
//       }
//       user {
//         ${userDetails}
//       }
//     }
//   }
// `;

// export const CONFIRM_ACCOUNT = gql`
//   mutation accountConfirm($email: String!, $token: String!) {
//     confirmAccount(email: $email, token: $token) {
//       user {
//         ${userDetails}
//       }
//       errors {
//         ${accountError}
//       }
//     }
//   }
// `;
