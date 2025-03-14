import { useState } from "react";
import Tablock from "./Tablock";
import './tableuser.css'
import './../../css/tableAdmin.css'

const Table = ({ data }) => {
    const [tableData, setTableData] = useState(data.tableData);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleStatusChange = (rowIndex, cellIndex, newValue) => {
        if (cellIndex === 2 && newValue === "Khóa") {
            setSelectedRow(rowIndex);
            setShowConfirmModal(true);
        } else {
            updateCell(rowIndex, cellIndex, newValue);
        }
    };

    const updateCell = (rowIndex, cellIndex, newValue) => {
        const updatedData = tableData.map((row, index) =>
            index === rowIndex ? row.map((cell, i) => (i === cellIndex ? newValue : cell)) : row
        );
        setTableData(updatedData);
        setShowConfirmModal(false);
    };

    return (
        <div className="table-container">
            <Tablock
                show={showConfirmModal}
                onClose={() => setShowConfirmModal(false)}
                onConfirm={() => updateCell(selectedRow, 2, "Khóa")}
                message="Bạn có chắc chắn muốn khóa tài khoản này?"
            />

            <div className="backgroundBlue">
                <table className="table">
                    <thead>
                        <tr>
                            {data.tittles.map((tittle, index) => (
                                <th scope="col" className="header-cell" key={index}>
                                    {tittle}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, rowIndex) => (
                            <tr className="table-row" key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>
                                        


                                        
                                        {cellIndex === 1 ? (
                                            <div className="cellContainer">
                                                <div className="role-text">{cell}</div> 
                                                <select
                                                    className="dropdownLockRole"
                                                    value={cell}
                                                    onChange={(e) => handleStatusChange(rowIndex, cellIndex, e.target.value)}>
                                                    {['Thành viên', 'Bác sĩ', 'Admin'].map((option) => (
                                                        <option key={option} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        ) : cellIndex === 2 ? (
                                           



                                            <select
                                                className="dropdownLock"
                                                value={cell}
                                                onChange={(e) => handleStatusChange(rowIndex, cellIndex, e.target.value)}
                                            >
                                                {['Bình thường', 'Khóa', 'Tạm dừng'].map((status) => (
                                                    <option key={status} value={status}>
                                                        {status}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <div className="cellContainer">{cell}</div>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
