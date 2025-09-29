import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Armor Fit</h3>
          <p>Forge your armor, transform your life. Zambezi's premier fitness destination.</p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
          <p>Phone: +260 XXX XXX XXX</p>
          <p>Email: info@armorfit.co.zm</p>
          <p>Location: Main Street, Zambezi, Zambia</p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-600">Facebook</a>
            <a href="#" className="hover:text-red-600">Instagram</a>
            <a href="#" className="hover:text-red-600">Twitter</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10 text-sm">
        &copy; {new Date().getFullYear()} Armor Fit. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
