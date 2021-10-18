// Used to validate Pet related responses
export const petExampleValue = {
  id: 10,
  name: "doggie",
  category: {
    id: 1,
    name: "Dogs",
  },
  photoUrls: ["string"],
  tags: [
    {
      id: 0,
      name: "string",
    },
  ],
  status: "available",
};

// Used for Pet POST AND DELETE request tests
export const myPetExample = {
  id: 100,
  name: "dodo",
  category: {
    id: 1,
    name: "Birds",
  },
  photoUrls: ["string"],
  tags: [
    {
      id: 99,
      name: "string",
    },
  ],
  status: "available",
};
