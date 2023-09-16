import fs from "fs";

import { Video } from "types";

import { base } from "./base";

export async function fetchVideos() {
  const result: Video[] = [];
  await base("Videos")
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
          description: fields["Description"],
          tags: fields["Tags"],
          private: fields["Private"],
        } as Video);
      });

      fetchNextPage();
    });
  fs.writeFile(
    "src/constants/videos.json",
    JSON.stringify(result),
    function (err) {
      if (err) {
        return console.error(err);
      }
      console.info("The file was saved!");
    }
  );
}
