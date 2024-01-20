import clsx from 'clsx';
import Image from 'next/image';
import styles from './styles/Header.module.css';

interface HeaderProps {
  className?: string;
}

export default function Header(props: HeaderProps) {
  const {className} = props;
  const classNameFinal = clsx(styles.header, className);

  return (
    <header className={classNameFinal}>
      <figure className={styles.pinout} itemScope itemType="http://schema.org/ImageObject">
        <figcaption itemProp="description">
          Описание функций пинов (Pinout) российского микроконтроллера K1986BE92QI
        </figcaption>
        <meta itemProp="author" content="www.mdr32.ru" />
        <meta itemProp="name" content="Pinout K1986BE92QI" />
        <a href="/images/pinout.png" target="_blank">
          <Image src="/images/pinout.png" alt="Pinout K1986BE92QI" width="600" height="600" itemProp="contentUrl" />
        </a>
      </figure>
    </header>
  );
}
