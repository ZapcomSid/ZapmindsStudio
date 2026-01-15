import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

interface TestimonialsProps {
  theme: "light" | "dark";
}

export function Testimonials({ theme }: TestimonialsProps) {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, FinanceFirst Corporation",
      company: "FinTech",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      content:
        "Studio Zapminds transformed our legacy banking system into a modern, scalable platform. Their expertise in fintech and attention to security was exceptional. We saw a 300% increase in user adoption within the first quarter.",
      rating: 5,
    },
    {
      name: "Dr. Michael Roberts",
      role: "CTO, MediCare Health Systems",
      company: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      content:
        "The telemedicine platform they built has been a game-changer for our organization. Patient satisfaction scores increased dramatically, and we've been able to expand healthcare access to underserved communities. Truly innovative work.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Technology, RetailMax International",
      company: "E-Commerce",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      content:
        "Our e-commerce platform needed to scale for Black Friday, and Zapminds delivered beyond expectations. The platform handled 10M+ concurrent users flawlessly. Their AI-powered recommendations increased our conversion rates by 45%.",
      rating: 5,
    },
    {
      name: "James Anderson",
      role: "Director of Innovation, TechCorp Solutions",
      company: "AI & Tech",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      content:
        "The AI assistant they developed cut our customer support costs by 60% while improving satisfaction. The team's deep understanding of machine learning and NLP is evident in the quality of the solution.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      role: "Chief Digital Officer, Municipal Infrastructure Group",
      company: "Smart Cities",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      content:
        "Their IoT platform has revolutionized how we manage city infrastructure. We've achieved 35% energy savings and dramatically improved emergency response times. The ROI exceeded all our projections.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Founder & CEO, StartupXYZ",
      company: "SaaS",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      content:
        "From MVP to Series A, Zapminds has been our technology partner. They move fast, think strategically, and build with quality. Their team feels like an extension of ours.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span
              className={`px-4 py-2 rounded-full ${
                theme === "dark"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-green-100 text-green-600"
              }`}
            >
              Client Success Stories
            </span>
          </motion.div>

          <h2
            className={`mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            What Our Clients Say
          </h2>

          <p
            className={`max-w-3xl mx-auto text-lg ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Don't just take our word for it. Hear from the leaders who've
            partnered with us to transform their businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-2xl transition-all duration-300 relative ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-gray-50 hover:bg-white hover:shadow-xl"
              }`}
            >
              {/* Quote icon */}
              <motion.div
                className={`absolute top-6 right-6 opacity-20 ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
              >
                <Quote size={40} />
              </motion.div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      theme === "dark"
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-yellow-500 text-yellow-500"
                    }
                  />
                ))}
              </div>

              {/* Content */}
              <p
                className={`mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div
                    className={
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {testimonial.role}
                  </div>
                  <div
                    className={`text-xs ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "4.9/5", label: "Client Rating" },
              { value: "95%", label: "Client Retention" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
