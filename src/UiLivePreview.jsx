import React, { useState } from "react";
import { LiveProvider, LiveEditor } from "react-live";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ComponentData } from "./data/ComponentData";

export default function UiLivePreview() {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <div className="container mx-auto p-4">
        {ComponentData &&
          ComponentData.map((component) => {
            const [activeTab, setActiveTab] = useState("preview");

            const toggleTab = (tab = "") => {
              setActiveTab(tab);
            };

            return (
              <React.Fragment key={component.id}>
                <div className="border rounded-lg shadow-lg overflow-hidden mt-5">
                  <div className="m-5 font-medium text-black text-3xl">
                    <h2>{component.title}</h2>
                  </div>
                  {/* Tabs */}
                  <div className="w-full flex justify-center">
                    <div className="flex w-2/3 ">
                      <button
                        className={`rounded-lg flex-1 py-4 px-6 text-sm font-medium transition duration-300 ease-in-out ${
                          activeTab === "preview"
                            ? "bg-blue-500 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                        onClick={() => toggleTab("preview")}
                      >
                        UI Preview
                      </button>
                      <button
                        className={`rounded-lg flex-1 py-4 px-6 text-sm font-medium transition duration-300 ease-in-out ${
                          activeTab === "code"
                            ? "bg-blue-500 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                        onClick={() => toggleTab("code")}
                      >
                        Code
                      </button>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6" key={component.id}>
                    {activeTab === "preview" ? (
                      <div className="preview-wrapper w-full bg-gray-50 rounded-lg shadow-inner p-6 flex justify-center">
                        {component.preview ? (
                          component.preview()
                        ) : (
                          <p>No preview available</p>
                        )}
                      </div>
                    ) : (
                      <LiveProvider code={component.code}>
                        <div className="w-full">
                          <CopyToClipboard
                            text={component.code}
                            onCopy={() => {
                              setCopied(true);
                              toast.dismiss();
                              toast.success("Copied to clipboard");
                              setTimeout(() => setCopied(false), 2000);
                            }}
                          >
                            <div className="flex justify-end mb-4">
                              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-copy"
                                >
                                  <rect
                                    x="9"
                                    y="9"
                                    width="13"
                                    height="13"
                                    rx="2"
                                    ry="2"
                                  ></rect>
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                                <span>{copied ? "Copied!" : "Copy Code"}</span>
                              </button>
                            </div>
                          </CopyToClipboard>
                          <div className="max-h-96 overflow-y-auto rounded-lg border border-gray-200">
                            <LiveEditor
                              className="font-mono text-sm p-4 min-w-fit"
                              style={{ background: "#f8fafc" }}
                              disabled
                            />
                          </div>
                        </div>
                      </LiveProvider>
                    )}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
}
