import { Route, Routes } from "react-router-dom";

// Layout components
import Layout from "./layout/Layout";
import HostLayout from "./Host/HostLayout";

// Main pages
import Home from "./Home";
import About from "./About";

// Van-related components
import Vans from "./van/Vans";
import Details from "./van/Details";
import FilteredVan from "./filter/Filtered";

// Host-specific components
import Dashboard from "./Host/Dashboard";
import Review from "./Host/Review";
import Income from "./Host/Income";
import HostVans from "./Host/HostVans";
import HostVanDetail from "./Host/HostVansDetails";
import Pricing from "./Host/HostVanPricing";
import Photo from "./Host/HostVanPhoto";
import Info from "./Host/HostVansInfo";

function App() {
  return (
    <Routes>
      {/* Main application layout */}
      <Route path="/" element={<Layout />}>
        {/* Home page */}
        <Route index element={<Home />} />

        {/* About page */}
        <Route path="about" element={<About />} />

        {/* Vans section */}
        <Route path="vans" element={<Vans />}>
          {/* Filtered vans */}
          <Route path="filter" element={<FilteredVan />} />
        </Route>

        {/* Van details */}
        <Route path="details/:id" element={<Details />} />

        {/* Host section */}
        <Route path="host" element={<HostLayout />}>
          {/* Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Host's vans */}
          <Route path="vans" element={<HostVans />} />

          {/* Specific van details */}
          <Route path="vans/:id" element={<HostVanDetail />}>
            {/* Van information */}
            <Route index element={<Info />} />

            {/* Van pricing */}
            <Route path="pricing" element={<Pricing />} />

            {/* Van photos */}
            <Route path="photo" element={<Photo />} />
          </Route>

          {/* Reviews */}
          <Route path="reviews" element={<Review />} />

          {/* Income */}
          <Route path="income" element={<Income />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
