interface ClubImagesProps {
  mainImage: {
    url: string;
    alt: string;
  };
}

export function ClubImages({ mainImage }: ClubImagesProps) {
  return (
    <img
      src={mainImage.url}
      alt={mainImage.alt}
      className="aspect-[4/3] h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  );
}