import React from "react";
import Breadcrumb from "./Breadcrumb";

function BreadcrumbExample() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-full max-w-md py-4">
        <h3 className="text-lg font-medium text-black mb-4">
          Basic Breadcrumb
        </h3>
        <Breadcrumb
          items={[
            { label: "Home", href: "#" },
            { label: "Projects", href: "#" },
            { label: "Project Details" },
          ]}
        />
      </div>

      <div className="w-full max-w-md py-4">
        <h3 className="text-lg font-medium text-black mb-4">Long Breadcrumb</h3>
        <Breadcrumb
          items={[
            { label: "Home", href: "#" },
            { label: "Categories", href: "#" },
            { label: "Electronics", href: "#" },
            { label: "Computers", href: "#" },
            { label: "Laptops", href: "#" },
            { label: "MacBook Pro" },
          ]}
        />
      </div>

      <div className="w-full max-w-md py-4">
        <h3 className="text-lg font-medium text-black mb-4">
          Single Item Breadcrumb
        </h3>
        <Breadcrumb items={[{ label: "Dashboard" }]} />
      </div>
    </div>
  );
}

export default BreadcrumbExample;
