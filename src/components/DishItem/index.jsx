import { IoMdClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";

import { Container } from './styles';

export function DishItem({ isNew, value, onClick, ...rest }) {
    return (
        <Container isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button 
                type="button"
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <GoPlus /> : <IoMdClose />}
            </button>
        </Container>
    );
}