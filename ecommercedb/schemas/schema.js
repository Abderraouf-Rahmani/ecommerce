import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import heroGrid from "./heroGrid";
import product from "./product";
import topBanner from "./topBanner";
import trending from "./trending";
import footerBanner from "./footerBanner";
import category from "./category";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    heroGrid,
    product,
    topBanner,
    trending,
    footerBanner,
    category,
  ]),
});
