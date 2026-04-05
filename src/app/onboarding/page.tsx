'use client'
import { useState } from 'react'

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
      {/* Step 1 */}
      {step === 1 && (
        <div className="max-w-lg w-full space-y-8 animate-fade-in">
          <h1 className="text-5xl font-light text-center mb-12">
            Who do you want to preserve?
          </h1>
          <input
            type="text"
            value={formData.person}
            onChange={(e) => updateFormData('person', e.target.value)}
            placeholder="e.g. My grandmother, childhood friend..."
            className="w-full p-4 border-b border-gray-300 focus:border-indigo-500 outline-none text-center text-xl bg-transparent"
          />
          <button
            onClick={nextStep}
            disabled={!formData.person}
            className={`mt-16 w-full py-4 px-6 text-xl ${formData.person ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300'} text-white rounded-lg transition-all`}
          >
            Continue
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="max-w-lg w-full space-y-8 animate-fade-in">
          <h1 className="text-5xl font-light text-center mb-12">
            Add your first memory
          </h1>
          <textarea
            value={formData.memory}
            onChange={(e) => updateFormData('memory', e.target.value)}
            placeholder="Describe a special moment..."
            className="w-full p-4 border-b border-gray-300 focus:border-indigo-500 outline-none text-center text-xl bg-transparent min-h-[100px]"
          />
          <div className="flex space-x-4 mt-8">
            <button
              onClick={prevStep}
              className="flex-1 py-4 px-6 text-xl text-indigo-600 border border-indigo-600 rounded-lg transition-all"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              disabled={!formData.memory}
              className={`flex-1 py-4 px-6 text-xl ${formData.memory ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300'} text-white rounded-lg transition-all`}
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
            Why this matters
          </h1>
          <textarea
            value={formData.reason}
            onChange={(e) => updateFormData('reason', e.target.value)}
            placeholder="What makes this memory meaningful?"
            className="w-full p-4 border-b border-gray-300 focus:border-indigo-500 outline-none text-center text-xl bg-transparent min-h-[100px]"
          />
          <div className="flex space-x-4 mt-8">
            <button
              onClick={prevStep}
              className="flex-1 py-4 px-6 text-xl text-indigo-600 border border-indigo-600 rounded-lg transition-all"
            >
              Back
            </button>
            <button
              onClick={() => window.location.href = '/dashboard'}
              disabled={!formData.reason}
              className={`flex-1 py-4 px-6 text-xl ${formData.reason ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300'} text-white rounded-lg transition-all`}
            >
              Complete Onboarding
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
