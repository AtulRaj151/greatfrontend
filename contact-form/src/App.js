import logo from './logo.svg';
import './App.css';
import submitForm from './submitForm';

// Building forms is a common task in Front End. In this exercise, we will build a basic "Contact Us" form, commonly seen on marketing websites for visitors to ask questions or provide feedback.

// Requirements
// The form should contain the following elements:
// Name field.
// Email field.
// Message field. Since the message can be long, a <textarea> will be more suitable.
// Submit button
// Contains the text "Send".
// Clicking on the submit button submits the form.
// The form and submission should be implemented entirely in HTML. Do not use any JavaScript or framework-specific features for this question.
// There is no need to do any client-side validation on the fields. Validation will be done on the server side.
// Submission API
// Upon submission, POST the form data to https://www.greatfrontend.com/api/questions/contact-form with the following fields in the request body: name, email, message.

// If all the form fields are correctly filled up, you will see an alert containing a success message. Congratulations!

// Notes
// You do not need JavaScript for this question, the focus is on HTML form validation and submission.

function App() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      style = {{ display: 'flex', flexDirection: 'column', justifyContent: 'evenly-spaced'}}
      onSubmit={submitForm}
      method="POST"
      action="https://www.greatfrontend.com/api/questions/contact-form"
      >

      <input type="text" id="name" name="name" placeholder="Name.." required/>
      <input type="text" id="email" name='email' placeholder="Email.." required/>
      <textarea type="textarea" placeholder="enter your comments.." name='message' required/>
      <button style={{width: '20%'}} id="message">Send</button>
    </form>
  );
}

// added name attributes

export default App;
