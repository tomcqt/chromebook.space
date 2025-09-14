// https://chromiumdash.appspot.com/fetch_releases?channel=Stable&platform=Android&num=6&offset=306
// scrape for versions from chromiumdash and save to json
const url =
  "https://chromiumdash.appspot.com/fetch_releases?channel=Stable&platform=Android&num=6&offset=306";
(async () => {
  let data = await fetch(url).then((x) => x.json());
  console.log(data);
})();
