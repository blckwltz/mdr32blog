import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/Section/Section';
import type PostData from '@/lib/types/PostData';
import styles from './styles/MainPage.module.css';

interface MainPageProps {
  posts: PostData[];
}

export default function MainPage(props: MainPageProps) {
  const {posts} = props;

  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>
        Микроконтроллер <strong>K1986BE92QI</strong>
      </h1>
      <figure className={styles.pinout} itemScope itemType="http://schema.org/ImageObject">
        <figcaption itemProp="description">
          Описание функций пинов (Pinout) российского микроконтроллера K1986BE92QI
        </figcaption>
        <meta itemProp="author" content="www.mdr32.ru" />
        <meta itemProp="name" content="Pinout K1986BE92QI" />
        <a href="/images/pinout.png" target="_blank">
          <Image
            src="/images/pinout.png"
            alt="Pinout K1986BE92QI"
            width="600"
            height="600"
            priority={true}
            itemProp="contentUrl"
          />
        </a>
      </figure>
      <Section className={styles.section}>
        <h2>Описание и&nbsp;параметры</h2>
        <p>
          <strong>
            Серия 32-разрядных микроконтроллеров построенных на&nbsp;ядре ARM Cortex-M3, содержащих 128&nbsp;КБ памяти
            программ Flash-типа и&nbsp;32&nbsp;КБ ОЗУ.
          </strong>
        </p>
        <p>Микроконтроллеры работают на&nbsp;тактовой частоте до&nbsp;80&nbsp;МГц.</p>
        <p>
          Периферия микроконтроллера включает контроллер USB интерфейса, интерфейсы UART, SPI и&nbsp;I2C, контроллер
          внешней системной шины, что позволяет работать с&nbsp;внешними микросхемами статического ОЗУ и&nbsp;ПЗУ, NAND
          Flash-памятью и&nbsp;другими внешними устройствами.
        </p>
        <p>
          Микроконтроллеры содержат различные таймеры, блоки АЦП и&nbsp;ЦАП, компаратор с&nbsp;тремя входами
          и&nbsp;внутренней шкалой напряжений.
        </p>
        <p>
          Архитектура системы памяти за&nbsp;счет матрицы системных шин позволяет минимизировать возможные конфликты при
          работе системы и&nbsp;повысить общую производительность.
        </p>
        <p>
          Контроллер DMA позволяет ускорить обмен информацией между ОЗУ и&nbsp;периферией без участия процессорного
          ядра.
        </p>
      </Section>
      <Section className={styles.section}>
        <h2>Характеристики</h2>
        <table className={styles.characteristics}>
          <tbody>
            <tr>
              <td>
                <span>CAN</span>
              </td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <span>fc [МГц]</span>
              </td>
              <td>80</td>
            </tr>
            <tr>
              <td>
                <span>I2C</span>
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <span>SPI</span>
              </td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <span>tmax [С]</span>
              </td>
              <td>85</td>
            </tr>
            <tr>
              <td>
                <span>tmin [С]</span>
              </td>
              <td>-40</td>
            </tr>
            <tr>
              <td>
                <span>UART</span>
              </td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <span>Ucc_max [В]</span>
              </td>
              <td>3.6</td>
            </tr>
            <tr>
              <td>
                <span>Ucc_min [В]</span>
              </td>
              <td>2.2</td>
            </tr>
            <tr>
              <td>
                <span>USB</span>
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <span>USER IO</span>
              </td>
              <td>43</td>
            </tr>
            <tr>
              <td>
                <span>АЦП [каналов]</span>
              </td>
              <td>8</td>
            </tr>
            <tr>
              <td>
                <span>АЦП [разрядов]</span>
              </td>
              <td>12</td>
            </tr>
            <tr>
              <td>
                <span>Внешняя шина</span>
              </td>
              <td>8</td>
            </tr>
            <tr>
              <td>
                <span>Выводов</span>
              </td>
              <td>64</td>
            </tr>
            <tr>
              <td>
                <span>Компаратор</span>
              </td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <span>Компаратор [входов]</span>
              </td>
              <td>—</td>
            </tr>
            <tr>
              <td>
                <span>ОЗУ [КБайт]</span>
              </td>
              <td>32</td>
            </tr>
            <tr>
              <td>
                <span>ПЗУ [КБайт]</span>
              </td>
              <td>128</td>
            </tr>
            <tr>
              <td>
                <span>Пластик</span>
              </td>
              <td>LQFP64</td>
            </tr>
            <tr>
              <td>
                <span>Таймеры</span>
              </td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <span>ЦАП</span>
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <span>ЦАП [каналов]</span>
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <span>ЦАП [разрядов]</span>
              </td>
              <td>12</td>
            </tr>
            <tr>
              <td>
                <span>Корпус</span>
              </td>
              <td>LQFP64</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section className={styles.section}>
        <h2>Статьи</h2>
        <ul>
          {posts.map((post) => {
            const {id, date, title} = post;

            return (
              <li key={id}>
                {date}&nbsp;&mdash; <Link href={`/posts/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </Section>
      <Section className={styles.section}>
        <h2>Ресурсы</h2>
        <ul>
          <li>
            <a
              href="https://ic.milandr.ru/products/mikrokontrollery_i_protsessory/32_razryadnye_mikrokontrollery/k1986ve92qi/"
              target="_blank"
            >
              https://ic.milandr.ru/
            </a>
            &nbsp;&mdash; MDR32&nbsp;MCU-репозиторий
          </li>
          <li>
            <a href="https://github.com/mdr32/MCU" target="_blank">
              https://github.com/mdr32/MCU
            </a>
            &nbsp;&mdash; MDR32&nbsp;MCU-репозиторий
          </li>
          <li>
            <a href="https://github.com/mdr32/examples" target="_blank">
              https://github.com/mdr32/examples
            </a>
            &nbsp;&mdash; MDR32 примеры работы с&nbsp;микроконтроллером
          </li>
        </ul>
      </Section>
    </main>
  );
}
