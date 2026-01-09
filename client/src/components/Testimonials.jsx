import pexels1 from "../assests/pexels-brett-sayles-2881232.svg";
import pexels2 from "../assests/pexels-brett-sayles-2881232-1.svg";
import pexels3 from "../assests/pexels-brett-sayles-2881232-2.svg";
import pexels4 from "../assests/pexels-brett-sayles-2881232-3.svg";
import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Jacob William",
      role: "Selling Agents",
      image: pexels1,
      text: "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte"
    },
    {
      id: 2,
      name: "Kelian Anderson",
      role: "Selling Agents",
      image: pexels2,
      text: "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte"
    },
    {
      id: 3,
      name: "Adam Joseph",
      role: "Selling Agents",
      image: pexels3,
      text: "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte"
    },
    {
      id: 4,
      name: "James Carter",
      role: "Selling Agents",
      image: pexels4,
      text: "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Testimonial</span>
          <h2>Clients Feedback</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
