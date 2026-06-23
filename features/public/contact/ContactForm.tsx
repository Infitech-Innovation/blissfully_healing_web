import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div>
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8f6249]">
          Send a message
        </p>
        <h2 className="mt-2 font-serif text-4xl font-semibold text-[#2f251f] sm:text-5xl">
          How can we aid you?
        </h2>
        <p className="mt-4 leading-7 text-[#6f5c4f]">
          Share a few details about what you are seeking and our team will
          respond with a grounded next step.
        </p>
      </div>

      <form className="grid gap-5 rounded-[8px] border border-[#eadfd4] bg-white p-5 shadow-[0_18px_45px_rgba(63,52,44,0.08)] sm:p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#2f251f]">
              Full name
            </span>
            <input
              type="text"
              placeholder="Your name"
              className="h-12 w-full rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] px-4 text-sm text-[#2f251f] outline-none transition focus:border-[#8f6249] focus:bg-white"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#2f251f]">
              Email address
            </span>
            <input
              type="email"
              placeholder="you@example.com"
              className="h-12 w-full rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] px-4 text-sm text-[#2f251f] outline-none transition focus:border-[#8f6249] focus:bg-white"
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#2f251f]">
              Phone number
            </span>
            <input
              type="tel"
              placeholder="+254 700 000 000"
              className="h-12 w-full rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] px-4 text-sm text-[#2f251f] outline-none transition focus:border-[#8f6249] focus:bg-white"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#2f251f]">
              Enquiry type
            </span>
            <select className="h-12 w-full rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] px-4 text-sm text-[#2f251f] outline-none transition focus:border-[#8f6249] focus:bg-white">
              <option>Retreat enquiry</option>
              <option>Course support</option>
              <option>Healing pathway guidance</option>
              <option>Private session</option>
              <option>General enquiry</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#2f251f]">
            Message
          </span>
          <textarea
            rows={5}
            placeholder="Tell us what kind of support you are looking for..."
            className="w-full resize-none rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] px-4 py-3 text-sm text-[#2f251f] outline-none transition focus:border-[#8f6249] focus:bg-white"
          />
        </label>

        <button
          type="button"
          className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-[#8f6249] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#744d39]"
        >
          Send Message
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
