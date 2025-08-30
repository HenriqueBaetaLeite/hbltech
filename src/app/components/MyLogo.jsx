import Image from "next/image";

export default function MyLogo({size = 200}) {
  return (
    <Image
          src="/hbl_tec.png"
          width={size}
          height={size}
          alt="Logo marca HBL Tecnologia"
          priority
        />
  );
}