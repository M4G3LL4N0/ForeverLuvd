'use client'
import { useState } from 'react'
import Link from 'next/link'

type FormData = {
  person: string
  memory: string
  reason: string
}

export default function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    person: '',
    memory: '',
    reason: ''
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-white px-4">
      {/* Progress Indicator */}
      <div className="absolute top-8 w-full max-w-lg">
        <div className="flex items-center space-x-2">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`h-1 flex-1 rounded-full ${
                step >= num ? 'bg-indigo-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="max-w-lg w-full space-y-8 animate-fade-in">
          <h1 className="text-5xl font-light text-center mb-12">
            Who holds a special place in your heart?
          </h1>
          <input
            type="text"
            value={formData.person}
            onChange={(e) => updateFormData('person', e.target.value)}
            placeholder="e.g. My grandmother, childhood friend..."
            className="w-full p-4 border-b border-gray-300 focus:border-indigo-500 outline-none text-center text-xl bg-transparent placeholder-gray-400"
          />
          <button
            onClick={nextStep}
            disabled={!formData.person}
            className={`mt-16 w-full py-4 px-6 text-xl ${
              formData.person 
                ? 'bg-indigo-600 hover:bg-indigo-700 shadow-lg' 
                : 'bg-gray-300'
            } text-white rounded-lg transition-all transform hover:scale-105`}
          >
            Continue
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="max-w-lg w-full space-y-8 animate-fade-in">
          <h1 className="text-5xl font-light text-center mb-12">
            What memory would you like to preserve?
          </h1>
          <textarea
            value={formData.memory}
            onChange={(e) => updateFormData('memory', e.target.value)}
            placeholder="Describe a special moment...\nWhat did you see, hear, feel?"
            className="w-full p-4 border-b border-gray-300 focus:border-indigo-500 outline-none text-center text-xl bg-transparent min-h-[150px] placeholder-gray-400"
          />
          <div className="flex space-x-4 mt-8">
            <button
              onClick={prevStep}
              className="flex-1 py-4 px-6 text-xl text-indigo-600 border border-indigo-600 rounded-lg transition-all hover:bg-indigo-50"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              disabled={!formData.memory}
              className={`flex-1 py-4 px-6 text-xl ${
                formData.memory 
                  ? 'bg-indigo-600 hover:bg-indigo-700 shadow-lg' 
                  : 'bg-gray-300'
              } text-white rounded-lg transition-all transform hover:scale-105`}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="max-w-lg w-full space-y-8 animate-fade-in">
          <h1 className="text-5xl font-light text-center mb-12">
            Why is this memory important to you?
          </h1>
          <textarea
            value={formData.reason}
            onChange={(e) => updateFormData('reason', e.target.value)}
            placeholder="What makes this memory meaningful?\nHow does it shape who you are?"
            className="w-full p-4 border-b border-gray-300 focus:border-indigo-500 outline-none text-center text-xl bg-transparent min-h-[150px] placeholder-gray-400"
          />
          <div className="flex space-x-4 mt-8">
            <button
              onClick={prevStep}
              className="flex-1 py-4 px-6 text-xl text-indigo-600 border border-indigo-600 rounded-lg transition-all hover:bg-indigo-50"
            >
              Back
            </button>
            <Link
              href="/dashboard"
              className={`flex-1 py-4 px-6 text-xl text-center ${
                formData.reason 
                  ? 'bg-indigo-600 hover:bg-indigo-700 shadow-lg' 
                  : 'bg-gray-300'
              } text-white rounded-lg transition-all transform hover:scale-105`}
            >
              Begin Your Journey
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
