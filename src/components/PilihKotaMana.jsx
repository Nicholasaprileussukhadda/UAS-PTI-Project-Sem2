import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function PilihKota() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Pilih Kota">
      <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
    </DropdownButton>
  );
}

export default PilihKota;
