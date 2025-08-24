import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@heroui/modal";

import { Link } from "@/components";

type LocationModalProps = {
    isOpen: boolean;
    onOpenChange: () => void;
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
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalHeader>{name}</ModalHeader>
                <ModalBody>
                    <ul className="list-disc list-inside">
                        <li className="mb-2"><Link className="text-[#006732] hover:text-[#004e13]" href={website}>Сайт</Link></li>
                        <li className="mb-2"><Link className="text-[#006732] hover:text-[#004e13]" href={yandex}>Яндекс</Link></li>
                        <li className="mb-2"><Link className="text-[#006732] hover:text-[#004e13]" href={doublegis}>2ГИС</Link></li>
                    </ul>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
