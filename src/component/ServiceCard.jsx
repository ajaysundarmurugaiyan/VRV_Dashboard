import React from "react";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { LuMonitorCog } from "react-icons/lu";
import { IoConstruct } from "react-icons/io5";

const ServiceCard = () => {
  return (
    <div className="bg-customBlue min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="text-2xl font-bold text-white md:text-4xl">
            <div>About our VRV Security</div>
            <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-white rounded-full"></div>
          </div>
          <p className="text-customGrey1 mt-4">
            VRV Security, founded in 2020 in Chennai, Tamil Nadu, is a global
            powerhouse in AI-driven cybersecurity solutions
          </p>
          <p className="text-customGrey1 mt-2">
            In 2024, our company valuation soared to $400 million, and we
            continue to set new benchmarks in cybersecurity
          </p>
          <p className="text-customGrey1 mt-2">
            We deliver more than 500,000 hours of proactive threat monitoring
            annually and have secured over 1 million endpoints worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-300">
          {/* Card 1 */}
          <div className="group bg-[#241f18] p-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="space-y-4 text-center">
              <GiArtificialIntelligence className="h-12 w-12 mx-auto text-white" />
              <h5 className="text-xl font-semibold text-white">
                AI-Dependent Services and Solutions VAPT
              </h5>
              <p>
                Leveraging artificial intelligence, we perform comprehensive
                Vulnerability Assessment and Penetration Testing (VAPT) to
                identify and mitigate threats efficiently.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#241f18] p-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="space-y-4 text-center">
              <FaCloudDownloadAlt className="h-12 w-12 mx-auto text-white" />
              <h5 className="text-xl font-semibold text-white">
                Cloud Infrastructure VAPT
              </h5>
              <p>
                We secure cloud environments by assessing vulnerabilities,
                ensuring robust defense mechanisms for sensitive data and
                applications.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#241f18] p-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="space-y-4 text-center">
              <LuMonitorCog className="h-12 w-12 mx-auto text-white" />
              <h5 className="text-xl font-semibold text-white">
                Threat Monitoring & SOC
              </h5>
              <p>
                Our Security Operations Center (SOC) provides 24/7 threat
                monitoring, incident response, and real-time analytics to
                safeguard against evolving cyber threats.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-[#241f18] p-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="space-y-4 text-center">
              <IoConstruct className="h-12 w-12 mx-auto text-white" />
              <h5 className="text-xl font-semibold text-white">
                Company Infrastructure & Services VAPT
              </h5>
              <p>
                We specialize in protecting complex enterprise infrastructure
                with tailor-made security strategies to prevent unauthorized
                access and data breaches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
