/**
 * Replace all occurrences of `toReplace` with `replaceWith`
 */
let replaceAll = (~toReplace: string, ~replaceWith: string, src) =>
  Js.String.split(toReplace, src)
  |> Belt.List.fromArray
  |> String.concat(replaceWith);

/**
 * Removes all occurrences of `toRemove` in `src`
 */
let remove = (~toRemove: string, src) =>
  replaceAll(~toReplace=toRemove, ~replaceWith="", src);
