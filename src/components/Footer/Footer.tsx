import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import {IMAGES_PATH} from '@/lib/constants/common';
import styles from './styles/Footer.module.css';

interface FooterProps {
  className?: string;
}

export default function Footer(props: FooterProps) {
  const {className} = props;
  const classNameFinal = clsx(styles.footer, className);

  return (
    <footer className={classNameFinal}>
      <Link href="/">
        <Image src={`${IMAGES_PATH}/logo.svg`} alt="Логотип MDR32" width="300" height="100" />
      </Link>
    </footer>
  );
}
