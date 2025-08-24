import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@heroui/modal";

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
                        <li className="mb-2"><a className="text-[#006732] hover:text-[#004e13] underline" href={website}>Сайт</a></li>
                        <li className="mb-2"><a className="text-[#006732] hover:text-[#004e13] underline" href={yandex}>Яндекс</a></li>
                        <li className="mb-2"><a className="text-[#006732] hover:text-[#004e13] underline" href={doublegis}>2ГИС</a></li>
                    </ul>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
