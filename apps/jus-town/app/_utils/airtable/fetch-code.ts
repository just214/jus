import fs from "fs";

import { Track } from "@/_types";

import { base } from "./base";

export async function fetchCode() {
  const result: Track[] = [];
  await base("Code")
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
          thumbnail: fields["Thumbnail"]?.[0].thumbnails.large.url,
          description: fields["Description"],
          tags: fields["Tags"],
          npmLink: fields["NPM Link"],
          githubLink: fields["Github Link"],
          websiteLink: fields["Website Link"],
        } as any);
      });

      fetchNextPage();
    });

  fs.writeFile(
    "src/constants/code.json",
    JSON.stringify(result),
    function (err) {
      if (err) {
        return console.error(err);
      }
      console.info("The file was saved!");
    }
  );
}
