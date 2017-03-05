import { Component, PropTypes } from 'react'

require('./../stylesheets/AddJobForm.scss');

export const AddJobForm = ({company, 
                            position, 
                            appliedDate, 
                            status, 
                            jobLink,
                            addNewJob}) => {

  let _company, _position, _appliedDate, _status, _jobLink;

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewJob({
      company: _company.value,
      appliedDate: _appliedDate.value,
      position: _position.value,
      status: _status.value,
      jobLink: _jobLink.value
    });
    _company.value = '';
    _appliedDate.value = '';
    _position.value = '';
    _status.value = '';
    _jobLink.value = '';
  }

  return (
      <form className="add-job-form">

        <label htmlFor="company">Company</label>
        <input id="company"
               type="text"
               placeholder="Company"
               ref={input => _company = input}
        />

        <label htmlFor="position">Position</label>
        <input id="position"
               type="text"
               placeholder="Position"
               ref={input => _position = input}
        />

        <label htmlFor="appliedDate">Applied Date</label>
        <input id="appliedDate"
               type="date"
               placeholder="mm/dd/yyyy"
               ref={input => _appliedDate = input}
        />

        <label htmlFor="status">Current Status</label>
        <input id="status"
               type="text"
               placeholder="Current Status"
               ref={input => _status = input}
        />

        <label htmlFor="jobLink">Job Link</label>
        <input id="jobLink"
               type="text"
               placeholder="Career page"
               ref={input => _jobLink = input}
        />

        <button onClick={handleSubmit}>Add to Application Reminder</button>
      </form>
  );

}



AddJobForm.defaultProps = {
  company: 'Alibaba',
  position: 'Front-End Developer',
  appliedDate: '2017-03-04',
  status: 'replied',
  jobLink: 'https://campus.alibaba.com/traineePositions.htm?refno=11762'
}

AddJobForm.propTypes = {
  company: PropTypes.string.isRequired,
  appliedDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  jobLink: PropTypes.string.isRequired
}