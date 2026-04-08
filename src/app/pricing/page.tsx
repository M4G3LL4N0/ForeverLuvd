import { CheckIcon, ShieldCheckIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Personal',
    price: '$12/mo',
    lovedOnes: 3,
    storage: '50GB',
    aiAccess: 'Standard',
    features: [
      'Preserve up to 3 loved ones',
      '50GB memory storage',
      'Standard AI memory assistance',
      'Voice memory playback',
      'Private family-only access',
      'Priority email support',
      'Customizable memory timelines'
    ],
    cta: 'Choose Personal',
    ctaColor: 'bg-blue-600',
    highlight: true,
  },
  {
    name: 'Family',
    price: '$29/mo',
    lovedOnes: 10,
    storage: '200GB',
    aiAccess: 'Enhanced',
    features: [
      'Preserve up to 10 loved ones',
      '200GB memory storage',
      'Enhanced AI memory assistance',
      'Voice continuity readiness',
      'Family sharing (up to 6 users)',
      'Collaborative memory building',
      'Priority support',
      'Annual memory review'
    ],
    cta: 'Protect Family',
    ctaColor: 'bg-purple-600',
  },
  {
    name: 'Legacy',
    price: '$99/mo',
    lovedOnes: 'Unlimited',
    storage: '1TB',
    aiAccess: 'Unlimited',
    features: [
      'Preserve unlimited loved ones',
      '1TB memory storage',
      'Unlimited AI memory assistance',
      'Voice continuity framework',
      'Multi-generational access',
      'Legacy planning tools',
      'Dedicated account manager',
      'Priority 24/7 support',
      'ForeverLuvd legacy badge'
    ],
    cta: 'Build Legacy',
    ctaColor: 'bg-indigo-600',
  },
]

export default function PricingPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Continuity Infrastructure</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Platform Subscription Plans
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Structured pricing for individuals, families, and legacy preservation needs.
        </p>
        
        {/* Pricing Tiers */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.name} className="flex flex-col rounded-3xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                {tier.price !== 'Free' && <span className="text-gray-500">/month</span>}
              </div>
              <ul role="list" className="mt-8 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span className="text-sm leading-6 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`${tier.ctaColor} mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-24 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="flex justify-center gap-4">
              <ShieldCheckIcon className="h-8 w-8 text-indigo-600" />
              <LockClosedIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Your Memories, Your Control</h3>
            <p className="mt-4 text-gray-600">
              ForeverLuvd is built on privacy-first principles. Your memories are encrypted and you maintain full ownership of your data. We never sell or share your information.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 bg-indigo-50 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900">Start Preserving Today</h3>
          <p className="mt-4 text-gray-600">
            Join thousands of families preserving their most precious memories with ForeverLuvd.
          </p>
          <a
            href="#"
            className="mt-6 inline-block rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Your ForeverLuvd Account
          </a>
        </div>
      </div>
    </div>
  )
}
