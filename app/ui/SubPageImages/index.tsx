import { useMobileDetection } from "@/app/lib/hooks/useMobileDetection";
import Image from "next/image";
import styles from "./index.module.css";

type SubPageImagesProps = {
  description: string;
  imagePaths: string[];
};

const SubPageImages = ({ description, imagePaths }: SubPageImagesProps) => {
  const isMobile = useMobileDetection();
  const desktopOrMobileStyles = isMobile ? styles.mobile : styles.desktop;

  return (
    <div className={`${styles.sub_page_images}`}>
      {imagePaths.map((imagePath, index) => (
        <Image
          key={`sub-page-image-${index}`}
          className={`${styles.sub_page_image} ${desktopOrMobileStyles}`}
          src={imagePath}
          alt={description}
          width={1600}
          height={900}
        />
      ))}
    </div>
  );
};

export default SubPageImages;
