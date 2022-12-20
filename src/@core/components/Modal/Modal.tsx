import {useEffect} from 'react';
import {BiX} from 'react-icons/bi';
import {classNames} from '@/utils/classNames';
import {Container} from './styles';

export default function Modal({
  isOpen,
  toggle,
  children,
  size = 'md',
  headerIcon: HeaderIcon,
  title,
}: {
  title?: string;
  headerIcon?: JSX.Element;
  isOpen?: boolean;
  toggle?: () => void;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) {
  if (!['sm', 'md', 'lg', 'xl'].includes(size)) {
    size = 'md';
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <Container
      className={classNames({
        show: isOpen,
      })}
      size={size}
    >
      <div className="modal__overlay" onClick={() => toggle && toggle()}></div>
      <div className="modal__content">
        <header className="content__header">
          {HeaderIcon && <div className="header__icon">{HeaderIcon}</div>}
          <span>{title}</span>
          <BiX size={35} onClick={() => toggle && toggle()} />
        </header>
        {children}
      </div>
    </Container>
  );
}
