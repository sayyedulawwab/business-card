import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interest from "./components/Interest";

const App = () => (
  <div className="flex justify-center">
    <div className="rounded-lg shadow-lg bg-gray-800 text-white max-w-xs">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  </div>
);

export default App;
