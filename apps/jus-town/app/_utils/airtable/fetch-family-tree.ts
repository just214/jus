import fs from "fs";

import { Track } from "@/_types";

import { base } from "./base";

export async function fetchFamilyTree() {
  const result: Track[] = [];
  await base("People")
    .select({
      maxRecords: 500,
      view: "Grid view",
    })
    .eachPage((tracks, fetchNextPage) => {
      tracks.forEach((item) => {
        const { id, fields } = item;

        // eslint-disable-next-line functional/immutable-data
        result.push({
          //

          id: id,
          name: fields["Name"],
          first_name: fields["First Name"],
          last_name: fields["Last Name"],
          relation: fields["Relation"],
          birthday: fields["Birthday"],
          age: fields["Age"],
          phone_numbers: fields["Phone Numbers"],
          addresses: fields["Addresses"],
          emails: fields["Emails"],
          kids: fields["Kids"],
          spouse: fields["Spouse"],
        } as any);
      });

      fetchNextPage();
    });

  fs.writeFile(
    "src/constants/family-tree.json",
    JSON.stringify(result),
    function (err) {
      if (err) {
        return console.error(err);
      }
      console.info("The file was saved!");
    }
  );
}
