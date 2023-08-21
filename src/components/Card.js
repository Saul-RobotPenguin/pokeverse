import React from "react";
import { css } from "@emotion/react";
import BootstrapCard from "react-bootstrap/Card";

const styles = css`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 10px;
  width: 18rem;
`;

const Card = ({ name, image }) => (
  <div css={styles}>
    {/* <h3>{name}</h3>
    <img src={image} alt={name} /> */}
    <BootstrapCard style={{ width: "14rem" }}>
      <BootstrapCard.Img variant="top" src={image} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{name}</BootstrapCard.Title>
      </BootstrapCard.Body>
    </BootstrapCard>
  </div>
);

export default Card;
