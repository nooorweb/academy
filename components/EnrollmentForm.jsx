import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnrollmentForm({ isOpen, onClose, courseTitle = "", coursePrice = "", courseCurrency = "PKR" }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    
    // Step 2: Educational Background
    qualification: "",
    experience: "",
    currentStatus: "",
    
    // Step 3: Course Preferences
    preferredSchedule: "",
    startDate: "",
    paymentMethod: "",
    additionalRequirements: ""
  });

  const totalSteps = 3;

  const validateField = (field, value) => {
    const newErrors = { ...errors };
    
    switch (field) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) {
          newErrors[field] = 'This field is required';
        } else if (value.trim().length < 2) {
          newErrors[field] = 'Must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          newErrors[field] = 'Only letters and spaces allowed';
        } else {
          delete newErrors[field];
        }
        break;
        
      case 'email':
        if (!value.trim()) {
          newErrors[field] = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[field] = 'Please enter a valid email address';
        } else {
          delete newErrors[field];
        }
        break;
        
      case 'phone':
        if (!value.trim()) {
          newErrors[field] = 'Phone number is required';
        } else if (!/^[\+]?[0-9\s\-\(\)]{10,15}$/.test(value.replace(/\s/g, ''))) {
          newErrors[field] = 'Please enter a valid phone number';
        } else {
          delete newErrors[field];
        }
        break;
        
      case 'qualification':
        if (!value) {
          newErrors[field] = 'Please select your qualification';
        } else {
          delete newErrors[field];
        }
        break;
        
      case 'currentStatus':
        if (!value) {
          newErrors[field] = 'Please select your current status';
        } else {
          delete newErrors[field];
        }
        break;
        
      case 'preferredSchedule':
        if (!value) {
          newErrors[field] = 'Please select your preferred schedule';
        } else {
          delete newErrors[field];
        }
        break;
        
      case 'paymentMethod':
        if (!value) {
          newErrors[field] = 'Please select a payment method';
        } else {
          delete newErrors[field];
        }
        break;
        
      default:
        break;
    }
    
    setErrors(newErrors);
    return !newErrors[field];
  };

  const validateStep = (step) => {
    let isValid = true;
    const fieldsToValidate = [];
    
    switch (step) {
      case 1:
        fieldsToValidate.push('firstName', 'lastName', 'email', 'phone');
        break;
      case 2:
        fieldsToValidate.push('qualification', 'currentStatus');
        break;
      case 3:
        fieldsToValidate.push('preferredSchedule', 'paymentMethod');
        break;
      default:
        break;
    }
    
    fieldsToValidate.forEach(field => {
      const fieldValid = validateField(field, formData[field]);
      if (!fieldValid) {
        isValid = false;
        setTouched(prev => ({ ...prev, [field]: true }));
      }
    });
    
    return isValid;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Validate field if it has been touched
    if (touched[field]) {
      validateField(field, value);
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      setShowConfirmation(true);
    }
  };

  const confirmEnrollment = async () => {
    // Here you would typically send the data to your backend
    console.log("Enrollment data:", formData);
    
    // For now, just show a success message
    alert(`Thank you ${formData.firstName}! Your enrollment request has been submitted. We'll contact you soon.`);
    
    // Reset form and close
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      qualification: "",
      experience: "",
      currentStatus: "",
      preferredSchedule: "",
      startDate: "",
      paymentMethod: "",
      additionalRequirements: ""
    });
    setCurrentStep(1);
    setShowConfirmation(false);
    setErrors({});
    setTouched({});
    onClose();
  };

  const cancelEnrollment = () => {
    setShowConfirmation(false);
  };

  const isStepValid = () => {
    const fieldsToCheck = [];
    
    switch (currentStep) {
      case 1:
        fieldsToCheck.push('firstName', 'lastName', 'email', 'phone');
        break;
      case 2:
        fieldsToCheck.push('qualification', 'currentStatus');
        break;
      case 3:
        fieldsToCheck.push('preferredSchedule', 'paymentMethod');
        break;
      default:
        return false;
    }
    
    // Check if all required fields are filled and have no errors
    return fieldsToCheck.every(field => 
      formData[field] && formData[field].toString().trim() && !errors[field]
    );
  };

  // Helper function to get input classes with error state
  const getInputClasses = (fieldName) => {
    const baseClasses = "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all";
    const errorClasses = touched[fieldName] && errors[fieldName] 
      ? "border-red-500 focus:ring-red-500" 
      : "border-gray-300";
    return `${baseClasses} ${errorClasses}`;
  };

  // Helper function to render error message
  const renderError = (fieldName) => {
    if (touched[fieldName] && errors[fieldName]) {
      return (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1 flex items-center"
        >
          <i className="fas fa-exclamation-circle mr-1"></i>
          {errors[fieldName]}
        </motion.p>
      );
    }
    return null;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex">
              {/* Left Side - Image and Quote */}
              <div className="hidden lg:flex lg:w-2/5 relative overflow-hidden">
                <img
                  src="/images/form image.jpeg"
                  alt="Students learning"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
                <div className="relative z-10 flex flex-col justify-center items-center p-8 text-white text-center">
                  <div className="bg-black/20 rounded-xl p-6 border border-white/30">
                    <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                      Your Future Starts Here!
                    </h3>
                    <blockquote className="text-lg italic leading-relaxed mb-4 text-white">
                      "The expert in anything was once a beginner. Every professional was once an amateur. Every icon was once an unknown."
                    </blockquote>
                    <p className="text-sm text-white/95">
                      - Robin Sharma
                    </p>
                    <div className="mt-6 flex items-center justify-center">
                      <div className="flex items-center space-x-2 bg-black/30 rounded-full px-4 py-2 border border-white/20">
                        <i className="fas fa-graduation-cap text-yellow-300"></i>
                        <span className="text-sm font-medium text-white">Transform Your Career Today</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form Content */}
              <div className="w-full lg:w-3/5">
            
            {/* Mobile Quote - Only visible on small screens */}
            <div className="lg:hidden bg-gradient-to-r from-primary-blue to-blue-700 text-white p-4 text-center">
              <p className="text-sm italic">
                "Your future starts here! Every expert was once a beginner."
              </p>
            </div>
            
            {/* Header */}
            <div className="border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Enroll in Course
                  </h2>
                  {courseTitle && (
                    <p className="text-sm text-gray-600 mt-1">
                      {courseTitle}
                    </p>
                  )}
                  {coursePrice && (
                    <p className="text-lg font-bold text-primary-blue mt-2">
                      {coursePrice === "Free" ? "Free" : `${coursePrice} ${courseCurrency}`}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Step {currentStep} of {totalSteps}
                  </span>
                  <span className="text-sm text-gray-500">
                    {Math.round((currentStep / totalSteps) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-primary-blue h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6">
              <AnimatePresence mode="wait">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            onBlur={() => handleBlur("firstName")}
                            className={getInputClasses("firstName")}
                            placeholder="Enter your first name"
                          />
                          {renderError("firstName")}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            onBlur={() => handleBlur("lastName")}
                            className={getInputClasses("lastName")}
                            placeholder="Enter your last name"
                          />
                          {renderError("lastName")}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            onBlur={() => handleBlur("email")}
                            className={getInputClasses("email")}
                            placeholder="Enter your email address"
                          />
                          {renderError("email")}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            onBlur={() => handleBlur("phone")}
                            className={getInputClasses("phone")}
                            placeholder="Enter your phone number"
                          />
                          {renderError("phone")}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Educational Background */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Educational Background
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Highest Qualification *
                          </label>
                          <select
                            required
                            value={formData.qualification}
                            onChange={(e) => handleInputChange("qualification", e.target.value)}
                            onBlur={() => handleBlur("qualification")}
                            className={getInputClasses("qualification")}
                          >
                            <option value="">Select your qualification</option>
                            <option value="matriculation">Matriculation</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="bachelors">Bachelor's Degree</option>
                            <option value="masters">Master's Degree</option>
                            <option value="other">Other</option>
                          </select>
                          {renderError("qualification")}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Status *
                          </label>
                          <select
                            required
                            value={formData.currentStatus}
                            onChange={(e) => handleInputChange("currentStatus", e.target.value)}
                            onBlur={() => handleBlur("currentStatus")}
                            className={getInputClasses("currentStatus")}
                          >
                            <option value="">Select your current status</option>
                            <option value="student">Student</option>
                            <option value="employed">Employed</option>
                            <option value="unemployed">Unemployed</option>
                            <option value="self-employed">Self-employed</option>
                            <option value="other">Other</option>
                          </select>
                          {renderError("currentStatus")}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Course Preferences */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Course Preferences
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Schedule *
                          </label>
                          <select
                            required
                            value={formData.preferredSchedule}
                            onChange={(e) => handleInputChange("preferredSchedule", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                          >
                            <option value="">Select preferred schedule</option>
                            <option value="morning">Morning Shift</option>
                            <option value="second">Second Shift</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Start Date
                          </label>
                          <input
                            type="date"
                            value={formData.startDate}
                            onChange={(e) => handleInputChange("startDate", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Payment Method *
                          </label>
                          <select
                            required
                            value={formData.paymentMethod}
                            onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                          >
                            <option value="">Select payment method</option>
                            <option value="full">Full Payment</option>
                            <option value="installments">Monthly Installments</option>
                            <option value="scholarship">Scholarship Application</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Additional Requirements
                          </label>
                          <textarea
                            value={formData.additionalRequirements}
                            onChange={(e) => handleInputChange("additionalRequirements", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                            placeholder="Any special requirements or questions?"
                            rows="3"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-3 sm:px-6 py-2 rounded-lg font-medium transition-all text-sm ${
                    currentStep === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  <i className="fas fa-arrow-left mr-1 sm:mr-2"></i>
                  <span className="hidden sm:inline">Previous</span>
                  <span className="sm:hidden">Prev</span>
                </button>

                <div className="flex items-center space-x-2">
                  {[...Array(totalSteps)].map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index + 1 === currentStep
                          ? "bg-primary-blue"
                          : index + 1 < currentStep
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className={`px-3 sm:px-6 py-2 rounded-lg font-medium transition-all text-sm ${
                      isStepValid()
                        ? "bg-primary-blue text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <span className="sm:hidden">Next</span>
                    <i className="fas fa-arrow-right ml-1 sm:ml-2"></i>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isStepValid()}
                    className={`px-4 sm:px-8 py-2 rounded-lg font-medium transition-all text-sm ${
                      isStepValid()
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <i className="fas fa-check mr-1 sm:mr-2"></i>
                    <span className="hidden sm:inline">Submit Enrollment</span>
                    <span className="sm:hidden">Submit</span>
                  </button>
                )}
              </div>
            </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Confirmation Dialog */}
        <AnimatePresence>
          {showConfirmation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={cancelEnrollment}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                    <i className="fas fa-question text-primary-blue text-xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Confirm Your Enrollment
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Are you sure you want to enroll in this course?
                  </p>
                  
                  {/* Course Details Summary */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Course:</span>
                        <span className="text-sm font-medium text-gray-900">{courseTitle}</span>
                      </div>
                      {coursePrice && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Price:</span>
                          <span className="text-sm font-bold text-primary-blue">
                            {coursePrice === "Free" ? "Free" : `${coursePrice} ${courseCurrency}`}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Student:</span>
                        <span className="text-sm font-medium text-gray-900">
                          {formData.firstName} {formData.lastName}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Schedule:</span>
                        <span className="text-sm font-medium text-gray-900">
                          {formData.preferredSchedule === "morning" ? "Morning Shift" : 
                           formData.preferredSchedule === "second" ? "Second Shift" : 
                           formData.preferredSchedule}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <button
                      onClick={cancelEnrollment}
                      className="flex-1 px-3 sm:px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm"
                    >
                      <i className="fas fa-times mr-1 sm:mr-2"></i>
                      <span className="hidden sm:inline">No, Cancel</span>
                      <span className="sm:hidden">Cancel</span>
                    </button>
                    <button
                      onClick={confirmEnrollment}
                      className="flex-1 px-3 sm:px-4 py-2 bg-primary-blue text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                    >
                      <i className="fas fa-check mr-1 sm:mr-2"></i>
                      <span className="hidden sm:inline">Yes, Enroll Me</span>
                      <span className="sm:hidden">Enroll</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}


