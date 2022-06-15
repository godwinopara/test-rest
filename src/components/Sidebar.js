const Sidebar = ({ onClick, onSubmit, onChange }) => {
  const regions = ["Africa", "Asia", "Europe"];

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="search" name="searchbar" id="searchbar" onChange={onChange} />
        <button>submit</button>
      </form>
      <div>
        <p>Regions</p>
        <div className="regions">
          {regions.map((region, id) => {
            return (
              <button key={id} onClick={onClick}>
                {region}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

