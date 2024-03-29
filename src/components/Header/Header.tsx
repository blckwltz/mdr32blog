import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import {IMAGES_PATH} from '@/lib/constants/common';
import styles from './styles/Header.module.css';

interface HeaderProps {
  className?: string;
}

export default function Header(props: HeaderProps) {
  const {className} = props;
  const classNameFinal = clsx(styles.header, className);

  return (
    <header className={classNameFinal}>
      <Link href="/">
        <Image src={`${IMAGES_PATH}/logo.svg`} alt="Логотип MDR32" width="300" height="100" />
      </Link>
    </header>
  );
}
