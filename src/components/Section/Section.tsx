import clsx from 'clsx';
import type {PropsWithChildren} from 'react';
import styles from './styles/Section.module.css';

interface SectionProps {
  className?: string;
}

export default function Section(props: PropsWithChildren<SectionProps>) {
  const {className, children} = props;
  const classNameFinal = clsx(styles.section, className);

  return <section className={classNameFinal}>{children}</section>;
}
