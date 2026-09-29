import type { ModalProps } from '../../types'

export function Modal({ title, closeLabel, children, onClose }: ModalProps) {
  return <section role="dialog" aria-modal="true" aria-labelledby="modal-title" className="modal">
    <button type="button" aria-label={closeLabel} onClick={onClose}>×</button>
    <h2 id="modal-title">{title}</h2>
    {children}
  </section>
}
