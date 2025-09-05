import React from 'react';
import './CountryTable.css'; // for styles

const countryData = [
  {
    id: 1,
    flag: 'https://preview.colorlib.com/theme/expo/assets/img/elements/f1.jpg',
    name: 'Canada',
    visits: 645032,
    percentage: 80,
    color: '#4f5ef7',
  },
  {
    id: 2,
    flag: 'https://preview.colorlib.com/theme/expo/assets/img/elements/f2.jpg',
    name: 'Canada',
    visits: 645032,
    percentage: 20,
    color: '#ff4f81',
  },
  {
    id: 3,
    flag: 'https://preview.colorlib.com/theme/expo/assets/img/elements/f3.jpg',
    name: 'Canada',
    visits: 645032,
    percentage: 60,
    color: '#ffa055',
  },
  {
    id: 4,
    flag: 'https://preview.colorlib.com/theme/expo/assets/img/elements/f4.jpg',
    name: 'Canada',
    visits: 645032,
    percentage: 55,
    color: '#63e6be',
  },
  {
    id: 5,
    flag: 'https://preview.colorlib.com/theme/expo/assets/img/elements/f5.jpg',
    name: 'Canada',
    visits: 645032,
    percentage: 50,
    color: '#63e6be',
  },
  {
    id: 6,
    flag: 'https://preview.colorlib.com/theme/expo/assets/img/elements/f6.jpg',
    name: 'Canada',
    visits: 645032,
    percentage: 75,
    color: '#4f5ef7',
  },
  {
    id: 7,
    flag: 'https://preview.colorlib.com/theme/expo/assets/img/elements/f7.jpg',
    name: 'Canada',
    visits: 645032,
    percentage: 45,
    color: '#b197fc',
  },
  {
    id: 8,
    flag: 'https://preview.colorlib.com/theme/expo/assets/img/elements/f8.jpg',
    name: 'Canada',
    visits: 645032,
    percentage: 25,
    color: '#ff4f81',
  },
];

const CountryTable = () => {
  return (
    <>
    
    <div className='container mt-5'>
        <div className='row'>
            <div className='element-box col-md-12 mt-5'> 
                <h3>Table</h3>
            </div>
         <div className='col-md-12 mt-5'>

              <div className="table-container " id="table">
      <table className="styled-table p-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Countries</th>
            <th>Visits</th>
            <th>Percentages</th>
          </tr>
        </thead>
        <tbody>
          {countryData.map((item, index) => (
            <tr key={item.id}>
              <td>0{item.id}</td>
              <td className="country-cell">
                <img src={item.flag} alt="flag" className="flag" />
                {item.name}
              </td>
              <td>{item.visits}</td>
              <td>
                <div className="progress-bar-wrapper">
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


        </div>   

        </div>

    </div>
    
    </>
  );
};

export default CountryTable;
