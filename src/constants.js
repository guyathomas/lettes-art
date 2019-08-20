export const SHRINK_THRESHOLD = 30;
export const AVAILABILITY = {
  ALL: 0,
  SOLD: 1,
  FOR_SALE: 2,
};

export const EMAIL = {
    SUBJECT: "I'm interested in buying some artwork",
    CREATE_BODY: url => `Hi Collette,%0A%0AI'm interested in buying this painting ${ url }`,
}