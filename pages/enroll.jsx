import { useState } from "react";
import Head from "next/head";

export default function EnrollPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    courseId: "",
  });

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSuccess("Enrollment submitted successfully. We will contact you soon.");
      setStep(1);
      setForm({ name: "", email: "", phone: "", courseId: "" });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Enroll | Pro Academy</title>
      </Head>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold mb-6">Enroll</h1>
        <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6 text-sm">
            <span className={`px-3 py-1 rounded-full border ${step>=1?"bg-black text-white":"bg-gray-100"}`}>1</span>
            <span>Personal</span>
            <span className={`px-3 py-1 rounded-full border ml-4 ${step>=2?"bg-black text-white":"bg-gray-100"}`}>2</span>
            <span>Course</span>
            <span className={`px-3 py-1 rounded-full border ml-4 ${step>=3?"bg-black text-white":"bg-gray-100"}`}>3</span>
            <span>Confirm</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} required />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} required />
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <label className="block text-sm font-medium mb-1">Select Course</label>
                <select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.courseId} onChange={(e)=>setForm({...form,courseId:e.target.value})} required>
                  <option value="">Choose a course</option>
                  <option value="safety-course">Safety Course</option>
                  <option value="cdc-computer-skills">CDC – Computer & Digital Skills</option>
                  <option value="gdc-graphic-designing">GDC – Graphic Designing</option>
                  <option value="dit-diploma-it">DIT – Diploma in IT</option>
                  <option value="wdc-web-designing">WDC – Web Designing</option>
                </select>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-2 text-sm">
                <div><span className="font-semibold">Name:</span> {form.name}</div>
                <div><span className="font-semibold">Email:</span> {form.email}</div>
                <div><span className="font-semibold">Phone:</span> {form.phone}</div>
                <div><span className="font-semibold">Course:</span> {form.courseId || "—"}</div>
              </div>
            )}

            {error && <div className="text-red-600 text-sm">{error}</div>}
            {success && <div className="text-green-600 text-sm">{success}</div>}

            <div className="flex items-center justify-between">
              <button type="button" onClick={prev} disabled={step===1} className="px-4 py-2 rounded-full border border-gray-300 text-sm disabled:opacity-50">Back</button>
              {step < 3 ? (
                <button type="button" onClick={next} className="px-5 py-2 rounded-full bg-black text-white text-sm">Next</button>
              ) : (
                <button type="submit" disabled={loading} className="px-5 py-2 rounded-full bg-black text-white text-sm disabled:opacity-50">{loading?"Submitting...":"Confirm & Submit"}</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


