import React from "react";
import propTypes from "prop-types";

import {
  InformationBasics,
  Image,
  Description,
  Links,
  Link,
  LinkButton,
  LinksTitle,
} from "./styles";

const Basics = ({ item, element }) => {
  const { name, description, thumbnail, urls, title } = item;
  return (
    <InformationBasics>
      <Image src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      <Description>
        {description ||
          `Sorry, but no description avaiable for ${name || title}`}
      </Description>
      <Links>
        <LinksTitle>{`You can get more detailed info about this ${element} here`}</LinksTitle>
        {urls.map((url) => (
          <Link key={url.type} href={url.url} target="_blank">
            <LinkButton variant="contained" color="error">
              {url.type}
            </LinkButton>
          </Link>
        ))}
      </Links>
    </InformationBasics>
  );
};

export default Basics;

Basics.propTypes = {
  item: propTypes.object,
};
