import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    storage: '5GB',
    aiAccess: 'Limited',
    familySharing: false,
    features: ['Basic features', 'Community support', '5GB storage'],
    cta: 'Get Started',
    ctaColor: 'bg-gray-900',
  },
  {
    name: 'Personal',
    price: '$12/mo',
    storage: '50GB',
    aiAccess: 'Standard',
    familySharing: false,
    features: ['All Starter features', 'Standard AI access', '50GB storage', 'Email support'],
    cta: 'Subscribe',
    ctaColor: 'bg-blue-600',
  },
  {
    name: 'Family',
    price: '$29/mo',
    storage: '200GB',
    aiAccess: 'Enhanced',
    familySharing: true,
    features: ['All Personal features', 'Enhanced AI access', '200GB storage', 'Family sharing (up to 6 users)', 'Priority support'],
    cta: 'Get Family Plan',
    ctaColor: 'bg-purple-600',
  },
  {
    name: 'Future',
    price: '$99/mo',
    storage: '1TB',
    aiAccess: 'Unlimited',
    familySharing: true,
    features: ['All Family features', 'Unlimited AI access', '1TB storage', 'Dedicated account manager', 'Legacy benefits'],
    cta: 'Join Future',
    ctaColor: 'bg-indigo-600',
  },
]

export default function PricingPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Simple, transparent pricing built for individuals and families. Upgrade, downgrade, or cancel anytime.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.name} className="flex flex-col rounded-3xl bg-gray-50 p-8 shadow-sm">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
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
      </div>
    </div>
  )
}
