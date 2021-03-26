import React, { Suspense } from "react";
import imageFile from "./img_avatar.png";
const Image = React.lazy(() => import("./Image"));

function Character(props) {
  const { image, name, origin, gender, species, status } = props.character;

  return (
    <div>
      <Suspense
        fallback={
          <img
            src={imageFile}
            alt="Avatar"
            style={{ width: "100px", height: "100px" }}
          />
        }
      >
        <Image src={image} />
      </Suspense>

      <h4>{name}</h4>
      <p className="paragraph">
        From {origin.name}, identifies as {gender} of {species} race.
      </p>
      <p>Current Status: {status}</p>
    </div>
  );
}

export default Character;
