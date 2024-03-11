import Image from "next/image";

export default function NextImage({ src, alt, width, height }) {
  return (
    <Image
      className="object-contain"
      src={src}
      alt={alt ? alt : "pic"}
      width={width ? width : "500"}
      height={height ? height : "500"}
    />
  );
}
