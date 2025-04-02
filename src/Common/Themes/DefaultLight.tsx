export const DefaultLight = {
  Base: {
    borderRadius: "5px",
    defaultBackgroundColor: "#fffefe",
  },
  Bubbles: {
    backgroundColor: "#ffffff",
  },
  AppActivity: {
    backgroundColor: "#fdf6f6",
  },
  AppHeader: {
    backgroundColor: "none",
    border: "none",
  },
  UiApp: {
    backgroundColor: "#fffefe",
    // border: '1px solid rgba(0, 0, 0, 0.2)',
    border: "none",
    boxShadow: "-3px -3px 15px 0px rgba(181,181,181,0.5)",
    borderRadius: "8px",
    margin: "5px",
  },
  TextField: {
    borderColor: "rgba(70, 70, 70, 0.5)",
    outlineColor: "rgba(154, 152, 152, 0.5)",
    backgroundColor: "rgb(255, 255, 255)",
  },
  Button: {
    Default: {
      backgroundColor: "#a2a2a2",
      borderColor: "#7a7a7a",
      hoverBackgroundColor: "#868686",
      activeBackgroundColor: "#7a7a7a",
      shadowColor: "rgba(122, 122, 122, 0.5)",
    },
    TabButton: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      hoverBackgroundColor: "rgba(0, 0, 0, 0.05)",
      activeBackgroundColor: "rgba(0, 0, 0, 0.1)",
      shadowColor: "rgba(0, 0, 0, 0.1)",
      textColor: "#666666",
    },
    TabButtonActive: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderColor: "rgba(0, 0, 0, 0.05)",
      hoverBackgroundColor: "rgba(0, 0, 0, 0.08)",
      activeBackgroundColor: "rgba(0, 0, 0, 0.1)",
      shadowColor: "rgba(0, 0, 0, 0.1)",
      textColor: "#000000",
    },
    Primary: {
      backgroundColor: "#1ea7fd",
      borderColor: "#198ffc",
      hoverBackgroundColor: "#1c9ae8",
      activeBackgroundColor: "#1b91da",
      shadowColor: "rgba(30, 167, 253, 0.5)",
    },
    Success: {
      backgroundColor: "#12c421",
      borderColor: "#0fa21c",
      hoverBackgroundColor: "#10b01d",
      activeBackgroundColor: "#1fa82b",
      shadowColor: "rgba(73, 252, 89, 0.4)",
    },
    Warning: {
      backgroundColor: "#eab403",
      borderColor: "#d0a002",
      hoverBackgroundColor: "#d2a203",
      activeBackgroundColor: "#bb9002",
      shadowColor: "rgba(243, 197, 44, 0.5)",
    },
    Alert: {
      backgroundColor: "#ff5724",
      borderColor: "#cc4319",
      hoverBackgroundColor: "#d0491c",
      activeBackgroundColor: "#b63b17",
      shadowColor: "rgba(255, 120, 79, 0.5)",
    },
    Disabled: {
      backgroundColor: "#e0e0e0",
      borderColor: "#cccccc",
      hoverBackgroundColor: "#e0e0e0",
      activeBackgroundColor: "#e0e0e0",
      shadowColor: "rgba(0, 0, 0, 0.1)",
    },
  },
  Checkbox: {
    borderRadius: "4px",
    borderWidth: "2px",
    gap: "8px",
    transition: "all 0.2s ease-in-out",
    checkmarkColor: "#ffffff",
    sizes: {
      Small: {
        width: "16px",
        height: "16px",
        fontSize: "12px",
      },
      Medium: {
        width: "20px",
        height: "20px",
        fontSize: "14px",
      },
      Large: {
        width: "24px",
        height: "24px",
        fontSize: "16px",
      },
    },
    disabled: {
      opacity: 0.4,
    },
  },
  RadioButton: {
    borderWidth: "2px",
    gap: "8px",
    transition: "all 0.2s ease-in-out",
    sizes: {
      Small: {
        width: "16px",
        height: "16px",
        fontSize: "12px",
      },
      Medium: {
        width: "20px",
        height: "20px",
        fontSize: "14px",
      },
      Large: {
        width: "24px",
        height: "24px",
        fontSize: "16px",
      },
    },
    disabled: {
      opacity: 0.4,
    },
  },
  IconButton: {
    color: {
      light: "#1a1a1a",
      dark: "#ffffff",
    },
    hover: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    active: {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    focus: {
      shadowColor: "rgba(0, 0, 0, 0.2)",
    },
    borderRadius: "3px",
    padding: "5px 8px",
  },
};
