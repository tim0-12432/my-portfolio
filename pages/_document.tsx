/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import Head from "next/head";
import Document, { Html, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
					<link rel="manifest" href="/favicon/site.webmanifest" />
					<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5BBAD5" />
					<link rel="shortcut icon" href="/favicon/favicon.ico" />
					<meta name="msapplication-TileColor" content="#FFFFFF" />
					<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="theme-color" content="#FF3E3E" />
					<meta name="page-topic" content="Tim0_12432" />
					<meta name="page-type" content="Portfolio" />
					<meta name="keywords" content="Development, Portfolio, Tim0_12432, Socialmedia, Developer"/>
					<meta
						name="description"
						content="A webpage about me and the things I am doing!"
					/>
					<meta property="og:url" content="https://www.tim0-12432.me" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Tim0_12432" />
					<meta property="og:image" content="/favicon/android-chrome-512x512.png" />
					<meta property="og:description" content="A small webpage about me, my Projects and my Socialmedia. Please enjoy! ;)" />
					<meta name="description" content="A small webpage about me, my Projects and my Socialmedia. Please enjoy! ;)" />
					<link rel="stylesheet" href="/style.css" />
					<title>Tim0_12432</title>
				</Head>
				<body>
					<noscript>You need to enable JavaScript to run this app.</noscript>
					<Main />
					<NextScript />
					<svg width="0" height="0">
						<defs>
							<linearGradient id="linearPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#FF3E3E"/>
								<stop offset="100%" stopColor="#FF7E7E"/>
							</linearGradient>
							<linearGradient id="linearSecondary" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#62FFF6"/>
								<stop offset="100%" stopColor="#0EA8B3"/>
							</linearGradient>
						</defs>
					</svg>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
