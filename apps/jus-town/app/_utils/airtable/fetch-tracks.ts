import fs from "fs";

import { Track } from "@/_types";

import { base } from "./base";

export async function fetchTracks() {
  const result: Track[] = [];
  await base("Tracks")
    .select({
      maxRecords: 500,
      view: "Grid view",
    })
    .eachPage((tracks, fetchNextPage) => {
      tracks.forEach((item) => {
        const { id, fields } = item;

        // eslint-disable-next-line functional/immutable-data
        result.push({
          id,
          title: fields["Title"],
          link: fields["Link"],
          artists: fields["Artists"],
          trackNumber: fields["Track Number"],
          description: fields["Description"],
          tags: fields["Tags"],
          album: {
            title: fields["Album Title"],
            cover_large: fields["Album Cover"]?.[0].thumbnails.large.url,
            cover_small: fields["Album Cover"]?.[0].thumbnails.small.url,
            description: fields["Album Description"],
            tags: fields["Album Tags"],
          },
        } as any);
      });

      fetchNextPage();
    });

  const sortOrder = [
    "My Tracks",
    "OKC",
    "GB & J",
    "Lewisville",
    "Demo EP",
    "Live At The Door",
  ];

  // eslint-disable-next-line functional/immutable-data
  const formattedResult = result.sort((a, b) => {
    const groupIndexA = sortOrder.indexOf(a.album.title);
    const groupIndexB = sortOrder.indexOf(b.album.title);
    return groupIndexA - groupIndexB;
  });

  fs.writeFile(
    "src/constants/tracks.json",
    JSON.stringify(formattedResult),
    function (err) {
      if (err) {
        return console.error(err);
      }
      console.info("The file was saved!");
    }
  );
}
