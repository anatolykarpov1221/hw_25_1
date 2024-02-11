
import React from 'react';

type Props = {
  imageUrl: string;
};

function Image({ imageUrl }: Props)  {
  return <img src={"app/src/media/Cleopatra_-_Michelangelo.png"} alt="Изображение" />;
};

export default Image;

