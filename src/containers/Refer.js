import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Glyphicon } from 'react-bootstrap'

import GeneralReferForm from 'components/GeneralReferForm'
import { actions as referActions } from '../redux/modules/generalRefer'

const mapStateToProps = (state) => ({
  generalRefer: state.generalRefer
})
export default class Refer extends React.Component {

  static propTypes = {
    generalRefer: React.PropTypes.object.isRequired,
    open: React.PropTypes.func.isRequired
  }

  render () {
    return (
    <div>
      <h3>Already know who to refer?</h3>
      <Button bsStyle='primary' bsSize='large'>CLICK HERE</Button>
      <h3>No job in mind for your candidate?</h3>
      <Button bsStyle='warning' onClick={() => this.props.open()}>CLICK HERE TO STILL REFER THEM</Button>
      <p>
        You can refer someone to the company and recommend a department or location for them to work in.
        You will still get credited for the referral if they are placed.
      </p>
      <h3>Referral Leaderboard</h3>
      <div className='user-lb'>
        <h4>Users</h4>
        <ul className='list-unstyled'>
          <li>
          <div className='user-details'>
            <p>
              <Glyphicon glyph='star' />
              <strong>Jane Doe </strong><br />
              <span>New York, New York, United States</span>
            </p>
          </div>
          </li>
        </ul>
      </div>
      <Modal show={this.props.generalRefer.isOpen} onHide={() => this.props.open()}>
        <Modal.Header closeButton>
          <Modal.Title>Make a Referral</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GeneralReferForm />
        </Modal.Body>
        <Modal.Footer>
          <p className='small text-left'>
            <Glyphicon glyph='info-sign'/> RolePoint will send your contact a message
             to ask them to apply to the job you referred them for
          </p>
          <Button onClick={() => this.props.open()}>Close</Button>
          <Button type='submit' bsStyle='primary'>
            SUBMIT
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
  }
}
export default connect(mapStateToProps, referActions)(Refer)

