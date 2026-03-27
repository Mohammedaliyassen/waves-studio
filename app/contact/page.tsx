"use client";

import { useActionState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormStatus } from "react-dom";
import { submitContactMessage, type FormState } from "@/app/lib/actions";
import CustomCheckbox from "../components/CustomCheckbox";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-3.5 transition-all duration-300 transform hover:scale-105"
    >
      {pending ? "Submitting..." : "Submit Message"}
    </button>
  );
}

export default function ContactPage() {
  const initialState: FormState = { success: false, message: null, errors: {} };
  const [state, dispatch] = useActionState(submitContactMessage, initialState);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  const projectTypes = ["Web", "Mobile", "Desktop"];
  const estimatedBudgets = ["$1k-$5k", "$5k-$10k", "$10k+", "Not specified"];
  const timelines = ["1-2 Weeks", "1 Month", "2-3 Months", "3+ Months"];
  const sources = ["Google", "LinkedIn", "Friend", "Other"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Let's Build Something <span className="text-blue-400">Great</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Have a project in mind or just want to say hello? Fill out the
              form below and I'll get back to you as soon as possible.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <p className="text-white font-medium">
                        codelegend.tech@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <p className="text-white font-medium">+20 1157070765</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Location</p>
                      <p className="text-white font-medium">Egypt</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Response Time</p>
                      <p className="text-white font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Follow us
                </h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 hover:bg-slate-700 p-4 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/code-legend-006551393/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 hover:bg-slate-700 p-4 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/CodeLegend.Team"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 hover:bg-slate-700 p-4 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      30+
                    </div>
                    <div className="text-gray-300 text-sm">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      4+
                    </div>
                    <div className="text-gray-300 text-sm">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      100%
                    </div>
                    <div className="text-gray-300 text-sm">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      24h
                    </div>
                    <div className="text-gray-300 text-sm">Response Time</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Send Me a Message
                </h3>

                <form ref={formRef} action={dispatch} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Personal Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="user_name"
                          className="block mb-2 text-sm font-medium text-gray-300"
                        >
                          Full Name
                        </label>
                        <motion.input
                          type="text"
                          id="user_name"
                          name="user_name"
                          required
                          className="w-full bg-slate-800/50 border border-slate-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3 transition-all duration-200 placeholder-gray-400"
                          placeholder="Mohammed Ali"
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        />
                        {state.errors?.user_name && (
                          <p className="mt-2 text-sm text-red-400">
                            {state.errors.user_name.join(", ")}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="user_email"
                          className="block mb-2 text-sm font-medium text-gray-300"
                        >
                          Email Address
                        </label>
                        <motion.input
                          type="email"
                          id="user_email"
                          name="user_email"
                          required
                          className="w-full bg-slate-800/50 border border-slate-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3 transition-all duration-200 placeholder-gray-400"
                          placeholder="you@example.com"
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        />
                        {state.errors?.user_email && (
                          <p className="mt-2 text-sm text-red-400">
                            {state.errors.user_email.join(", ")}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company_name"
                          className="block mb-2 text-sm font-medium text-gray-300"
                        >
                          Company Name (Optional)
                        </label>
                        <motion.input
                          type="text"
                          id="company_name"
                          name="company_name"
                          className="w-full bg-slate-800/50 border border-slate-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3 transition-all duration-200 placeholder-gray-400"
                          placeholder="Your Company Inc."
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="whats_app"
                          className="block mb-2 text-sm font-medium text-gray-300"
                        >
                          WhatsApp
                        </label>
                        <motion.input
                          type="text"
                          id="whats_app"
                          name="whats_app"
                          className="w-full bg-slate-800/50 border border-slate-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3 transition-all duration-200 placeholder-gray-400"
                          placeholder="+1234567890"
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                          required
                        />
                        {state.errors?.whats_app && (
                          <p className="mt-2 text-sm text-red-400">
                            {state.errors.whats_app.join(", ")}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4 pt-6 border-t border-slate-600">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Project Details
                    </h4>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-300">
                        Project Type
                      </label>
                      <div className="flex flex-wrap gap-x-6 gap-y-4 mt-2">
                        {projectTypes.map((type) => (
                          <CustomCheckbox
                            key={type}
                            id={`project_type_${type}`}
                            name="project_type"
                            value={type}
                            className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-600 transition-colors text-white "
                          />
                        ))}
                      </div>
                      {state.errors?.project_type && (
                        <p className="mt-2 text-sm text-red-400">
                          {state.errors.project_type.join(", ")}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Project Description
                      </label>
                      <motion.textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full bg-slate-800/50 border border-slate-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3 transition-all duration-200 placeholder-gray-400 resize-none"
                        placeholder="Tell me about your project..."
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      ></motion.textarea>
                      {state.errors?.message && (
                        <p className="mt-2 text-sm text-red-400">
                          {state.errors.message.join(", ")}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="estimated_budget"
                          className="block mb-2 text-sm font-medium text-gray-300"
                        >
                          Estimated Budget
                        </label>
                        <motion.select
                          id="estimated_budget"
                          name="estimated_budget"
                          required
                          defaultValue=""
                          className="w-full bg-slate-800/50 border border-slate-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3 transition-all duration-200"
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <option value="" disabled>
                            Select your budget
                          </option>
                          {estimatedBudgets.map((budget) => (
                            <option key={budget} value={budget}>
                              {budget}
                            </option>
                          ))}
                        </motion.select>
                        {state.errors?.estimated_budget && (
                          <p className="mt-2 text-sm text-red-400">
                            {state.errors.estimated_budget.join(", ")}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="timeline"
                          className="block mb-2 text-sm font-medium text-gray-300"
                        >
                          Timeline
                        </label>
                        <motion.select
                          id="timeline"
                          name="timeline"
                          required
                          defaultValue=""
                          className="w-full bg-slate-800/50 border border-slate-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3 transition-all duration-200"
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <option value="" disabled>
                            Select a timeline
                          </option>
                          {timelines.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </motion.select>
                      </div>
                    </div>
                  </div>

                  {/* Final Details */}
                  <div className="pt-6 border-t border-slate-600">
                    <label
                      htmlFor="source"
                      className="block mb-2 text-sm font-medium text-gray-300"
                    >
                      How did you hear about me?
                    </label>
                    <motion.select
                      id="source"
                      name="source"
                      required
                      defaultValue=""
                      className="w-full bg-slate-800/50 border border-slate-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3 transition-all duration-200"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {sources.map((source) => (
                        <option key={source} value={source}>
                          {source}
                        </option>
                      ))}
                    </motion.select>
                  </div>

                  <div className="pt-6">
                    <SubmitButton />
                    <div className="h-6 mt-4">
                      <AnimatePresence>
                        {state.message && (
                          <motion.p
                            key="form-message"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className={`text-center text-sm ${
                              state.success ? "text-green-400" : "text-red-400"
                            }`}
                          >
                            {state.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
