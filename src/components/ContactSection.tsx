'use client';

import { useTranslations } from "next-intl";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactMessage } from "@/app/actions";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "w-full py-3.5 px-6 rounded-xl font-semibold text-white transition-colors",
        pending
          ? "bg-blue-400 cursor-not-allowed"
          : "bg-blue-700 hover:bg-blue-600"
      )}
    >
      {pending ? pendingLabel : label}
    </button>
  );
}

export default function ContactSection() {
  const t = useTranslations("contact");
  const [state, formAction] = useActionState(sendContactMessage, null);

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="inline-block text-sm font-semibold text-blue-700 uppercase tracking-widest mb-4">
                {t("badge")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                {t("headline")}
              </h2>
              <p className="text-gray-500 leading-relaxed">
                {t("subheadline")}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                    {t("address_label")}
                  </p>
                  <p className="text-sm text-gray-600">{t("address_value")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                    {t("phone_label")}
                  </p>
                  <a
                    href={`tel:${t("phone_value")}`}
                    className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
                  >
                    {t("phone_value")}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                    {t("email_direct_label")}
                  </p>
                  <a
                    href={`mailto:${t("email_direct_value")}`}
                    className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
                  >
                    {t("email_direct_value")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            {state?.success ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center bg-green-50 rounded-2xl border border-green-100">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
                <h3 className="text-xl font-bold text-gray-900">{t("success_title")}</h3>
                <p className="text-gray-500 max-w-xs">{t("success_body")}</p>
              </div>
            ) : (
              <form
                action={formAction}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-gray-700">
                      {t("name_label")}
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder={t("name_placeholder")}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-gray-700">
                      {t("email_label")}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder={t("email_placeholder")}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">
                    {t("subject_label")}
                  </label>
                  <input
                    name="subject"
                    type="text"
                    required
                    placeholder={t("subject_placeholder")}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">
                    {t("message_label")}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder={t("message_placeholder")}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>

                {state?.error && (
                  <p className="text-sm text-red-600">{state.error}</p>
                )}

                <SubmitButton label={t("submit")} pendingLabel={t("submitting")} />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
