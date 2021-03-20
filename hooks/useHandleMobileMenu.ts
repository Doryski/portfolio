import { useEffect } from 'react'

// Usage:
// useHandleMobileMenu(modalRef, closeModal)
// useHandleMobileMenu(modalRef, () => setIsModalOpen(false))
export default function useHandleMobileMenu(
    refs: React.RefObject<any>[],
    closeHandler: VoidFunction
): void {
    const listener = (event: MouseEvent) => {
        for (let ref of refs) {
            if (!!ref.current && ref.current.contains(event.target))
                return
        }
        closeHandler()
    }
    useEffect(() => {
        document.addEventListener('mousedown', listener)
        return () => {
            document.removeEventListener('mousedown', listener)
        }
    })
}
