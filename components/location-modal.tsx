import { Modal, useOverlayState } from "@heroui/react";

import { Link } from "@/components";

type LocationModalProps = {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    name: string;
    yandex: string;
    doublegis: string;
    website: string;
};

export function LocationModal({
    isOpen,
    onOpenChange,
    name,
    yandex,
    doublegis,
    website
}: LocationModalProps) {
    const state = useOverlayState({ isOpen, onOpenChange });

    return (
        <Modal state={state}>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog>
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>{name}</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <ul className="list-inside list-disc">
                                <li className="mb-2"><Link className="text-[#006732]" href={website}>Сайт</Link></li>
                                <li className="mb-2"><Link className="text-[#006732]" href={yandex}>Яндекс</Link></li>
                                <li className="mb-2"><Link className="text-[#006732]" href={doublegis}>2ГИС</Link></li>
                            </ul>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
