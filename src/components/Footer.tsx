
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Resonant Gaia</h3>
            <p className="text-slate-300">
              A visionary platform fusing clean fusion, wireless power, and indigenous AI to co-create an energy commons.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/#what-is" className="text-slate-300 hover:text-gaia-green transition-colors">What Is Resonant Gaia</Link></li>
              <li><Link to="/#why-it-matters" className="text-slate-300 hover:text-gaia-green transition-colors">Why It Matters</Link></li>
              <li><Link to="/#who-is-it-for" className="text-slate-300 hover:text-gaia-green transition-colors">Who Is It For</Link></li>
              <li><Link to="/auth" className="text-slate-300 hover:text-gaia-green transition-colors">Join The Energy Mesh</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Gaia Protocol</h4>
            <p className="text-slate-300 mb-4">
              All access is governed by the Gaia Protocol Charter — a living ethics framework for resilience, equity, and open science.
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Resonant Gaia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
