
const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to get in touch with us!</p>
        <p>Email: ruhidmammadzade@gmail.com</p>
        <p>Phone: 0516944256</p>
        <p>Address:  Baku, Azerbaijan</p>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
