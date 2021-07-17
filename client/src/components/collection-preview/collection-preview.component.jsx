import React from "react";
import { withRouter } from "react-router";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items.map(
        (item, idx) => idx < 4 && <CollectionItem key={item.id} item={item} />
      )}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
