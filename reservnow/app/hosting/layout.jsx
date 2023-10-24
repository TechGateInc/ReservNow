import HostingHeader from "@/components/Hosting/Header/HostingHeader";
import HostingFooter from "@/components/Hosting/Footer/HostingFooter";

export default function HostingLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="admin_layout">
          <HostingHeader />
          <div style={{ paddingTop: "5rem" }}>{children}</div>
          {/* <HostingFooter /> */}
        </div>
      </body>
    </html>
  );
}
