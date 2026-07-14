tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "on-tertiary-fixed": "#1a1c1c",
                "surface-tint": "#445f8c",
                "inverse-on-surface": "#f0f1f2",
                "on-primary-container": "#728bbc",
                "secondary-fixed": "#ffdad5",
                "on-primary-fixed": "#001b3e",
                "on-secondary": "#ffffff",
                "surface-container-low": "#f3f4f5",
                "tertiary": "#0c0f0f",
                "outline-variant": "#c4c6d0",
                "on-error-container": "#93000a",
                "on-surface-variant": "#44474f",
                "surface": "#f8f9fa",
                "primary-container": "#00234e",
                "surface-container-highest": "#e1e3e4",
                "secondary-container": "#e41f16",
                "tertiary-fixed-dim": "#c6c6c7",
                "tertiary-fixed": "#e2e2e2",
                "surface-container": "#edeeef",
                "surface-container-lowest": "#ffffff",
                "surface-variant": "#e1e3e4",
                "secondary-fixed-dim": "#ffb4a8",
                "on-error": "#ffffff",
                "primary": "#000e27",
                "surface-container-high": "#e7e8e9",
                "primary-fixed": "#d7e3ff",
                "on-surface": "#191c1d",
                "outline": "#747780",
                "surface-bright": "#f8f9fa",
                "error-container": "#ffdad6",
                "on-tertiary": "#ffffff",
                "secondary": "#bc0003",
                "inverse-primary": "#adc7fb",
                "primary-fixed-dim": "#adc7fb",
                "on-primary-fixed-variant": "#2c4773",
                "on-tertiary-container": "#8a8b8b",
                "error": "#ba1a1a",
                "on-secondary-fixed": "#410000",
                "background": "#f8f9fa",
                "inverse-surface": "#2e3132",
                "on-secondary-container": "#fffbff",
                "surface-dim": "#d9dadb",
                "on-tertiary-fixed-variant": "#454747",
                "tertiary-container": "#222424",
                "on-background": "#191c1d",
                "on-primary": "#ffffff",
                "on-secondary-fixed-variant": "#930002"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            spacing: {
                sm: "12px",
                "margin-mobile": "16px",
                lg: "48px",
                gutter: "24px",
                md: "24px",
                base: "8px",
                xl: "80px",
                "margin-desktop": "64px",
                xs: "4px"
            },
            fontFamily: {
                "headline-sm-caps": ["Manrope"],
                "headline-lg": ["Playfair Display"],
                "headline-md": ["Playfair Display"],
                "body-lg": ["Manrope"],
                "display-lg-mobile": ["Playfair Display"],
                "label-md": ["Manrope"],
                "display-lg": ["Playfair Display"],
                "body-md": ["Manrope"]
            },
            fontSize: {
                "headline-sm-caps": [
                    "14px",
                    {
                        lineHeight: "1.5",
                        letterSpacing: "0.1em",
                        fontWeight: "800"
                    }
                ],
                "headline-lg": [
                    "32px",
                    {
                        lineHeight: "1.3",
                        fontWeight: "700"
                    }
                ],
                "headline-md": [
                    "24px",
                    {
                        lineHeight: "1.4",
                        fontWeight: "600"
                    }
                ],
                "body-lg": [
                    "18px",
                    {
                        lineHeight: "1.6",
                        fontWeight: "400"
                    }
                ],
                "display-lg-mobile": [
                    "36px",
                    {
                        lineHeight: "1.2",
                        fontWeight: "700"
                    }
                ],
                "label-md": [
                    "14px",
                    {
                        lineHeight: "1.2",
                        fontWeight: "600"
                    }
                ],
                "display-lg": [
                    "48px",
                    {
                        lineHeight: "1.2",
                        letterSpacing: "-0.02em",
                        fontWeight: "700"
                    }
                ],
                "body-md": [
                    "16px",
                    {
                        lineHeight: "1.6",
                        fontWeight: "400"
                    }
                ]
            }
        }
    }
};
