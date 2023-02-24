import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Algorithms and data structure" />
      <meta
        property="og:description"
        content="javascript algorithms and data structure"
      />
    </>
  ),
  logo: (
    <>
      <img
        src="https://aalhommada.com/images/logo.svg"
        alt="aalhommada logo"
        style={{
          width: "25px",
          height: "25px",
          backgroundColor: "red",
          borderRadius: "10px",
          padding: "3px",
        }}
      />
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>aalhommada</span>
    </>
  ),
  project: {
    link: "https://github.com/aalhommada/javascript-algorithms-and-data-structure.git",
  },

  docsRepositoryBase:
    "https://github.com/aalhommada/javascript-algorithms-and-data-structure.git",

  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },

  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a
          href="https://aalhommada.com/"
          target="_blank"
          style={{ color: "red", marginRight: "5px" }}
        >
          aalhommada
        </a>
        <span>Javascript algorithms and data structure</span>
      </span>
    ),
  },
};

export default config;
