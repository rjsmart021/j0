//1. Building a Basic React Functional Component Portfolio
//Task 1: Create a Header Section
//Write a functional component named Header that includes a background image and you or a fictional character name overlaying the background image. 
import React from 'react';
import './Header.css'; // Make sure to create this CSS file

const Header = () => {
  const backgroundImage = 'https://th.bing.com/th/id/OIP.6f5ZEeT1bM05vEOyFk2a7AHaHa?w=160&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'; // Replace with your image path
  const characterName = 'MoonMagoon'; // Replace with your or a fictional character's name

  return (
    <div className="header" style={{ backgroundImage }}>
      <h1 className="character-name">{characterName}</h1>
    </div>
  );
};

export default Header;

//Task 2: Create an About Section
//Write a functional component named About that includes a brief description of yourself or a fictional character. This component should contain a heading and a paragraph.
import React from "react";
import ReactDOM from "react-dom";
import Demo from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <React.StrictMode>
        <Demo />
    </React.StrictMode>
);
const Greetings = (props) => {
    return <h1>Hello, {props.name}!</h1>;
};

// OR 
function Greetings(props) {
    return <h1>Hello, {props.name}!</h1>;
}
// Example of Calling the function with function name followed by Parentheses
function Parentheses() {
    return (<h1>
                We can call function using name of the 
                function followed by Parentheses 
            </h1>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Parentheses());
// Example of Calling the function using component call
function Comp() {
    return (<h1> As usual we can call the function using component call</h1>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Comp />);

//Task 3: Create a Contact Section
//Develop a class component named Contact that displays simple contact information such as email or a LinkedIn profile. Expected Outcome: A Contact class component successfully renders contact information, demonstrating the ability to structure and render basic content in a React class component.
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" disabled={isSubmitting} />
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};
export default ContactForm;
//Task 4: Import components into an App component
//Develop a functional component called  App that imports and displays your  Header,   About, and Contact components.
// Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Welcome to My Website</h1>
    </header>
  );
};

export default Header;

//Expected Outcome: An App functional component that successfully renders/displays all other components in an organized fashion demonstrating the ability to import and display/use components within other components.
export class myComponent extends React.Component {
render() {
    return (

      //stuff here

    );
  }
}
