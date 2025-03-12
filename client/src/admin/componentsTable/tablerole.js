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
              {data.tableData.map((row, rowIndex) => (
                <tr className={`table-row`} key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>
                      <div className="cellContainer">
                        {cell}
                      </div>
                    </td>
                  ))}
                  {/* Hiển thị các icon trong cột "Action" */}
                  {data.icon && data.icon[rowIndex] && (
                    <td>
                      <div className="button-container">
                        {data.icon[rowIndex].map((icon, iconIndex) => (
                          <span key={iconIndex} className="icon-button">
                            {icon}
                          </span>
                        ))}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Table;
  