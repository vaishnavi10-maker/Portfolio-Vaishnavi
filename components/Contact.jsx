import { useState , useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs
      .sendForm(

        "service_sf2powl",
        "template_mugt2jc",
        formRef.current,
        "HbGpMkgUcGlkDycBg"
      )
      .then(
        ()=>{
          alert("Message sent Successfully!");
          setFormData({ name:"",email:"",message:""});
        },
        (error)=>{
          alert("Failed to send message");
          console.error(error);
        }
      );
  };
   

 
  return (
    <div className="max-w-7xl mx-auto px-10 py-20 rounded-xl shadow" id="contact">
      <h2 className="text-2xl font-semibold mb-16 text-amber-50">
        Contact Me
      </h2>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-[#480ebc] text-amber-50 px-4 py-2 focus:outline-none focus:ring-4 focus:ring-[#480ebc] "
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-[#480ebc] text-amber-50 px-4 py-2 focus:outline-none focus:ring-4 focus:ring-[#480ebc] "
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-[#480ebc] text-amber-50 px-4 py-2 focus:outline-none focus:ring-4 focus:ring-[#480ebc] "
        />

        <button
          type="submit"
          className="w-full rounded-md bg-[#480ebc] px-4 py-2 text-white font-medium hover:bg-[#480ebc] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
