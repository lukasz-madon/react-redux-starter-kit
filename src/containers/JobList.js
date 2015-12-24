import React from 'react'

import { Glyphicon, Input, DropdownButton, MenuItem, Row, Col, ButtonGroup } from 'react-bootstrap'

export default class JobList extends React.Component {
  render () {
    const searchGlyphicon = <Glyphicon glyph='search' />
    return (
    <div>
      <h3>All Jobs</h3>
      <Input type='text' addonAfter={searchGlyphicon} />
      <Row>
        <Col xs={5}>
          <Input type='select'>
            <option value=''>All Departments</option>
            <option value='Eng'>Eng</option>
            <option value='Engineering, QA'>Engineering, QA</option>
          </Input>
        </Col>
        <Col xs={5}>
          <Input type='select'>
            <option value=''>Location</option>
            <option value='Eng'>Eng</option>
            <option value='Engineering, QA'>Engineering, QA</option>
          </Input>
        </Col>
        <Col xs={2}>
          <ButtonGroup vertical block>
            <DropdownButton title='Sort By' id='sortByDropdown'>
              <MenuItem eventKey='1'>Date Added</MenuItem>
              <MenuItem eventKey='2'>Job Title</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
    )
  }
}
