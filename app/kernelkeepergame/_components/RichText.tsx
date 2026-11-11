import { Fragment } from 'react';

/** Renderiza un texto marcando en negrita los fragmentos entre **asteriscos**. */
export default function RichText({
  text,
  strongClassName = 'font-bold text-brand-dark',
}: {
  text: string;
  strongClassName?: string;
}) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={strongClassName}>
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
