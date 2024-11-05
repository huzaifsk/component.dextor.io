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
      <div className="container mx-auto px-8 py-4">
        <h1 className="text-4xl font-bold text-center mb-8 py-6">
          Dextor Components
        </h1>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {ComponentData &&
            ComponentData.map((component) => {
              const [activeTab, setActiveTab] = useState("preview");

              const toggleTab = (tab = "") => {
                setActiveTab(tab);
              };

              return (
                <React.Fragment key={component.id}>
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                      <h2 className="text-2xl font-semibold text-gray-900">
                        {component.title}
                      </h2>
                    </div>

                    {/* Tabs */}
                    <div className="px-6 border-b border-gray-200">
                      <div className="flex">
                        <button
                          className={`px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                            activeTab === "preview"
                              ? "text-black border-black"
                              : "text-gray-500 border-transparent hover:text-gray-900"
                          }`}
                          onClick={() => toggleTab("preview")}
                        >
                          Preview
                        </button>
                        <button
                          className={`px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                            activeTab === "code"
                              ? "text-black border-black"
                              : "text-gray-500 border-transparent hover:text-gray-900"
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
                        <div className="preview-wrapper w-full bg-gray-50 rounded-lg p-8 flex justify-center items-center min-h-[200px] max-h-[400px] overflow-auto">
                          {component.preview ? (
                            component.preview()
                          ) : (
                            <p className="text-gray-500">
                              No preview available
                            </p>
                          )}
                        </div>
                      ) : (
                        <LiveProvider
                          code={
                            component && component.code
                              ? component.code
                              : "// Loading component code..."
                          }
                        >
                          <div className="w-full">
                            <CopyToClipboard
                              text={
                                component && component.code
                                  ? component.code
                                  : "// Loading component code..."
                              }
                              onCopy={() => {
                                setCopied(true);
                                toast.dismiss();
                                toast.success("Copied to clipboard");
                                setTimeout(() => setCopied(false), 2000);
                              }}
                            >
                              <div className="flex justify-end mb-4">
                                <button className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-200">
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
                                    className="mr-2"
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
                                  {copied ? "Copied!" : "Copy Code"}
                                </button>
                              </div>
                            </CopyToClipboard>
                            <div className="overflow-y-auto rounded-lg border border-gray-200">
                              <LiveEditor
                                className="font-mono text-sm min-w-fit max-h-96"
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

        {/* Footer */}
        <footer className="mt-16 pb-8 text-center border-t pt-8">
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://dextorlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Dextor Lab
            </a>
            <a
              href="https://github.com/dextorlab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-600">v1.0.0</span>
          </div>
        </footer>
      </div>
    </>
  );
}
