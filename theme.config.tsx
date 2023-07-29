import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
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
  faviconGlyph: "A",
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | Js algorithms and data structure",
        defaultTitle: "Javascript Algorithms and Data Structure",
        description:
          frontMatter.description ||
          "aalhommada: Js algorithms and data structure",
      };
    }
  },

  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://dsa.aalhommada.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Abdullah"} />
        <meta
          property="og:description"
          content={frontMatter.description || "Algorithms and data structure"}
        />
      </>
    );
  },
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

  search: { placeholder: "Search Algorithms .." },

  gitTimestamp: null,
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    autoCollapse: false,
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
