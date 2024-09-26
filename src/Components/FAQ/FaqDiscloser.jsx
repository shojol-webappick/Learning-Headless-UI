import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@headlessui/react";
  import { ChevronDownIcon } from "@heroicons/react/20/solid";
  
  export default function FaqDiscloser() {
    return (
      <div className="w-full pt-2 px-4">
        <div className="mx-auto w-full divide-y divide-blue-500 rounded-xl bg-blue-500/80">
          {/* FAQ 1 */}
          <Disclosure as="div" className="p-6" defaultOpen={true}>
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                What is your refund policy?
              </span>
              <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-zinc-200">
              If you're unhappy with your purchase, we'll refund you in full.
            </DisclosurePanel>
          </Disclosure>
  
          {/* FAQ 2 */}
          <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                Do you offer technical support?
              </span>
              <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-zinc-200">
              No.
            </DisclosurePanel>
          </Disclosure>
  
          {/* FAQ 3 */}
          <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                How long does it take to process a service request?
              </span>
              <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-zinc-200">
              Service requests are typically processed within 24 hours, but this can vary depending on the provider's availability.
            </DisclosurePanel>
          </Disclosure>
  
          {/* FAQ 4 */}
          <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                Can I cancel or reschedule a booking?
              </span>
              <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-zinc-200">
              Yes, you can cancel or reschedule a booking up to 24 hours before the scheduled time without any penalty.
            </DisclosurePanel>
          </Disclosure>
  
          {/* FAQ 5 */}
          <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                Is there a fee to become a service provider?
              </span>
              <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-zinc-200">
              Becoming a service provider is free, but we charge a small commission on completed bookings.
            </DisclosurePanel>
          </Disclosure>
  
          {/* FAQ 6 */}
          <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                How do I leave a review for a service provider?
              </span>
              <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-zinc-200">
              After your service is completed, you'll receive an email with a link to leave a review on the provider's profile.
            </DisclosurePanel>
          </Disclosure>
  
          {/* FAQ 7 */}
          <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                Do you verify the service providers on the platform?
              </span>
              <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-zinc-200">
              Yes, all service providers go through a verification process to ensure they meet our quality and safety standards.
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    );
  }
  