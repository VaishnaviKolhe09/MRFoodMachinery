// Contact.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    productionOutput: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if the select dropdown is choosing the default option
    if (!formData.productionOutput || formData.productionOutput === "Select Expected Target Production Output") {
      alert("Please select an expected target production output.");
      return;
    }

    // --- WEB3FORMS INTEGRATION ---
    const dataToSend = new FormData();
    dataToSend.append("access_key", "63638598-9aa2-49da-9cd5-87ec66cdf552");
    dataToSend.append("firstName", formData.firstName);
    dataToSend.append("lastName", formData.lastName);
    dataToSend.append("email", formData.email);
    dataToSend.append("companyName", formData.companyName);
    dataToSend.append("productionOutput", formData.productionOutput);
    dataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSend
      });

      const resData = await response.json();

      if (resData.success) {
        // If all fields are valid and API call passed
        setIsSubmitted(true);
        
        // Form reset
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          companyName: '',
          productionOutput: '',
          message: ''
        });

        // Automatically hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        alert("Something went wrong. Please try again.");
        console.log("Error", resData);
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
      console.log("Network Error", error);
    }
  };

  return (
    <>
      {/* --- SEO & META TAGS --- */}
      <Helmet>
        {/* Standard Metadata */}
        <title>Contact Us | Request Proposal | MR Food Machinery</title>
        <meta
          name="description"
          content="Get in touch with our industrial food processing engineers. Request proposals for food machinery, extruders, and turnkey plant deployment across Maharashtra & Bihar units."
        />
        <meta
          name="keywords"
          content="contact MR Food Machinery, food machinery procurement, industrial plant quote, VS Engineering Bhosari, Deva Enterprises Nashik, MS Traders Thane, food plant tender"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Helmet>

      <div className="bg-[var(--background)] text-[var(--text-dark)] min-h-screen pt-12 pb-24">
        {/* --- HERO SECTION --- */}
        <section className="relative h-[45vh] flex items-center justify-center bg-[var(--secondary)] text-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80')" }}></div>
          <div className="relative z-10">
            <span className="text-[var(--primary-light)] font-black uppercase tracking-[0.3em] text-xs block mb-3">GLOBAL PROCUREMENT OFFICE</span>
            <h1 className="text-4xl md:text-6xl font-black text-[var(--text-light)] uppercase tracking-tighter italic">CONNECT WITH ENGINEERS</h1>
          </div>
        </section>

        <div className="container mx-auto px-6 mt-16 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Plant Core Address Details */}
            <div className="md:col-span-5 space-y-10">
              
              {/* COMPANY 1: VS ENGINEERING */}
              <div className="space-y-4 border-b border-[var(--border)] pb-6">
                <div>
                  <span className="text-[var(--primary)] font-black text-[10px] uppercase tracking-widest">UNIT 01</span>
                  <h2 className="text-xl font-black uppercase text-[var(--secondary)] tracking-tight mt-0.5">VS ENGINEERING</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <MapPin className="text-[var(--primary)] flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-black text-[11px] uppercase tracking-wider text-[var(--secondary)]">Address:</h4>
                      <p className="text-xs text-[var(--text-muted)] font-serif mt-0.5">Sr.no.152/1/1, Magazine Industrial Area, Near Deep Lawns, Bhosari, Maharashtra, 411039.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Phone className="text-[var(--primary)] flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-black text-[11px] uppercase tracking-wider text-[var(--secondary)]">Phone:</h4>
                      <p className="text-xs text-[var(--text-muted)] font-bold mt-0.5">9930090554</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Mail className="text-[var(--primary)] flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-black text-[11px] uppercase tracking-wider text-[var(--secondary)]">Email:</h4>
                      <p className="text-xs text-[var(--text-muted)] font-bold mt-0.5">m786manmuk1993@gmail.com</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <span className="inline-block bg-[var(--surface)] text-[var(--secondary)] text-[10px] font-bold px-2 py-0.5 rounded border border-[var(--border)]">
                      GST: 27CDIPG6290F1ZF
                    </span>
                  </div>
                </div>
              </div>

              {/* COMPANY 2: DEVA ENTERPRISES */}
              <div className="space-y-4 border-b border-[var(--border)] pb-6">
                <div>
                  <span className="text-[var(--primary)] font-black text-[10px] uppercase tracking-widest">UNIT 02</span>
                  <h2 className="text-xl font-black uppercase text-[var(--secondary)] tracking-tight mt-0.5">DEVA ENTERPRISES</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <MapPin className="text-[var(--primary)] flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-black text-[11px] uppercase tracking-wider text-[var(--secondary)]">Address:</h4>
                      <p className="text-xs text-[var(--text-muted)] font-serif mt-0.5">Ground Floor Shop No 04, Pachore Complex, Nashik Poona Road, Male Gaw MIDC Plot No. J 38, Near By Indian Oil Petrol Pump, Nashik, Maharashtra, 421303.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Phone className="text-[var(--primary)] flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-black text-[11px] uppercase tracking-wider text-[var(--secondary)]">Phone:</h4>
                      <p className="text-xs text-[var(--text-muted)] font-bold mt-0.5"> 9930090554</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <span className="inline-block bg-[var(--surface)] text-[var(--secondary)] text-[10px] font-bold px-2 py-0.5 rounded border border-[var(--border)]">
                      GSTIN: 27EPCPK4250M1ZN
                    </span>
                  </div>
                </div>
              </div>

              {/* COMPANY 3: M.S TRADERS */}
              <div className="space-y-4 pb-4">
                <div>
                  <span className="text-[var(--primary)] font-black text-[10px] uppercase tracking-widest">UNIT 03</span>
                  <h2 className="text-xl font-black uppercase text-[var(--secondary)] tracking-tight mt-0.5">M.S TRADERS</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <MapPin className="text-[var(--primary)] flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-black text-[11px] uppercase tracking-wider text-[var(--secondary)]">Addresses:</h4>
                      <p className="text-xs text-[var(--text-muted)] font-serif mt-0.5 mb-1.5">
                        <strong className="text-[10px] text-[var(--text-muted)] block uppercase font-sans">Office 1:</strong>
                        Simri Kansi Simri, Darbhanga, Bihar - 847106 (Kalyan by paas bhumi world)
                      </p>
                      <p className="text-xs text-[var(--text-muted)] font-serif">
                        <strong className="text-[10px] text-[var(--text-muted)] block uppercase font-sans">Office 2:</strong>
                        Gala No C4, Unit No 04, Thane, Maharashtra, 421302.
                      </p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <span className="inline-block bg-[var(--surface)] text-[var(--secondary)] text-[10px] font-bold px-2 py-0.5 rounded border border-[var(--border)]">
                      GSTIN: 10ILXPK5059K1ZG
                    </span>
                  </div>
                </div>
              </div>

              {/* SHARED CHANNELS (Hours) */}
              <div className="bg-[var(--surface)] p-5 rounded-2xl space-y-3.5 border border-[var(--border)]">
                <div className="flex gap-3 items-start">
                  <Clock className="text-[var(--primary)] flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <h4 className="font-black text-[11px] uppercase tracking-wider text-[var(--secondary)]">Operational Evaluation Hours:</h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">Monday – Saturday: 09:00 Hrs to 18:00 Hrs IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Scale Infrastructure Plant RFP Form */}
            <div className="md:col-span-7 space-y-6">
              <div className="bg-[var(--background)] border border-[var(--border)] p-8 rounded-3xl shadow-sm h-fit">
                <h3 className="font-black text-xl text-[var(--secondary)] uppercase tracking-tight mb-2">SCHEDULE AN INFRASTRUCTURE DEPLOYMENT CALL</h3>
                <p className="text-xs text-[var(--text-muted)] uppercase font-black mb-6"> OUR INDUSTRIAL CONSULTANTS WILL EVALUATE YOUR REQUIREMENTS WITHIN 24 HOURS.</p>
                
                {/* Success Message Alert Box */}
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-[var(--accent)] border border-[var(--primary-light)] text-[var(--primary)] rounded-xl text-xs font-bold uppercase tracking-wider text-center">
                    ✓ Message sent successfully! Our team will contact you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name" 
                    required
                    className="text-xs font-bold p-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--text-dark)] rounded-xl w-full focus:outline-none focus:border-[var(--primary)]" 
                  />
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name" 
                    required
                    className="text-xs font-bold p-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--text-dark)] rounded-xl w-full focus:outline-none focus:border-[var(--primary)]" 
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Corporate Email" 
                    required
                    className="text-xs font-bold p-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--text-dark)] rounded-xl w-full focus:outline-none focus:border-[var(--primary)]" 
                  />
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name" 
                    required
                    className="text-xs font-bold p-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--text-dark)] rounded-xl w-full focus:outline-none focus:border-[var(--primary)]" 
                  />
                  <div className="sm:col-span-2">
                    <select 
                      name="productionOutput"
                      value={formData.productionOutput}
                      onChange={handleChange}
                      required
                      className="text-xs font-bold p-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--text-dark)] rounded-xl w-full focus:outline-none focus:border-[var(--primary)]"
                    >
                      <option value="">Select Expected Target Production Output</option>
                      <option value="Under 200 kg/hr batch">Under 200 kg/hr batch</option>
                      <option value="500 kg/hr - 1 Ton/hr line">500 kg/hr - 1 Ton/hr line</option>
                      <option value="Turnkey Full Scale Automated Facility">Turnkey Full Scale Automated Facility</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <textarea 
                      rows="4" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe layout customization options, material grade changes or custom extrusion die demands..." 
                      required
                      className="text-xs font-bold p-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--text-dark)] rounded-xl w-full focus:outline-none focus:border-[var(--primary)]"
                    ></textarea>
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="w-full bg-[var(--secondary)] hover:bg-[var(--primary)] text-[var(--text-light)] font-black uppercase text-xs tracking-widest py-4 rounded-xl transition-colors shadow-lg">
                      Submit Formal Tender / Request For Proposal
                    </button>
                  </div>
                </form>
              </div>

              {/* --- HEAD OFFICE ADDRESS SECTION --- */}
              <div className="bg-gradient-to-br from-[var(--secondary)] to-[var(--secondary-light)] border border-[var(--secondary-light)] p-8 rounded-3xl shadow-xl text-[var(--text-light)]">
                <span className="text-[var(--primary-light)] font-black text-[10px] uppercase tracking-widest block mb-1">CENTRAL ADMINISTRATION</span>
                <h3 className="font-black text-xl uppercase tracking-tight mb-4">HEAD OFFICE</h3>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <MapPin className="text-[var(--primary-light)] flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-black text-[11px] uppercase tracking-wider text-[var(--accent)]">Corporate Address:</h4>
                      <p className="text-xs text-slate-300 font-serif mt-0.5">
                        MR Food Machinery, Plot No. D-68, Malegaon MIDC Sinnar, Tal.- Sinnar, Dist.- Nashik, Maharashtra, 422103.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Phone className="text-[var(--primary-light)] flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-black text-[11px] uppercase tracking-wider text-[var(--accent)]">Central Hotline:</h4>
                      <p className="text-xs text-slate-300 font-bold mt-0.5">+91 9930090554 / +91 7057357916</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;