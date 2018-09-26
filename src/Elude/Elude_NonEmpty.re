/**
 * NonEmpty has moved to its own project: bs-nonempty. The API changes are
 * minimal from Elude's old NonEmpty
 */

include NonEmptyList;

let fromList: list('a) => option(t('a)) = NonEmptyList.fromT;
let toList: t('a) => list('a) = NonEmptyList.toT;
