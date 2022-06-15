const Table = ({ data }) => {
  return (
    <table border="1" style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th>Country</th>
          <th>Capital</th>
          <th>Population</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        {data.map((countryDetails, id) => {
          return (
            <tr key={id}>
              <td>{countryDetails.name}</td>
              <td>{countryDetails.capital}</td>
              <td>{countryDetails.population}</td>
              <td>{countryDetails.region}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

