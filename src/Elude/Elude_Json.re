let decode = (err, decoder, v) => decoder(v) |> Elude_Result.fromOption(err);

let decodeString = decode("Expected JSON to be a String", Js.Json.decodeString);
let decodeFloat = decode("Expected JSON to be a Float", Js.Json.decodeNumber);
let decodeObject = decode("Expected JSON to be a Object", Js.Json.decodeObject);
let decodeArray = decode("Expected JSON to be an Array", Js.Json.decodeArray);
let decodeArrayOfObject = v =>
  Elude_Result.flatMap(Elude_Array.traverseResult(decodeObject), decodeArray(v));


/*
  TODO: how great would it be to have a real decoding library here?
    - decode records (with decoders for each field)
    - decode values inside of arrays
    - collect all errors
*/
