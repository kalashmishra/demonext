import heading from "../public/headings.json";
import Script from "next/script";
import { Partytown } from "@builder.io/partytown/react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Inter } from "next/font/google";
import ReduxWrapper from "@/lib/ReduxWrapper";
const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "black",
};

export const metadata = {
  title: heading.landingPage.title,
  description: heading.landingPage.description,
  openGraph: {
    locale: "en_US",
    type: "website",
    url: "https://www.credmudra.com",
    siteName: "credmudra.com",
    images: ["https://credmudra.com/assets/images/credmudra_aggregator.png"],
  },
  publisher: "https://www.credmudra.com",
  keywords: heading.landingPage.keywords,
  alternates: { canonical: heading.landingPage.canonical },
  manifest: "/manifest.json",
};
export default function RootLayout({ children }) {
  return (
    <ReduxWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main> {children}</main>
          <Footer />
          <Partytown debug={true} forward={["dataLayer.push"]} />
          <Script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
          (function (w, d, t, r, u) {
            var f, n, i;
            (w[u] = w[u] || []),
              (f = function () {
                var o = { ti: "343098695", enableAutoSpaTracking: true };
                (o.q = w[u]), (w[u] = new UET(o)), w[u].push("pageLoad");
              }),
              (n = d.createElement(t)),
              (n.src = r),
              (n.async = 1),
              (n.onload = n.onreadystatechange =
                function () {
                  var s = this.readyState;
                  (s && s !== "loaded" && s !== "complete") ||
                    (f(), (n.onload = n.onreadystatechange = null));
                }),
              (i = d.getElementsByTagName(t)[0]),
              i.parentNode.insertBefore(n, i);
          })(window, document, "script", "//bat.bing.com/bat.js", "uetq");
          `,
            }}
          />
          <Script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
              "gtm.start": new Date().getTime(),
              event: "gtm.js",
            });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-575MTJQ");
          `,
            }}
          />
          <Script
            type="text/partytown"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-BZVWFJCLGP"
          />
          <Script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-BZVWFJCLGP");
          `,
            }}
          />
          <Script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
          (function (w, d, s, l, i) {
            w["scSdkId"] = i;
            w[l] = w[l] || [];
            w.scq = function (eventName, eventType, p) {
              var props = p || {};
              w[l].push({
                eventName: eventName,
                eventType: eventType,
                meta: props,
                eventFireTs: Date.now(),
              });
            };
            w.scq("PAGE_VIEW", "AUTO", {
              pageUrl: w.location.href,
            });
            var scr = d.createElement(s);
            scr.type = "text/javascript";
            scr.async = true;
            scr.src = "https://sc-events-sdk.sharechat.com/web-sdk.js";
            var x = d.getElementsByTagName(s)[0];
            x.parentNode.insertBefore(scr, x);
          })(window, document, "script", "scLayer", "lZZ0P04itM");
          `,
            }}
          />
          <Script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
        (function (w, d, t, r, u) {
          var f, n, i;
          (w[u] = w[u] || []),
            (f = function () {
              var o = { ti: "97043186", enableAutoSpaTracking: true };
              (o.q = w[u]), (w[u] = new UET(o)), w[u].push("pageLoad");
            }),
            (n = d.createElement(t)),
            (n.src = r),
            (n.async = 1),
            (n.onload = n.onreadystatechange =
              function () {
                var s = this.readyState;
                (s && s !== "loaded" && s !== "complete") ||
                  (f(), (n.onload = n.onreadystatechange = null));
              }),
            (i = d.getElementsByTagName(t)[0]),
            i.parentNode.insertBefore(n, i);
        })(window, document, "script", "//bat.bing.com/bat.js", "uetq");
        `,
            }}
          />
        </body>
      </html>
    </ReduxWrapper>
  );
}
