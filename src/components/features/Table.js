import React from 'react';

export default function Table({data}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Term</th>
          <th>Definition</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.field1}</td>
            <td>{item.field2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
