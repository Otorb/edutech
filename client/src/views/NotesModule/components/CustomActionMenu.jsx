// CustomActionMenu.js
import  { useState } from 'react';
import { FiMoreVertical, FiEdit, FiInfo, FiTrash } from 'react-icons/fi';
import styles from '../style/CustomActionMenu.module.css';

const CustomActionMenu = ({ row, onEdit, onDetail, onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleEdit = () => {
        onEdit(row);
        setIsOpen(false);
    };

    const handleDetail = () => {
        onDetail(row);
        setIsOpen(false);
    };

    const handleDelete = () => {
        onDelete(row);
        setIsOpen(false);
    };

    return (
        <div className={styles.menuContainer}>
            <button onClick={toggleMenu} className={styles.menuButton}>
                <FiMoreVertical />
            </button>
            {isOpen && (
                <div className={styles.menu}>
                    <button onClick={handleEdit} className={styles.menuItem}>
                        <FiEdit /> Editar
                    </button>
                    <button onClick={handleDetail} className={styles.menuItem}>
                        <FiInfo /> Detalle
                    </button>
                    <button onClick={handleDelete} className={styles.menuItem}>
                        <FiTrash /> Eliminar
                    </button>
                </div>
            )}
        </div>
    );
};

export default CustomActionMenu;

