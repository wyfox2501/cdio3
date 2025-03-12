import ToDoListTrigger from "./todolisttrigger";

const Table = ({ data }) => {
    return (
        <div className="table-container">
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
                        {data.tableData.map((row, index) => (
                            <tr className={`table-row`}key={index}>
                                {row?.map((cell, cellIndex) => (
                                    <td key={cellIndex}>
                                            <div className="cellContainer">
                                                {cell}
                                            </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;