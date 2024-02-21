export function getPageConfigurationByPath(path: string) {
  return {
    data: {
      blocks: [
        {
          id: "1",
          __typename: "pet",
          photoUrls: [
            "https://fastly.picsum.photos/id/576/800/600.jpg?hmac=xv7Uvod_fmH04atRx8fG5oRBP9Y_2-t1ePov42cnb3I",
          ],
          name: "Rex",
        },
        {
          id: "2",
          __typename: "pet",
          photoUrls: [
            "https://fastly.picsum.photos/id/576/800/600.jpg?hmac=xv7Uvod_fmH04atRx8fG5oRBP9Y_2-t1ePov42cnb3I",
          ],
          name: "Another pet",
        },
      ],
    },
  };
}
