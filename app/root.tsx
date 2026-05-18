import "./app.css";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import WhatsAppChat from "./components/WhatsAppChat";
import BookingModal from "./components/BookingModal";
import { BookingModalProvider, useBookingModal } from "./context/BookingModalContext";

function AppLayout() {
  const { isOpen, closeModal } = useBookingModal();

  return (
    <>
      <Navbar />
      <main>
       <Outlet />
      </main>
      {/* <Footer /> */}
      <WhatsAppChat />
      <BookingModal isOpen={isOpen} onClose={closeModal} />
      <ScrollRestoration />
      <Scripts />
    </>
  );
}

export default function App() {
  return (
    <html lang="en">
            <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />   {/* ← this injects the CSS link tag */}
      </head>
      <body>
        <BookingModalProvider>
          <AppLayout />
        </BookingModalProvider>
      </body>
    </html>
  );
}
