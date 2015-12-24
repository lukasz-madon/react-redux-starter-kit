import React from 'react'
import { reduxForm } from 'redux-form'
import { Input } from 'react-bootstrap'

// this is just temp solution
const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const validateStyle = field => {
  if (field.touched && field.error) return 'error'
  else if (field.touched && !field.error) return 'success'
  return ''
}

// This syntax needs babel plugin
// @connectReduxForm('generalRefer', ['firstName', 'lastName', 'email'], validate)
class GeneralReferForm extends React.Component {
  static propTypes = {
    fields: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    submitting: React.PropTypes.bool.isRequired
  }

  render () {
    const {fields: {firstName, lastName, email}, handleSubmit} = this.props
    return (
    <form className='form-horizontal' onSubmit={handleSubmit}>
      <Input type='text' label='Resume *' labelClassName='col-xs-3' wrapperClassName='col-xs-9' />
      <Input type='text' label='First Name' labelClassName='col-xs-3' wrapperClassName='col-xs-9' {...firstName} />
      <Input type='text' label='Last Name' labelClassName='col-xs-3' wrapperClassName='col-xs-9' {...lastName} />
      <Input type='text' hasFeedback label='Email' labelClassName='col-xs-3' wrapperClassName='col-xs-9'
       {...email} bsStyle={validateStyle(email)} />
      <Input type='select' label='Which derpartment are they most suited to? *'
        labelClassName='col-xs-3' wrapperClassName='col-xs-9'>
        <option value=''>All Departments</option>
        <option value='Eng'>Eng</option>
        <option value='Engineering, QA'>Engineering, QA</option>
        <option value='HR'>HR</option>
        <option value='Marketing'>Marketing</option>
        <option value='Sales'>Sales</option>
        <option value='Technology'>Technology</option>
      </Input>
      <Input type='textarea' label='Why did you refer this person? *' labelClassName='col-xs-3' wrapperClassName='col-xs-9' />
    </form>
    )
  }
}

export default reduxForm({
  form: 'generalRefer',
  fields: ['firstName', 'lastName', 'email'],
  validate
})(GeneralReferForm)
