export const accountError = `
    code
    field
    message
    otpVerified
    mobile
    email
`;

export const address = `
    id
    firstName
    lastName
    companyName
    streetAddress1
    streetAddress2
    city
    cityArea
    postalCode
    country {
      code
      country
    }
    countryArea
    phone
    isDefaultBillingAddress
    isDefaultShippingAddress
`;

export const userBase = `
    id
    email
    firstName
    lastName
    isStaff
`;

export const userDetails = `
    ${userBase}
    metadata {
      key
      value
    }
    defaultShippingAddress {
      ${address}
    }
    defaultBillingAddress {
      ${address}
    }
    addresses {
      ${address}
    }
`;
