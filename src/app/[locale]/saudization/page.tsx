import { setRequestLocale } from "next-intl/server";
import InfoPage from "@/components/info/InfoPage";
import { infoPageMetadata } from "@/lib/info-page-metadata";

type Props = { params: Promise<{ locale: string }> };

export const generateMetadata = ({ params }: Props) => infoPageMetadata(params, "saudization");

export default async function SaudizationPage({ params }: Props) {
  setRequestLocale((await params).locale);
  return <InfoPage pageKey="saudization" />;
}
