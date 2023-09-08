import React from 'react';
import Table from '../features/Table';
import tableData from '../data/TableData';

//CSS
import '../Navbar.css'
import '../features/Table.css'

import Navbar from '../Navbar';

export default function GlossaryPage() {
  const data = tableData

  return (
    <div>
      <Navbar name="Glossary" />
      <div className='table-container'>
        <Table data={data} />
      </div>
    </div>
  );
}
