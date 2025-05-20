import ModalImage from "react-modal-image";

export const ImageWithZoom = ({ src, alt }) => {
  return (
    <article>
      <ModalImage
        small={src}
        large={src}
        alt={alt}
        hideDownload={true}
        hideZoom={false}
      />
    </article>
  );
};
