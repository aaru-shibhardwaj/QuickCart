
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 4rem 0;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.lightGray};
    display: flex;
    flex-direction: column;
    align-items: center;

    .common-heading {
      font-family: "Kanit", system-ui;
      color:#0f078c;
      font-weight: 700;
      font-size: 4.5rem;
      margin-bottom: 2rem;
    }

    .container {
      max-width: 60rem;
      margin: auto;
      padding: 2rem;
      background-color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.border};
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;

      .map-container {
        margin-bottom: 2rem;
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        input[type="text"],
        input[type="email"],
        textarea {
          padding: 1rem;
          border: 1px solid ${({ theme }) => theme.colors.border};
          border-radius: 5px;
          width: 100%;
          font-family: "Kanit", system-ui;
        }

        input[type="submit"] {
         background-color:rgb(12 63 143 / 52%);
          color: #480b0b;
          padding: 1rem 2rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: "Kanit", system-ui;
         

          &:hover {
            background-color: ${({ theme }) => theme.colors.primaryDark};
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Get in Touch !</h2>

      <div className="container">
        <div className="map-container">
          <iframe
            title="Phoenix Marketcity Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="contact-form">
          <form
            action="https://formspree.io/f/xeqdgwnq"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="Name"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"></textarea>

            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;